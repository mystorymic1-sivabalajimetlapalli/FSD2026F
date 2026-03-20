 class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    WakeLock(){
        console.log("WakeLock");
    }       
}
let person1=new person("John",30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
person1.WakeLock(); // Output: WakeLock