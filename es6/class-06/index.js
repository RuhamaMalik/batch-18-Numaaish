/////////// callback 

// let userData = (callback) => {
//   console.log(`i'm doing something ...`);
//   let user = { username: 'Ruhama', age: 10 }

//   callback(user);
// }

// const greet =({username,age})=>console.log(`Hello ${username} --- age : ${age}`);


// userData(greet)


//////////////////////

// const square = n => n * n;
// const double = n => n * 2;

// const calcNum = (n, cb) => {
//   console.log('calculating......');

//   let result = cb(n)
//   console.log(result);

// }

// calcNum(3, square);
// calcNum(3, double);

////////////////////////

// const pk = (grade) => {
//   switch (grade) {
//     case 'A+':
//       console.log(`Masha Allah! aapko ${grade} grade mila hai!`);
//       break;
//     case 'A':
//       console.log(`Bht khoob! aapko ${grade} grade mila hai!`);
//       break;
//     case 'B':
//       console.log(`achi koshish ki! aapko ${grade} grade mila hai!`);
//       break;
//     case 'C':
//       console.log(`bachat hogai beta! aapko ${grade} grade mila hai!`);
//       break;
//     default:
//       console.log(`apna sapna rupiya rupiya $$,,, aap Fail hogae`);

//   }
// }

// const us = (grade) => {
//   switch (grade) {
//     case 'A+':
//       console.log(`Congratulations !you got ${grade} grade!`);
//       break;
//     case 'A':
//       console.log(`good job !you got ${grade} grade!`);
//       break;
//     case 'B':
//       console.log(`Nice !you got ${grade} grade!`);
//       break;
//     case 'C':
//       console.log(`good efforts !you got ${grade} grade! hai!`);
//       break;
//     default:
//       console.log(`try again! you got ${grade} grade!`);

//   }
// }

// const getGrade = (perc, callback) => {
//   let grade;
//   switch (true) {
//     case perc >= 90:
//       grade = 'A+';
//       break;
//     case perc >= 80:
//       grade = 'A';
//       break;
//     case perc >= 70:
//       grade = 'B';
//       break;
//     case perc >= 60:
//       grade = 'C';
//       break;
//     default:
//       grade = 'F'
//   }

//   callback(grade)

// }

// getGrade(90, us)


///////////////// HOF 

// const calc = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     }
//   }
// }

// let result =calc(5)(3)(7);
// console.log(result);

//////// currying IIFE

// (function greet(){
//   console.log('hello');
// }
// )()

/////////////////////////////

// let arr = [1,2,3,4,5];
// console.log(arr);

// // arr = arr.map((e,i)=> e *2 );

// arr.customMap((e)=> e *2)

let arr = [1,2,3,4,5];

Array.prototype.customMap = function(cb){
console.log(this);


}

console.log(arr.customMap((e)=> e *2));








