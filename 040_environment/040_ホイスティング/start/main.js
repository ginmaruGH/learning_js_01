// 実行環境
// ホスティング

function a() {
  console.log("a is called");
}
a();

// b()は実行される
b();
function b() {
  console.log("b is called");
}

// undefined
console.log(c)
var c = 0

// Uncaught ReferenceError
console.log(d)
let d = 0

console.log(e)
const e = 0
