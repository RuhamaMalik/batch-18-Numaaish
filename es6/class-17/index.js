// let objA = { name: "Ruhama", age: 10 }
// let objB = { name: "Asiya", id: 12121 }
// let objC = {
//   isActive: true
// }

// Object.assign(objA, objC, objB);
// console.log(objA);


//////////////////////////////

// let user = {
//   name: "Ruhama",
//   age: 10,
//   email: "ruhama@gmail.com"
// }


// let keys = Object.keys(user);
// console.log(keys);

// let values = Object.values(user);
// console.log(values);

// let entries = Object.entries(user);
// console.log(entries);

/////////////////

/////// hasOwn , in

// let arr = [
//   ["name", "Ruhama"],
//   ["age", 10],
//   ["email", "ruhama@gmail.com"]
// ]

// let result = Object.fromEntries(arr);
// console.log(result);

/////////////////


// Object.freeze(user)

// user.age = 12; // !update
// user.isActive = true; // !add
// delete user.age; // !delete


///////////////

// Object.seal(user)

// user.age = 12; // update
// user.isActive = true; // !add
// delete user.age; // !delete


// console.log(user);

///////////////////////////// MAP
// let key = {key:"test value"}

// let user = new Map([
//   ["name","Ruhama"],
//   ["age",10],
//   [true, "correct"],
//   [10,"Ten"],
//   // [{key:"value"},"test object"]
//   [key,"test object"]
// ]);

// user.set("name", "Asiya");
// user.set("eid", "Khatam");
// user.set(10, "Das");
// user.set({key:"value"}, "update object"); // add - reference DT

// user.set(key, "update obj") // update


// console.log(user.get(10));
// console.log(user.get({key:"value"})); // undefined
// console.log(user.get(key));


// console.log(user);
// console.log(user.size);

////////////////////// 

// let arr = ['a','b','c'];

// let empty = new Map()
// .set("GPA", 3.8)
// .set("rollNo", 8387483)
// .set(arr, [1,2,3])
// .set(false,'Galat')

// console.log(empty.has('rollNo'));
// console.log(empty.get('GPA'));

// empty.delete(arr);

// empty.clear();
// console.log(empty);

/////////////////////////////////

// let user = new Map([
//   ["name", "Ruhama"],
//   ["age", 10],
//   [true, "correct"],
//   [10, "Ten"],
// ]);


// for (prop of user) {
// for ([key, value] of user) {
//   // console.log(prop);
//   console.log(key , "------------ ", value);
// }

// for(key of user.keys()){
// console.log(key);
// }


// for(value of user.values()){
// console.log(value);
// }


 
