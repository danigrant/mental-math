let level = 0;
let score = 0;

void async function main() {

}()

async function renderHomePage() {
  
}

async function renderLevelPage(level) {

}

async function renderProblemPage(level) {

}

async function generateProblem() {

}

async function generateAnswers() {

}

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

// TODO
// every time someone solves a math problem update a counter
// also every time someone solves a level
// so i can know how many math problems we've done
