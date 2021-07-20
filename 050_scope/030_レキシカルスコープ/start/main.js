// Scope
// Lexical Scope

let a = 2; // global scope

function fn1() {
  let b = 1; // function scope(fn1)
  function fn2() {
    let c = 3; // function scope(fn2)
    console.log(b);
  } // function scope(fn1)

  fn2();
} // global scope

fn1();
