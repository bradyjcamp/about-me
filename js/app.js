'use strict';

let user = prompt('What is your name?');

alert('Welcome ' + user + ', glad you are here! Please answer these next questions using "yes" or "no", or "y" or "n".');

let answerOne = prompt('Am I from Washington?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  alert('That is correct!');
  // console.log('That is correct!');
}
else if(answerOne === 'no' || answerOne === 'n') {
  // console.log('Oops wrong answer! I am in fact from Arlington, Washington!');
  alert('Oops wrong answer! I am in fact from Arlington, Washington!');
} else {
  // console.log('Please follow the instructions and answer yes or no');
  alert('Please follow the instructions and answer yes or no');
}
let answerTwo = prompt('Do I have any siblings?');

if(answerTwo === 'yes' || answerTwo === 'y') {
  alert('Correct! I have two, an older brother, and an older sister. Yes, I am the youngest therefore the favorite.');
  // console.log('Correct! I have two, an older brother, and an older sister. Yes, I am the youngest therefore the favorite.');
}
else if(answerTwo === 'no' || answerTwo === 'n') {
  // console.log('Incorrect... I have two siblings.');
  alert('Incorrect... I have two siblings.');
} else {
  // console.log('Please follow the instructions and answer yes or no');
  alert('Please follow the instructions and answer yes or no');
}

let answerThree = prompt('Am I at least 6 feet tall?');

if(answerThree === 'yes' || answerThree === 'y') {
  alert('I wish... I am just shy coming in at 5 feet 10 inches.');
  // console.log('I wish... I am just shy coming in at 5 feet 10 inches.');
}
else if(answerThree === 'no' || answerThree === 'n') {
  // console.log('Correct! Unfortunately...');
  alert('Correct! Unfortunately...');
} else {
  // console.log('Please follow the instructions and answer yes or no');
  alert('Please follow the instructions and answer yes or no');
}

let answerFour = prompt('Do I have a college degree?');

if(answerFour === 'yes' || answerFour === 'y') {
  alert('Indeed I do! I have my Bachelors Degree in Business Management.');
  // console.log('Indeed I do! I have my Bachelors Degree in Business Management.');
}
else if(answerFour === 'no' || answerFour === 'n') {
  // console.log('Incorrect. I have my Bachelors Degree in Business Management.');
  alert('Incorrect. I have my Bachelors Degree in Business Management.');
} else {
  // console.log('Please follow the instructions and answer yes or no');
  alert('Please follow the instructions and answer yes or no');
}


let answerFive = prompt('Am I a good artist?');

if(answerFive === 'yes' || answerFive === 'y') {
  alert('Not even close! If you could take one look at my handwriting you would know that I am no artist.');
  // console.log('Not even close! If you could take one look at my handwriting you would know that I am no artist.');
}
else if(answerFive === 'no' || answerFive === 'n') {
  // console.log('Correct! I am a horrible artist! I will just let the computer do all the work.');
  alert('Correct! I am a horrible artist! I will just let the computer do all the work.');
} else {
  // console.log('Please follow the instructions and answer yes or no');
  alert('Please follow the instructions and answer yes or no');
}
alert('Enough with the pop quiz. Come check out my website, ' + user + ', and learn some more about me!');


document.getElementById('name').innerHTML = user;
