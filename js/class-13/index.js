// var colours = ["red","orange","blue","purple","black"];
// colours[3] = "indigo";
// colours[5] = "yellow";
// console.log(colours);


//////////////// Array METHOD

// pop ------ remove last
// push  ---- add last
// shift ---- remove start
// unshift -- add start
// slice
// splice

var colours = ["red", "orange", "blue", "purple", "black"];
// let abcd = colours.pop();
// console.log(colours);
// console.log(abcd);
// colours.pop();
// colours.pop();
// colours.pop();

// colours.push("pink", "green","white");

// let elem =colours.shift();
// colours.shift();
// console.log(colours);
// console.log(elem);

// colours.unshift("pink","crimson","indigo");
//  console.log(colours);

//////////////// nested array

let arr = [
  "my string", // first level
  ["a", "b", "c", ["apple", "banana"]],
  ["x", "y", "z"],
  [1, 2, 3]
];

// console.log(arr[1]); // ["x", "y", "z"]
// console.log(arr[1][1]); // y
// console.log(arr[1].length);
// console.log(arr[0][2]); // c

// console.log(arr[1]); // ["a", "b", "c",["apple","banana"]]
// console.log(arr[1][3]); // ["apple","banana"]
// console.log(arr[1][3][0]); // "apple"

///////////////// slice() - shallow copy / deep copy

// let x = 5; // primitive - direct value - immuatable (not changable)
// let y = x; // 5

// x = 10;

// console.log(x); // 10 - change
// console.log(y); // 5 - not change


// non-premitive - by refferennce - mutable (changeble)

// let foods = ["burger","biryani","gol gappy","pizza","fries"];
// let khanas = foods; // reference - both are connected

// foods[1] = "macroni";

// console.log(foods); // change
// console.log(khanas); // change

///////////////////////////// slice

// let foods = ["burger","biryani","gol gappy","pizza","fries"];
// let khanas = foods.slice(); // slice makes copy

// foods[2] = "chana chaat";
// // khanas[3] = "kabab paratha";

// console.log(foods); // change
// console.log(khanas); // not change

/////////////// shallow copy --- copy only first level

let foods = ["burger","biryani","gol gappy","pizza","fries", ["water", "orange juice", "soda","lassi","cold drink","coffee" ,"vhae"]];

let menu = foods.slice();

foods[5][3] = "thandi lassi";

console.log(foods);
console.log(menu);


