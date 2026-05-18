
let obj= {
  address:'weytd',
  10:'somehting'
}

// console.log(obj.10);  error//


let myObj =new Map()
console.log(myObj);



myObj.set('address','2-45 gulshan')
myObj.set('isPresent',false)
myObj.set('personalInfo',{contact:45345345})
myObj.set(20,'add') // ans
console.log(myObj.get('personalInfo').contact);

console.log(myObj.has(20));
console.log(myObj.get('address'))
console.log(myObj.size); //2-45 gulshan
myObj.delete('isPresent')
// myObj.clear();// size = 0



myObj.set("greeting", "hello");
myObj.set("0", "foo");
myObj.set(1, "bar");

const iterator = myObj.entries();

console.log(iterator.next().value); //Array ["0", "foo"]
console.log(iterator.next().value);
console.log(myObj); //Array [1, "bar"]

