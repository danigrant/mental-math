let level = 0;
let score = 0;

let Levels = [
  {
    ruleName: 'Adding large numbers',
    ruleDescription: 'Round up the large numbers to a multiple of ten, then add the numbers and subtract what you initially added to round them up.',
    ruleExample: '644 + 238<br /><br />= 650 + 240 - 8<br /><br /> = 890 - 8<br /><br /> = 882',
    ruleId: 0
  },
  {
    ruleName: 'Multiplying two digit numbers by 11',
    ruleDescription: 'Add the two digit number and make that value the middle number. If the added value is two digits, add the first digit to the first digit of the two digit number and then put the second digit in the middle of the two digit number.',
    ruleExample: '25 x 11<br /><br /> = 2 (2+5) 5<br /><br />275<br /><br />78 x 11<br /><br />= (7+1) 5 8<br /><br />= 858',
    ruleId: 1
  },
  {
    ruleName: 'Square a two digit number that ends in 5',
    ruleDescription: 'Multiply the first digit of the two digit number by itself plus one. Then tack on 25 to the end.',
    ruleExample: '45 squared = [4 x (4 + 1)] & 25<br /><br />[4 x (4 + 5)] = 20<br /><br />20 & 25 = 2025<br /><br />45 squared = 2025',
    ruleId: 2
  },
  {
    ruleName: 'Multiplying large numbers when one is even',
    ruleDescription: 'If one of the numbers is even, divide that number by half and then multiply the other number by 2. This should simplify the problem.',
    ruleExample: '',
    ruleId: 2
  },
  {
    ruleName: '',
    ruleDescription: '',
    ruleExample: '',
    ruleId: 2
  }
]


void async function main() {
  renderHomePage()
}()

async function renderHomePage() {
    // render all the options into a dropdown
    let optionsHTML = Levels.map((rule, i) => `<div id="dropdown-rule-${i}">${i + 1}: ${rule.ruleName}</div>`)
    $('#dropdown-content').html(optionsHTML)

    // handle dropdown objects TODO

    // handle getStartedButton
    $('#get-started-button').on('click', () => {
      renderLevelPage(level)
    })
}

async function renderLevelPage(level) {
  $('#home-page').addClass('hide')
  $('#problem-page').addClass('hide')
  $('#level-page').removeClass('hide')
  score = 0

  $('.level-name').text(`Level ${level + 1}`)
  $('.level-desc').html(`${Levels[level].ruleDescription}`)
  $('.level-example').html(`${Levels[level].ruleExample}`)

  // handle getStartedButton
  $('#start-button').on('click', () => {
    renderProblemPage(level)
  })
}

async function renderProblemPage(level) {
  $('#level-page').addClass('hide')
  $('#problem-page').removeClass('hide')

  let problem = await generateProblem(level)
  $('#math-problem').text(problem.problem)
  let answers = await generateAnswers(level, problem.answer)
  let multipleChoiceHTML = answers.map((answer, index) => `<div class="answer button" id="answer-${index}">${answer}</div>`)
  $('#answers').html(multipleChoiceHTML)

  $('#answers div').on('click', (e) => {
    if(e.target.innerText == problem.answer) {
      // hooray!
      $('#hooray').removeClass('hide')

      setTimeout(function(){
        $('#hooray').addClass('hide')

        // up the score by one
        score++

        // if (score < 3) go to the next question
        // if score == 3 go to the next level
        if (score < 3) {
          renderProblemPage(level)
        } else if (score == 3) {
          level++
          renderLevelPage(level)
        }
      }, 600);
    } else {
      // gray out the wrong answer and show a wrong icon on it
      $(e.target).removeClass('button')
      $(e.target).addClass('greyedOut')
    }
  })
}

async function generateProblem(level) {
  if (Levels[level].ruleId == 0) {
    // add large two digit numbers
    let a = Math.floor(Math.random() * (500 - 100) + 100)
    let b = Math.floor(Math.random() * (500 - 100) + 100)
    return { problem: `${a} + ${b}`, answer: a + b }
  } else if (Levels[level].ruleId == 1) {
    // two digit number times 11
    let a = Math.floor(Math.random() * (99 - 12) + 12)
    return { problem: `${a} x 11`, answer: a * 11 }
  } else if (Levels[level].ruleId == 2) {
    // square a two digit number that ends in a 5
    let a = Math.floor(Math.random() * 9)
    let b = parseInt(`${a}5`)
    return { problem: `${b} squared`, answer: b * b }
  }
}

async function generateAnswers(level, answer) {
  if (Levels[level].ruleId == 0) {
    // add large two digit numbers
    let answerArray = [Math.floor(Math.random() * (2000 - 200) + 200), Math.floor(Math.random() * (2000 - 200) + 200), Math.floor(Math.random() * (2000 - 200) + 200), answer]
    return answerArray.sort((a, b) => a - b);
  } else if (Levels[level].ruleId == 1) {
    // two digit number times 11
    let answerArray = [Math.floor(Math.random() * (900 - 150) + 150), Math.floor(Math.random() * (900 - 150) + 150), Math.floor(Math.random() * (900 - 150) + 150), answer]
    return answerArray.sort((a, b) => a - b);
  } else if (Levels[level].ruleId == 2) {
    // square a two digit number that ends in a 5
    let answerArray = [Math.floor(Math.random() * (9025 - 225) + 225), Math.floor(Math.random() * (9025 - 225) + 225), Math.floor(Math.random() * (9025 - 225) + 225), answer]
    return answerArray.sort((a, b) => a - b);
  }
}

async function checkAnswer(level, problem) {

}
// TODO
// every time someone solves a math problem update a counter
// also every time someone solves a level
// so i can know how many math problems we've done
