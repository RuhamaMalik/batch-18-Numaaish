//   Symbol

// let x = Symbol("Hello");
// let y = Symbol("Hello");

// console.log(x === y); 

// let id = Symbol("id");
// console.log(id.description);


// console.log(typeof id);


// const user = {
//   name : "Imama",
//  age : 10,
//   [id.description] : 5
// }
//  console.log(user);
//  console.log(user.age);
//  console.log(user[id]);


//  Iterator


let fruits = ["apple" , "mango" ,"banana", "orange" , "grapes"];

let iterator = fruits[Symbol.iterator]();

console.log(iterator);
// let result = iterator.next(); // {value:undefined,done:true}

// while(!result.done){
//   console.log(result.value); 
//  result = iterator.next();
// }

// for(ele of result){
// console.log(ele);
// }


// console.log(iterator.next());
// iterator.next();
// console.log(iterator.next());
// iterator.next();
// console.log(iterator.next());
// console.log(iterator.next());




//  Custom Iterator

// function customIterator(arr) {
//   return {
//     [Symbol.iterator]() {
//       let index = 0;
//       return {
//         next() {
//           if (index < arr.length) {
//             return {
//               value: arr[index++],
//               done: false
//             }
//           }
//           else {
//             return {
//               value: undefined,
//               done: true
//             }
//           }
//         }
//       }
//     }
//   }

// }


// let numbers = customIterator([1, 2, 3, 4, 5]);
// // let result = numbers[Symbol.iterator]();




// for (ele of [1, 2, 3, 4, 5]) {
//   console.log(ele);
// }

// for (ele of numbers) {
//   console.log(ele);
// }



// while(!result.done){
// console.log(result.value);
// result = numbers.print();
// }


// console.log(numbers.print());
// console.log(numbers.print());
// console.log(numbers.print());
// console.log(numbers.print());
// console.log(numbers.print());
// console.log(numbers.print());



















