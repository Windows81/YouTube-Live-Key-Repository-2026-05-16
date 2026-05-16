# Twitch Key Repository
I've amassed collection of publicly available Twitch stream keys; tested one-by-one on 2026-05-05.

I collected them and mapped who they belong to.  I also mapped their follower counts.  And of course, I tested them using a dummy payload made by FFmpeg.

## How to Reproduce
Navigate to GitHub, then use your browser's DevTools to run [`get-keys.js`](./get-keys.js).

Then, once `"Finished!"` is printed, copy the result.

```js
copy(r.join('\n'))
```

Then download and run [`test-twitch.py`](./test-twitch.py), making sure to have installed:
- the `requests` library, and
- FFmpeg

Paste the lines you just copied into the program's standard input.

The output will look similar to [`twitch-keys.txt`](./twitch-keys.txt).
