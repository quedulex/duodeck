"""Pass the editor URL through an owner-only file, never process arguments."""
import html
import os
import tempfile


def create_bootstrap(runtime, url):
    fd, name = tempfile.mkstemp(dir=runtime, prefix="editor-", suffix=".html")
    with os.fdopen(fd, "w", encoding="utf-8") as output:
        output.write('<!doctype html><meta charset="utf-8">'
                     '<meta name="referrer" content="no-referrer">'
                     '<meta http-equiv="refresh" content="0;url=' + html.escape(url, quote=True) + '">'
                     '<title>DuoDeck</title>')
    from pathlib import Path
    return Path(name)


def browser_command(profile, bootstrap):
    return ['chromium', '--user-data-dir=' + str(profile), '--class=touch-memo-editor',
            '--no-first-run', '--disable-background-mode', '--no-default-browser-check',
            '--password-store=basic', '--app=' + bootstrap.as_uri()]
