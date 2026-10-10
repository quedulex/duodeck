import importlib.util,json,os,pathlib,re,subprocess,tempfile,unittest
from unittest.mock import patch
ROOT=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('backend',ROOT/'backend.py');backend=importlib.util.module_from_spec(spec);spec.loader.exec_module(backend)
class Tests(unittest.TestCase):
 def test_mru_and_language_survive_process_restart(self):
  with tempfile.TemporaryDirectory() as d:
   env={**os.environ,'XDG_STATE_HOME':d}
   def call(*args):return json.loads(subprocess.check_output(['python3',str(ROOT/'data.py'),*args],env=env))
   call('record','example.alpha');call('record','example.beta');call('language','zh_TW')
   actual=call('read');self.assertGreater(actual['history']['example.beta'],actual['history']['example.alpha']);self.assertEqual(actual['language'],'zh_TW')
   self.assertEqual(set(actual),{'history','language'})
 def test_brightness_sets_both_devices_and_clamps(self):
  with patch.object(backend,'configuration',return_value={}),patch.object(backend,'backlights',return_value=[pathlib.Path('/x/main'),pathlib.Path('/x/second')]),patch.object(backend,'run') as run:
   backend.action(['brightness','0%'])
   self.assertEqual([c.args[0] for c in run.call_args_list],[['brightnessctl','-q','-d','main','set','5%'],['brightnessctl','-q','-d','second','set','5%']])
 def test_invalid_actions_do_not_execute(self):
  with patch.object(backend,'configuration',return_value={}),patch.object(backend,'run') as run:
   for args in [['profile','balanced;touch /tmp/no'],['workspace','-1'],['brightness','oops'],['span']]:
    with self.assertRaises(ValueError):backend.action(args)
   run.assert_not_called()
 def test_translation_keys_match(self):
  s=(ROOT/'I18n.js').read_text();data=json.loads(s.split('var messages = ',1)[1].split(';\nfunction',1)[0])
  for lang in ['zh_CN','zh_TW']:self.assertEqual(set(data['en']),set(data[lang]))
  keys=re.findall(r'root.tr\("([^"\n]+)"\)',(ROOT/'TouchConsole.qml').read_text())
  self.assertTrue(set(keys)<=set(data['en']))
if __name__=='__main__':unittest.main()
