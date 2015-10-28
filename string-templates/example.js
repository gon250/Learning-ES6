/*
* In javascript you know is very common when you work with string you can concatenate
* variables with strings as in the example below
*/

var s1 = 'hello';
var s2 = s1 + ', world!';

console.log(s2); // output: hello, world!

// In ES6 allow you to put the variables inside of your strings.
var s1 = 'hello';
var s2 = `${s1}, world!`;

console.log(s2); // output: hello, world!


// Also you can use expresions

var x = 1;
var y = 2;
var result = `${ x } + ${ y } = ${ x + y }`;
console.log(result); // output: 1 + 2 = 3

//Let's go to the next level

var message = `It's ${new Date().getHours()} I'm sleepy`;
console.log(message); // output: It's 12 I'm sleepy


// We can use functions, just adding the name of the function
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var message = tag`It's ${new Date().getHours()} I'm sleepy`;
console.log(message);
// output
// ["It's "," I'm sleepy"]
// [12]

// Let manage if we are sleepy or not
function tag(strings, ...values){
  if(values[0] < 22){
    values[1] = "awake";
  }
  else{
    values[1] = "sleepy";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);
