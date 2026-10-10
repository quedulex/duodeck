import unittest, tempfile, subprocess, json, os
from pathlib import Path

class NotesTest(unittest.TestCase):
    def test_markdown_persistence_and_archive_restore(self):
        with tempfile.TemporaryDirectory() as directory:
            env=dict(os.environ,XDG_STATE_HOME=directory)
            backend=Path(__file__).resolve().parents[1]/'notes.py'
            def run(**request):
                return json.loads(subprocess.check_output(['python3',str(backend)],input=json.dumps(request).encode()+b'\n',env=env))
            note=run(op='add')[0]
            content='# 中文\n\n**粗体**\n- [ ] 任务\n`code`'
            run(op='edit',id=note['id'],text=content,title='旅行计划',color=4)
            run(op='move',id=note['id'],x=345,y=22)
            run(op='archive',id=note['id'])
            self.assertTrue(run(op='read')[0]['archived'])
            run(op='restore',id=note['id'])
            restored=run(op='read')[0]
            self.assertFalse(restored['archived'])
            self.assertEqual(restored['text'],content)
            self.assertEqual(restored['x'],345)
            self.assertEqual(restored['title'],'旅行计划')
            self.assertEqual(restored['color'],4)
            recolored=run(op='color',id=note['id'],color=2)[0]
            self.assertEqual(recolored['color'],2)
            self.assertEqual(recolored['text'],content)
            self.assertEqual(recolored['title'],'旅行计划')
            self.assertEqual((Path(directory)/'touch-console/notes.json').stat().st_mode & 0o777,0o600)
