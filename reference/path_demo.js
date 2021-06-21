const { basename } = require("path");
const path = require("path");
const fs = require("fs");

// Path Module

// Base file name
// console.log(path.basename(__filename));

// directory name
// console.log(path.dirname(__filename));

// Extension name
// console.log(path.extname(__filename));

// create path object
// console.log(path.parse(__filename));

// concatenate paths
// console.log(path.join(__filename, "test", "hello.html"));

// File System
// fs.mkdir(path.join(__dirname, "/test1"), {}, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder created ...");
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "test1", "hello.txt"),
//   "hello World!",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("File written ...");
//     // File appened
//     fs.appendFile(
//       path.join(__dirname, "test1", "hello.txt"),
//       " I love Node.js!",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("File written ...");
//       }
//     );
//   }
// );

// Read File
fs.readFile(
  path.join(__dirname, "/test1", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
