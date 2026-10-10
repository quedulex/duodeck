"""Owner-only local state, including migration of earlier file permissions."""
import os
import stat
from pathlib import Path


def private_directory(path):
    path = Path(path)
    path.mkdir(mode=0o700, parents=True, exist_ok=True)
    fd = os.open(path, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW)
    try:
        if os.fstat(fd).st_uid != os.getuid():
            raise PermissionError("Local state directory belongs to another user")
        os.fchmod(fd, 0o700)
    finally:
        os.close(fd)
    return path


def private_open(path, mode):
    flags = os.O_RDONLY if mode == "r" else os.O_RDWR | os.O_CREAT
    fd = os.open(path, flags | os.O_NOFOLLOW | os.O_NONBLOCK, 0o600)
    try:
        info = os.fstat(fd)
        if info.st_uid != os.getuid() or not stat.S_ISREG(info.st_mode) or info.st_nlink != 1:
            raise PermissionError("Local state must be an owner-held regular file")
        os.fchmod(fd, 0o600)
        return os.fdopen(fd, mode, encoding="utf-8")
    except BaseException:
        os.close(fd)
        raise
