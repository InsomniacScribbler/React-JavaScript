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

//type coercion
let g = "5";
let h = 10;
let i = g + h; // "510" (string concatenation)
console.log(i); // "510"
let j = g * h; // 50 (numeric multiplication)
console.log(j); // 50
let k = g - h; // -5 (numeric subtraction)
console.log(k); // -5
let l = g / h; // 0.5 (numeric division)
console.log(l); // 0.5
let m = g == h; // false (loose equality)
console.log(m); // false
let n = g === h; // false (strict equality)
console.log(n); // false
let o = Boolean(g); // true (non-empty string is truthy)
console.log(o); // true
let p = Number(g); // 5 (string to number conversion)
console.log(p); // 5
// truthy and falsy values
let q = 0; // falsy
if (q) {
    console.log("q is truthy");
} else {
    console.log("q is falsy");
} // "q is falsy"
 console.log(2* "nikhil"); // NaN because string cannot be converted to number and multiplied

 // == vs ===
    console.log(5 == "5"); // true (loose equality)
    console.log(5 === "5"); // false (strict equality)


// INSTANCEOF OPERATOR
let r = [1, 2, 3];
console.log(r instanceof Array); // true
console.log(r instanceof Object); // true
console.log(r instanceof String); // false
let s = {name: "Alice"};
console.log(s instanceof Object); // true
console.log(s instanceof Array); // false


// increment and decrement operators
let t = 5;
console.log(t++); // 5 (returns t, then increments)
console.log(t); // 6
console.log(++t); // 7 (increments t, then returns)
console.log(t); // 7
console.log(t--); // 7 (returns t, then decrements)
console.log(t); // 6
console.log(--t); // 5 (decrements t, then returns)
console.log(t); // 5

// function
function add(x, y) {
    return x + y;
}
console.log(add(10, 20)); // 30

// arrow function
const addArrow = (x, y) => x + y;
console.log(addArrow(10, 20)); // 30    
// default parameters
function multiply(x, y = 2) {
    return x * y;
}
console.log(multiply(10)); // 20
console.log(multiply(10, 3)); // 30
