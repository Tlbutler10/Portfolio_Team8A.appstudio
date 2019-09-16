prompt('Would you like to play The Big Adventure?')
alert("There are 6 rooms you need to visit: Kitchen, Living Room, Master Bedroom, Bathroom, Game Room, and Man Cave.")
alert("You must visit each of the six rooms at least once to win the game")
alert("The program will not stop until you win")
alert("This is how you move: You will be given a choice to go forward, left, or right?")
prompt('Are you ready')
let moveArray = []
let kitchen = ['forward']
let masterBedroom = ['forward','forward']
let bathroom = ['forward','forward','forward']
let livingRoom = ['forward','forward','forward','right'] 
let gameRoom = ['forward','forward','forward','right','left']
let manCave = ['forward','forward','forward','right','left','right']
let move1 = prompt('forward, left, or right')
moveArray.push(move1)
console.log(moveArray);

if (moveArray = ['forward']){
alert('Welcome to the Kitchen');
let move2 = prompt('forward, left, or right');
moveArray.push(move2);
console.log(moveArray);
} else if (moveArray = ['forward','forward']){
  alert('Welcome to the Master Bedroom');
let move3 = prompt('forward, left, or right');
moveArray.push(move3);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward']){
  alert('Welcome to the Bathroom');
let move4 = prompt('forward, left, or right');
moveArray.push(move4);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right']){
 alert('Welcome to the Living Room');
let move5 = prompt('forward, left, or right');
moveArray.push(move5);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right','left']){
 alert('Welcome to the Game Room');
let move6 = prompt('forward, left, or right');
moveArray.push(move6);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right','left','right']){
  alert('Welcome to the Man Cave');
  let nameOfGame = "The Big Adventure";
alert(`Congratulations, you have won ${nameOfGame}`);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
}
if (moveArray = ['forward']){
alert('Welcome to the Kitchen');
let move2 = prompt('forward, left, or right');
moveArray.push(move2);
console.log(moveArray);
} else if (moveArray = ['forward','forward']){
  alert('Welcome to the Master Bedroom');
let move3 = prompt('forward, left, or right');
moveArray.push(move3);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward']){
  alert('Welcome to the Bathroom');
let move4 = prompt('forward, left, or right');
moveArray.push(move4);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right']){
 alert('Welcome to the Living Room');
let move5 = prompt('forward, left, or right');
moveArray.push(move5);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right','left']){
 alert('Welcome to the Game Room');
let move6 = prompt('forward, left, or right');
moveArray.push(move6);
console.log(moveArray);
} else if (moveArray = ['forward','forward','forward','right','left','right']){
  alert('Welcome to the Man Cave');
  let nameOfGame = "The Big Adventure";
alert(`Congratulations, you have won ${nameOfGame}`);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
}



/*

if (moveArray = ['forward']){
alert('Welcome to the Kitchen');
let move2 = prompt('forward, left, or right');
moveArray.push(move2);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
let moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }
  
if (moveArray = ['forward','forward']){
  alert('Welcome to the Master Bedroom');
let move3 = prompt('forward, left, or right');
moveArray.push(move3);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }
  
if (moveArray = ['forward','forward','forward']){
  alert('Welcome to the Bathroom');
let move4 = prompt('forward, left, or right');
moveArray.push(move4);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }

if (moveArray = ['forward','forward','forward','right']){
 alert('Welcome to the Living Room');
let move5 = prompt('forward, left, or right');
moveArray.push(move5);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }
  
if (moveArray = ['forward','forward','forward','right','left']){
 alert('Welcome to the Game Room');
let move6 = prompt('forward, left, or right');
moveArray.push(move6);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }
  
if (moveArray = ['forward','forward','forward','right','left','right']){
  alert('Welcome to the Man Cave');
  let nameOfGame = "The Big Adventure";
alert(`Congratulations, you have won ${nameOfGame}`);
console.log(moveArray);
} else {
  moveArray.pop();
console.log(moveArray);
moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
  }
*/



/*

switch(moveArray) {
case ('forward'):
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
moveArray.pop();
console.log(moveArray);
let moveRandom =prompt('Sorry, you have hit a wall choose a different option, forward, left, or right');
moveArray.push(moveRandom);
console.log(moveArray);
}
*/
