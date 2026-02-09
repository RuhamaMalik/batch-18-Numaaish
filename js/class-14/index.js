///////// slice - shallow copy - first level

// let foods = ["burger","biryani","gol gappy","pizza","fries", ["water", "orange juice", "soda","lassi","cold drink","coffee" ,"chae"]];


// let menu = foods;
// let menu = foods.slice();

// foods[1] = "pulao"; // change foods
// foods[5][4] = "milk shake"; // 

// console.log("Foods: ", foods);
// console.log("Menu: ", menu);


////////////// slice

// slice(startIndex , endIndex(exclude))
// let colours =["red","orange","black","blue","purple"];

// console.log(colours.slice(2)); // ["black","blue","purple"]
// console.log(colours.slice(1,2)); // ["orange"]
// console.log(colours.slice(-2)); // "blue","purple"
// console.log(colours.slice(-2,-1)); // ["blue"]
// console.log(colours.slice(-2,0)); // []
// console.log(colours.slice(-3,-1)); // ["black","blue"]



//////////////// splice () --- change original array (add, or remove ele)


let colours = ["red", "orange", "black", "blue", "purple"];

// splice(startIndex(include) , deleCount, ItemsToBeAdd );


// colours.splice(3); // ["red","orange"]

// colours.splice(3, 0, "white","pink"); // ['red', 'orange', 'black', 'white', 'pink', 'blue', 'purple']

// colours.splice(1, 2, "white","pink","indigo"); // ["red","orange"]

// console.log(colours);

// colours = [];
// colours.length = 0;
// colours.splice(0);
// console.log(colours);


////////////////////////////// 18 - Loops

// for(initialization; codition; updation ){
//   console.log("hello");
// }

// var i = 1;
// for(i; i<=5; i++ ){
//    console.log("hello" , i);
// }


// for(var i = 1; i<=5; i++ ){
//    console.log("hello" , i);
// }



for(let i =5; i >=1; i--){
  console.log("hello" , i);
}






