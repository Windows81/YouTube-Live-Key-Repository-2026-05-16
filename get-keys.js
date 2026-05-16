var r = [];
var QUERIES = [
	"/youtube\.com\/live2\/[01][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[23][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[45][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[67][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[89][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[ab][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[cd][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[ef][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[gh][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[ij][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[kl][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[mn][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[op][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[qr][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[st][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[uv][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[wx][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
	"/youtube\.com\/live2\/[yz][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa",
];

console.log("Running...");
for (let query of QUERIES) {
  for (let i = 1; i <= 5;) {
    var url = `https://github.com/search?q=${encodeURIComponent(query)}&ref=opensearch&type=code&p=${i}`;
    var response = await fetch(url, {
      headers: {
        accept: "application/json",
        "accept-language": "en-GB,en;q=0.9,es;q=0.8",
        priority: "u=1, i",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-github-target": "dotcom",
        "x-react-router": "json",
        "x-requested-with": "XMLHttpRequest",
      },
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    if (response.status == 429) {
        alert('Rate limited; will proceed once this alert is closed.');
        continue;
    }
    var j = await response.json();
    var appended = Array.from(
      j.payload.results
        .flatMap((e) => e.snippets.flatMap((e) => e.lines))
        .join("")
        .matchAll("live_[0-9]{7,10}_[a-zA-Z0-9]{20,}"),
    ).map((e) => e[0]);
    r.push.apply(r, appended);
    i++;
  }
}
console.log("Finished!");
