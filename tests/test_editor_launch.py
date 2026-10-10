import http.server
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import threading
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from editor_launch import create_bootstrap, browser_command
from private_storage import private_directory


class EditorLaunchTest(unittest.TestCase):
    def test_token_is_private_and_absent_from_process_arguments(self):
        with tempfile.TemporaryDirectory() as root:
            runtime = private_directory(Path(root) / 'runtime')
            profile = private_directory(Path(root) / 'profile')
            previous = os.umask(0o022)
            try:
                bootstrap = create_bootstrap(runtime, 'http://127.0.0.1:12345/secret-token/index.html?lang=zh_CN')
            finally:
                os.umask(previous)
            self.assertEqual(runtime.stat().st_mode & 0o777, 0o700)
            self.assertEqual(profile.stat().st_mode & 0o777, 0o700)
            self.assertEqual(bootstrap.stat().st_mode & 0o777, 0o600)
            command = browser_command(profile, bootstrap)
            self.assertFalse(any('secret-token' in arg for arg in command))
            self.assertEqual(command[-1], '--app=' + bootstrap.as_uri())
            self.assertIn('secret-token', bootstrap.read_text())

    def test_chromium_follows_private_bootstrap_to_local_editor(self):
        browser = shutil.which('google-chrome') or shutil.which('chromium') or shutil.which('chromium-browser')
        if not browser:
            self.skipTest('Chromium browser unavailable')
        requests = []
        class Handler(http.server.BaseHTTPRequestHandler):
            def log_message(self, *args): pass
            def do_GET(self):
                requests.append(self.path)
                self.send_response(200)
                self.send_header('Content-Type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<title>DuoDeck bootstrap regression</title><p>editor reached</p>')
        server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            with tempfile.TemporaryDirectory() as root:
                runtime = private_directory(Path(root) / 'runtime')
                profile = private_directory(Path(root) / 'profile')
                url = f'http://127.0.0.1:{server.server_port}/test-token/index.html?lang=en'
                bootstrap = create_bootstrap(runtime, url)
                command = [browser, '--headless=new', '--no-sandbox', '--disable-gpu',
                           '--virtual-time-budget=2000',
                           '--user-data-dir=' + str(profile), '--dump-dom', bootstrap.as_uri()]
                self.assertFalse(any('test-token' in arg for arg in command))
                result = subprocess.run(command, text=True, capture_output=True, timeout=25)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertIn('/test-token/index.html?lang=en', requests)
                self.assertIn('DuoDeck bootstrap regression', result.stdout)
        finally:
            server.shutdown()
            server.server_close()
