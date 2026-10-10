"""User-authored sticky notes; local-only, locked atomic storage."""
import os, json, sys, uuid, fcntl, tempfile
from pathlib import Path
from private_storage import private_directory, private_open
base=Path(os.environ.get("XDG_STATE_HOME",Path.home()/".local/state"))/"touch-console"
private_directory(base)
with private_open(base/"notes.lock", "a") as lock:
    fcntl.flock(lock,fcntl.LOCK_EX)
    path=base/"notes.json"
    try:
        with private_open(path, "r") as source: data=json.load(source)
    except FileNotFoundError: data=[]
    req=json.loads(sys.stdin.readline())
    op=req.get("op","read")
    if op=="add":
        data.append(dict(id=str(uuid.uuid4()),text="",title="",x=86+(len(data)%5)*202,y=12,color=len(data)%3,archived=False))
    elif op in ("edit","move","archive","restore","color"):
        note=next(n for n in data if n["id"]==req["id"])
        if op=="edit":
            note["text"]=str(req["text"])
            if "title" in req: note["title"]=str(req["title"])[:300]
            if "color" in req: note["color"]=max(0,min(5,int(req["color"])))
        if op=="color": note["color"]=max(0,min(5,int(req["color"])))
        if op=="move": note.update(x=max(0,int(req["x"])),y=max(0,int(req["y"])))
        if op=="archive": note["archived"]=True
        if op=="restore": note["archived"]=False
    elif op!="read": raise ValueError("Unknown action")
    if op!="read":
        fd,tmp=tempfile.mkstemp(dir=base,prefix=".notes-",text=True)
        with os.fdopen(fd,"w") as f:
            json.dump(data,f,ensure_ascii=False); f.flush(); os.fsync(f.fileno())
        os.replace(tmp,path)
    print(json.dumps(data,ensure_ascii=False))
