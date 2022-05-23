var myPix = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
const pic1 = document.getElementsByClassName('img1');
const pic2 = document.getElementsByClassName('img2');

var num1 = Math.floor(Math.random() * myPix.length);
var img = myPix[num1];
pic1[0].src = img;
var num2 = Math.floor(Math.random() * myPix.length);
img = myPix[num2];
pic2[0].src = img;

if (num1 > num2) {
  document.getElementsByTagName('h1')[0].innerHTML = "Player 1 Wins!";
}
else if (num1 < num2) {
  document.getElementsByTagName('h1')[0].innerHTML = "Player 2 Wins!";
}
else {
  document.getElementsByTagName('h1')[0].innerHTML = "Draw!";
}

