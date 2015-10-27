// spread operator allow you to pick an array and split it in multiples items.

console.log([1, 2, 3]); // output: [ 1, 2, 3 ]

console.log(...[1, 2, 3]); // output: 1 2 3

// It's more easy push elements to another array.

let array_1 = [1, 2, 3];
let array_2 = [4, 5, 6];

array_1.push(array_2);

console.log(array_1);

// outpur: [1, 2, 3, Array[3]]
// outpur: [1, 2, 3, [4, 5, 6]]

//But we can do the code below to get it properly.

let array_1 = [1, 2, 3];
let array_2 = [4, 5, 6];

array_1.push(...array_2);

console.log(array_1);

// output: [1, 2, 3, 4, 5, 6]

// We can also do stuff like:

let array_1 = [1, 2, 3];

function sumArrays(x, y, z){
  let result = x + y + z;
  console.log('result', result);
}

// The code below is possible because the ... display our array in 3 elements.
sumArrays(...array_1); // output: 6, basically 1 + 2 + 3.
