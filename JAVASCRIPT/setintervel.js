let x=setInterval(function(){
    console.log("i am sivabalaji")
}, 10000)
let y=setTimeout(() => {
    clearInterval(x);
}, 50000);

let z=clearTimeout(()=>{
    console.log("i am cleared")
}, 30000)