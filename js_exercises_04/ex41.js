// Block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//  the value of result will be 5. This is because firstResult holds the function otherFunction, which returns the value of b. At the time of calling otherFunction, b has been changed to 5.

// Block 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);

//  console value will be 3. Because a=10 has a function visiability and when we invoke console.log in global there is available only a=1

// Block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}

//in console: 3 times number 3 , because of settimeout our loop have already moved to the end and i=3