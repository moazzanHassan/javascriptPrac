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
// console.log(newMyStr)

var food = ["chicken","radish","carrot","spanich"];
for(var i = 0;i < food.length;i++){

    // console.log(`${myString} ${food[i]}`)
}

for(var store of food){
    // console.log(`${myString} ${store}`)

}

for(var i = 0; i < food.length;i++){
    // var reminder = i % 2;
    //check if the incrementor is even 
    if(i%2 == 0){  
        // console.log(i.toUpperCase)
    console.log(`${myString} ${food[i].toUpperCase()}`)

    }
    else{
        // console.log(i)
    console.log(`${myString} ${food[i]}`)

    }
}

