// Scope
// Global Scope and Script Scope

let a = 0; // script-scope
var b = 0; // global-scope
function c() {} // global-scope
// debugger;

console.log(b)
console.log(window.b)

window.d = 1
console.log(d)
