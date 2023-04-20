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
var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");

// this code adds an event listener to the container and when you click, turns that box red
var playerTurn = 1;
function addOne() {
  playerTurn++;
}

// red player one, green player two
container.addEventListener("click", function (event) {
  var click = event.target;
  if (event.target.classList.length === 0 && playerTurn % 2 !== 0) {
    click.classList.add("red-background"),
      addOne(),
      playerOne.classList.add("blue-background"),
      playerTwo.classList.remove("blue-background");
  } else if (event.target.classList.length === 0 && playerTurn % 2 === 0) {
    click.classList.add("green-background"), addOne();
    playerTwo.classList.add("blue-background"),
      playerOne.classList.remove("blue-background");
  }
});

// if (boxArray[0, 1, 2].class === 'red-background') {

// }

// this code effectively switched between players, currently red and green

//   if boxes 123 or 546 or 789 = red.background then red wins
//if 147, 258, 369 have red, red win
// if 753, 159 have red then red win
