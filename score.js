const scoreName = document.querySelector('#name')
const scorePrint = document.querySelector('#scores')

const scoresPrint = function () {
  let scoreNameOutput = localStorage.getItem('name')
  let scoreOutput = localStorage.getItem('score')
  scoreNameOutput = JSON.parse(scoreNameOutput)
  scoreOutput = JSON.parse(scoreOutput)

  let firstLetter = scoreNameOutput.slice(0, 1)
  let others = scoreNameOutput.slice(1, scoreNameOutput.length)
  firstLetter = firstLetter.toUpperCase()
  scoreNameOutput = firstLetter + others
  scoreName.textContent = `${scoreNameOutput}`
  scorePrint.textContent = `${scoreOutput}`
}

scoresPrint()