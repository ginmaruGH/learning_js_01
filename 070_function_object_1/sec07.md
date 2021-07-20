# 【JS】ガチで学びたい人のためのJavaScriptメカニズム

<https://www.udemy.com/course/javascript-essence/>

## 07  関数とオブジェクト1

### 関数

```js
function fn(a, b) {
  console.log(a, b)
}
fn(0, 1) // 0 1
fn(1) // 1 undefined
fn(null, 1) // null 1
```

```js
// 関数名の重複をさけるためには関数式を使う
const fn = function(a, b) {
  console.log(a, b)
}
fn(1, 2) // 1 2
```

```js
function fn(a, b = 2) {
  console.log(a, b)
}
fn(1) // 1 2
fn(1, null) // 1 null
```

```js
let c // c = undefined
// let c = undefined // undefinedを使って定義はしない
```

```js
// arguments（引数）
function fn(a, b = 1) {
  console.log(arguments)
}
fn(1, 2) // arguments[0]=1, arguments[1]=2
```

```js
// arguments（引数）
function fn() {
  console.log(arguments)
}
fn(1, 2) // arguments[0]=1, arguments[1]=2
```

```js
// レストパラメーター
// ...arg
function(...arg) {
  console.log(arg)
}
fn(1, 2, 0) // [1, 2, 0]
```

```js
function fn() {
  return a
}
let c = fn(1, null)
console.log(c) // 1 null
```

---

### 関数とオブジェクト

- 関数は実行可能なオブジェクトである

```js
function a() {
  console.log("hello")
}

a.prop = 0
a.method = function() {
  console.log("method")
}

a() // hello
a.method() // method
console.log(a.prop) // 0
```

---

### コールバック関数

- Callback Function
  - ほかの関数に引数として渡される関数

```js
function hello() {
  console.log("hello")
}

function bye() {
  console.log("bye")
}

function fn(cb) {
  cb()
}

fn(hello) // hello
fn(bye) // bye
```

```js
function hello(name) {
  console.log("hello" + name)
}

function bye(name) {
  console.log("bye" + name)
}

function fn(cb) {
  cb("Tom")
}

fn(hello) // hello Tome
fn(bye) // bye Tom
```

```js
function fn(cb) {
  cb("Tom")
}

fn(function() {
  console.log("hello")
}) // hello
```

```js
function fn(cb) {
  cb("Tom")
}

fn(function(name) {
  console.log("hello " + name)
}) // hello Tom
```

```js
function hello(name) {
  console.log("hello" + name)
}

setTimeout(hello, 2000) // hello undefined
```

### this

- this
  - 呼び出し元のオブジェクトへの参照を保持するキーワード

```js
const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
    // console.log("Hello " + person.name)
  }
}

person.hello() // Hello Tom
```

- thisの呼び出し元は実行コンテキストによって変わる

---

### 参照のコピーとthis

```js
const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

const ref = person.hello
ref() // Hello
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

const ref = person.hello
ref() // Hello John
```

- オブジェクトのメソッドとして実行される場合
  - `this` => 呼び出し元のオブジェクト
- 関数として実行される場合
  - `this` => グローバルオブジェクト

```js
const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

function a() {
  console.log("Hello " + this.name)
}

person.hello() // Hello Tome
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
    a()
  }
}

function a() {
  console.log("Hello " + this.name)
}

person.hello() // Hello Tome Hello John
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
    a()
    const person = {
      name: "Bob",
      hello: function() {
        console.log("Hello " + this.name)
        a()
      }
    }
    person.hello()
  }
}

function a() {
  console.log("Hello " + this.name)
}

person.hello() // Hello Tome, Hello John ,Hello Bob, Hello John
```

---

### コールバック関数とthis

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

person.hello() // Hello Tome
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

person.hello() // Hello Tome

function fn(ref) {
  ref()
}

fn(person.hello) // Hello John
```

- オブジェクトのメソッドとして実行される場合
  - `this` => 呼び出し元のオブジェクト
- 関数として実行される場合
  - `this` => グローバルオブジェクト

---

### bind, this

```js
const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

person.hello() // Hello Tome

const helloTom = person.hello.bind(person)

function fn(ref) {
  ref()
}

fn(helloTom) // Hello Tom
```

```js
function a() {
  console.log("Hello " + this.name)
}

const b = a.bind({ name: "Bob" })

b() // Hello Bob
```

```js
function a(name) {
  console.log("Hello " + name)
}

const b = a.bind(null, "Bob")

b() // Hello Bob
b("Tim") // Hello Bob
```

- bind
  - bindによって`this`や引数を固定した新しい関数を作成できる
  - bindによる`this`の束縛

---

### call, apply, this

- bind
  - `this`や引数の参照先を変更
  - 使用時点では関数は実行されない
- call, apply
  - `this`や引数の参照先を変更
  - 同時に関数を実行する

```js
// bind
function a() {
  console.log("Hello " + this.name)
}

const b = a.bind({ name: "Bob" })

b() // Hello Bob
```

```js
// apply, call
function a() {
  console.log("Hello " + this.name)
}

const tim = { name: "Tim" }

const b = a.bind(tim)
b() // Hello Tim

a.apply(tim) // Hello Tim
a.call(tim) // Hello Tim
```

```js
// apply, call
function a(name, name2) {
  console.log("Hello " + name + " " + name2)
}

a.apply(null, ["Tim", "Bob"]) // Hello Tim Bob
a.call(null, "Tim", "Bob") // Hello Tim Bob
```

```js
const array = [1, 2, 3, 4, 5]
const result = Math.max.apply(null, array)
// const result = Math.max(...array) // ES6
console.log(result) // 5
```

---

### アロー関数

- Arrow Function
  - 無名関数を記述しやすくした省略記法
  - `() => {}`

```js
// 関数宣言
function a(name) {
  return "Hello " + name
}

// 関数式
const b = function(name) {
  return "Hello " + name
}

// アロー関数
const c = (name) => {
  return "Hello " + name
}

const c = name => {
  return "Hello " + name
}

const c = name => "Hello " + name

console.log(c("Tom")) // Hello Tom
```

||無名関数|アロー関数|
|---|---|---|
|this|ok|no|
|arguments|ok|no|
|new|ok|no|
|prototype|ok|no|

---

### アロー関数とthis

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: function() {
    console.log("Hello " + this.name)
  }
}

person.hello() // Hello Tome
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello: () => {
    console.log("Hello " + this.name)
  }
}

person.hello() // Hello John
```

```js
window.name = "John"

const a = () => {
  console.log("Bye " + this.name)
}

const person = {
  name: "Tom",
  hello() {
    console.log("Hello " + this.name)
    a()
  }
}

person.hello() // Hello Tom, Bye John
```

```js
window.name = "John"

const person = {
  name: "Tom",
  hello() {
    console.log("Hello " + this.name)
    const a = () => {
      console.log("Bye " + this.name)
    }
    a()
  }
}

person.hello() // Hello Tom, Bye Tom
```

```js
window.name = "John"

function b() {
  const a = () => {
    console.log("Bye " + this.name)
  }
  a()
}

b() // Bye John
```

---
