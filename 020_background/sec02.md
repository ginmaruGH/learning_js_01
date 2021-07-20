# 【JS】ガチで学びたい人のためのJavaScriptメカニズム

<https://www.udemy.com/course/javascript-essence/>

## 02  前提知識

### 変数

- `let` (ES6~)
- `const` (ES6~)
- `var` (not recommended)

```js
let a = "Hello"
let b = 1
const c = "Bye"
const d = 2

console.log(a)
console.log(b)
console.log(c)
console.log(d)
```

---

### 関数

- 関数に渡す変数が「引数」
- 関数の呼び出し元に返す値が「戻り値」

```js
function fn02(仮引数1, 仮引数2) {
  return 戻り値
}
fn02(実引数1, 実引数2)
```

```js
function hello() {
  console.log("Hello")
}
hello()
```

```js
let yourName = "Tom"
function hello(name) {
  console.log("Hello " + name)
}
hello(yourName)
```

---

### オブジェクト

- Object
  - 名前（property, key）と値（value）をペアで管理する入れ物
  - property: value
  - property: function
  - property: object
- ドット記法
  - `obj.name`
- ブラケット記法
  - `obj["name"]`

```js
let obj = {
  property1: "Hello",
  property2: function() {
  },
  property3: {
    d: "Bye"
  }
}
obj.property1
obj["property2"]
```

- 無名関数
  - 関数名のない関数
- メソッド
  - オブジェクトのプロパティに格納された関数

```js
let obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: function() {
    console.log("value3")
  },
  prop4: {
    prop5: "value5"
  }
}
console.log(obj.prop1)
obj.prop3()
console.log(obj.prop4.prop5)

obj.prop6 = "value6"
console.log(obj.prop6)
console.log(obj["prop6"])

console.log(obj)
```

---

