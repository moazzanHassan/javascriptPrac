// const colors = ["red", "blue", "green", "yellow"];

// const [one,,three] = colors

// console.log(one,three)

// let num1 = 15;
// let num2 = 25;

// [num1,num2] = [num2,num1]

// console.log(num1,num2)
// const book = { title: "1984", author: "George Orwell", year: 1949 };

// const {title,author} = book

// console.log(title,author)

// const item = { id: 101, price: 50 };

// const {id,category = "math"} = item

// console.log(category)
// const profile = {
//     name: "Bob",
//     details: { company: "TechCorp", city: "New York" },
//   };

//   const {
//     details: {company,city}
//   } = profile

//   console.log(company,city)
// const nums = [10, 20, 30, 40, 50];

// const [fst, ...oth] = nums

// console.log(oth)

// const person = { name: "Alice", age: 25, country: "USA" };

// const {name,country} = person

// console.log(country)

// Use destructuring to:

// Extract the name and brand properties into separate variables.
// Add a default value of 10 for a property called discount that is not present in the object.
// Log all the extracted values (name, brand, and discount).
const product = { name: "Laptop", price: 1000, brand: "TechX", stock: 20 };

const {
    name,brand,discount = 10
} = product

console.log(name,brand,discount)