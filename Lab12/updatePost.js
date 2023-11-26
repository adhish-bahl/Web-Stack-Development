const fs = require("fs");
const path = require("path");

//append content to file
fs.appendFile(
  path.join(__dirname, "posts", "blogPost.txt"),
  "\nI Study in Christ Deemed to be university!",
  (err) => {
    if (err) {
      console.log("err in data addition");
      return;
    }
    console.log("file contents updated");
  }
);
