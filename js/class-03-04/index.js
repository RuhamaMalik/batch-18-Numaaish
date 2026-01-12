/* Math expressions: Familiar operators  */

// console.log(3/2); // 1.5 
// console.log(5 ** 3); // 125 (exponent / power) 


// console.log(10 / 3); // 3.333333333333
// console.log(10 % 3); // 1


////////// Math expressions:  Unfamiliar operators (++ , --) , [pre, post]
/* [
  pre increament, ++num
  post increament, num++
  pre decreament, --num
  post decreament , num--
  ]
  */

///////////////// 

// var num = 1;
// num = num + 1;
// console.log(num); // 2

////////////////////////////////////////// 

// let num = 1;

// ++num;
// ++num;
// ++num;
// ++num;

// num++

// console.log(num); //  6

// 2 + 5 - 4 * 9 ---- expression

////////////////////////////////////////// 

// let num = 1; // 2 
// var result = ++num; 

// console.log(num);  // 2
// console.log(result); // 2


// let num = 1; // 2
// var result = num++;  // 1 
// console.log(num);  // 2
// console.log(result); // 1

// var num = 1; // 4
// var exp = 3 + num++ - num++ + 7 + ++num;
// //        3 +  1    -  2    + 7 +   4
// // 13

// console.log(num); // 4
// console.log(exp); // 13



///////////////////

// let x = 7; // 8
// let exp1 = ++x + ++x - 13 + --x + ++x - --x;
// //          8  +  9  - 13 +  8  +  9  -  8
// // 13

// console.log(x); // 8
// console.log(exp1); // 13


////////////////////// 

/*
BODMAS
B --- Brackets
O --- Orders
DM -- Division / Multiplication
AS -- Addition / Subtraction
*/


/////////////////


// let num = 5; // 4
// let exp = num++ + num-- - num++ * --num + --num;
// //         5    +  6    -  5    *   5   +   4
// //         5    +  6    - 25 + 4
// //         -14 + 4 = -10
// console.log(num); // 4
// console.log(exp); // -10

///////////////// 

// let num = 5; // 4
// let exp = num++ + (num-- - num++) * --num + --num;
// //         5    + ( 6   -  5 )   *   5   +   4
// //         5    +  1   *   5   +   4
// //         5 + 5 + 4
// //         14
// console.log(num); // 4
// console.log(exp); // 14


///////////////////////// 


// var totalCost = (1 + 3 )* 4;
// console.log(totalCost); // 16  , 13


// var totalCost = 2 *( 4 * ((4 + 2)+ 3));
// console.log(totalCost); // 51
// console.log(totalCost); // 72
// console.log(totalCost); // 72


////////////////////////// Assignment Operator =

// var num = 1;
// num = num + 5;
// num += 5; // 6
// num -= 3; //  num = num - 3 // -2
// num *= 6  // 6
// num /= 2  // 0.5
// num  **= 5 // 1

// console.log(num); // 6

