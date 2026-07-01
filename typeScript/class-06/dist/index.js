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
class Person {
    constructor(_id, _bloodGroup, accountBalance) {
        this._id = _id;
        this._bloodGroup = _bloodGroup;
        this.accountBalance = accountBalance;
    }
    get id() {
        return this._id;
    }
    get bloodGroup() {
        return this._bloodGroup;
    }
    set bloodGroup(value) {
        if (!value) {
            throw Error("This is required!");
        }
        this._bloodGroup = value;
    }
}
let p1 = new Person(101, 'A+', 12345);
p1.bloodGroup = 'A';
console.log(p1.id);
console.log(p1);
export {};
//# sourceMappingURL=index.js.map