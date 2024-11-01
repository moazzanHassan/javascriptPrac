
// var a = [1,2,3,3,4];

// var sum = 0;
// a.forEach(function(val){
//    sum =  sum +  val;
//     console.log(sum)
// })


// var arr = []

// for(let i = 0; i<10; i++){  agar let ki jaga var likh du to 10 dafa 10 print ho ga
// arr.push(function(){
//     setTimeout(function() {
//         console.log(i)
//     },1000);
// })

// }

// for(var i = 0 ;i<10 ;i++){
//     arr[i]();
// }

// check if the input is array or not

// function arrayCheck(val){
//     return    Array.isArray(val)
// }

// console.log(arrayCheck(12))
// console.log(arrayCheck({name:"hello"}))
// console.log(arrayCheck([1,2,3]))

// second Method to check array
// function arrayCheck(val){
//         return   val instanceof Array
//     }
    
//     console.log(arrayCheck(12))
//     console.log(arrayCheck({name:"hello"}))
//     console.log(arrayCheck([1,2,3]))

// clone a array or check if a array have array inside it can the function able to clone it
// function cloneArray(val){
//     var cloned = [...val]
//     return cloned;
// }

// var ans = cloneArray([1,2,3,4,[1,2,3]]);

// console.log(ans)

// console 1st element of array if 2nd parameter is any number so console that amount of elements
// function getter(val, get = 1){
    
//     var cloned = []

//     for(var i = 0;i<get;i++){
        
//     cloned.push(val[i])


//     }

//     return cloned

// }
// console.log(getter([1,2,3,4],-2))


// function getter(val,get = 1){
// var cloned = []

// for(var i = 0; i<get;i++){

//     cloned.push(val[i])
// }

// return cloned;

// }

// console.log(getter([1,2,3,4],))

// join the number all element of arr into single string sperated by comma 


// function joiner(val){

//    return val.join(",")
// }
// console.log(joiner(["apple","bnana","grapes","tomato"]))

// possible ways to create a object 

function getter(val, get = 1) {
    var cloned = [];

    // Handle negative numbers by resetting to zero
    if (get < 0) {
        return "Error: The number of elements to return cannot be negative";
    }

    for (var i = 0; i < get; i++) {
        cloned.push(val[i]);
    }

    return cloned;
}

console.log(getter([1, 2, 3, 4], -2));