// let user ={name:"Ruhama",age:10}
// let cart = [
// {title:"cow",price:'180k'},
// {title:"cow medium",price:'250k'},
// ]


// localStorage.setItem('token', "jkhq726372g3ui")
// localStorage.setItem('theme', 0)
// localStorage.setItem('chutti', true)
// localStorage.setItem('user', JSON.stringify(user))
// localStorage.setItem('cart', JSON.stringify(cart))

// console.log(typeof localStorage.getItem("theme"));
// console.log(!!localStorage.getItem("chutti"));

// console.log(!!("null" && "Ruhama"));
// "true" > false > true

// console.log(JSON.parse(localStorage.getItem("user")));
// console.log(JSON.parse(localStorage.getItem("cart")));


// localStorage.removeItem("token")
// localStorage.removeItem("cart")


// localStorage.clear()

//////////////////////////// session storage

// sessionStorage.setItem('theme', "dark")


//////////////////////////////// 

// Object.create

// let proto = {
//   greet(){
//     return`Hello ${this.name}`; 
//   }
// }

// let user = Object.create(proto);
// user.name = "Ruhama";
// user.age = 10;

// console.log(user.greet());


// Object.assign


// let objA = {name:"Ruhama",age:10}
// let objB = {name:"Asiya",id:12121}
// let objC={
//   isActive:true
// }

// let main = Object.assign({}, objB, objA);
// let main = Object.assign(objC, objB, objA);

// console.log(main);
// console.log(objC);

// objC = {...objC,...objB,...objA};
// console.log(objC);
