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