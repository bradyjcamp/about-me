'use strict';

let userScore = 0;
let user = prompt('What is your name?');
document.getElementById('name').innerHTML = user;
alert('Welcome ' + user + ', glad you are here! Please answer these next questions using "yes" or "no", or "y" or "n".');







function questionOne(){
  let answerOne = prompt('Am I from Washington?').toLowerCase();

  if(answerOne === 'yes' || answerOne === 'y') {
    userScore++;
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
}
questionOne();



function questionTwo(){
  let answerTwo = prompt('Do I have any siblings?').toLowerCase();

  if(answerTwo === 'yes' || answerTwo === 'y') {
    userScore++;
    alert('Correct! I have two, an older brother, and an older sister. Yes, I am the youngest therefore the favorite.');
  // console.log('Correct! I have two, an older brother, and an older sister. Yes, I am the youngest therefore the favorite.');
  } else if(answerTwo === 'no' || answerTwo === 'n') {
  // console.log('Incorrect... I have two siblings.');
    alert('Incorrect... I have two siblings.');
  } else {
  // console.log('Please follow the instructions and answer yes or no');
    alert('Please follow the instructions and answer yes or no');
  }
}
questionTwo();






function questionThree(){
  let answerThree = prompt('Am I at least 6 feet tall?').toLowerCase();

  if(answerThree === 'yes' || answerThree === 'y') {
    userScore++;
    alert('I wish... I am just shy coming in at 5 feet 10 inches.');
  // console.log('I wish... I am just shy coming in at 5 feet 10 inches.');
  } else if(answerThree === 'no' || answerThree === 'n') {
  // console.log('Correct! Unfortunately...');
    alert('Correct! Unfortunately...');
  } else {
  // console.log('Please follow the instructions and answer yes or no');
    alert('Please follow the instructions and answer yes or no');
  }
}
questionThree();







  let answerFour = prompt('Do I have a college degree?').toLowerCase();

  if(answerFour === 'yes' || answerFour === 'y') {
    userScore++;
    alert('Indeed I do! I have my Bachelors Degree in Business Management.');
  // console.log('Indeed I do! I have my Bachelors Degree in Business Management.');
  } else if(answerFour === 'no' || answerFour === 'n') {
  // console.log('Incorrect. I have my Bachelors Degree in Business Management.');
    alert('Incorrect. I have my Bachelors Degree in Business Management.');
  } else {
  // console.log('Please follow the instructions and answer yes or no');
    alert('Please follow the instructions and answer yes or no');
  }







  let answerFive = prompt('Am I a good artist?').toLowerCase();

  if(answerFive === 'yes' || answerFive === 'y') {
    userScore++;
    alert('Not even close! If you could take one look at my handwriting you would know that I am no artist.');
  // console.log('Not even close! If you could take one look at my handwriting you would know that I am no artist.');
  } else if(answerFive === 'no' || answerFive === 'n') {
  // console.log('Correct! I am a horrible artist! I will just let the computer do all the work.');
    alert('Correct! I am a horrible artist! I will just let the computer do all the work.');
  } else {
  // console.log('Please follow the instructions and answer yes or no');
    alert('Please follow the instructions and answer yes or no');
  }






alert('This is fun! Let\'s keep it going, ' + user + '!');









  let numberGuesses = 4;
  let myNumber = 6;
  let rightNumber = false;

  while (numberGuesses && !rightNumber) {
    let userGuess = prompt('What number am I thinking of between 1 and 10?');
    numberGuesses--;
    // console.log(typeof(userGuess));
    if (+userGuess === myNumber) {
      rightNumber = true;
      userScore++;
      alert('You got it right!');
    } else if (userGuess < myNumber) {
      alert('Too low!');
    } else if (userGuess > myNumber) {
      alert('Too high!');
    } if(numberGuesses === 0){
      alert('Whoops! Too many guesses! Answer was 6.');
    }
  }








  let guessLimit = 6;
  let favFood = ['raising cane\'s', 'chick-fil-a', 'taco bell'];

  circle: while(guessLimit){
    let foodAnswer = prompt('What is one of my top three favorite fast food restaurants?').toLowerCase();
    guessLimit--;
    for (let i = 0; i < favFood.length; i++){
      if (foodAnswer === favFood[i]){
        userScore++;
        alert('That is correct! Acceptable answers were raising cane\'s, chick-fil-a, and taco bell!');
        break circle;
      }
    }
    alert('Oops, you are wrong.');
    if(guessLimit === 0){
      alert('Out of guesses!');
    }
  }







alert('Here is your final score' + user + '. You got ' + userScore + ' out of 7 correct!');












// let rightAnswer = false;
// while (guessLimit && !rightAnswer) {
//   let foodGuess = prompt(
//     'What is one of my top three favorite fast food restaurants?').toLowerCase();
//   guessLimit--;
//   for (let i = 0; i < favFood.length; i++) {
//     if (foodGuess === favFood[i]) {
//       rightAnswer = true;
//       alert(
//         'That is correct! All available options were raising cane\'s, chick-fil-a, and taco bell.'
//       ); break;
//     } if (foodGuess !== favFood[i]) {
//       alert('Not quite!');
//     }
//   }
//   if (guessLimit === 0) {
//     alert(
//       'Out of guesses! Available options were raising cane\'s, chick-fil-a, and taco bell.'
//     );
//   }
// }
