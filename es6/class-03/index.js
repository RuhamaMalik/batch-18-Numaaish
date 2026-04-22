///////// Recursion

// function name(){
//  console.log("Mahnoor");
//  name();

// }
// name();

//  Base Condition

// function greet(n){
//   if(n===0){ // base condition
//     console.log("Task complete");
//     return ;
//   }
//   console.log("I'm Working.. ", n);
//   greet(n-1); // 0
// }
// greet(5);


/////////////////////////////

// let arr = ['apple', 'mango', 'banana', 'orange', 'grapes'];

// function fruits(n) {
//   if (n > arr.length-1) {
//     return;
//   }
//   console.log(arr[n]);
//   fruits(n + 1);
// }

// fruits(0);


// let arr = [];

// function descending(n) {
//   if (n === 0) {
//     return;
//   }
//   arr.push(n);
//   descending(n - 1);
// }

// console.log(arr);
// descending(10);



////////// Destructuring

// let arr = [["a","b","c"],'two',3,4,5];
// let arr = [1,2,3,4,5,6];

// let a = arr[0];
// let b = arr[1];

// const [a,,,,e,f='six',g] = arr;
// const [[a,beta,c],val2,val3,val4,val5] = arr;

// console.log(val1);
// console.log(beta);
// console.log(val2);
// console.log(val3);


// console.log(a);
// console.log(b);
// console.log(f);

// let obj = {
  // username :"Ruhama",
  // age:10,
//   email:"ruhama@gmail.com",
//   contact:9989283232,
//   id:1,
//   isActive:false,
  // address:{
  //   zipCode:87843,
  //   area:'Numaaish',
  //   city:"Karachi",
  //   provice:"Sindh",
  // }
// }

// const {username,id,email,isActive=true,age,contact} = obj;
// const {username,email,contact, address ,address:{zipCode,city}} = obj;

// console.log(address);
// console.log(city);


// console.log(username);
// console.log(id);
// console.log(email);
// console.log(contact);

// console.log(isActive);

///////////////////////////

// let arr = [
//   { username :"Ruhama", age:10,
//     address:{
//     zipCode:87843,
//     area:'Numaaish',
//     city:"Karachi",
//     provice:"Sindh",
//   }
// }
//   , "apple"
//   , "red"];

// // let [obj, str1 , str2] = arr;
// let [{username,age, address:{area}}, str1 , str2] = arr;

// // console.log(obj);
// console.log(area);
// console.log(username);
// console.log(str1);
