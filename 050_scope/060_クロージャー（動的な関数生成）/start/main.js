// Scope
// Closure (Dynamic Function Generation)

// クロージャー（動的な関数生成）

function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5) // 5 + value
const result = add5(10) // 5 + 10
console.log(result) // 15

const add10 = addNumberFactory(10) // 10 + value
const result1 = add10(10) // 10 + 10
console.log(result1) // 20
