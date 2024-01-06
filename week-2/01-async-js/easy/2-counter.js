//Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.
//There is a hint at the bottom of the file if you get stuck.

//======================================================================

//initialize counter with 1
let count = 1;

function timer() {
  console.log(count++);

  if (count == 6) return;

  setTimeout(timer, 1000);
}

timer();
