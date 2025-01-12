(function(){
    "use strict"    
    const img = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    let currentimg = 0;
    let next = document.getElementById("next");
    let prev = document.getElementById("previous");
    let content = document.querySelector("#content")
    function swap(){
        var newimg = document.createElement('img');
        newimg.src = img[currentimg]
        newimg.className = 'fadeinimg';
        content.appendChild(newimg)
        if(content.children.length > 2){
            content.removeChild(content.children[0])
        }
    }

    next.addEventListener("click",function (){
        currentimg++
        if(currentimg > img.length-1){currentimg = 0}
       
        swap()

        // document.getElementById("myimage").src = img[currentimg]
    })
    prev.addEventListener("click",function (){
        currentimg--
        if(currentimg < 0){currentimg = img.length -1}
        swap()

        // document.getElementById("myimage").src = img[currentimg]
    })}())