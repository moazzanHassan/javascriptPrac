var books = ["english","urdu","math","islamyat","general Knowledge"];

for(var i of books){
    // console.log(i + " woooo")
}
// strings in javascript are treated as arrays

var myString = "Hello this is a string";

for(var strHere = 0;strHere < myString.length;strHere++){
    // console.log(myString[strHere] )
}  
for(var newstr of myString){
    // console.log(newstr)
}