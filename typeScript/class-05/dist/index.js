///////////////////// OOPS
// class - Blueprint of object
// Object -  instance of a class
// -------- 4 pillar
// 1 - polymorphism
// 2 - Abstraction
// 3 - Inheritance
// 4 - Encapsulation
// class Student {
//   name: string;
//   rollNo: number;
//   _class: string;
//   constructor(n: string, rn: number, c: string) {
//     this.name = n;
//     this.rollNo = rn
//     this._class = c
//   }
// }
// let stu1 = new Student('Fatima', 101, 'Web dev');
// let stu2 = new Student('Hira', 102, 'AI and DS');
// console.log(stu1, stu2);
///////////// Access Modifiers
// Public
// Private
// Protected
// readonly
// class Person {
//   public name: string;
//   private age: number;
//   public nationality: string;
//   constructor(name: string, a: number, n: string) {
//     this.name = name;
//     this.age = a;
//     this.nationality = n
//   }
// }
/////////////////////// short method
class Person {
    constructor(name, age, nationality, address) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.address = address;
        this.skills = [];
    }
}
let p1 = new Person('Fakiha', 10, 'pk', 'ABCD Street');
p1.name = 'Hiba';
// p1.skills.push('JavaScript','html','css');
// p1.skills = [];
// p1.skills.length = 0;
console.log(p1);
console.log(p1.name);
console.log(p1.nationality);
// p1.address = 'XYZ school';
console.log(p1.address);
export {};
// console.log(p1.age); // error
//# sourceMappingURL=index.js.map