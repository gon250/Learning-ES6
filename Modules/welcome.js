function SayHello(name){
  return 'Hello ' + name;
}

function SayGoodBy(name){
  return 'Bay ' + name;
}

//We need a way to export the module.
export { SayHellon SayGoodBy }; //Lets set the name of the function.

/*
* Ways to export modules
*/

// #1
function SayHello(name){
  return 'Hello ' + name;
}

function SayGoodBy(name){
  return 'see you ' + name;
}

export { SayHellon SayGoodBy };

// #2
// We can export it direcly on the function
export function SayHello(name){
  return 'Hello ' + name;
}

export function SayGoodBy(name){
  return 'Bay ' + name;
}
