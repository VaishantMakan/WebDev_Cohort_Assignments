// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

//==========================================================================================

function call() {
  const date = new Date();

  let ampm = date.getHours() > 12 ? "PM" : "AM";

  console.log(
    `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${ampm}`
  );
  setTimeout(call, 1000);
}

call();
