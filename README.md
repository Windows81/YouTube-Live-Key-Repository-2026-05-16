# YouTube Live Key Repository

**Note that any YouTube livestream which you use with these keys *will not be public* unless the original account's owner explicitly authorises it.**

I've amassed a collection of publicly available YouTube livestream keys.

I tested them using a dummy payload made by FFmpeg.

## How to Reproduce
Navigate to GitHub, then use your browser's DevTools to run [`get-keys.js`](./get-keys.js).

Then, once `"Finished!"` is printed, copy the result.

```js
copy('repo_nwo,stream_key\n'+Array.from(Object.keys(resultDump)).join('\n'))
```

Then download and run [`test-youtube-live.py`](./test-youtube-live.py), making sure to have installed:
- FFmpeg

Paste the lines you just copied into the program's standard input.
