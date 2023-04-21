var wLD = document.querySelector("#winLoseDraw");
var container = document.querySelector("#container");
var box1 = document.querySelector("#one");
var box2 = document.querySelector("#two");
var box3 = document.querySelector("#three");
var box4 = document.querySelector("#four");
var box5 = document.querySelector("#five");
var box6 = document.querySelector("#six");
var box7 = document.querySelector("#seven");
var box8 = document.querySelector("#eight");
var box9 = document.querySelector("#nine");
var boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var win1 = [box1, box2, box3];
var win2 = [box4, box5, box6];
var win3 = [box7, box8, box9];
var win4 = [box1, box4, box7];
var win5 = [box2, box5, box8];
var win6 = [box3, box6, box9];
var win7 = [box7, box5, box3];
var win8 = [box1, box5, box9];
var gameOver;
var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var playerTurn = 1;
// this code adds an event listener to the container and when you click, turns that box p1
// p1 player one, p2 player two // current players turn is shown via the big old currentP box, it's very pretty
container.addEventListener("click", function (event) {
  if (gameOver === true) {
    return;
  }
  var click = event.target;
  if (event.target.classList.length === 0 && playerTurn % 2 !== 0) {
    click.classList.add("p1-background"),
      addOne(),
      playerTwo.classList.add("currentP-background"),
      playerOne.classList.remove("currentP-background");
    winCheck();
  } else if (event.target.classList.length === 0 && playerTurn % 2 === 0) {
    click.classList.add("p2-background"), addOne();
    playerOne.classList.add("currentP-background"),
      playerTwo.classList.remove("currentP-background");
    winCheck();
  }
});
// adds one to the playerTurn variable. I know why I have it, what it does and how it works. What I don't remember is why I put it here.
function addOne() {
  playerTurn++;
}

// This one is called winCheck but it also checks for draws, so gameHasEnded but that's less catchy.
// the i value cylces through the elements of the winarrays and the following code checks each element to see if it contains either p1 or p2
// I'm almost certain I could do this in more concise way, however this to me is easily readable and well... it works.
// The math in the if statements is pretty simple and is copied from above.
// player one starts with the turn counter at 1, an odd number
// Player 2 goes next with an even number playerTurn
// basically the code from our Odd and Even exercise from a while ago.
function winCheck() {
  var winCondition = false;
  var winArrays = [win1, win2, win3, win4, win5, win6, win7, win8];
  for (var i = 0; i < winArrays.length; i++) {
    if (
      winArrays[i][0].classList.contains("p1-background") &&
      winArrays[i][1].classList.contains("p1-background") &&
      winArrays[i][2].classList.contains("p1-background")
    ) {
      winCondition = true;
    } else if (
      winArrays[i][0].classList.contains("p2-background") &&
      winArrays[i][1].classList.contains("p2-background") &&
      winArrays[i][2].classList.contains("p2-background")
    ) {
      winCondition = true;
    }
  }
  if (playerTurn <= 10 && playerTurn % 2 === 0 && winCondition === true) {
    gameOver = true;
    playerTwo.classList.remove("currentP-background");
    wLD.innerHTML = "Player 1 Wins!";
  } else if (
    playerTurn <= 10 &&
    playerTurn % 2 !== 0 &&
    winCondition === true
  ) {
    gameOver = true;
    playerOne.classList.remove("currentP-background");
    wLD.innerHTML = "Player 2 Wins!";
  } else if (playerTurn > 9) {
    gameOver = true;
    wLD.innerHTML = "It's a draw!";
    playerTwo.classList.remove("currentP-background");
    console.log("its a draw");
  }
}

// for today, need to append an element, to display who won or if it was a draw
// needs styling and some personality put into it. but it works.
