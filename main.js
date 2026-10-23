"use strict";

// TASK 7.1: Variables and operators
const studentName = "Grace";
let score = 85;

const firstNumber = 10;
const secondNumber = 5;

console.log("Student:", studentName);
console.log("Score:", score);
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Strict equality:", firstNumber === secondNumber);

// TASK 7.2: Function declaration
function greetStudent(name) {
return "Hello, ${name}!";
}

console.log(greetStudent(studentName));

// Arrow function
const square = (number) => number * number;

console.log("Square:", square(4));

// TASK 7.3: Control flow
function getGrade(mark) {
if (mark >= 80) {
return "A";
} else if (mark >= 70) {
return "B";
} else if (mark >= 60) {
return "C";
} else if (mark >= 50) {
return "D";
} else {
return "E";
}
}

console.log("Grade:", getGrade(score));

// TASK 8.1: Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);
const foundNumber = numbers.find((number) => number > 3);

console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("Total:", total);
console.log("First number greater than 3:", foundNumber);

// TASK 8.2: Objects
const student = {
name: "Grace",
age: 22,
course: "Web Development"
};

console.log("Student object:", student);
console.log("Student name:", student.name);

// TASK 8.3: Array of objects
const students = [
{ name: "Alice", score: 91.67 },
{ name: "Charlie", score: 75.67 },
{ name: "Grace", score: 85 }
];

const alice = students.find((item) => item.name === "Alice");
const highScorers = students.filter((item) => item.score >= 80);

console.log("Alice:", alice);
console.log("High scorers:", highScorers);

// TASK 8.4: JSON
const studentJSON = JSON.stringify(student);
console.log("JSON string:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed student:", parsedStudent);
