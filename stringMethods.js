var myString = "i am really hungry for some";
// console.log(myString);

var myUpperString = myString.toUpperCase();
// console.log(myUpperString)

var location = myString.search("really")
// console.log(location)
var theWord = myString.substr(location,6)
// console.log(theWord)

var change = theWord.toUpperCase()

var newMyStr = myString.replace("really",change)
console.log(newMyStr)
