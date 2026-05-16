# YouTube Live Key Repository
I've amassed a collection of publicly available YouTube livestream keys.

I tested them using a dummy payload made by FFmpeg.

## How to Reproduce
Navigate to GitHub, then use your browser's DevTools to run [`get-keys.js`](./get-keys.js).

Then, once `"Finished!"` is printed, copy the result.

```js
copy(Array.from(Object.keys(resultDump)).join('\n'))
```

Then download and run [`test-youtube.py`](./test-youtube.py), making sure to have installed:
- FFmpeg

Paste the lines you just copied into the program's standard input.
