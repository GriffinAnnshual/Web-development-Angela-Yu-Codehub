var noOfDrumButtons = document.querySelectorAll(".drum").length;
var audio1 = new Audio("sounds/tom-1.mp3");
var audio2 = new Audio("sounds/tom-2.mp3");
var audio3 = new Audio("sounds/tom-3.mp3");
var audio4 = new Audio("sounds/tom-4.mp3");
var audio5 = new Audio("sounds/crash.mp3");
var audio6 = new Audio("sounds/kick-bass.mp3");
var audio7 = new Audio("sounds/snare.mp3");
function name1(button){
    switch(button){
        case "w":
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play(); 
            break;
        default:
            console.log(button)                           
                }
            }
function buttonanimation(ans){
    var button2 = document.querySelector("."+String(ans));
    button2.classList.add("pressed");
    setTimeout(function(){
    button2.classList.remove("pressed");},100);
            
            }            
for (var i = 0; i < noOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button = this.innerHTML;
        name1(button);
        buttonanimation(button);
    });

}
document.addEventListener("keypress",function(event){
    name1(event.key);
    buttonanimation(event.key);
})
