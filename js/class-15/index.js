////////////////////////////// 18 - Loops


////////// for loop

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello!");
// }


////////// while loop

// let i = 1;
// while (i<=10) {
// console.log("Hello");  
//   i++;
// }


////////// do while loop - aik baar lazmi chalega

// let i = 11;
// do {
//   console.log("chaloooooo!");
//   i++;
// } while (i<=10);

/////////////// examples

// let users = ["ayesha", "fatima", "zahra", "anabia", "imama","ayesha", "fatima", "zahra", "anabia", "imama","ayesha", "fatima", "zahra", "anabia", "imama"];

// console.log(users.length);

// for (let i = 0; i < users.length; i++) {
//   // console.log(users[i]);

// document.writeln(`<li>${users[i]}</li>`)
//   // document.writeln("<li>" + users[i] + "</li>")

// }


// document.writeln(` <div class="d-flex flex-wrap justify-content-center align-items-center gap-2" style="min-height: 50vh;">`)

/////////////// print card

// for (let i = 0; i < users.length; i++) {

// document.writeln(`

//   <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${users[i]}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//   `)

// }

// document.writeln(" </div>")


///////////////////// table 2

//  3

// for (let i = 1; i <= 10; i++) {

//   // console.log("2 x "+ i + " = " +   (i * 2)); // 2 * 2 = 4
//   console.log(`2 X ${i} = ${i * 2}`);

//   // document.writeln(`2 X ${i} = ${i*2} <br>`)
// }


// let num = +prompt("Enter Number!");
// let startNum = +prompt("Enter Start Number!");
// let endNum = +prompt("Enter End Number!");

// if (endNum > startNum) {
//   for (let i = startNum; i <= endNum; i++) {
//     document.writeln(`${num} X ${i} = ${i * num} <br>`)
//   }

// }else{
//   console.log("Invalid Sequence");

// }


let cities = ["karachi", "peshawar", "islamabad", "quetta", "lahore"];
let cleanestCity = prompt("Enter cleanest city!");

for (let i = 0; i < cities.length; i++) {
  if (cleanestCity === cities[i]) {
    console.log("City Found!");
  }
}
