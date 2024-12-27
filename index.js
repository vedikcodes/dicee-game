var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.getElementById("dice1").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("dice2").setAttribute("src", randomDiceImage2);

let resultText = " ";
if(randomNumber1 > randomNumber2){
    resultText = "Player 1 Wins! 🚩";
}
else if(randomNumber1 < randomNumber2){
    resultText = " Player 2 wins! 🚩";
}
else{
    resultText = "its a draw =="
}

document.querySelector('h1').textContent = resultText;