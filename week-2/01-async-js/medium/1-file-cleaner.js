// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

//==============================================================================

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("An error occurred while reading teh file. Error : ", err);
    return;
  }

  const cleanedData = data
    .trim()
    .split(" ")
    .filter((el) => {
      if (el == " " || el == "") return false;

      return true;
    })
    .join(" ");

  fs.writeFile("a.txt", cleanedData, "utf-8", (err) => {
    if (err) {
      console.error("error occured: ", err);
      return;
    }

    console.log("Successful");
  });
});
