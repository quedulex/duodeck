#!/usr/bin/env python3
"""Unprivileged backend for the Touch Console Omarchy plugin."""
import json,os,pathlib,subprocess,sys,time,fcntl
HOME=pathlib.Path.home()
CONFIG=pathlib.Path(os.environ.get('XDG_CONFIG_HOME',str(HOME/'.config')))/'touch-console/settings.json'
STATE=pathlib.Path(os.environ.get('XDG_STATE_HOME',str(HOME/'.local/state')))/'touch-console'
RUNTIME=pathlib.Path(os.environ.get('XDG_RUNTIME_DIR','/tmp'))/('touch-console-plugin-'+str(os.getuid()))
RUNTIME.mkdir(mode=0o700,parents=True,exist_ok=True)
def run(args):
 p=subprocess.run(args,capture_output=True,text=True,timeout=6)
 if p.returncode:raise RuntimeError(p.stderr.strip() or p.stdout.strip())
 return p.stdout

def configuration():
 try:c=json.loads(CONFIG.read_text())
 except (OSError,ValueError):c={}
 return c if isinstance(c,dict) else {}
def metrics():
 r={'cpu':'—','memory':'—','fan':'—','temperature':'—'}
 try:
  ticks=list(map(int,pathlib.Path('/proc/stat').read_text().splitlines()[0].split()[1:9]));total=sum(ticks);idle=ticks[3]+ticks[4]
  cache=RUNTIME/'cpu.json';old=json.loads(cache.read_text()) if cache.exists() else None;now=time.monotonic()
  if old and total>old[0] and now-old[2]<60:r['cpu']=str(round(max(0,min(100,100*(1-(idle-old[1])/(total-old[0]))))))+'%'
  cache.write_text(json.dumps([total,idle,now]))
  mem={l.split(':')[0]:int(l.split()[1]) for l in pathlib.Path('/proc/meminfo').read_text().splitlines()}
  r['memory']=str(round(100*(1-mem['MemAvailable']/mem['MemTotal'])))+'%'
 except (OSError,ValueError,KeyError):pass
 fans=[];temps=[]
 for p in pathlib.Path('/sys/class/hwmon').glob('hwmon*/fan*_input'):
  try:fans.append(int(p.read_text()))
  except (OSError,ValueError):pass
 for p in pathlib.Path('/sys/class/thermal').glob('thermal_zone*/temp'):
  try:temps.append(int(p.read_text())/1000)
  except (OSError,ValueError):pass
 if fans:r['fan']=' / '.join(map(str,fans))+' RPM'
 if temps:r['temperature']=str(round(max(temps)))+'°'
 return r

def backlights(c):
 root=pathlib.Path('/sys/class/backlight')
 names=c.get('backlights')
 if isinstance(names,list) and names:
  return [root/n for n in names if isinstance(n,str) and '/' not in n and (root/n).is_dir()]
 return sorted(root.glob('*'))

def status(c):
 r=metrics();r.update(config=c,spanning=False,volumePercent=0,muted=False,brightnessPercent=None,powerProfile='unavailable')
 try:
  v=run(['wpctl','get-volume','@DEFAULT_AUDIO_SINK@']).split();r['volumePercent']=round(float(v[1])*100);r['muted']='[MUTED]' in v
 except Exception:pass
 levels=[]
 for p in backlights(c):
  try:levels.append(max(0,min(100,round(100*int((p/'actual_brightness').read_text())/int((p/'max_brightness').read_text())))))
  except (OSError,ValueError,ZeroDivisionError):pass
 if levels:r['brightnessPercent']=round(sum(levels)/len(levels))
 try:r['powerProfile']=run(['powerprofilesctl','get']).strip()
 except Exception:pass
 if isinstance(c.get('spanStateFile'),str):
  r['spanning']=pathlib.Path(os.path.expanduser(c['spanStateFile'])).exists()
 print(json.dumps(r))

def action(argv):
 c=configuration();name=argv[0] if argv else 'status'
 if name=='status':status(c);return
 if name in ('brightness','volume'):
  pct=max(5 if name=='brightness' else 0,min(100,float(argv[1].rstrip('%'))))
  if name=='volume':run(['wpctl','set-volume','-l','1','@DEFAULT_AUDIO_SINK@',str(pct)+'%'])
  else:
   for p in backlights(c):run(['brightnessctl','-q','-d',p.name,'set',str(pct)+'%'])
 elif name=='screen-off':
  time.sleep(.25)
  run(['omarchy','brightness','display','off'])
 elif name=='mute':run(['wpctl','set-mute','@DEFAULT_AUDIO_SINK@','toggle'])
 elif name=='profile':
  if argv[1] not in ('balanced','performance','power-saver'):raise ValueError('Invalid profile')
  run(['powerprofilesctl','set',argv[1]])
 elif name=='workspace':
  n=int(argv[1])
  if n<1 or n>2147483647:raise ValueError('Invalid workspace')
  run(['hyprctl','dispatch','hl.dsp.focus({workspace="'+str(n)+'"})'])
 elif name in ('browser','files'):
  subprocess.Popen(['omarchy','launch','browser'] if name=='browser' else ['nautilus','--new-window'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 elif name in ('span','restore'):
  command=c.get('spanCommand' if name=='span' else 'restoreCommand')
  if not isinstance(command,list) or not command or not all(isinstance(x,str) for x in command):raise ValueError('Configure an optional spanning command first')
  run([os.path.expanduser(x) for x in command])
 else:raise ValueError('Unknown action')
if __name__=='__main__':
 try:
  with (RUNTIME/'lock').open('w') as lock:
   fcntl.flock(lock,fcntl.LOCK_EX);action(sys.argv[1:])
 except Exception as e:
  print(str(e),file=sys.stderr)
  subprocess.run(['notify-send','Touch Console',str(e)],capture_output=True)
  sys.exit(1)
