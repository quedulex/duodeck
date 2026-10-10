#!/usr/bin/env python3
"""Local-only preferences and MRU app IDs. Never stores titles or content."""
import fcntl,json,os,pathlib,sys,time
base=pathlib.Path(os.environ.get('XDG_STATE_HOME',str(pathlib.Path.home()/'.local/state')))/'touch-console'
base.mkdir(parents=True,exist_ok=True)
with (base/'preferences.lock').open('w') as lock:
 fcntl.flock(lock,fcntl.LOCK_EX)
 path=base/'preferences.json'
 try: data=json.loads(path.read_text())
 except (OSError,ValueError): data={'history':{},'language':'auto'}
 action=sys.argv[1] if len(sys.argv)>1 else 'read'
 if action=='record' and len(sys.argv)>2 and 0<len(sys.argv[2])<256:
  data.setdefault('history',{})[sys.argv[2]]=time.time()
  data['history']=dict(sorted(data['history'].items(),key=lambda x:x[1],reverse=True)[:300])
 elif action=='language' and sys.argv[2] in ('auto','en','zh_CN','zh_TW'):data['language']=sys.argv[2]
 if action!='read':
  tmp=path.with_suffix('.tmp');tmp.write_text(json.dumps(data,ensure_ascii=False));tmp.replace(path)
 print(json.dumps(data,ensure_ascii=False))
