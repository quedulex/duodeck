"""Exercise filesystem privacy through real subprocesses under a permissive umask."""
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class PrivateStorageTest(unittest.TestCase):
    def run_backend(self, root, script, *args, request=None, check=True):
        return subprocess.run(
            ["python3", str(ROOT / script), *args],
            input=json.dumps(request) + "\n" if request else None,
            text=True, capture_output=True, check=check,
            env=dict(os.environ, XDG_STATE_HOME=str(root)), umask=0o022,
        )

    def test_new_preferences_and_notes_are_private(self):
        with tempfile.TemporaryDirectory() as root:
            self.run_backend(root, "data.py", "record", "example.desktop")
            self.run_backend(root, "notes.py", request={"op": "add"})
            base = Path(root) / "touch-console"
            self.assertEqual(base.stat().st_mode & 0o777, 0o700)
            for name in ("preferences.json", "preferences.lock", "notes.json", "notes.lock"):
                self.assertEqual((base / name).stat().st_mode & 0o777, 0o600, name)
            self.run_backend(root, "data.py", "language", "zh_CN")
            self.assertEqual((base / "preferences.json").stat().st_mode & 0o777, 0o600)

    def test_read_migrates_old_modes_without_changing_content(self):
        for script, filename, content, request in (
            ("data.py", "preferences.json", {"history": {"example.desktop": 123}, "language": "en"}, None),
            ("notes.py", "notes.json", [{"id": "demo", "text": "private memo"}], {"op": "read"}),
        ):
            with self.subTest(script=script), tempfile.TemporaryDirectory() as root:
                base = Path(root) / "touch-console"
                base.mkdir(mode=0o755)
                base.chmod(0o755)
                path = base / filename
                path.write_text(json.dumps(content))
                path.chmod(0o644)
                original = path.read_bytes()
                result = self.run_backend(root, script, request=request)
                self.assertEqual(json.loads(result.stdout), content)
                self.assertEqual(path.read_bytes(), original)
                self.assertEqual(path.stat().st_mode & 0o777, 0o600)
                self.assertEqual(base.stat().st_mode & 0o777, 0o700)

    def test_symlinks_fail_closed_and_do_not_change_target(self):
        with tempfile.TemporaryDirectory() as root:
            target = Path(root) / "unrelated.json"
            target.write_text('{"history": {}}')
            target.chmod(0o644)
            base = Path(root) / "touch-console"
            base.mkdir()
            (base / "preferences.json").symlink_to(target)
            result = self.run_backend(root, "data.py", "record", "example.desktop", check=False)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(target.stat().st_mode & 0o777, 0o644)
            self.assertEqual(target.read_text(), '{"history": {}}')
