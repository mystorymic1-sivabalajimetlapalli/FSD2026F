 class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    WakeLock(){
        console.log("WakeLock");
    }       
}
class employee extends person{
    constructor(name,age,position){
        super(name,age);
        this.position=position;
    }
}

let person1=new person("John",30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
person1.WakeLock(); // Output: WakeLock
let employee1=new employee("Alice",25,"Developer");
console.log(employee1.name); // Output: Alice
console.log(employee1.age); // Output: 25       
console.log(employee1.position); // Output: Developer

