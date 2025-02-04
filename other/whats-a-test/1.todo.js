// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b
const subtract = (a, b) => a - b

let result, expected

result = sum(1, 2)
expected = 3

if (result !== expected) {
  throw new Error(
    `Sum is not adding the numbers correctly. Please check your function. Error: ${result} !== ${expected}`,
  )
}

result = subtract(2, 1)
expected = 1

if (result !== expected) {
  throw new Error(
    `Substract is not substracting the numbers correctly. Please check your function. Error: ${result} !== ${expected}`,
  )
}
