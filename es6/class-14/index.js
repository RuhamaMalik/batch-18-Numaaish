// let myPromise = new Promise((resolve, reject) => {

//   const error = false;

//   setTimeout(() => {

//     if (!error) {
//       resolve({ name: "Ruhama" })
//     } else {
//       reject("Pomise reject hogaya!")
//     }

//   }, 3000)

// })

// myPromise.then((data) => {
//   console.log(data);

// }).catch((err) => {
//   console.log(err);
// })



///////////////////////////////////////////




// let myPromise = new Promise((resolve, reject) => {

//   const error = false;

//   setTimeout(() => {

//     if (!error) {
//       let user = { name: "Ruhama" }
//       resolve(user)
//     } else {
//       reject("Pomise reject hogaya!")
//     }

//   }, 3000)

// })


/// callback hell (Pyramid of DOOM) , async await


// myPromise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   })



// async function consumeMyPromise (){}

// const consumeMyPromise =async ()=>{
//   let result = await myPromise;
//   console.log(result);

// }

// console.log("After Promise 1");
// console.log("After Promise 2");

// consumeMyPromise()

// console.log("After Promise 3");
// console.log("After Promise");
// console.log("After Promise");
// console.log("After Promise");



// console.log("Before");
// setTimeout(()=>{
// console.log("center");

// },0)
// console.log("After");


/////////////////////////////////////


////////////////////////// Fetch


// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.products);
//   })
//   .catch((err) => {
//     console.log(err);
//   })


// async function fetchProducts() {
//   try {
//     let res = await fetch("https://dummyjson.com/products");
//     let result = await res.json();
//     console.log(result.products);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchProducts()



let timer1 = setInterval(() => {
  console.log("pagal");
}, 1000);


// setTimeout(()=>{
  // clearInterval(timer1);
// },5000)

document.getElementById("btn").addEventListener('click',()=>{
   clearInterval(timer1);
})
