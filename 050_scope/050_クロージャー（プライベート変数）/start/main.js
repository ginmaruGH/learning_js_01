// Scope
// Closure (Private Variables)

function increment() {
  let num = 0
  num = num + 1
  console.log(num)
}

increment() // 1
increment() // 1
increment() // 1

// クロージャー（プライベート変数）
function incrementFactory() {
  let num = 0; // Closure(Private Variable)
  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment;
}

const incrementFac = incrementFactory()
incrementFac() // 1
incrementFac() // 2
incrementFac() // 3
