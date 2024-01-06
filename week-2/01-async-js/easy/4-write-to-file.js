// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let str = "I am not feeling good. I feel lost.";

// for overwriting all file data
fs.writeFile("a.txt", str, "utf-8", (err) => {
  if (err) {
    console.log("there is some error which is: " + err);
  } else {
    console.log("File overwrite successful");
  }
});

//for appending string to the file
let str2 = "I need to win and succeed";
fs.appendFile("a.txt", str2, "utf-8", (err) => {
  if (err) {
    console.log("there is some error which is " + err);
  } else {
    console.log("File appended successfull");
  }
});
