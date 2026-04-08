///////////// constructor


// function Teacher(_id, name, sub, exp, method) {
//   this.id = _id,
//     this.name = name,
//     this.subject = sub,
//     this.experience = exp,
//     this.method = method,
//     this.greet = function () {
//       return `Hello ${this.name}`
//     },

//     this.hack ='data tw gaya',
//     this.hasOwnProperty = function(){
//       return this.hack;
//     }


// }

// let t1 = new Teacher(1, 'Ruhama Gull', 'web development', '4 years', 'onsite');

// let t2 = new Teacher(2, 'nooruleman', 'IT', '6 month', 'onsite');

// let t3 = new Teacher(3, 'Bisma', 'graphics designing', '2 years', 'online');

// Teacher.prototype.getAttendance = function () {
//   return `present all days`;
// }
// console.log(t1);
// console.log(t2.getAttendance());
// console.log(t2.greet());
// console.log(t3.greet());

//////////////////////////////// in , hasOwnroperty , for in

// console.log('experience' in t2); // true
// console.log('abcd' in t2); // false
// console.log('getAttendance' in t2); //  true

// for (let key in t1) {
//   console.log(`kEY : ${key}  ---- VALUE : ${t1[key]}`);
// }

// let a ='name'

// let obj ={
//   age:10,
//   [a]:'Mahnoor'
// }

// console.log(obj.name);


// console.log(t1.hasOwnProperty('experience')); // true
// console.log(t1.hasOwnProperty('getAttendance')); // false

// for (let key in t1) {
//   if (t1.hasOwnProperty(key)) {
//     console.log(`KEY : ${key} ---- VALUE : ${t1[key]}`);
//   }
// }



// for (let key in t1) {
//   if (Object.hasOwnProperty.call(t1, key)) {
//     console.log(`KEY : ${key} ---- VALUE : ${t1[key]}`);
//   }
// }

// console.log(t1.hasOwnProperty());


//////////////////////////////// Getting and setting the URL







