// console.log("Hello from App file");

/////// type inference (implicit type)

// let x = '5';
// let x = 5;
// // x= '7'; // error
// console.log(x + 5);


/////////// type  annotation (explicit type)

// let x:number = 5;
// // let x:number = '5'; // error

// x=10;
// x='10'; // error


// let username:string ='Ruhama';
// console.log(username);

// let isActive:boolean = true;

////////////// type aliases


// type Person =  {
//   name:string;
//   email:string;
//   age:number;
//   isActive:boolean
// }

// let user:Person = {
//   name:"Ruhama",
//   email:"ruhama@gmail.com",
//   age:10,
//   isActive:true
// };


// let user2:Person = {
//   name:"Gull",
//   email:"gull@gmail.com",
//   age:10,
//   isActive:true
// };

// console.log(user,user2);


//////////////////////

// type Fruits = string[];

// let fruits:Fruits = ["apple","banana","mango"];
// let colours:string[] = ["red","blue","green"];

// console.log(fruits,colours);

/////////////////////

// type User = {
//   profImg?:string;
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean
// }[]  /// string[]

// let users: User = [
//   {
//     profImg:"banaa",
//     name: 'ruhama',
//     email: 'ruhama@gmail.com',
//     age: 10,
//     isActive: true,
//     // skills:[] // error

//   },
//   {
//     name: "Zara",
//     email: "zara@gmail.com",
//     age: 10,
//     isActive: false
//   },

// ]


/////////////////// Interface

// type X = string;
// let x:X = 'apple';

// interface X string // error

// interface Employ {
//   id:string;
//   department:string;
//   salary:number
// }

// let obj:Employ = {
//   department:"ADMIN",
//   id:"xuz01",
//   salary: 100000
// }

// console.log(obj);

///////////

// interface Chae {
//   cheeni?: string;
//   patti: string;
//   doodh: string;
//   pani?: string;
//   ialichi?: number
// }

// let doodhPatti: Chae = {
//   doodh: '1cup',
//   patti: '2 chammach'
// }

// let sadaChae: Chae = {
//   doodh: 'half cup',
//   patti: '2 chammach',
//   pani: 'half cup'
// }

// let ilaichiWaliChae: Chae = {
//   doodh: 'half cup',
//   patti: '2 chammach',
//   ialichi:2,
//   cheeni:'1 chammach'
// }