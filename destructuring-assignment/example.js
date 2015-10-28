// Let start coding to undertand this secction,
// it's very common in es5 work with obj as below

var obj = {
  name: 'gonzalo'
}

console.log(obj.name); // output: gonzalo

// But in es6 we can do something different.

var {name} = {
  name: 'gonzalo'
}
// so we can use it direcly:
console.log(name);

// It also works with multiple values.

var {name, state} = {
  name: 'gonzalo',
  surname: 'barba',
  age: '26',
  state: 'Spain'
}

console.log(name);   // output: gonzalo
console.log(state);  // output: Spain

// A common scenario is when we have a function the one return an object and
// we only need some values of that obj.

function getPerson() {
  return {
    name: 'gonzalo',
    surname: 'barba',
    age: '26',
    state: 'Spain'
  }
}

var {name, state} = getPerson();
console.log(name);   // output: gonzalo
console.log(state);  // output: Spain

// Also you can set as different name
var {name:firstName, state:country} = getPerson();
console.log(firstName);   // output: gonzalo
console.log(country);     // output: Spain


// Let se a different way to use it.
// In this case we have and array and we only need the first and the last position
// of our array

var [first,,,last] = [1, 2, 3, 4];
console.log(first); // output: 1
console.log(last);  // output 4

// Let code with a bigger obj
var people = [
   {  "name":"Baz",
      "age":34,
      "email": "baz@example.com"
    },
   {  "name":"Boz",
      "age":24,
      "email": "Boz@example.com"
    },
   {  "name":"Bax",
      "age":98,
      "email": "bax@example.com"
    }
]

//lets get only the names:
people.forEach(({name})=> console.log(name));
// output:
// Baz
// Boz
// Bax

// We also can do stuff like:
// eg: get the second obj and print the email

var [, Boz] = people;

function printEmail({email}) {
  console.log(email);
}
printEmail(Boz); // output: Boz@example.com
