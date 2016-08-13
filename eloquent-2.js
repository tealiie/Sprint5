Looping a triangle

for (var i = "#" ; i.length < 8; i += "#")
  console.log(i)

//Pretty straight forward, the .length hint helped alot



FizzBuzz

var numbers = i

for (var i = 1; i < 101; i ++) {
  if ((i % 3) === 0 && (i % 5) === 0) {
    console.log("FizzBuzz");
 } else if ((i % 5) === 0) {
    console.log("Buzz");
 } else if ((i % 3) === 0) {
    console.log("Fizz");
 } else
    console.log(i);
          }

/* I remember there was a problem similair to this I previously did in codecademy so I understood the concept of the maths logic needed to write a code for the problem. However it took me a couple of minutes to figure out that if I didn't write else console.log(i) the numbers that were not divisable by 3 and/or 5 wouldn't show up */



Chess Board

//I had to look up the answer for this one

var size = 8;

var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
