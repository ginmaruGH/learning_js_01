// Scope
// Function Scope and Block Scope

// Function Scope
function a() {
  let b = 0; // 関数スコープ
  console.log(b); // 関数スコープ
}
a();
// console.log(b); // error

// Block Scope
// let, const, 関数式にて宣言する
// if(){}, for(){}, etc...
// varや関数宣言は使用しない

{
  let c = 1
  console.log(c)
}
// console.log(c) // error
