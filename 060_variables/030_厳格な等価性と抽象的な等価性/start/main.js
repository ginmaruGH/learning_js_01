// Variables
// 厳格な等価性と抽象的な等価性

function printEquality(val1, val2) {
  console.log(`${val1} === ${val2} `, val1 === val2);
  console.log(`${val1} == ${val2} `, val1 == val2);
  console.log(" ")
}

let a = "1"
let b = 1
let c = true
let d = ""
let e = 0
let f = "0"

printEquality(a, b) // false, true
printEquality(b, c) // false, true
printEquality(d, e) // false, true
printEquality(e, f) // false, true

