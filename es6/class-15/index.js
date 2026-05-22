//////////// call , apply, bind

// function greet(msg,msg2) {
//     console.log(`${msg} ${this.name} ${msg2}`);
//   }


// let user = {
//   name: "Ruhama",
// }

// greet.call(user, "Hello ","Eid Mubarak")
// greet.call(user, "Hello","Hajj Mubarak")

// greet.apply(user, ["AssalamuAlaikum!" , "kesi hen???"])

// let newFunc = greet.bind(user, "bas kardo bas","ES6 khatam kardo");

// newFunc();
// newFunc();
// newFunc();

// let employe = {
//   name: "Gull",
// }


// greet.call(employe, "Hi", "boti kabab")


////////////////////////////


// const car1 ={
//   brand:"Toyota",
//   showBrand(){
//     console.log(`This car is  ${this.brand}`);
//   }
// }

// let car2 ={brand:"Honda"}
// let car3 ={brand:"Suzuki"}

// car1.showBrand.call(car2);
// car1.showBrand.call(car3);

// car1.showBrand()


////////////////////

// let student = {
//   name:"Ruhama",
//   sayGoodBye(){
//     console.log(`Bye bye ${this.name}`);
//   }
// }


// document.getElementById('btn').addEventListener('click', student.sayGoodBye.bind(student) )


////////////////////

// let numbers = [1,5,18,3,5,9,2];
// let maxNum = Math.max.apply(null, numbers);
// console.log(maxNum);

//////////////////// 

localStorage.setItem('token', 'sdsjkhdkssdhsjkdhsjd');


