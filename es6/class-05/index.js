////////////// arrow functions

// const myFunc = () => {
//   console.log("hello");
// }

// myFunc();

//////////////////

// const sum = (a, b) => {
//   return a + b;
// }

// console.log(sum(4,8));

///////////////////////

// const greet = un =>  `Hello ${un}`
// console.log(greet('Ruhama'));

//////////////////////

// const sum = (a, b) => a + b;
// console.log(`3 + 5 = ${sum(3,5)}`);

////////////////

// const user ={
//   name:'Ruhama',
//   age:10,
//   // greet:function(){
//   //   return ` Hello ${this.name}`
//   // }

//   greet:()=>{
//     return ` Hello ${this.name}`
//   }

// }

// console.log(user.greet());

// const MyConstructor = (name, age) => {
//   this.name = name,
//     this.age = age
// }

// const abcd1 = new MyConstructor('Hamna', 10)
// console.log(abcd1);


///////////////////////// Mutation (mutable, immutable)

// let user = {
//   name: 'Ruhama',
//   age: 10,
// }

// Object.freeze(user);

// user.gender = 'Female';
// user.age = 11;

// console.log(user);

///////////////////////// Closures

// function counter() {
//   let count = 0;
//   count++;
//   console.log(count);
// }

// let count1 = counter;
// let count2 = counter;

// count1();
// count1();

// count2();
// count2();


///////////////////

// function outer() {
//   let count = 0;

//   const inner = () => {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const count1 = outer();
// const count2 = outer();
// const count3 = outer();

// count1();
// count1();
// count1();

// count2()
// count2()


// count3()
// count3()


/////////////////////////////// ternary-operator ( ? :)

// let bool = 1;
// // console.log(bool ? 'truthy value' : 'Falsy value');
// let result = bool ? 'truthy value' : 'Falsy value';
// console.log(result);


// let num = 5;
// console.log(`The number is ${num%2 ===0 ? 'Even': 'Odd'}`);


let num = true;

let result =
  num > 0 ? 'Positive' :
    num < 0 ? 'Negative' :
      num === 0 ? 'Zero' :
        'Invalid Number';

console.log(result);


