// var, let, const -> Line by line comparision
console.log(a); // undefined
var a = 10;
//console.log(b); // ReferenceError
let b = 20;
const c = 30;
console.log(a, b, c); 


let d= {
    name: "John",
    
}
console.log(d.name); // "John"

let e = d;
e.name = "Doe";
console.log(e.name); // "Doe"
console.log(d.name); // "Doe"


// Dynamic Typing : js allows to change 
// //the type of a variable on the go not like other statically typed languages which means that once a variable is declared with a type, it can be changed in dynamic typing.
let f = 100; // f is a number
console.log(typeof f); // "number"
f = "Hello"; // f is now a string
console.log(typeof f); // "string"
f = true; // f is now a boolean
console.log(typeof f); // "boolean" 


// type coercion
let g = "5";
let h = 10;
let result = g + h;
console.log(result); // "510" (string concatenation)
result = h - g;
console.log(result); // 5 (numeric subtraction)
result = h * g;
console.log(result); // 50 (numeric multiplication)
result = h / g;
console.log(result); // 2 (numeric division)
result = h == g;
console.log(result); // true (loose equality, type coercion occurs)
result = h === g;
console.log(result); // false (strict equality, no type coercion)
console.log(2 * "nikhil"); // NaN (not a number) because "nikhil" cannot be coerced to a number
// truthy and falsy values
let values = [0, 1, "", "Hello", null, undefined, [], {}, NaN];
values.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});