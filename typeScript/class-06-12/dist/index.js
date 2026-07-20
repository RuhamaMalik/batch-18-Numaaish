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
// abstract class Shape {
//   abstract getArea(): number;
// }
// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// class Square extends Shape {
//   constructor(public side: number) {
//     super();
//   }
//   getArea(): number {
//     return this.side * this.side;
//   }
// }
// let c1 = new Circle(5);
// let sq1 = new Square(5);
// console.log(c1.getArea());
// console.log(sq1.getArea());
/////// singleton
// 1) private static instance variable
// 2) private constructor
// 3) static getInstance method
// console.log(Math.PI);
// console.log(Date.now());
// class Person {
//   private static instance: Person;
//   private constructor(public name:string) {}
//   static getInstance(n:string){
//     if(!this.instance){
//        this.instance = new Person(n);
//     }
//     return this.instance ;
//   }
// }
// let abcd = Person.getInstance('Ruhama');
// let xyz = Person.getInstance('Gull');
// console.log(abcd);
// console.log(abcd === xyz);
// let p1= new Person()// error
///////////////////////
// type Abcd = {
//   ln: string,
//   theme: string
// }
// class Setting {
//   private static instance: Setting;
//   static ln: string = 'English';
//   private site_setting: Abcd = {
//     ln: 'english',
//     theme: 'dark'
//   }
//   private constructor() { }
//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Setting();
//     }
//     return this.instance;
//   }
//   getSiteSettings(key: string) {
//     return this.site_setting[key as keyof Abcd]
//   }
// }
// let st = Setting.getInstance();
// console.log(st.getSiteSettings("ln"));
// console.log(Setting.ln);
//////////////////////////////// Union , INTERSECTION
// type Data = number | string;
// let num:number = 56;
// let val:Data = 67;
// let val2:Data = 'Sixty';
// type A = {
//   name:string;
//   age:number
// }
// type B ={
//   id:number;
//   nationality:string;
//   address:string
// }
// type C = A | B
// let user:C = {
//   name:'Sana',
//   age:10,
//   id:45,
//   // nationality:"Pakistan",
//   // address:'ABCD street',
//   // language:['eng','urdu'] // error
// }
/////////////////////////////////////////
// type D = A & B;
// let user:D = {
//   name:'Sana',
//   age:10,
//   id:45,
//   nationality:"Pakistan",
//   address:'ABCD street',
//   // abcd:'xyz' // error
// }
// console.log(user);
/////////////////////////////////////////
// type A = {
//   type: 'A';
//   image?:string;
//   name: string;
//   age: number
// }
// type B = {
//   type: 'B';
//   id: number;
//   nationality: string;
//   address: string
// }
// type C = A | B
// let students: C = {
//   type: 'A',
//   name: 'Asiya',
//   age: 10,
//   // nationality:'Pakistani'
// }
////////////////////////////////////
// interface A {
//   id: number;
//   name: string;
// }
// interface A{
//   abcd:'xyz'
// }
// interface B {
//   email: string;
//   password: string;
// }
// interface C extends A, B { 
//   image?:string;
// }
// let user: C = {
//   id: 1,
//   name: 'Zahra',
//   email: 'zahra@gmail.com',
//   password: 'zahra12345_'
// }
// console.log(user);
//////////////////////// type casting (as, <>)
// let num:unknown = "55 A";
// // console.log(Math.floor(num as number));
// // console.log((num as string).toLowerCase());
// console.log((<string>num).toLowerCase());
////////////////////// Generics
// interface User{
//   name:string
// }
// interface Employe{
//   destination:string
// }
// function merge(objA:User, objB:Employe){
//  return {...objA, ...objB}
// }
// console.log(merge({name:'Fatima'},{destination:'CEO'}));
//////////////////
// function abcd<T extends object,U extends object, V extends string>(objA:T, objB:U, str:V) {
//   console.log(str);
//   return { ...objA, ...objB }
// }
// console.log(
//   abcd(
//     { name: 'Ruhama', nationality:'Pakistani', email:'ruhama@gmail.com' },
//     { age: 10, skills: ['javaScript'], id:10  },
//     'abcd'
//   )
// );
// console.log(merge([1,2,3], ['a','b','c']));
// console.log(merge('Ruhama', 'Gull'));
////////////////////////////
// function printArr<T>(arr: T[]) {
//   arr.forEach((e) => {
//     if (typeof e === 'number') {
//       console.log(e.toFixed(2));
//     }else if(typeof e === 'string'){
//         console.log(e.toUpperCase());
//     }
//   })
// }
// printArr([1, 2, 3.56, 4, 5]);
// printArr(['apple', 'mango', 'banana']);
// printArr([{name:'Imama'}, {age:10}]);
////////////////////// type Narrowing - Home work
/////////////////////////// Decorators
// function Deco(constructor: Function) {
//   console.log('Hello Deco');
// }
// function Abcd(constructor: Function) {
//   console.log('Hello Abcd');
// }
// @Deco
// @Abcd
// class Person{
//   name:string = 'Ruhama';
//   constructor(public id:number){}
// }
// @Deco
// class Animal{
//    name:string = 'cat';
//   constructor(public id:number){}
// }
///////////////////////////////////////////
// function Deco(mesg:string) { // decorator factory
//   return function (constructor: Function) { // decorator
//     console.log(mesg);
//   }
// }
// @Deco('Hello Deco')
// class Person{
//   name:string = 'Sana';
//   constructor(){}
// }
//////////////////////////////////
// function Practice(msg: string) { // decorator factory
//   return function (constructor: any) { // decorator
//     let data = new constructor();
//     console.log(msg);
//     // console.log(data);
//   }
// }
// @Practice('Hello bacho')
// class User {
//   name: string = 'Inaya';
//   id: number = 101;
//   constructor() { }
// }
// @Practice('Hello Teacher')
// class Teacher {
//   subject: string = 'TypeScript';
//   slot: string | number = '11 to 01';
//   experience: string = '5 years';
//   constructor(){}
// }
// let teacher1 = new Teacher();
// console.log(teacher1);
///////////////////// Modules  ---- ESM modules (import / export)
// import { fruits } from "../dist/common.js";
import d, { fruits as f, sum } from './test.js';
// console.log(fruits);
// console.log(sum(5,'8'));
console.log(d(8));
console.log(f);
// ENUMS
// TYPE GUARDS
// FNCTION OVERLOADING
//# sourceMappingURL=index.js.map