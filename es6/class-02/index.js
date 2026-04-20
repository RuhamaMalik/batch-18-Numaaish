
// var global = 'global value';

// function checkScope() {
//   var local = 'local value';

//   if (true) {
//     var block = 'block value';
//     // console.log(global); // accessible
//     // console.log(local);
//     // console.log(block);

//   }

//   console.log(block); // accessible

// }

// checkScope();
// // console.log(local); // error
// console.log(block); // error

// var x;
// x= "initialize";
// var x = 'initialization';
// var x = 'abcd';
// x = 'reassign';


// let x = 'abcd';
// x='update';
// let x;
// x = 'abcd';

// let x = 'abcd';
// let x = 'xyz'; // error

// const x 
// x = 'abcd'; // error


///////////// 


// let global = 'global value';

// function checkScope() {
//   let local = 'local value';

//   if (true) {
//     let block = 'block value';
//     // console.log(global); // accessible

//     // console.log(local);
//     // console.log(block);
//   }



//   // console.log(block); //  not-accessible

// }

// checkScope();
// console.log(local); // error
// console.log(block); // error


///////////////// hoisting

// let x;
// function abcd (){
//   console.log('hello');
// }

//  abcd ();

// console.log(abcd); // undefined
// var abcd;


// console.log(abcd); // undefined

// var abcd = 'Ruhama';
// abcd='gull'
// console.log(abcd); //  gull

/////////////////////// 

// console.log(abcd); // ReferenceError
// let abcd = 'Ruhama';


// sum(5);

// function sum (a){
//   let b = 'test';
//   console.log("hello ", b);
// }


//////////// function expression host nahi hoti

// myFunc();

// var myFunc = function(){
//   console.log("hello");
// }

/////////////// template literal; ``

// let str = `
// multi
// line
// text
// `

// document.write(`
//   <h1>Lorem, ipsum dolor.</h1>
// <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, sequi eligendi. Hic nam nisi optio eveniet provident sapiente aut totam. Quas consequuntur fugit velit error at similique in soluta quod.</p>
//   `)

// console.log(` 2 + 5 = ${2 + 5}`);


// function sum (a,b){
//   return a+b;
// }

// console.log(` Result = ${sum (10,4)}`);

///////// Recursion
///////// Destructuring