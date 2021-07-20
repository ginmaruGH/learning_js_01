# 【JS】ガチで学びたい人のためのJavaScriptメカニズム

<https://www.udemy.com/course/javascript-essence/>

## 04  実行環境

### JavaScriptと実行環境

- ブラウザとJSエンジン
  - User Interface
  - Browser Engine
  - Data Storage
  - Rendering Engine
  - JavaScript Engine
  - Networking
  - UI Backend

&nbsp;

- JavaScript Engine
  - ECMAScript
  - Web APIs
    - DOM API
    - WebRTC
    - Fetch API
    - XHR API
    - Geolocation API
    - etc...

&nbsp;

- Universal JavaScript
  - V8 engine
    - Chrome
    - node.js


|Browser|JS Engine|
|---|---|
|Chrome|V8|
|Safari|JavaScriptCore|
|Firefox|SpiderMonkey|
|Edge|Chakra/V8|
|Opera|V8|

&nbsp;

- JavaScriptはJavaScriptエンジンによって実行される
- 一番シェアがあるJavaScriptエンジンはV8
- JavaScriptからWebAPIsを通してブラウザを操作する
  - API(Application Programing Interface)
  - アプリケーションやソフトウェアの構築と統合（インテグレーション）に使われるツール、定義、プロトコル
  - アプリケーションやソフトウェアとプログラミングをつなぐもの

### JavaScriptが実行されるまで

- JavaScript Engine
  - code(JavaScript)
  - Window
    - Web APIs
    - JSエンジンによって生成されるCHORD内のどこからでもアクセスできるオブジェクト
  - this
    - オブジェクトへの参照
    - コンテキストによって取得できる値が変わる

```js
window

window.alert("Hello")

window.document

this
```

- Global Object
  - JSエンジンによって生成されるコード内のどこからでもアクセスできるオブジェクト
- JavaScript実行前にはグローバルオブジェクトとthisが準備される
- ブラウザのグローバルオブジェクトはWindowオブジェクトとなる

---

&nbsp;

### 実行コンテキスト

- context
  - 前後関係、文脈、脈略、コンテキスト、状況、環境
- 実行コンテキスト
  - コードを実行する際の文脈・状況

&nbsp;

- JavaScript Engine
  - 実行コンテキスト
    - code
    - Window
      - Wev APIs
    - this

&nbsp;

- 実行コンテキストの種類
  - グローバルコンテキストで使用できるもの
    - 実行中のコンテキスト内の変数・関数
    - グローバルオブジェクト
    - this
  - 関数コンテキストで使用できるもの
    - 実行中のコンテキスト内の変数・関数
    - arguments
    - super
    - this
    - 外部変数
  - evalコンテキスト（非推奨）

```js
// グローバルコンテキスト
// jsファイル直下に書かれたコードが実行される環境がグローバルコンテキスト
let a = 0
function b() {}
console.log(a)
b()
```

```js
// 関数コンテキスト
// 関数が実行されているときに生み出されるコンテキスト
let a = 0 // 外部変数
function b() {
  // 関数コンテキスト
  console.log(this, arguments, a)
}
b()
```

---

&nbsp;

### コールスタック

- Stack
  - 積み重ね
- Call Stack
  - 実行中のコードがたどってきたコンテキストの積み重ね

```js
function a() {

}
function b() {
  a()
}
function c() {
  b()
}
c()
```

- コールスタックというコンテキストの積み重ね
  - a
  - b
  - c
  - グローバル（anonymous）

ブラウザ開発ツール -> Sources -> Call Stackから確認できる

- コールスタックの積み重なり方
  - LIFO
    - Last In, First Out
    - 後入れ、先出し
- JavaScriptエンジンはコールスタックという仕組みでJavaScriptがどのように実行されてきたのかを追跡している

---

&nbsp;

### ホスティング

- Hoisting
  - コンテキスト内で宣言した変数や関数定義をコード実行前にメモリーへ配置すること
  - 宣言の巻き上げ

```js
function a(){
  console.log("a is called")
}
a()
```

```js
// a()は実行される
a()
function a(){
  console.log("a is called")
}
```

```js
// undefined
console.log(b)
var b = 0
```

```js
// Uncaught ReferenceError
console.log(c)
let c = 0

console.log(d)
const d = 0
```

- `var`は非推奨なので使わない
- 関数内でも同じ挙動になる

```js
// 関数宣言
// undefined
a()
function a() {}
```

```js
// 関数式
// Uncaught ReferenceError
a()
const a = function() {}
```

---

&nbsp;

### JSエンジンによる挙動の違い

同じコードでもJavaScriptエンジンによって、実行結果が変わることもある

---
