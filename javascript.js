// ALIYAH CABAL CC14
// ===============================
// Part 1: Basic Exercises
// ===============================

// 1. Hello, JavaScript
console.log("Hello, World!");
console.log("Welcome to JavaScript Programming!");

// 2. Variable Practice
let name = "Juan";
let age = 20;
let favoriteLanguage = "JavaScript";

console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("My favorite programming language is " + favoriteLanguage + ".");

// 3. Simple Calculator
let num1 = 10;
let num2 = 5;

console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));

// ===============================
// Part 2: Conditional Statements
// ===============================

// 4. Even or Odd Checker
let number = 8;
if (number % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

// 5. Voting Eligibility
let personAge = 17;
if (personAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// 6. Grade Evaluator
let score = 85;
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Fair");
} else {
    console.log("Failed");
}

// ===============================
// Part 3: Loops
// ===============================

// 7. Print Numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 8. Multiplication Table
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// 9. Sum of Numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum is " + sum);

// ===============================
// Part 4: Functions
// ===============================

// 10. Greeting Function
function greetUser(name) {
    console.log("Hello " + name + "! Welcome to JavaScript.");
}
greetUser("Maria");

// 11. Area of a Rectangle
function calculateArea(length, width) {
    return length * width;
}
console.log("Area: " + calculateArea(10, 5));

// 12. Largest Number Function
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log("Largest number is " + findLargest(5, 9, 3));

// ===============================
// Part 5: Arrays
// ===============================

// 13. Display Array Elements
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 14. Find the Largest Number in an Array
let numbersArray = [10, 45, 3, 67, 22];
let largest = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largest) {
        largest = numbersArray[i];
    }
}
console.log("Largest number: " + largest);

// 15. Reverse an Array
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = originalArray.reverse();
console.log("Original: [1,2,3,4,5]");
console.log("Reversed: " + reversedArray);

// 16. Palindrome Checker
function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    if (word === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}
isPalindrome("racecar");

// 17. Number Guessing Game
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 7; // Example guess
if (userGuess === randomNumber) {
    console.log("Correct!");
} else {
    console.log("Try Again. The number was " + randomNumber);
}
