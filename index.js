// const User = require("./person");

// console.log(User.age);

const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

// Create Server
// const server = http.createServer((req, res) => {
//   res.write("Hello World! Welcome to Nodes World");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  } else if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  } else if (req.url === "/api/users") {
    const users = [
      { name: "Bob Smith", age: 30 },
      { name: "John Doe", age: 35 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }

  // else if (req.url === "/contact") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1>Contact Page</h1>");
  // }

  // Build File Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // console.log(filePath);
  // res.end(filePath);

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content Type
  let contentType = "text/html";

  // Check Extension name set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // REad file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      try{
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
      }
      catch(err=>{
        console.log(err)
      }
    }
  });
});

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
