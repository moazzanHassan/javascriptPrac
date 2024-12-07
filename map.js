 // Question #1
// 1. Square Each Number
// Create a new array where each element is the square of the corresponding element in the original array.
// const arr = [1, 2, 3, 4]

// const sqrarr = arr.map((val)=>{
//     return  val ** 2
// })
// console.log(sqrarr)
// ----------------------------------------------------------------------
// 2. Convert Temperatures
// Convert an array of temperatures in Celsius to Fahrenheit using map().

// Formula: F = (C × 9/5) + 32

// const tempC =  [0, 20, 30]

// const tempF = tempC.map((val)=>{
//     return ((val * 9/5) + 32)
// })

// console.log(tempF)

// ------------------------------------------------------------
// 3. Extract Names
// Given an array of objects representing users, create a new array that contains only their names.

// Example Input:

// const arr = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 22 }
//   ]
//  const newarr = arr.map((val)=>{
//     return val.name
//   })
//   console.log(newarr)
// ___________________________________________________________--
// 4. Double the Values
// Create a new array where each number in the original array is doubled.

// Example Input:
// const arr = [2, 4, 6, 8];

// const newarr = arr.map((val)=>{
//     return val*2
// })
// console.log(newarr)
// -----------------------------------------------------------------
// 5:Capitalize Strings
// Given an array of lowercase strings, return a new array where each string is capitalized.

// Example Input:

// const arr = ["hello", "world", "javascript"]

// const upper = arr.map((val)=>{
//       return  val.toUpperCase()
// })

// console.log(upper)
// --------------------------------------------------------
// const arr =  [10, 20, 30]

//  const newarr = arr.map((val,ind)=>{
//        return val + ind
//  })
//  console.log(newarr)
// -------------------------------------------------------------
    // const arr = [
    //     { name: "John", marks: 45 },
    //     { name: "Jane", marks: 60 },
    //     { name: "Bob", marks: 75 }
    // ]

    // const newarr = arr.map((val)=>{
    //     return{
    //         ...val,
    //         passed:  val.marks < 50 ? "true" :  "false"}
    // })
    // console.log(newarr)
    // const fruit = ["apple", "banana", "cherry"]
    // const reversed = fruit.map((val)=>{
    //     return val.split("").reverse().join("")
    // })
    // console.log(reversed)

    // ------------------------------------------------------------
//     const arr = ["hello", "world", "map"];

//    const len =  arr.map((val)=>{
//             return val.length
//     })
//     console.log(len)
// -------------------------------------------------------------------
const arr =  [1, 2, 3, 4, 5, 6]

const newarr = arr.map((val)=>{  
    if(val%2 == 0){
      return  val * 2
    }
    else{
        
    }
})
console.log(newarr)