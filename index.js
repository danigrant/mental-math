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
  $('#level-page').removeClass('hide')

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
    let a = Math.floor(Math.random() * (500 - 100) + 100)
    let b = Math.floor(Math.random() * (500 - 100) + 100)
    return { problem: `${a} + ${b}`, answer: a + b }
  } else if (Levels[level].ruleId == 1) {

  }
}

async function generateAnswers(level, answer) {
  if (Levels[level].ruleId == 0) {
    let answerArray = [Math.floor(Math.random() * (2000 - 200) + 200), Math.floor(Math.random() * (2000 - 200) + 200), Math.floor(Math.random() * (2000 - 200) + 200), answer]
    return answerArray.sort((a, b) => a - b);
  } else if (Levels[level].ruleId == 1) {

  }
}

async function checkAnswer(level, problem) {

}
// TODO
// every time someone solves a math problem update a counter
// also every time someone solves a level
// so i can know how many math problems we've done
