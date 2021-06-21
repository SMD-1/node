const http = require("http");

const PORT = 5000;

// create server object
http
  .createServer((req, res) => {
    // Write response
    res.write("Hello World");
    res.end();
  })
  .listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
