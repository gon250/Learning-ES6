/*
* Const Declaration ES6
*/

// NOTE: Constants can be declared with uppercase or lowercase, but just by convention, we are using uppercase
const MY_VAL = 2;

console.log('value: ' + MY_VAL);

// trying to redeclare a constant throws an error.
const MY_VAL = 20;

// the name MY_VAL is reserved for constant above, so this will also fail.
var MY_VAL = 20;

// MY_VAL is still 2
console.log('value: ' + MY_VAL);

// const requires an initializer.
const FOO; // SyntaxError: missing = in const declaration

// const also works on objects.
const MY_OBJECT = {'key': 'value'};

// Overwriting the object fails as above (in Firefox and Chrome but not in Safari).
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object attributes are not protected,
// so the following statement is executed without problems.
MY_OBJECT.key = 'otherValue';

//It has a multiples usages as for example for you API credentials.
const API_KEY = 'xxxxxxx';
const API_SECRET = 'xxxxxxx';

//Or Also for a port.
const port = 8080;

//Also an important thing you have to know is it's block scope, take a look the example below.
if(true){
  const temp = 'test';
}
console.log('temp value: ', temp); //Return -> temp is not defined.

//Solution
if(true){
  const temp = 'test';
  console.log('temp value: ', temp);
}
