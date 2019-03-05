let level = 0;
let score = 0;

let ruleNum = [
  {
    ruleName: 'Adding large numbers',
    ruleDescription: 'Round up the large numbers to a multiple of ten, then add the numbers and subtract what you initially added to round them up.',
    ruleExample: '644 + 238\n\n= 650 + 240 - 8\n\n = 890 - 8\n\n = 882'
  },
  {
    ruleName: 'Multiplying two digit numbers by 11',
    ruleDescription: 'Add the two digit number and make that value the middle number. If the added value is two digits, add the first digit to the first digit of the two digit number and then put the second digit in the middle of the two digit number.',
    ruleExample: '25 x 11\n\n = 2 (2+5) 5\n\n275\n\n78 x 11\n\n= (7+1) 5 8\n\n= 858'
  }
]


void async function main() {
  renderHomePage()
}()

async function renderHomePage() {
    // render all the options into a dropdown
    let optionsHTML = ruleNum.map((rule, i) => `<div id="dropdown-rule-${i}">${i + 1}: ${rule.ruleName}</div>`)
    $('#dropdown-content').html(optionsHTML)

    // handle dropdown objects TODO

    // handle getStartedButton
    $('#get-started-button').on('click', () => {
      renderLevelPage(level)
    })
}

async function renderLevelPage(level) {

}

async function renderProblemPage(level) {

}

async function generateProblem() {

}

async function generateAnswers() {

}
// TODO
// every time someone solves a math problem update a counter
// also every time someone solves a level
// so i can know how many math problems we've done
