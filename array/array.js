// for(let i = 20;i<=60;i++){
//     console.log(i)
// }
//length of array
// var arr = [1,2,3,4,5,8,6,7,8];

// var length = arr.length;

// console.log(length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];

// console.log(fruit)
// --------------------------------------------
const arr = ["mange","bnana","guava","apple","grapes"]

var arrlen = arr.length;

let text = "<ul>";

for(let i = 0;i < arrlen;i++){
text += "<li>" + arr[i] + "</li>";
}
text += "</ul>";

document.querySelector(".list").innerHTML= text;
// ________________________________________________________-
let arr2 = ["grapes","bnana","orange","watermelon"];

let arlen = arr2.length

let text2 = "<ul>";

for(let i = 0;i<arlen;i++){
    text2+="<li>"+ arr2[i] + "</li>";
}

text += "</ul>";

document.querySelector(".list2").innerHTML = text2;