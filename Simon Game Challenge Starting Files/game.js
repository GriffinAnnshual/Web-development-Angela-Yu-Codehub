var userClickedPattern = [];
var gamePattern = [];
var level = 0;
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var buttonColours = ["red", "blue", "green", "yellow"];
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animation(randomChosenColour);
    playSound(randomChosenColour);
    level +=1;
    $("h1").text("Level " + level);
}

function playSound(name){
    var audio = new Audio(name+".mp3");
    audio.play();};    
function animation(self){
    $("#"+self).addClass("pressed");
    setTimeout(function() {
        $("#"+self).removeClass("pressed");
    },100);
}
function gameOver(){
    $("h1").text("Game Over press any key to restart");
    $("body").addClass("gameover");
    setTimeout(function() {
        $("body").removeClass("gameOver");
    },200);
    audio2 = new Audio("wrong.mp3");
    audio2.play();
}
function checkAnswer(userClickedPattern,gamePattern){ 
    if (userClickedPattern.join() === gamePattern.join()){
       setTimeout(function(){
        nextSequence();
       },1000);
       userClickedPattern = [];
    }   
    else{
        gameOver();
        startOver();
}
}


$(document).keypress(function(){    
    var level = 0;
    $("h1").text("Level " + level);
    nextSequence();
})

$(".btn").click(function(){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animation(userChosenColour);
    if (userClickedPattern.length == level){
        console.log(userClickedPattern);
        console.log(level); 
checkAnswer(userClickedPattern,gamePattern);
userClickedPattern = [];}
});

function startOver(){
    level = 0
    gamePattern = [];
    userClickedPattern = [];
    location.reload();
}
