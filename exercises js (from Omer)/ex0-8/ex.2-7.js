// JavaScript – functions The following exercise contains the following
// subjects: ● functions Instructions
// 1. Write a function called ‘countryInfo’ which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the function
// returns a string with this format: ‘Spain has 47 million people and its
// capital city is Madrid’
// 2. Call this function 3 times, with input data for 3 different countries.
// Store the returned values in 3 different variables, and log them to the
// console.

function countryInfo(country, population, capitalCity) {
    let string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    console.log(string)
}
countryInfo("Spain", 47, "Madrid");
countryInfo("Israel", 10, "Jerusalem");
countryInfo("Russia", 143, "Moscow");

// EX #3 JavaScript – functions The following exercise contains the following
// subjects: ● functions Instructions Why pay a fortune teller when you can just
// program your fortune yourself?
// 1. Write a function named `tellFortune` that takes 4 parameters: jobTitle,
// location, partnerName, numberOfChildren. Based on this output the function
// returns a string with this format: ‘You will be a programmer in New York
// married to Rana with 2 children’.

function countryInfo(jobTitle, location, partnerName, numberOfChildren) {
    let string = `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children `;
    console.log(string)
}
countryInfo('programmer', 'Israel', 'David', 2);

// EX #4 The following exercise contains the following subjects: ● functions
// Instructions Write a function that calculates the circle area by a given
// radius as an argument. Print the area as it is calculated and then print it
// rounded to two decimal places.
function calculateCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area of the circle with radius ${radius} is: ${area}`);
    let roundedArea = Math.round(area * 100) / 100;
    console.log(`Rounded to two decimal places: ${roundedArea}`);
}
calculateCircleArea(5);

// EX #5 The following exercise contains the following subjects: ● date methods
// Instructions Let us self-learn something. You come to your new workplace and
// you are an expert in the technologies your company is working with. But all
// of the sudden your boss says. We want to implement a feature with dates. This
// will happen all the time in your career. So let's roll up our sleeves and
// start googling. How to .... “date js”. And as always the MDN docs are a great
// source Find how to get the following:
// 1. Name of the current day e.g. Sunday
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const day = new Date().getDay();
console.log(dayNames[day]);
// 2. Current day of the month e.g. 31
console.log(`Current day ${new Date().getDate()}`)
// 3. Current month e.g January
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const numberOfMonth = new Date().getMonth()
console.log(`Current month is ${months[numberOfMonth]}`)
// 4. Current Year e.g 2021
console.log(`Current year is ${new Date().getFullYear()}`)
// Create a function that will return a string in the following format: `Today
// is Sunday the 31 of January 2021’
console.log(
    `Today is ${dayNames[day]} the ${new Date().getDate()} of ${months[numberOfMonth]} ${new Date().getFullYear()}`
)

// EX #6  From function declarations to function expressions function welcome()
// { let welcome = 'Welcome to Appleseeds Bootcamp!'; return welcome; }

const welcome = function () {
    let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
    return welcomeMessage;
};

// function power(a) { let myNumber = a; let result = Math.pow(myNumber, 2);
// return result; }
const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// function add(a, b = 5) { let myNumber = a; let sum = myNumber + b; return
// sum; }
const add = (a, b = 5) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// From function expressions to function declarations const hello = () =>
// "Hello!";
function hello() {
    "Hello!"
}
// const squareRoot = a => Math.sqrt(a);
function squareRoot(a) {
    Math.sqrt(a)
}
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b) {
    Math.random() * (a - b) + b;
}

// EX #7  From function declarations to explicit and implicit return functions
// (one of each). function welcome() { let welcome = 'Welcome to Appleseeds
// Bootcamp!'; return welcome; }
const welcome1 = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
};

// function power(a) { let myNumber = a; let result = Math.pow(myNumber, 2);
// return result; }
const power1 = a => Math.pow(a, 2);

// From function expressions to IIFE functions. const squareRoot = a =>
// Math.sqrt(a); const randomNumbers = (a, b) => Math.random() * (a - b) + b;

const squareRoot = (function (a) {
    return Math.sqrt(a);
})(16); // providing the value 16 for 'a'

const randomNumbers = (function (a, b) {
    return Math.random() * (a - b) + b;
})(10, 5);