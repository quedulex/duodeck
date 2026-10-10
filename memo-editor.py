#!/usr/bin/env python3
"""On-demand local Milkdown editor. No external services or network binding."""
import http.server, json, os, pathlib, secrets, subprocess, sys, threading, time, urllib.request, urllib.parse, mimetypes, fcntl, hashlib
from private_storage import private_directory, private_open
from editor_launch import create_bootstrap, browser_command
ROOT=pathlib.Path(__file__).resolve().parent
runtime_name='touch-memo-'+str(os.getuid())
if os.environ.get('XDG_STATE_HOME'): runtime_name+='-'+hashlib.sha256(os.environ['XDG_STATE_HOME'].encode()).hexdigest()[:8]
runtime=pathlib.Path(os.environ.get('XDG_RUNTIME_DIR','/tmp'))/runtime_name
private_directory(runtime)
meta=runtime/'server.json'
note_id=sys.argv[1];language=sys.argv[2] if len(sys.argv)>2 else 'en'
output=sys.argv[3] if len(sys.argv)>3 else ''
def position(target_pid):
    try:
        for _ in range(40):
            clients=json.loads(subprocess.check_output(['hyprctl','clients','-j']))
            cs=[c for c in clients if c.get('pid')==target_pid]
            if cs:break
            time.sleep(.1)
        monitors=json.loads(subprocess.check_output(['hyprctl','monitors','-j']))
        m=next((m for m in monitors if m['name']==output),monitors[0]);c=cs[-1];w=json.dumps('address:'+c['address'])
        width=min(1040,int(m['width']/m['scale'])-50);height=min(650,int(m['height']/m['scale'])-70)
        commands=['hl.dsp.window.move({window='+w+',workspace='+json.dumps(m['activeWorkspace']['name'])+',follow=false})','hl.dsp.window.float({window='+w+',action="on"})','hl.dsp.window.resize({window='+w+',x='+str(min(1040,int(m['width']/m['scale'])-50))+',y='+str(min(650,int(m['height']/m['scale'])-70))+'})','hl.dsp.window.move({window='+w+',x='+str(m['x']+(int(m['width']/m['scale'])-width)//2)+',y='+str(m['y']+(int(m['height']/m['scale'])-height)//2)+'})','hl.dsp.focus({window='+w+'})']
        for cmd in commands:subprocess.run(['hyprctl','dispatch',cmd],capture_output=True)
    except Exception:pass
with private_open(runtime/'launch.lock','a') as lock:
    fcntl.flock(lock,fcntl.LOCK_EX)
    try:
        with private_open(meta,'r') as source:info=json.load(source)
        req=urllib.request.Request(info['url']+'api',data=json.dumps({'op':'select','id':note_id}).encode(),headers={'Content-Type':'application/json'})
        urllib.request.urlopen(req,timeout=1).read();position(info.get('pid'));sys.exit(0)
    except (OSError,ValueError):pass
    token=secrets.token_urlsafe(32);selection={'id':note_id};browser=None
    class Handler(http.server.BaseHTTPRequestHandler):
        def log_message(self,*args):pass
        def allowed(self):return self.path.split('?')[0].startswith('/'+token+'/')
        def reply(self,data,kind='application/json'):
            self.send_response(200);self.send_header('Content-Type',kind);self.send_header('Cache-Control','no-store');self.send_header('Referrer-Policy','no-referrer');self.send_header('X-Content-Type-Options','nosniff');self.end_headers();self.wfile.write(data)
        def do_GET(self):
            if not self.allowed():self.send_error(404);return
            name=self.path.split('?')[0].split('/')[-1] or 'index.html'
            if '/' in name or name.startswith('.') or name in ('package.json','package-lock.json','main.js'):self.send_error(404);return
            path=ROOT/'editor'/name
            if not path.is_file():self.send_error(404);return
            self.reply(path.read_bytes(),mimetypes.guess_type(name)[0] or 'application/octet-stream')
        def do_POST(self):
            if not self.allowed() or self.path.split('?')[0]!='/'+token+'/api':self.send_error(404);return
            origin=self.headers.get('Origin')
            if origin and origin!=f'http://127.0.0.1:{server.server_port}':self.send_error(403);return
            try:
                size=int(self.headers.get('Content-Length',0))
                if size>4*1024*1024:raise ValueError('too large')
                req=json.loads(self.rfile.read(size));op=req['op']
                if op=='selection':result=selection
                elif op=='select':selection['id']=str(req['id']);result=selection
                elif op=='fullscreen':
                    clients=json.loads(subprocess.check_output(['hyprctl','clients','-j']))
                    c=next(c for c in clients if c['pid']==browser.pid)
                    mode=0 if c.get('fullscreen',0) else 2
                    command='hl.dsp.window.fullscreen_state({window='+json.dumps('address:'+c['address'])+',internal='+str(mode)+',client='+str(mode)+'})'
                    response=subprocess.check_output(['hyprctl','dispatch',command],text=True)
                    if response.strip()!='ok':raise ValueError(response)
                    result={'fullscreen':bool(mode)}
                elif op=='close':
                    result={};threading.Timer(.3,lambda:browser.terminate() if browser else None).start()
                elif op in ('read','edit','archive','restore'):
                    result=json.loads(subprocess.check_output([sys.executable,str(ROOT/'notes.py')],input=json.dumps(req).encode()+b'\n'))
                else:raise ValueError('unknown operation')
                self.reply(json.dumps(result,ensure_ascii=False).encode())
            except Exception:self.send_error(400)
    server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler)
    url=f'http://127.0.0.1:{server.server_port}/{token}/'
    meta.write_text(json.dumps({'url':url}));meta.chmod(0o600)
    threading.Thread(target=server.serve_forever,daemon=True).start()
    profile=pathlib.Path(os.environ.get('XDG_DATA_HOME',pathlib.Path.home()/'.local/share'))/'touch-console/editor-profile'
    private_directory(profile.parent);private_directory(profile)
    bootstrap=create_bootstrap(runtime,url+'index.html?'+urllib.parse.urlencode({'lang':language}))
    browser=subprocess.Popen(browser_command(profile,bootstrap),stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
meta.write_text(json.dumps({'url':url,'pid':browser.pid}));meta.chmod(0o600)
threading.Thread(target=position,args=(browser.pid,),daemon=True).start()
try:browser.wait()
finally:server.shutdown();meta.unlink(missing_ok=True);bootstrap.unlink(missing_ok=True)
