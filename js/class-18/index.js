// var str = "ru   hama  ";
// /////////// string mai space count hoti hai 
// console.log(str.length); //11


// let str = "mai aik string hun.";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.slice(8,14)); // string
// console.log(str.slice(8)); // string hun.
// console.log(str.slice(-3)); // un.


// let day = prompt("Enter a day.");
// console.log(day.slice(0,3) + "...");

// let desc = `Being able to measure the number of characters in a string can come in handy. For
// example, suppose you want to loop through a string, checking to see if it has any double spaces
// in it. You can use the character count as the loop limiter. Here's some code that checks for
// double spaces in a string and displays an alert if they're found`


// if(desc.length > 77){
// console.log(desc.slice(0, 78) + "...");
// }else{
//   console.log(desc)
// }

// let str = "mera naam ruhama malik hai.hum js padhh malik rahy hen.meri bhn ka naam irma malik hai."

// console.log("mera naam ".length);

// console.log(str.slice(0,17) + "gull" + str.slice(22));
// console.log(str.slice(0,10) + "narmeen" + str.slice(16));


// for (var i = 0; i < str.length; i++) {

//   if (str.slice(i, i + 5) === "malik") {
//     // console.log(true , i ,str.slice(i, i + 5));
//     // console.log(str.slice(0, i) + "gull" + str.slice(i+5) );

//     str = str.slice(0, i) + "gull" + str.slice(i+5)
//   }

// }


// console.log(str);


let str = "mera naam ruhama malik hai.hum js padhh malik rahy hen.meri bhn ka naam irma malik hai."

////// indexOf --- return index, case sensitive, fist match


// console.log(str.indexOf("malik"));
// console.log(str.indexOf("html")); // -1

// let malikIndex = str.indexOf("malik");

// if(malikIndex !== -1){
//   console.log(str.slice(0,malikIndex)+ "gull" + str.slice(malikIndex+5) );
// }


console.log(str.lastIndexOf("malik"));
