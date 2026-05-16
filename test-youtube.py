import functools
import subprocess
import requests
import json
import re

tokens = set()
while True:
    text = input()
    if not text:
        break
    match = re.search(r'[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}', text)
    if not match:
        continue
    tokens.add(match.group(0))

for token in tokens:
    split = token.split('_')
    if len(split) != 3:
        continue

    output = subprocess.run(
        f'ffmpeg -f lavfi -i color=black -c copy -f flv rtmp://a.rtmp.youtube.com/live2/{token}',
        stderr=subprocess.PIPE,
    ).stderr

    if b'Function not implemented' not in output:
        continue

    print(token)
