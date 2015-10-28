/*
* The let keyword
*/

//Now we are going to see how variables works.
// The main difference

// #ES5

var message = 'hello';
{
  var message = 'bye';
}
console.log(message); // output: bye

// Because message is the same in both cases, so is reassigned in the second message.

// Now let see what's happend when we add the second message inside a function.

var message = 'hello';

function test(){
  var message = 'bye';
}

console.log(message); // output: hello;

// it does not have any impact because is inside the function.

// #ES6 allow us to use block scoping

let message = 'hello';
{
  let message = 'bye';
}
console.log(message); // output: hello

/*****************************************************************************/

// Let see whats happend when we use a loop

// #ES5

var fs = [];

for(var i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}

fs.forEach(function(f) {
  f();
})

// output:
// 10
// 10
// 10
// ...


// this is happening because is reassiging the variable.

// #ES6

var fs = [];

for(let i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}

fs.forEach(function(f) {
  f();
})

// output:
// 0
// 1
// 2
// ...

// This is happening because let is creating a new I per each iteration. 
