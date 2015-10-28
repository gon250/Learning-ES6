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

// If I want to get all the emails:

let emails = [for({email} of people) email];
console.log(emails); // output: all the emails.

// Get the email only if the name is Baz

let emails = [for({email, name} of people) if(name === 'Baz') email];
console.log(emails); // output: baz@example.com

// Let see an example with numbers;
// Lets get all the numbers over 3

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numbersOverThree = [for(num of numbers) if (num > 3) num];
console.log(numbersOverThree); // output: [4, 5, 6, 7, 8, 9, 10]

// Lets do something more difficult
var numbers = [1, 2, 3, 4, 5];
var letters = ['a', 'b', 'c', 'd', 'e'];

var mix = [for(num of numbers) for(letter of letters) num + letter];
