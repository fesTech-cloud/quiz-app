'use strict'

// ========input field ==========
const inputAnswer1 = document.getElementById('Answer1')
const inputAnswer2 = document.getElementById('Answer2')
const inputAnswer3 = document.getElementById('Answer3')
const inputAnswer4 = document.getElementById('Answer4')
const inputAnswer5 = document.getElementById('Answer5')
const inputAnswer6 = document.getElementById('Answer6')
const inputAnswer7 = document.getElementById('Answer7')
const inputAnswer8 = document.getElementById('Answer8')

// =====wrong answer ======

//  ========Button submit ======
const answer1button = document.getElementById('option1_submit');
const answer2button = document.getElementById('option2_submit');
const answer3button = document.getElementById('option3_submit');
const answer4button = document.getElementById('option4_submit');
const answer5button = document.getElementById('option5_submit');
const answer6button = document.getElementById('option6_submit');
const answer7button = document.getElementById('option7_submit');
const answer8button = document.getElementById('option8_submit');



const checkAnswer = new Map();

checkAnswer.set('answer1', 'd')
checkAnswer.set('answer2', 'b')
checkAnswer.set('answer3', 'a')
checkAnswer.set('answer4', 'a')
checkAnswer.set('answer5', 'b')
checkAnswer.set('answer6', 'c')
checkAnswer.set('answer7', 'a')
checkAnswer.set('answer8', 'b')

console.log(checkAnswer.has('answer1'));


//  ==== remove button function ====
const removeButton = function (button) {
  return button.classList.add('hidden')
}

//   ========fuction that takes in currect number ==========
const correctAnswerFunction = function (...right) {
  const correctAnswer = document.querySelector(right).style.backgroundColor = 'green'
  return correctAnswer
}

//  =========Checking the wrong Answer =======
const wrongAnswersFunction = function (...wrong) {
  const wrongAnswers = document.querySelector(wrong).style.background = 'red'
  return wrongAnswers
}

// checking if its the right input 
// const inputCheckingValid = function (checkInput) {
//   if (checkAnswer.has(checkInput) !== checkInput) {
//     return checkInput
//   }
// }

let scoreArr = []

let score = document.getElementById('number')

//  =========Answer 1 =======
answer1button.addEventListener('click', function () {
  let mark1 = 10

  if (checkAnswer.get('answer1') === inputAnswer1.value) {
    correctAnswerFunction('#option1 #option1_d')
    scoreArr.push(mark1)
    removeButton(answer1button)
    inputAnswer1.value = ' ';

  } else if (checkAnswer.get('answer1') !== inputAnswer1.value) {
    correctAnswerFunction('#option1 #option1_d')
    wrongAnswersFunction(`#option1 .${inputAnswer1.value}`)
    removeButton(answer1button)
    inputAnswer1.value = ' ';
  }

})


//  ======= answer 2 =======
answer2button.addEventListener('click', function () {
  let mark2 = 10

  if (checkAnswer.get('answer2') === inputAnswer2.value) {
    correctAnswerFunction('#option2 #option2_b')
    scoreArr.push(mark2)
    removeButton(answer2button)
    inputAnswer2.value = ' '

  } else if (checkAnswer.get('answer2') !== inputAnswer2.value) {
    correctAnswerFunction('#option2 #option2_b')
    wrongAnswersFunction(`#option2 .${inputAnswer2.value}`)
    removeButton(answer2button)
    inputAnswer2.value = ' '
  }
})

//  ======Answer 3 ======

answer3button.addEventListener('click', function () {
  let mark3 = 10
  if (checkAnswer.get('answer3') === inputAnswer3.value) {
    correctAnswerFunction('#option3 #option3_a')
    scoreArr.push(mark3)
    removeButton(answer3button)
    inputAnswer3.value = ' '

  } else if (checkAnswer.get('answer3') !== inputAnswer3.value) {
    correctAnswerFunction('#option3 #option3_a')
    wrongAnswersFunction(`#option3 .${inputAnswer3.value}`)
    removeButton(answer3button)
    inputAnswer3.value = ' '
  }

  // console.log(scoreArr);

})



//  ====== Answer 4 ======
answer4button.addEventListener('click', function () {
  let mark4 = 10

  if (checkAnswer.get('answer4') === inputAnswer4.value) {
    correctAnswerFunction('#option4 #option4_a')
    scoreArr.push(mark4)
    removeButton(answer4button)
    inputAnswer4.value = ' '


  } else if (checkAnswer.get('answer4') !== inputAnswer4.value) {
    correctAnswerFunction('#option4 #option4_a')
    wrongAnswersFunction(`#option4 .${inputAnswer4.value}`)
    removeButton(answer4button)
    inputAnswer4.value = ' '

  }
})

//  ======Answer 5 ======
answer5button.addEventListener('click', function () {
  let mark5 = 10
  if (checkAnswer.get('answer5') === inputAnswer5.value) {
    correctAnswerFunction('#option5 #option5_b')
    scoreArr.push(mark5)

  } else if (checkAnswer.get('answer5') !== inputAnswer5.value) {
    correctAnswerFunction('#option5 #option5_b')
    wrongAnswersFunction(`#option5 .${ inputAnswer5.value}`)

  }
  removeButton(answer5button)
  inputAnswer5.value = ' '

})

//  =======Answer 6 ======
answer6button.addEventListener('click', function () {
  let mark6 = 10
  if (checkAnswer.get('answer6') === inputAnswer6.value) {
    correctAnswerFunction('#option6 #option6_c')
    scoreArr.push(mark6)

  } else if (checkAnswer.get('answer6') !== inputAnswer6.value) {
    correctAnswerFunction('#option6 #option6_c')
    wrongAnswersFunction(`#option6 .${inputAnswer6.value}`)

  }
  removeButton(answer6button)
  inputAnswer6.value = ' '

})

answer7button.addEventListener('click', function () {
  let mark7 = 10
  if (checkAnswer.get('answer7') === inputAnswer7.value) {
    correctAnswerFunction('#option7 #option7_a')
    scoreArr.push(mark7)

  } else if (checkAnswer.get('answer7') !== inputAnswer7.value) {
    correctAnswerFunction('#option7 #option7_a')
    wrongAnswersFunction(`#option7 .${inputAnswer7.value}`)

  }
  removeButton(answer7button)
  inputAnswer7.value = ' '

})


answer8button.addEventListener('click', function () {
  let mark8 = 10
  if (checkAnswer.get('answer8') === inputAnswer8.value) {
    correctAnswerFunction('#option8 #option8_b')
    scoreArr.push(mark8)

  } else if (checkAnswer.get('answer8') !== inputAnswer8.value) {
    correctAnswerFunction('#option8 #option8_b')
    wrongAnswersFunction(`#option8 .${inputAnswer8.value}`)

  }
  removeButton(answer8button)
  inputAnswer8.value = ' '

})

const checkScoreButton = document.getElementById('check_score_button')

checkScoreButton.addEventListener('click', function () {
  let sum = 0

  for (let i = 0; i < scoreArr.length; i++) {
    sum += scoreArr[i]
  }
  console.log(sum);

  localStorage.setItem('score', JSON.stringify(sum))
  checkScoreButton.setAttribute('href', 'score.html')
})