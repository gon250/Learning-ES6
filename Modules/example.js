/*
* Syntax
* import name from "module-name";
* import * as name from "module-name";
* import { member } from "module-name";
* import { member as alias } from "module-name";
* import { member1 , member2 } from "module-name";
* import { member1 , member2 as alias2 , [...] } from "module-name";
* import defaultMember, { member [ , [...] ] } from "module-name";
* import defaultMember, * as alias from "module-name";
* import defaultMember from "module-name";
* import "module-name";
*/

/*
* Description
* Language-level support for modules for component definition.
* Codifies patterns from popular JavaScript module loaders (AMD, CommonJS).
* Runtime behaviour defined by a host-defined default loader.
* Implicitly async model – no code executes until requested modules are available and processed.
*/



//Let's do somethin easy
function SayHello(name){
  return 'Hello ' + name;
}
console.log('result: ', SayHello('Gonzalo'));

// #1
//Now we are going to move the function to a new module -> welcome.js
// First import the module
import { SayHello } from './welcome';

console.log('result: ', SayHello('Gonzalo'));

// #2
//Create a new function SayGoodBy, we are going to create it in welcome.js module
import { SayHello, SayGoodBy } from './welcome';
console.log('result: ', SayHello('Gonzalo'));
console.log('result: ', SayGoodBy('Gonzalo'));

// #3
//We can implement diferents ways to export modules, lets take a look in welcome.js

// #4
//Now we are going to see how to import

// #4.1
import { SayHello, SayGoodBy } from './welcome';

// #4.2
//We can provide an alias
import {
  SayHello as hello,
  SayGoodBy as goodBy
} from './welcome';

//When we assing an alias we must use the alias
console.log('result: ', hello('Gonzalo'));
console.log('result: ', goodBy('Gonzalo'));

// #4.3
//We can import it in one time
import * as welcome from './welcome'; // * -> means everithing.

console.log('result: ', welcome.SayHello('Gonzalo'));
console.log('result: ', welcome.SayGoodBy('Gonzalo'));


//NOTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//NOTE: https://babeljs.io/docs/usage/modules/
