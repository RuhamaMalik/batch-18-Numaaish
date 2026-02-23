let str = "hum Js padh rahy hen. next class mai js ka quiz hai."

// let index = str.indexOf("js");
// str = str.slice(0,index) + "JavaScript"+ str.slice(index+2);

/////////////// replace

// regEx || regular Expression
// g --- flag --- global
// i --- insensitive 

// str = str.replace("js", "JavaScript");
// str = str.replace(/js/gi , "JavaScript");
//   console.log(str);


///////////////////// 26 - rounding Numbers

// console.log(Math.round(2.4)); // 2
// console.log(Math.round(2.5)); // 3
// console.log(Math.round(2.9)); // 3
// console.log(Math.round(-2.4)); // -2
// console.log(Math.round(-2.7)); // -3
// console.log(Math.round("4.5")); // 5 number
// console.log(Math.round("4.5 3")); //  NaN
// console.log(Math.round("4.5 rating")); //  NaN


// console.log(Math.ceil(9.2)); // 10
// console.log(Math.ceil(9.5)); // 10
// console.log(Math.ceil("9.5")); // 10
// console.log(Math.ceil("9.5 6")); // NaN
// console.log(Math.ceil(-2.4)); //  -2
// console.log(Math.ceil(-7.3)); // -7

// console.log(Math.floor(5.9)); // 5
// console.log(Math.floor(5.1)); // 5
// console.log(Math.floor(-5.7)); //  -6
// console.log(Math.floor("-5.7")); // -6
// console.log(Math.floor("5.7")); // 5

///////// 27 -  random numbers

// 0 (include) - 1(exclude)
// 16 decimal places

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(0.92149105038653285 * 10);


///////////// guess number

let num = +prompt("Guess a number between 1-10");
let correctAns = Math.floor(Math.random() * 10) + 1;

if (num === correctAns) {
  console.log("Congratulations!");
} else if (num === correctAns - 1 || num === correctAns + 1) {
  console.log("Almost there! Correct Ans is: " + correctAns);
} else {
  console.log("Try Again! Correct Ans is: " + correctAns);
}




