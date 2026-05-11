//   Array Methods

// .map()

// hr array k  ele pr opertaion perform and return new array

// syntax

// array.map((item)=>{
//   return something
// })

// let num = [1,2,3,4,5];

// let result = num.map(n=> n+2);

// console.log(result);

// let num = [2 , 4 , 6];

// let result = num.map((n)=>{
//     return n*2 ;
// })

// console.log(result);


// let veg = ["potato" , "onion", "tomato" , "cucumber"];

// let result = veg.map((v)=>{
//    return v.toUpperCase();
// })

// console.log(result);



// ///////////////////////////////////////
// .reduce()

//  syntax

// array.reduce((accumulator , currentValue)=>{
//   return kuch bhi ;
// })

// let number = [1,2,3,4,5]; 

// let result = number.reduce((accumulator , currentValue)=>{
//         return accumulator+currentValue;

//         // acc = 1 , curr = 2  - 3
//         // acc =3 , curr = 3 -6
//         // acc = 6 , curr = 4 - 10
//         //  acc= 10, curr = 5 - 15
// })

// console.log(result);

// /////////////////////

// .join()

//  covert array into string


// syntax


// array.join(separator);


// let fruits = ["Apple" , "Mango" , "Banana"];

// let result = fruits.join(" ");

// console.log(result);

// ///////////////////////////////////////
//  .includes()

//  syntax

// array. includes(value);

// let name = ["Noor" , "Eman" , "Nooruleman"];

// // let result = name.includes("Sumaira");
// let result = name.includes("eman");

// console.log(result);

// ///////////////////////////
// .split() + .reverse() + .join()

// .split()

//  convert string into array 

// let name = "Mahnoor";

// let result = name.split();

// console.log(result);

// .reverse()

// let arr = ["h" , 2 , "l"];

// let result = arr.reverse();

// console.log(result);



// let sent = "I love es6 ";

// let result = sent.split("").reverse().join("");

// // .split () [I love]
// // .resverse () [6se evol ]
// // .join() 6se evol



// console.log(result);


// //////////////////////////////////////////////
//  Optional Chaining 

//  ?.

const user = {
  name : "Hira",
  adress :{
    city : "karachi"
  }
}


// console.log(user.name);
console.log(user.address.city);















