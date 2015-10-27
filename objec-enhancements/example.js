var name = "gonzalo";
var surname = "barba";

// #ES6
var person = {name, surname};

console.log(person.name);
console.log(person.surname);

// #ES5
var person = {name:name, surname:surname};

console.log(person.name);
console.log(person.surname);

/******************************************************/
// It also works with functions

var firstName = "gonzalo";
var lastName = "barba";
function hello(){
  console.log('Hi there!');
}

var person = {name, surname, hello};

person.hello();

// One more thing we can do is instanciate the function direcly, let's take a look below:

var firstName = "gonzalo";
var lastName = "barba";
//function hello(){
//  console.log('Hi there!');
//}

// ES6
var person = {
    name,
    surname,
    hello(){
      console.log('Hi there!');
    }
};

// ES5 would looks like:

var person = {
    name,
    surname,
    hello: function() {
      console.log('Hi there!');
    }
};

// It's basically a short way to do it.
