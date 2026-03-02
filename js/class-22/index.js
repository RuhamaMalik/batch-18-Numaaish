
// console.log(parseInt("years 10")); // NaN
// console.log(parseInt("true")); // NaN 
// console.log(parseInt("1" + 1)); // 11 number

// parseInt(val,radix(number system))

// console.log(parseInt("11", 2)); // 3
// console.log(parseInt("111", 2)); // 7
// console.log(parseInt("A", 16)); // 10

///////////////////// parseFloat

// console.log(Number("2.99")); // 2.99
// console.log(parseFloat("2.99 10")); // 2.99
// console.log(parseFloat("2.99a 10")); // 2.99
// console.log(parseFloat("a2.99a 10")); // NaN

/////////////////////// Number

// console.log(Number("4.85")); // 4.85 number
// console.log(Number("4.85 10")); // NaN
// console.log(Number()); // 0

//////////////////// 29 - convert num to str

// var num = 45;
// console.log(num.toString() + 5); // 455 string

// var myBoolean = true;
// console.log(myBoolean.toString().slice(2,3)); // u

// var pagal = undefined+"";
// // console.log(pagal.toString()); // error
// console.log(pagal.slice(2,8));


/////////// 30 - Controlling the length of decimals

/// fixed decimal points
/// round off
/// convert to str

// var total = 18.348734;
// console.log(total.toFixed(2));

// var total = 55;
// console.log(total.toFixed(2)); // 55.00


// var price = 45.6936;
// console.log(price.toFixed()); // 46


////////////////////// 31 - Getting the current date and time

// console.log(typeof null); // object

// var date = new Date();
// console.log(date.slice(4,7)); // error
// console.log(typeof date); // object

// console.log(date);

// var currentDate = date.toString();
// console.log(currentDate.slice(4,7)); //Mar
// console.log(currentDate.slice(0,4)); // Mon

//////////////////

// var date = new Date();
// console.log(date.getDay()); // 0-6, 0 == Sunday

// let days = ["sun","mon","tue","wed","thu","fri","sat"];
// console.log(days[date.getDay()]);


// console.log(date.getTime()); // miliseconds , mid night jan1,1970


//////////// 33 - Specifying a date and time

const futureDate = new Date("March 05, 2027");
console.log(futureDate);


var date = new Date();
