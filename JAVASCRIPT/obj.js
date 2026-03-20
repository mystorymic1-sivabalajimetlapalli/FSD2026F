let person={
    name:"John",
    age:30,
    city:"New York",
    surname:"Doe",
    fullName:function(){
        return this.name + " " + this.surname;
    },
    greeting:function(){
        return "Hello, " + this.name;
    }   
}
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.fullName());
console.log(person.greeting());
