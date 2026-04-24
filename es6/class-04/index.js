//////////////// rest / spread operators (...)

// function abcd(a,b,c){
// // console.log(arguments.length);
// // console.log(abcd.length);
// }

// abcd(1,2,3,4,5,6,7,'abcd');


///////////////////////////////////////


// function test(...abcd){ // rest
// console.log(...abcd);
// }

// test(1,2,'three',4,5);

/////////////////

// let prev = [1,2,3,4,5];
// // let arr2 = arr.slice();
// let arr2 = [...prev, 6,7,8,9,10]; // shallow copy

// prev[2]= 'three';

// console.log(prev);
// console.log(arr2);

// let secA = ['umaima',['asiya','monitor']];
// let secB = ['ayesha','imama'];
// let secC = ['mahnoor','noor'];

// let allStu = [...secA,...secB,...secC,'nooruleman','hiba','hina'];

// // secA[1] = 'asiya';
// allStu[1][1] = 'head girl';

// console.log(secA);
// console.log(allStu);


// let prev = {
//   username: 'Ruhama',
//   email: 'ruhama@gmail.com',
//   age:9,
//   location:{
//     zipCode:10277,
//     city:'karachi',
//     street:'street 1'
//   }
// }

// // prev = {...prev,age:10,gender:'female'}
// // let obj2 = {...prev,age:10,gender:'female'}
// let obj2 = {...prev,location: {...prev.location}} // deep copy

// prev.username = 'Gull';
// prev.location.city = 'Peshawar';

// console.log(prev);
// console.log(obj2);

["myStr",
  {
  name:"ruhama",
  age:9,
},
{
  username: 'Ruhama',
  email: 'ruhama@gmail.com',
  age:9,
  location:{
    zipCode:10277,
    city:'karachi',
    street:'street 1'
  }
}] ////////// deep copy (by using ...)

