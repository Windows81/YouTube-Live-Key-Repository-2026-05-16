import subprocess
import sys
import re

lines = set()
while True:
    try:
        text = input()
    except EOFError:
        break
    if not text:
        break
    lines.add(text)

for text in lines:
    match = re.search(
        r'[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}', text)
    if not match:
        continue
    token = match.group(0)

    output = subprocess.run(
        f'ffmpeg -f lavfi -i color=black -c copy -f flv rtmp://a.rtmp.youtube.com/live2/{token}',
        stderr=subprocess.PIPE,
    ).stderr

    if b'Function not implemented' not in output:
        print('-', file=sys.stderr)
        continue

    print(token, file=sys.stderr)
    print(token)
