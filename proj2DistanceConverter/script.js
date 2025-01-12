(function(){
    "use strict"
    const convert = document.getElementById("convert");
		convert.addEventListener("submit",function(evt){
			evt.preventDefault()
		const distance =parseFloat( document.getElementById("distance").value);
		const answer = document.getElementById("answer");
		
		if(distance){
			const conversion = distance * 1.689344.toFixed(3);
			answer.innerHTML = `<h2>${distance} is converted to ${conversion}</h2>`

		}else{
			answer.innerHTML = `<h2>please enter a valid number<h2>`
		}
		})
}())