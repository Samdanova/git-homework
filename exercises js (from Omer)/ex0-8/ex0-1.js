

let add="hello";
console.log(typeof(a))

let number=5;
console.log(typeof(number))

let object={};
console.log(typeof(object))

let boolean=true;
console.log(typeof(boolean))

let c=null;
console.log(typeof(c))

let u;
console.log(typeof(u))

let mySymbol = Symbol('uniqueSymbol');
console.log(typeof(mySymbol))


//create three different ways to declare variables
var x=5;
let y=5;
const t=5;

//declare a variable and reassign a value to it
var x=7; 
// - possible only with var

//create a variable and after that assign a string
// with its value being: He's got it!
let string;
string="He's got it"


// 8. create a variable and assign a value on how
// much a restaurant bill is.
let bill=500;
// 9. create a variable and assign a value on how
// much tax they should pay.
let tax=0.13
// 10. create a variable that will calculate the bill
let totalSum=bill+bill*tax;
// - tax and its output would be: Your total bill is
// <total bill> $.
let totalBill="Your total bill is "+totalSum;

// // Round the number 50.6 to its nearest integer
let roundedNumber = Math.round(50.6);
// //Create a variable that is undefined
let variable;