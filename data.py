#!/usr/bin/env python3
"""Local-only preferences and MRU app IDs. Never stores titles or content."""
import fcntl,json,os,pathlib,sys,time,tempfile
from private_storage import private_directory,private_open
base=pathlib.Path(os.environ.get('XDG_STATE_HOME',str(pathlib.Path.home()/'.local/state')))/'touch-console'
private_directory(base)
with private_open(base/'preferences.lock','a') as lock:
 fcntl.flock(lock,fcntl.LOCK_EX)
 path=base/'preferences.json'
 try:
  with private_open(path,'r') as source: data=json.load(source)
 except (FileNotFoundError,ValueError): data={'history':{},'language':'auto'}
 action=sys.argv[1] if len(sys.argv)>1 else 'read'
 if action=='record' and len(sys.argv)>2 and 0<len(sys.argv[2])<256:
  data.setdefault('history',{})[sys.argv[2]]=time.time()
  data['history']=dict(sorted(data['history'].items(),key=lambda x:x[1],reverse=True)[:300])
 elif action=='language' and sys.argv[2] in ('auto','en','zh_CN','zh_TW'):data['language']=sys.argv[2]
 if action!='read':
  fd,tmp=tempfile.mkstemp(dir=base,prefix='.preferences-',text=True)
  try:
   with os.fdopen(fd,'w',encoding='utf-8') as output:
    json.dump(data,output,ensure_ascii=False);output.flush();os.fsync(output.fileno())
   os.replace(tmp,path)
  finally:
   if os.path.exists(tmp):os.unlink(tmp)
 print(json.dumps(data,ensure_ascii=False))
