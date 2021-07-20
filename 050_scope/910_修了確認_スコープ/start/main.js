// Scope
/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */
// function fn() {
//     if(true) {
//         let a = 'fn called';
//     }
//     return a; // ReferenceError: a is not defined
// }
function fn() {
  let a = "";
  if (true) {
    a = "fn called";
  }
  return a;
}

const result = fn();
console.log("Q1: " + result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
// var val = 'val1';
// function fn2() {
//     console.log(val); // 期待値->'val1'

//     if(true) {
//         var val = 'val2';
//         console.log(val); // 期待値->'val2'
//     }

//     console.log(val); // 期待値->'val1'
// }
let val = "val1";
function fn2() {
  console.log("Q2: " + val); // 期待値->'val1'

  if (true) {
    let val = "val2";
    console.log("Q2: " + val); // 期待値->'val2'
  }

  console.log("Q2: " + val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

{
  let num = 0;
  function increment() {
    num = num + 1
    console.log("Q3: " + num)
  }
}

increment()
increment()
increment()
increment()
