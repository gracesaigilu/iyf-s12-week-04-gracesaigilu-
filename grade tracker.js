"use strict";

// Student Grade Tracker

const students = [
  { name: "Alice", marks: [90, 95, 90] },
  { name: "Charlie", marks: [70, 80, 77] },
  { name: "Grace", marks: [85, 88, 82] }
];

// Calculate the average mark
function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return Number((total / marks.length).toFixed(2));
}

// Find a student by name
function findStudent(name) {
  return students.find((student) => student.name === name);
}

// Get students who scored 80 or above
function getHighScorers() {
  return students.filter((student) => calculateAverage(student.marks) >= 80);
}

// Display student grades
function displayGrades() {
  students.forEach((student) => {
    console.log(
      `${student.name}: ${calculateAverage(student.marks)}`
    );
  });
}

// Test the functions
console.log("Alice:", findStudent("Alice").name);
console.log("Charlie:", findStudent("Charlie").name);
console.log("Alice average:", calculateAverage([90, 95, 90]));
console.log("Charlie average:", calculateAverage([70, 80, 77]));

displayGrades();
