# 【JS】ガチで学びたい人のためのJavaScriptメカニズム

<https://www.udemy.com/course/javascript-essence/>

## 06  変数

### let, const, var

- let (ES6~)
- const (ES6~)
- var (not recommended)

|Type|Redeclare|Reassignment|Scope|Initialize(Hoisting)|
|---|---|---|---|---|
|let|no|ok|block|no|
|const|no|no|block|no|
|var|ok|ok|function|undefined|

```js
// 再宣言（Redeclare）
let a = 0
let a = 1 // Uncaught SyntaxError

const b = 0
const b = 1 // Uncaught SyntaxError

var b = 0
var b = 1 // 1
```

```js
// 再代入（Reassignment）
let a = 0
a = 1 // 1

const b = 0
b = 1 // Uncaught SyntaxError

var c = 0
c = 1 // 1
```

```js
// スコープ
{
  let a = 0 // 有効
  const b = 0 // 有効
  var c = 0 // 無視される（global-scopeと同じになる）
}
var c = 0 // global-scope
```

```js
// 初期化（ホスティング）
console.log(a) // Uncaught ReferenceError
let a = 1

console.log(b) // Uncaught ReferenceError
const b = 1

console.log(c) // undefined
var c = 1
```

---

&nbsp;

### 変数とデータ型

Data Type-1

|Type|English name|Example|
|---|---|---|
|真偽値|Boolean|true/false|
|数値|Number|10|
|文字列|String|"Hello"|
|未定義|Undefined|undefined|
|ヌル・ナル|Null|null|

- Null
  - 参照を保持していない（変数が空）

Data Type-2

|Type|English name|Example|
|---|---|---|
|シンボル|Symbol|一意の値|
|BigInt|BigInt|10n|
|オブジェクト|Object|{a: "value"}|

- BigInt
  - 2^53-1(9007199254740991)よりも大きな整数型のデータ型

---

&nbsp;

### 暗黙的な型変換

- implicit conversion
  - 変数が呼ばれた状況によって、変数の型が自動的に変換されること
- 動的型付け言語
  - 変数宣言時に型の宣言をしない
  - 変数を使用する状況によって、変数の型が変更される
  - `let a = 1`, `let b = "1"`
  - 記述量が少なる傾向
  - 小規模プロジェクト向け
- 静的型付け言語
  - 変数宣言時に型の宣言をする
  - 変数を使用する状況によらず、常に同じ型を保持する
  - `int a = 0`
  - 変数の型を確認しやすく、メンテナンスがしやすい
  - 大規模プロジェクト向け
  - 型が固定されるため、実行時のパフォーマンスがよくなる

```js
let a = 0
console.log(typeof a) // number

let b = "0"
console.log(typeof b) // string
```

```js
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
```

```js
let f = parseInt("1")
printTypeAndValue(f) // number,  1
```

---

&nbsp;

### 厳格な等価性と抽象的な等価性

- 等価性
  - 値を比較した場合に同じとみなせるか
- 比較演算子（Comparison operators）
- 厳格な等価性
  - `a === b`
  - 型の比較あり
- 抽象的な等価性
  - `a == b`
  - 型の比較なし

```js
// Comparison operators
// 比較演算子
let a = "1"
let b = 1

console.log(a === b) // false
console.log(a == b) // true
```

```js
function printEquality(val1, val2) {
  console.log("=== " + val1 === val2)
  console.log("== " + val1 == val2)
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
```

[11.9.3The Abstract Equality Comparison Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.3)

---

&nbsp;

### falsy, truthy

- falsyな値
  - Booleanで真偽値に変換したとき、falseになる値
  - false, null, 0, undefined, 0n, NaN(not a number), ""
- truthyな値
  - Booleanで真偽値に変換したとき、trueになる値
  - falsyな値以外

```js
// falsyな値
let a = 0
console.log(Boolean(a)) // false
```

```js
// falsyな値
let a = ""
console.log(Boolean(a)) // false
```

```js
// falsyな値
let a = 0n
console.log(Boolean(a)) // false
```

```js
// falsyな値
let a = null
console.log(Boolean(a)) // false
```

```js
// falsyな値
// `let a` と同じ
let a = undefined
console.log(Boolean(a)) // false
```

```js
// falsyな値
let a = NaN
console.log(Boolean(a)) // false
```

```js
// falsyな値
let a = parseInt("")
console.log(Boolean(a)) // false
console.log(a) // NaN
```

```js
// falsyな値の確認
// null or undefined
let a = ""
if (!a) {
  console.log("falsy")
}
```

---

&nbsp;

### AND条件とOR条件

```js
const a = 1
const b = 1
console.log(a && b) // 1
console.log(a || b) // 0
```

---

&nbsp;

### AND条件とOR条件（応用）

```js
function hello(name) {
  if(!name) {
    name = "Tom"
  }
  console.log("Hello " + name)
}
hello() // Hello Tom
hello("Bob") // Hello Bob
```

```js
function hello(name) {
  name = name || "Tom"
  console.log("Hello " + name)
}
hello() // Hello Tom
hello("Bob") // Hello Bob
```

```js
// ES6 ~
function hello(name = "Tom") {
  console.log("Hello " + name)
}
hello() // Hello Tom
hello("Bob") // Hello Bob
```

```js
function hello(name = "Tom") {
  console.log("Hello " + name)
}

let name = "Bob"
if(name) {
  hello() // Hello Bob
}
```

```js
function hello(name = "Tom") {
  console.log("Hello " + name)
}

let name = "Bob"
name && hello() // Hello Bob

let name2
name2 && hello() // 実行されない
```

---

&nbsp;

### プリミティブ型とオブジェクト

- Data type（データ型）
  - 文字列、数値などの異なる値の型をデータ型という
  - JavaScript(ECMAScript)には8つの型がある
    - プリミティブ型
      - String, Number, Boolean, Undefined, Null, Symbol, BigInt
    - オブジェクト、プリミティブ型以外の型
      - Object


- Primitive type
  - 変数には値が格納される
  - 一度作成するとその値を変更することはできない
  - immutable（不変）
  - メモリ空間に残る

- Object type
  - 変数には参照が格納される
  - 値を変更することができる
  - mutable（可変）
  - 名前（プロパティ）と値（バリュー）をペアで管理する入れ物
  - 名前（プロパティ）付きの参照を管理する入れ物
  - 参照を名前（プロパティ）付きで管理している入れ物

---

&nbsp;

### 参照とコピー

```js
// プリミティブ型の参照とコピー
let a = "hello"
let b = a
console.log(a, b) // hello, hello

b = "bye"
console.log(a, b) // hello, bye
```

```js
// オブジェクトの参照とコピー
let c = {
  prop: "hello"
}
let d = c
console.log(c, d) // {prop: "hello"}, {prop: "hello"}

d.prop = "bye"
console.log(c, d) // {prop: "bye"}, {prop: "bye"}
```

```js
// オブジェクトの参照とコピー
let c = {
  prop: "hello"
}
let d = c
console.log(c, d) // {prop: "hello"}, {prop: "hello"}

d = {}
console.log(c, d) // {prop: "hello"}, {}
```

- プリミティブ値のコピー
  - 参照先の値がコピーされる
- オブジェクトのコピー
  - オブジェクトへの参照がコピーされる

---

&nbsp;

### 参照とconst

```js
// プリミティブ型の参照とconst
const a = "hello"
a = "bye" // Uncaught TypeError
```

```js
// オブジェクトの参照とconst
const b = {
  prop: "hello"
}
b.prop = "bye"
console.log(b) // {prop: "bye"}

b = {} // Uncaught TypeError
```

---

&nbsp;

### 参照と引用

```js
let a = 0
function fn1(arg1) {
  arg1 = 1
  console.log(a, arg1)
}
fn1(a) // 0 1
```

```js
let b = {
  prop: 0
}
function fn2(arg2) {
  arg2.prop: 1
  console.log(b, arg2)
}
fn2(b) // {prop: 1}, {prop: 1}
```

```js
let b = {
  prop: 0
}
function fn3(arg2) {
  arg2 = {}
  console.log(b, arg2)
}
fn3(b) // {prop: 0}, {}
```

---

&nbsp;

### 参照と分割代入

- Destructuring assignment（分割代入）
  - `let {a, b} = object`
  - オブジェクトから特定のプロパティを抽出して宣言を行う

```js
const a = {
  prop: 0
}
let { prop } = a
prop = 1
console.log(a, prop) // {prop: 0} 1
```

```js
const a = {
  prop: 0
}
function fn(obj) {
  let { prop } obj
  prop = 1
  console.log(obj, prop)
}
fn(a) // {prop: 0} 1
```

```js
const a = {
  prop: 0
}
function fn({ prop }) {
  prop = 1
  console.log(obj, prop)
}
fn(a) // {prop: 0} 1
```

```js
const c = {
  prop1: {
    prop2: 0
  }
}
let { prop1 } = c
console.log(prop1) // {prop2: 0}
```

```js
const c = {
  prop1: {
    prop2: 0
  }
}
let { prop1 } = c
prop1.prop2 = 1

console.log(c, prop1) // {prop1:{prop2: 1}}, {prop2: 1}
```

---

&nbsp;

### 参照の比較と値の比較

```js
const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a === b) // false
console.log(a == b) // false

console.log(a.prop === b.prop) // true
```

```js
const a = {
  prop: 0
}

const c = a
console.log(a === c) // true
```

- プリミティブ型では値を比較
- オブジェクトでは参照を比較

---
