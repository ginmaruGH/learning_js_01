// Scope
// IIFE(Immediate Invoked Function Expression)

// 関数宣言
function a() {
  console.log("a called");
}
a();

// 即時関数
// error
// (function() {
//   console.log("IIFE called")
// })()
let b = (function () {
  console.log("b called");
})();

// 即時関数 応用1
let c = (function (num) {
  // 関数定義と同時に実行される
  console.log("function c called & num: " + num);
  // cを呼び出して表示
  return 0;
})(10);
console.log("c: " + c);

// 即時関数 応用2
let d = (function () {
  // 関数定義と同時に実行される
  console.log("function called");

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFn is called");
  }

  function publicFn() {
    privateFn();
    console.log("publicFn is called: " + privateVal++);
  }

  return {
    publicVal,
    publicFn,
  };
})();

console.log("d.publicVal: " + d.publicVal);
d.publicFn(); // publicFn is called: 0
d.publicFn(); // publicFn is called: 1
d.publicFn(); // publicFn is called: 2
d.publicFn(); // publicFn is called: 3
