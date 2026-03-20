let arr=[0,1,2,3,4,5];
let [a,b,...c]=arr;
console.log(a);
console.log(b);
console.log(c);


let balaji={
    name:"balaji",
    age:22, 
    city:"chennai"
}
let {name,age,...rest}=balaji;
console.log(name);
console.log(age);
console.log(rest);  