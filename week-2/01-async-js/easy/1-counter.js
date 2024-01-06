// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
//=====================================================================================

//initialize the counter with 1
let count = 1;

//set an interval to update the counter every second
let CounterId = setInterval(() => {
  console.log("Current Value: ", count);
  count++;
}, 1000);

//To stop the counter after 5 sec, we will use setTimeOut
setTimeout(() => {
  clearInterval(CounterId);
}, 6000);
