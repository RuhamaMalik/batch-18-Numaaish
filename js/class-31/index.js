// let propName = 'stock';
// let propVal = 36;

// let product = {
//   'title': "shoes",
//   size: ["s", "m", "lg"],
//   price: "$100",
//   [propName + 's']: propVal,
//   colours: {
//     'brown red': "#87484",
//     black: "#000",
//     white: "#fff",
//   },
//   variations: {
//     sm: {
//       price: '100',
//       sellPrice: '80'
//     },
//     lg: {
//       price: '200',
//       sellPrice: '150'
//     }
//   }
// }

// console.log(product);

// product={}


//  dot notation

// console.log(product.price);
// console.log(product.title);
// console.log(product.size[1]);

// bracket notation ["propertName"]

// console.log(product["price"]);
// console.log(product["size"][2]);
// console.log(product['colours']['red']
// );
// console.log(product['colours']['red']);
// console.log(product.colours.red);
// console.log(product['colours'].black);
// console.log(product.colours['white']);

// console.log(product.colours['brown red']);
// console.log(product.stocks);
// console.log(product['stocks']);



// product.decription = "My Shoes Decsription";

// product.price = "$120";

// console.log(product);

// delete product.size;

// delete product.price;
// console.log(product);

// console.log('price' in product);








// let student = {
//   name: 'Sobia',
//   age: 10,
//   class: '3 A',
//   rollNo: '9328923',
//   marks: [34, 89, 56, 99, 78],
//   isActive: true,
//   status: 'active',
//   welcome: function () {
//   //  console.log(`Hello ${this.name}`);
//    return `Hello ${this.name}`;
//   },
//   getTotalMarks :function(){
//    let total=0;
//     for(i=0 ; i <this.marks.length ; i++){
//      total+=this.marks[i];
//     }
//     return total;
//   }
// }
// console.log(student.getTotalMarks());


// // console.log(student.welcome());
// let content = student.welcome();
// console.log(content);



////////////////// Constructor

function CustomConstructor(t, price) {
  this.title = t;
  this.price = price
}

let prod1 = new CustomConstructor('soap',500);
let prod2 = new CustomConstructor('shampoo',1500);
let prod3 = new CustomConstructor('faceWash',1000);

console.log(prod1);
console.log(prod2);
console.log(prod3);
