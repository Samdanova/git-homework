// Block 1

// function funcA() {
// console.log(a);
// console.log(foo());
// var a = 1;
// function foo() {
// return 2;
// }
// }
// funcA();

// undefined 2
//a is declared using var, so it gets hoisted to the top of the function scope but remains undefined until it's explicitly assigned a value. 
// foo () is a function declaration and is also hoisted to the top of the function scope. So, it's available before its actual declaration. 
// foo() returns 2, hence console.log(foo()) outputs 2
// we can fix:
function funcA() {
    var a = 1;
    console.log(a);
    console.log(foo());

    function foo() {
    return 2;
    }
    }
    funcA();

// Block 2
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// console: Aurelio De Rosa John Doe
// In first case we invoked this.fullName, "this" it will be fullName inside key prop
// in second case we invoked test as a function, what means that there will be full name from global scope. "test" doesn't see the variables inside object  

// Block 3

function funcB() {
let a = b = 0;
a++;
return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// console: undefined number
// console.log(typeof a) will output "undefined", because a is scoped to funcB and not accessible outside of it.
// console.log(typeof b) will output "number", because b has been declared in the global scope (due to the absence of a var, let, or const declaration)

 
// Block 4

function funcC() {
console.log("1");
}
funcC();
function funcC() {
console.log("2");
}
funcC();

// console: 2 2 
// when multiple function declarations with the same name are encountered, the last declaration overrides the previous ones.

// Block 5

// function funcD1() {
// d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
// var e = 1;
// }
// funcD2();
// console.log(e);

// console: 1 undefined
// In funcD1, d is assigned the value 1 without being declared with var, let, or const. This means d becomes a global variable since it's assigned without declaration.
// In funcD2, e is declared using var, which limits its scope to the function funcD2.
// After calling funcD2(), console.log(e) will output undefined, because e is declared within the scope of funcD2 and is not accessible outside of it. Therefore, it is undefined in the global scope.

// Block 6
function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//console: undefined 1
// on line 100 we get undefined because at this moment f only was declared but wasn't inizialied, therefore it doesn't have a value. 
// But when we invoke funcE() we've already had the value of f=1; 