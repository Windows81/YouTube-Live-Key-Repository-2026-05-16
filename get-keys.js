var resultDump = {};
function buildQuery(chars) {
	return `/youtube\\.com\\/live2\\/[${chars}][0-9a-z]{3}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/ NOT abcd NOT xxxx NOT aaaa"`;
}
var QUERIES = [
	buildQuery("01"),
	buildQuery("23"),
	buildQuery("45"),
	buildQuery("67"),
	buildQuery("89"),
	buildQuery("ab"),
	buildQuery("cd"),
	buildQuery("ef"),
	buildQuery("gh"),
	buildQuery("ij"),
	buildQuery("kl"),
	buildQuery("mn"),
	buildQuery("op"),
	buildQuery("qr"),
	buildQuery("st"),
	buildQuery("uv"),
	buildQuery("wx"),
	buildQuery("yz"),
];

console.log("Running...");
for (let query of QUERIES) {
	let pageCount = 5;
	for (let i = 1; i <= pageCount; ) {
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
			alert("Rate limited; wait ~120 seconds and progress will resume once this alert is closed.");
			continue;
		}

		var j = await response.json();
		pageCount = j.payload.page_count;

		for (let result of j.payload.results) {
			let resultData = result.snippets.flatMap((e) => e.lines).join("\n");
			let keyMatches = Array.from(resultData.matchAll("[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}").map((e) => e[0]));
			resultDump |= Object.fromEntries(keyMatches.map((k) => [`${result.repo_nwo},${k}`, true]));
		}

		i++;
	}
}
console.log("Finished!");
