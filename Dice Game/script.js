document.querySelector("div.container h1").innerHTML = "Refersh Me";
var winner =0;
var randomNumber1 = Math.ceil(Math.random()*6);
var put1 = `images/dice${randomNumber1}.png`;
document.querySelector("img.img1").setAttribute("src", put1);

var randomNumber2 = Math.ceil(Math.random()*6);
var put2 = `images/dice${randomNumber2}.png`;
document.querySelector("img.img2").setAttribute("src", put2);

if (randomNumber1>randomNumber2){
document.querySelector("div.container h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("div.container h1").innerHTML = "Player 2 Wins";
    }
else{
    document.querySelector("div.container h1").innerHTML = "Draw";
}    

