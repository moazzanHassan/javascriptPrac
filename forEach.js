// const arr = ["one","two","three"]

// arr.forEach(function(val){
//     if(val === "two"){}
//     else{
//         console.log(val)
//     }
// })

// const color = ["red", "blue", "green"];

// color.forEach(function(val,ind){
//     console.log("index " + ind + " : " + val)
// })

// //findin sum of all numbers

// const numbers = [5, 10, 15, 20];
// sum = 0;
// numbers.forEach(function(val){
//     sum += val
// })
// console.log(sum)
// convert string to uppercase and stor it in new array

// const smallArr = ["hello", "world"];
// let upper = []

//     smallArr.forEach(function(val2){
//        upper.push(val2.toUpperCase())  
        
//     })

//     console.log(upper)

// using arrow function

// Question 3

// const lower = ["one","two","three"]

// const upper = []

// lower.forEach((val)=>{
//     upper.push(val.toUpperCase())
// })
// console.log(upper)

/*4. Append Text to Each String
Given an array of strings, use forEach() to append "_done" to each string.

Example Input:
["task1", "task2", "task3"]

Expected Output:
["task1_done", "task2_done", "task3_done"] */

// const task = ["task1", "task2", "task3"]

// const newtest = []

// task.forEach((val)=>{
//     newtest.push(val+"_done")
// })
// console.log(newtest)

/*Create a program that uses forEach() to find all even numbers in an array and stores them in a new array.

Example Input:
[1, 2, 3, 4, 5, 6]

Expected Output:
[2, 4, 6] */

// const number = [1, 2, 3, 4, 5, 6]
// const even = []

// number.forEach((val)=>{
//     if (val % 2 == 0){
//         even.push(val)
//     }
// })

// console.log(even)

/*6. Count Occurrences
Write a function that counts how many times a specific element appears in an array using forEach().

Example Input:
Array: [1, 2, 2, 3, 4, 2]
Element: 2

Expected Output:
Count of 2: 3 */
// const numers = [1,1,2,3,1,5]
// const chk = 3

// function occuranceCheck(arr,num){
//     let cont = 0;
//     arr.forEach((val)=>{
//             if (val == num){
//                 cont +=1 
//             }
//     })
//     console.log(`The ${num} appear "${cont}" time${cont === 1 ? '' : 's' }`)
// }

// occuranceCheck(numers,chk)

// const students = [
//     { name: "John", marks: 80 },
//     { name: "Jane", marks: 90 },
//   ];
// students.forEach((val)=>{
//         val.marks += 10
//         console.log(`${val.name} has ${val.marks} marks`)
// })  
// console.log(students)

// const name = ["JavaScript", "is", "fun"]

// let name2 = []

// name.forEach((val)=>{
//    name2.push(val)
// })
// console.log(name2.join(" "))

// const arr = ["cat", "dog", "bird"]


// const newa = []

// arr.forEach((val)=>{
//     newa.push(val.split('').reverse().join(""))

// })
// console.log(newa)

// const arr = [10,20,30]

// const newr = []

// arr.forEach((val,ind)=>{
//     newr.push(val + ind)
// })
// console.log(newr)