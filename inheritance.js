class Parent {
    constructor(){
        this.fatherName = "Rdj";
    }
}
class Child extends Parent {
    constructor(name){
        this.name = name;
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom")
console.log(baby);
console.log(baby2);