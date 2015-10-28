//The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

//Syntax
function* name([param[, param[, ... param]]]) {
   statements
}

function* greet() {
  console.log(`You called 'next()'`);
}

//Description:
/*
* Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
* Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.
* When the iterator's next() method is called, the generator function's body is executed until the first yield expression,
* which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function.
* The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value.
*/


// Simple example
function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...

// Example with yield*
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
