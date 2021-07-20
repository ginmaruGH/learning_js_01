// 実行環境
// 実行コンテキスト

let a = 0; // グローバルコンテキスト、外部変数
function b() {
  // 関数コンテキスト
  console.log(this, arguments, a);
}
b(); // グローバルコンテキスト

