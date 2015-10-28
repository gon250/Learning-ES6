// Let start creating a simple function

function hello (message, name) {
  console.log(message + ', ' + name);
}

hello(); // output: undefined, undefined

// I can set default values direcly in the function as you can see below

function hello (message, name = 'Gonzalo') {
  console.log(message + ', ' + name);
}

hello();      // output: undefined, Gonzalo
hello('hi');  // output: hi, Gonzalo
hello('hi', 'Fran');  // output: hi, Fran

// Let see how we can assing a default function

function message (defaultFunction) {
  defaultFunction();
}

message(); // output: TypeError: undefined is not a function..

function message (defaultFunction) {
  defaultFunction();
}

message(function () {
  console.log('hello');
});
// output: hello

// But what we are looking for is to set a default value for the function, so let see.
function message (defaultFunction = function () {
  console.log('hello');
}) {
  defaultFunction();
}
// output: hello


// We can implement it more simple using the arrow synt
function message (defaultFunction = ()=> console.log('hello')) {
  defaultFunction();
}
// output: hello

// Also you can do the next thing:
let message = (defaultFunction = ()=> console.log('hello')=> defaultFunction();
message();
// output: hello
