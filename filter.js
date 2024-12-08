// // Create a function that filters out even numbers from an array.
// const arr = [1, 2, 3, 4, 5, 6];
// const even =  arr.filter((val)=>{
//        return val%2 == 0
// })
// console.log(even)
// ________________________________________________________-
//  Filter Strings Longer than 4 Characters
// Filter out strings that have more than 4 characters.

// const arr = ["apple", "bat", "banana", "cat"]

// const longarr = arr.filter((val)=>{
//     return val.length > 4
// })
// console.log(longarr)

// _______________________________________________________________________
// 3. Filter Students with Passing Marks
// Filter students who have marks greater than or equal to 50.
//  const students = [
//     { name: "John", marks: 45 },
//     { name: "Jane", marks: 60 },
//     { name: "Bob", marks: 75 }
// ]
// const passStudents = students.filter((val)=>{
//     return val.marks > 50
// })
// console.log(passStudents)
// ______________________________________________________________________--
// 4. Filter Positive Numbers
// Filter out positive numbers from an array of mixed integers.


// const arr =  [-3, 5, 7, -1, 0, -8, 2]

//     const positive = arr.filter((val)=>{
//         return val > 0
//     })
//     console.log(positive)
// ___________________________________________________________________________-
// 5. Filter Unique Values
// Given an array with duplicate values, filter out the unique values.

// const mixed =  [1, 2, 2, 3, 4, 4, 5]

// const unique = mixed.filter((val)=>{
//     return mixed.indexOf(val) === mixed.lastIndexOf(val)
// })

// console.log(unique)
// ____________________________________________________________________________
// 6. Filter Palindromes
// Filter out strings that are palindromes (a string that reads the same backward as forward).

// const arr =["racecar", "hello", "level", "world", "madam"]
 
// const rep = arr.filter((val)=>{
//    return val === val.split("").reverse().join("")
   
    
// })
// console.log(rep)
// ______________________________________________________________________________
// 7. Filter Age Greater than 18
// Filter out people older than 18 from an array of objects with name and age.
// const obj = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 15 },
//     { name: "David", age: 19 }
// ]

// const valid = obj.filter((val)=>{
//     return val.age > 18
// })
// console.log(valid)
// ______________________________________________________________________________________
// 8. Filter Divisible by 3
// Filter numbers that are divisible by 3.

// const arr = [1, 3, 6, 8, 9, 12, 15]

// const resulst = arr.filter((val)=>{
//         return val % 3 === 0
// })
// console.log(resulst)
// ______________________________________________________________________________________
// 9. Filter Empty Strings
// Filter out empty strings from an array.


// const emp = ["hello", "", "world", "", "JS"]

// const res = emp.filter((val)=>{
//     return val != ""
// })
// console.log(res)
// ____________________________________________________________________________________
// 10. Filter Properties Based on a Condition
// Filter objects where a specific property matches a condition.
// Example: Filter products where the price is less than $100.

const arr = [
    { product: "Book", price: 30 },
    { product: "Laptop", price: 150 },
    { product: "Pen", price: 5 }
]

const res = arr.filter((val)=>{
       return val.price < 100
})
console.log(res)