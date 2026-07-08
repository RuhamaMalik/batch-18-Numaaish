// class Person {
//   private skills: string[] = [];
//   constructor(
//     public name: string,
//     private age: number,
//     public nationality: string,
//     readonly address: string
//   ) {}
//   public addSkill(skill: string[]) {
//     this.skills.push(...skill)
//   }
//   public getSkills(): string[] {
//     return this.skills;
//   }
// }
// let p1 = new Person('Fakiha', 10, 'pk', 'ABCD Street');
// // p1.addSkill('js');
// // p1.addSkill('html');
// p1.addSkill(['']);
// console.log(p1.getSkills());
// console.log(p1);
///////////////// getter , setter
// class Person {
//   constructor(
//     private _id: number,
//     private _bloodGroup: string,
//     private accountBalance: number
//   ) { }
//   get id() {
//     return this._id;
//   }
//   get bloodGroup() {
//     return this._bloodGroup;
//   }
//   set bloodGroup(value: string) {
//     if (!value) {
//       throw Error("This is required!")
//     }
//     this._bloodGroup = value;
//   }
// }
// let p1 = new Person(101, 'A+', 12345);
// p1.bloodGroup = 'A';
// console.log(p1.id);
// console.log(p1);
///////////////// Inheritance
////  parent class / base class / super class
////  child class / drived class / sub class
// class Product { // base class
//   constructor(
//     private _id: number,
//     protected _title: string,
//     public price: number
//   ) { }
//   get id() {
//     return this._id;
//   }
// }
// class ElectronicProduct extends Product {
//   constructor(
//     id: number,
//     title: string,
//     price: number,
//     public warranty: string,
//     public voltage: string,
//     public brand: string
//   ) { super(id, title, price) }
//   // getId() {
//   //   return this.id;
//   // }
//   get title() {
//     return this._title;
//   }
// }
// let iron = new ElectronicProduct(1, 'iron-27N', 5000, '2 years', '220V', 'panasonic');
// console.log(iron.title);
//       child     <---     parent
// class SkincareProd extends Product {
//   constructor(
//     _id: number,
//     _title: string,
//     price: number,
//     public skinType: string,
//     public shelfLife: string,
//     public madeBy: string
//   ) {
//     super(_id,_title,price)
//   }
// }
// let sunScreen = new SkincareProd(12,'SPF-60',2000, 'All skin type', '6 month', 'Organic traveller');
// console.log(sunScreen);
/////////////////////////////////////
// let input = document.getElementById('_input')! as HTMLInputElement;
// !  non-nullAssertionOperator  ;
// function getData(e:any){
// e.preventDefault();
// console.log(input.value);
// }
////////////////////////////// Abstraction
// abstract class Animal {
//   name: string;
//   constructor(n: string) {
//     this.name = n
//   }
//   eat(): void {
//     console.log(`${this.name} khana kha raha hai`);
//   }
//   abstract makeSound(): void
// }
// // let test = new Animal('cat'); // error
// class Cat extends Animal {
//   constructor(n: string) {
//     super(n)
//   }
//   makeSound(): void {
//     console.log('Meow Meow!');
//   }
// }
// class Dog extends Animal {
//   constructor(n: string) {
//     super(n)
//   }
//   makeSound(): void {
//     console.log('Bhow Bhow!');
//   }
// }
// let cat = new Cat('tom');
// cat.makeSound();
// let dog = new Dog('bob');
// dog.makeSound();
///////////////////////////////// Polymorphism
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
let c1 = new Circle(5);
let sq1 = new Square(5);
let students = {
    type: 'A',
    name: 'Asiya',
    age: 10,
    // nationality:'Pakistani'
};
export {};
/////// type casting
/////// Generics 
//# sourceMappingURL=index.js.map