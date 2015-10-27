//TODO: read more about it, I dont feel confident with the es6 generatos.

// You make a generator by adding the keyword *

function* greet() {
  console.log(`You called 'next()'`);
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next); // output: next is undefined and done: true


//If we add a yield, we will see the value in our output but done will be false.

function* greet() {
  console.log(`You called 'next()'`);
  yield 'Hello';
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next); // output: next is undefined.
