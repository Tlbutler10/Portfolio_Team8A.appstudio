prompt('Would you like to play The Big Adventure?')
alert("There are 6 rooms you need to visit: Kitchen, Living Room, Master Bedroom, Bathroom, Game Room, and Man Cave.")
alert("You must visit each of the six rooms at least once to win the game")
alert("The program will not stop until you win")
alert("This is how you move: You will be given a choice to go forward, left, or right?")
prompt('Are you ready')
let nameOFGame = "The Big Adventure"
let moveArray = []
let kitchen = ['forward']
let masterBedroom = ['forward', 'forward']
let bathroom = ['forward','forward','forward']
let livingRoom = ['forward','forward','forward', 'right'] 
let gameRoom = ['forward','forward','forward', 'right', 'left']
let manCave = ['forward','forward','forward', 'right', 'left','right']
let move1 = prompt('forward, left, or right')
moveArray.push(move1)
console.log(moveArray);

switch(moveArray) {
case kitchen:
alert('Welcome to the Kitchen');
let move2 = prompt('forward, left, or right');
moveArray.push(move2);
console.log(moveArray);
break;
case masterBedroom:
alert('Welcome to the Master Bedroom');
let move3 = prompt('forward, left, or right');
moveArray.push(move3);
console.log(moveArray);
break;
case bathroom:
alert('Welcome to the Bathroom');
let move4 = prompt('forward, left, or right');
moveArray.push(move4);
console.log(moveArray);
break;
case livingRoom:
alert('Welcome to the Living Room');
let move5 = prompt('forward, left, or right');
moveArray.push(move5);
console.log(moveArray);
break;
case gameRoom:
alert('Welcome to the Game Room');
let move6 = prompt('forward, left, or right');
moveArray.push(move6);
console.log(moveArray);
break;
case manCave:
alert('Welcome to the Man Cave');
alert(`Congratulations, you have won ${nameOfGame}`);
console.log(moveArray);
break;
default:
prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
let moveRandom = prompt('forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
}

/*

let rooms = []
alert("Welcome to the game, your task is to navigate your way through the house. Once you make it through all six rooms, you win.")
let ready = prompt("Are you ready?")
if (ready === "no" || ready === "No" || ready === "NO") {
  alert("You lose")
} else if (ready === "yes" || ready === "Yes" || ready === "YES"){
  alert("You enter the house")

moveArray.push(move1)
let move2 = prompt('forward, left, or right')
let move3 = prompt('forward, left, or right')
let move4 = prompt('forward, left, or right')
let move5 = prompt('forward, left, or right')
let move6 = prompt('forward, left, or right')







} else { alert("I take that as a no, you lose.") }

*/