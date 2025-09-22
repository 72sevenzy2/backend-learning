import url from "url";

const urlString = "https://google.com/search?q=hello+world";

const urlObj = new URL(urlString);

console.log(urlObj);
console.log(url.format(urlObj));

// meta import

console.log(import.meta.url);
console.log(url.fileURLToPath(import.meta.url));