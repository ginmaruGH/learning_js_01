// 実行環境
// コールスタック

function a() {}
function b() {
  a();
}
function c() {
  b();
}
c();
