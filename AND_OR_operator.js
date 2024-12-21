var gotDinner = true;
var gotLunch = true;
var gotBreakfast = false;

function andOper(){
    if(gotDinner && gotBreakfast && gotLunch){
        console.log("I am full")
    }else{
        console.log("i am starving")
    }
}
function orOperator(){
    if(gotDinner || gotBreakfast){
        console.log("I am full")
    }else{
        console.log("i am starving")
    }
}
orOperator()
andOper()
