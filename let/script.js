// let ko hum redeclear ni kar saktay //we can not redeclear variable by let

// let zafar = 21;

// let zafar = 22;

var naeem = 22;

var naeem = 21;

// console.log(zafar)
console.log(naeem)

var x = 12;//globa scope 

{
     var x = 2; // local scope
}

console.log(x) // here we get the value of local scope cos we again decleared the x with var

let y = 24; //global scope

{
    let y = 25;
}
console.log(y)


