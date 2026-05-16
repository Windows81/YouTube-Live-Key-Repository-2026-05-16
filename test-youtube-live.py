import subprocess
import sys
import re

lines = {}
while True:
    try:
        text = input()
    except EOFError:
        break
    if not text:
        break
    match = re.search(
        r'[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}', text)
    if not match:
        continue
    token = match.group(0)
    lines[token] = text

for (token, text) in lines.items():
    output = subprocess.run(
        f'ffmpeg -f lavfi -i color=black -c copy -f flv rtmp://a.rtmp.youtube.com/live2/{token}',
        stderr=subprocess.PIPE,
    ).stderr

    if b'Function not implemented' not in output:
        print('-', file=sys.stderr)
        continue

    print(text, file=sys.stderr)
    print(text)
