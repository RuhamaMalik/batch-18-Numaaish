// console.log(undefined || "undefined" && "ruhama"); // ruhama
// console.log(null || ("" && "ruhama") || 45); // 45 
// console.log(null || "" && "ruhama" || 45); // 45 

//////////////////////////////////////////////

// var userEmail = "abc@gmail.com";
// var userPassword = "123456";

// var email = prompt("Enter your Email!", "abc@gmail.com");
// var pswd = prompt("Enter Your Password", "123456");


// if (userEmail === email) {
//   if (userPassword === pswd) {
//     alert("User SignIn Succsessfullly!");
//   } else {
//     console.log("Invalid Password!");
//   }
// } else {
//   console.log("Invalid Email!");
// }

// if ((userEmail === email) && (userPassword === pswd)) {
//   alert("User SignIn Successfully");
// } else {
//   console.log("Invalid Credentials!");

// }


///////////// a e i o u (vowel)

// var alpha = prompt("Enter a character").toLowerCase();

// console.log(alpha === "a" || alpha === "A");

// console.log("RuhAma".toLowerCase()); // ruhama
// console.log("RuhAma".toUpperCase()); // ruhama

// console.log(alpha);

// if (alpha === "a" || alpha === "e" || alpha === "i" || alpha === "o" || alpha === "u") {
//   console.log("Ye Vowel hai!");
// } else {
//   console.log("Mai Consonant hun!");

// }




// document.writeln(`
//     <h1 >Hello Bacho!</h1>
//   <p >
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas vel odio? Quidem natus in quis officia quasi
//     sequi reprehenderit. Quis soluta odio adipisci est maiores eius porro ullam fuga!
//   </p>
//   <button>View More</button>

//   `)



var weather = prompt(`
  Select Weather:
  1- winter
  2- summer
  3- autumn
  `).toLowerCase();

if (weather === "winter") {
  document.writeln(`
    
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color:aqua;
overflow: hidden;
">

    <div class="card" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/animation/2022/09/13/02/18/02-18-02-177_512.gif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>


  </div>
    
    `)
} else if (weather === "summer") {
  document.writeln(`
    
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: yellow;
overflow: hidden;
">

    <div class="card" style="width: 18rem;">
      <img src="https://i.pinimg.com/originals/9b/46/41/9b4641c50fbce30b554c889f885809e5.gif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>


  </div>
    
    `)
} else if (weather === "autumn") {
  document.writeln(

`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: burlywood;
overflow: hidden;
">

    <div class="card" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/animation/2023/10/20/03/38/03-38-03-793_512.gif" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>


  </div>

`


  )
} else {
  console.log("Tumhara dimagh kharab hai");
}
