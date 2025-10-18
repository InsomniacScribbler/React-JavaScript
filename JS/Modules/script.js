// var, let, const -> Line by line comparision
console.log(a); // undefined
var a = 10;
console.log(b); // ReferenceError
let b = 20;
const c = 30;
console.log(a, b, c);