"use strict";

function fizzBuzz(number) {
if (number % 3 === 0 && number % 5 === 0) {
return "FizzBuzz";
}

if (number % 3 === 0) {
return "Fizz";
}

if (number % 5 === 0) {
return "Buzz";
}

return number;
}

console.log(fizzBuzz(3));  // Fizz
console.log(fizzBuzz(5));  // Buzz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(7));  // 7
