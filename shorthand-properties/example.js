let firstName = 'gonzalo';
let lastName = 'barba';

let person = {firstName, lastName};

console.log(person); // output: {firstName: "gonzalo", lastName: "barba"}

//We can also buld object with that, like:

let pet = 'dog';

let team = {person, pet};

console.log(team);
// output: {person: {firstName: "gonzalo", lastName: "barba"}, pet: "dog"}
