// Variables
// 暗黙的な型変換

function printTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0
let b = "1" + a
let c = 15 - b
let d = c - null
let e = d - true

printTypeAndValue(a) // number,  0
printTypeAndValue(b) // string,  10
printTypeAndValue(c) // number,  5
printTypeAndValue(d) // number,  5
printTypeAndValue(e) // number,  4

let f = parseInt("1")
printTypeAndValue(f) // number,  1
