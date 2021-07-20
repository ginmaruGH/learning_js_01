# 【JS】ガチで学びたい人のためのJavaScriptメカニズム

<https://www.udemy.com/course/javascript-essence/>

## 05  スコープ

### スコープとは

- Scope
  - 実行中のコードから値と式が参照できる範囲
- グローバルスコープ
- スクリプトスコープ
- 関数スコープ
- ブロックスコープ
- モジュールスコープ

---

&nbsp;

### グローバルスコープとスクリプトスコープ

```js
let a = 0 // script-scope
var b = 0 // global-scope
function c() {} // global-scope
debugger
```

```js
let a = 0 // script-scope
var b = 0 // global-scope
function c() {} // global-scope

console.log(b) // console.log(window.b)
```

```js
// global-scope
var b = 0
function c() {}
window.d = 1
```

- Global Scope
  - Windowオブジェクト
  - スクリプトスコープもグローバルスコープと呼ばれる
  - 厳密にはスクリプトスコープとグローバルスコープの挙動は違う

---

&nbsp;

### 関数スコープとブロックスコープ

```js
// 関数スコープ
function a() {
  let b = 0 // 関数スコープ
  console.log(b) // 関数スコープ
}
a()
```

```js
// ブロックスコープ
// if(){}, for(){}, etc...
// let, const, 関数式にて宣言する
// varや関数宣言は使用しない
{
  // ブロックスコープ
}
```

---

&nbsp;

### スコープと実行コンテキスト

- 実行コンテキスト
  - コードが実行される状況
- スコープ
  - 実行中のコードから見える範囲

&nbsp;

- グローバルコンテキスト
  - 実行中のコンテキスト内の変数・関数 <- グローバルスコープ（スクリプトスコープ）
  - グローバルオブジェクト
  - this

&nbsp;

- 関数コンテキスト
  - 実行中のコンテキスト内の変数・関数 <- 実行中の関数スコープ
  - arguments
  - super
  - this
  - 外部変数

---

&nbsp;

### レキシカルスコープ

- Lexical
  - 語彙、辞書（編集）の、辞書的な
  - プログラムの文脈では、ソースコードのどこに何を書いているかという意味
- Lexical Scope
  - コードを書く場所によって参照できる変数が変わるスコープのこと
  - コードを記述した時点で決定するため「静的スコープ」ともいう

```js
let a = 2 // global scope

function fn1() {
  let b = 1 // function scope(fn1)
  function fn2() {
    let c = 3 // function scope(fn2)
    console.log(b)
  } // function scope(fn1)

  fn2()
} // global scope

fn1()
```

```js
let a = 2
function fn1() {
  let b = 1
}
fn1()

function fn2() {
  let c = 3
  console.log(b) // error
}
fn2()
```

- グローバルスコープ
  - a, fn1
  - 関数スコープ（fn1）: b, fn2
    - 外部スコープ（fn1）: a, fn1
    - 関数スコープ（fn2）: c
      - 外部スコープ（fn2）: a, fn1, b, fn2

&nbsp;

- 外部スコープ（レキシカルスコープ）
  - 自身のスコープの外側のスコープへは参照可能

- レキシカルスコープ
  - 実行中のコードから見た外部スコープのこと
  - どのようにしてスコープを決定するかのプログラミングの仕様のこと（静的スコープ）

---

&nbsp;

### スコープチェーン

- Scope Chain
  - スコープが複数階層で、連なっている状態
  - あるスコープがほかのスコープを含んでいる状態

```js
let a = 2
function fn1() {
  let a = 1
  function fn2() {
    let a = 3
    console.log(a)
  }
  fn2()
}
fn1() // a = 3
```

```js
let a = 2
function fn1() {
  let a = 1
  function fn2() {
    // let a = 3
    console.log(a)
  }
  fn2()
}
fn1() // a = 1
```

```js
let a = 2
function fn1() {
  // let a = 1
  function fn2() {
    // let a = 3
    console.log(a)
  }
  fn2()
}
fn1() // a = 2
```

```js
let a = 2 // script scope
window.a = 4 // global scope
function fn1() {
  // let a = 1
  function fn2() {
    // let a = 3
    console.log(a)
  }
  fn2()
}
fn1() // a = 2
```

global scopeはscript scopeの外側にある

---

&nbsp;

### クロージャー

- Closure
  - レキシカルスコープの変数を関数が使用している状態

```js
// クロージャー
function fn1() {
  let b = 1
  function fn2() {
    console.log(b) // <- closure
  }
  fn2()
}
fn1()
```

- クロージャーを使った実装
  - プライベート変数の定義（関数の外部からアクセスできない変数）
  - 動的（状況によって変化する）な関数の生成

---

&nbsp;

### クロージャー（プライベート変数）

```js
function increment() {
  let num = 0
  num = num + 1
  console.log(num)
}

increment() // 1
increment() // 1
increment() // 1
```

```js
let num = 0
function increment() {
  num = num + 1
  console.log(num)
}

increment() // 1
increment() // 2
increment() // 3

// numの変更がどこからでもできてしまう
```

```js
// クロージャー（プライベート変数）
function incrementFactory() {
  let num = 0 // Closure(Private Variable)
  function increment() {
    num = num + 1
    console.log(num)
  }
  return increment
}

const increment = incrementFactory()
increment() // 1
increment() // 2
increment() // 3
```

---

&nbsp;

### クロージャー（動的な関数生成）

```js
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value
  }
  return addNumber
}
const add5 = addNumberFactory(5) // 5 + value
const result = add5(10) // 5 + 10
console.log(result) // 15

const add10 = addNumberFactory(10) // 10 + value
const result1 = add10(10) // 10 + 10
console.log(result1) // 20
```

---

&nbsp;

### 即時関数

- IIFE(Immediate Invoked Function Expression)
- IIFE（即時関数・即時実行関数）
  - 関数定義と同時に一度だけ実行される関数
  - 実行結果（戻り値）が呼び出し元に返却される

```js
// resultに戻り値が入る
let result =
  (function(仮引数) {
    return 戻り値
  })(実引数)
```

```js
// 関数宣言
function a() {
  console.log("a called")
}
a()
```

```js
// 即時関数
(function() {
  console.log("IIFE called")
})()
// error

// 関数式で書く
let b = (function() {
  console.log("called")
})()
```

```js
let c = (function() {
  console.log("called")
  let privateVal = 0
  let publicVal = 10
  function privateFn() {
    privateFn()
    console.log("privateFn is called")
  }
  function publicFn() {
    console.log("publicFn is called: " + privateVal++)
  }
  return {
    publicVal,
    publicFn
  }
})()

console.log(c.publicVal)
c.publicFn() // publicFn is called: 0
c.publicFn() // publicFn is called: 1
c.publicFn() // publicFn is called: 2
c.publicFn() // publicFn is called: 3
```

```js
// テンプレート構文
const a = 1
const b = 1
let sum = a + b
console.log(`${a} + ${b} = ${sum}`) // 1 + 1 = 2
```

---
