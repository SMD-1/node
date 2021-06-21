const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain)
// console.log(myUrl.host);

// Hostnmae
console.log(myUrl.hostname); //difference b/w host and hostname is host name doesn't show port

// path name
// console.log(myUrl.pathname);

// serialized query
// console.log(myUrl.search);

// Params object
// console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.href);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
