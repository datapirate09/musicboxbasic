for(var i=0;i<document.getElementsByClassName("drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(ev){
        var innervalue=this.innerHTML;
        makeSound(innervalue);
        buttonAnimation(innervalue);
    });
}


document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio1 = new Audio("tom-1.mp3");
            audio1.play();
            break;
        
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
            
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        default:console.log("Played it");  
    }
}
function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}