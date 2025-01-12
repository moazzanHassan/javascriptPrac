(function(){
    "use strict"
    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerdiv = document.getElementById("answer");
    const form = document.getElementById("convert")
    
    document.addEventListener("keydown",function(evt){
        let key = evt.key;
        if(key === "k"){
            convertType = "kilometer";
            heading.innerHTML = "kilometer to mile converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
        
        }else if(key === "m"){
            convertType = "miles";
            heading.innerHTML = "mile to kilometer converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
        }
    })
    form.addEventListener("submit",function(evt){
        evt.preventDefault()
        let distance = parseFloat(document.getElementById("distance").value);
        if(distance){
            if(convertType === "miles"){
                const converted = (distance * 1.689344).toFixed(3)
                answerdiv.innerHTML = `<h2>${distance} miles is converts to ${converted} kilometers</h2>`
            }
            else if(convertType === "kilometer"){
                const converted = (distance * 0.621371192).toFixed(3)
                answerdiv.innerHTML = `<h2>${distance} kilometer is converts to ${converted} miles</h2>`
            }
        }else{
            answerdiv.innerHTML = "<h2>please proveide a number!</h2>"
        }
    })

}())