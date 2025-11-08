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