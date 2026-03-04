//////////// 33 - Specifying a date and time

// const futureDate = new Date("August 10, 2026");
// var currentDate = new Date();

// let fd_MiliSeconds = futureDate.getTime();
// let cd_MiliSeconds = currentDate.getTime();

// let diff = fd_MiliSeconds - cd_MiliSeconds;

// let result = Math.floor(diff / (1000*60*60*24));

// console.log("Result : ", result);



// const date = new Date();
// date.setHours(17);
// date.setDate(23);
// console.log(date);

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());



//////////////////// Functions

/////////////// function Declaration 

// console.log("Before");

// function funtionName() {
//   console.log("Hello From Function!");
// }

// // funtionName();

// console.log("After");


////////////// invocation / call

// funtionName();
// funtionName();
// funtionName();
// funtionName();
// funtionName();
// funtionName();
// funtionName();
// funtionName();
// funtionName();


//////////////////////////////////

// function sum (parameters){
//   console.log(5 + 7);
//  }

//  sum(arguments);
//  sum();
//  sum();
//  sum();
//  sum();
//  sum();
//  sum();

// function sum (x,y){
//   console.log(x + y);
//  }

//  sum(5,7); // 12
//  sum(5,10); // 12
//  sum(9,1); // 10


////////////////////// default parameter

// function greet (name="Guest"){
//   // console.log("Hello Ruhama!");
//   console.log(`Hello ${name}`);
// }

// greet("Ruhama");
// greet("Ali");
// greet("Sara");
// greet();
// greet("Fatima");
// greet("Imama");



// ///////////////////


// function add(a, b) {
//   console.log(a); //  6
//   console.log(b); //  undefined
// }

// add(6);


///////////////////


// function add(a, b) {
//   console.log(a); //  undefined
//   console.log(b); //  6
// }

// add(undefined,6);

/////////////////////

// let x = 5; // global 

// function myFunc(val1, val2) {
//   console.log(val1);
//   console.log(val2);
// }

// myFunc("Apple", "Banana");

// console.log(val1); // ReferenceError
