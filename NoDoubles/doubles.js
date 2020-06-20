/*
  Don't Roll Doubles!
  John is playing a dice game. The rules are as follows.
  Roll two dice.
  Add the numbers on the dice together.
  Add the total to your overall score.
  Repeat this for three rounds.
  But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!
  Create a function which takes in a matrix as input, and return John's score after his game has ended.
  Examples
  diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21
  diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0
  diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
  Notes
  Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
  John only has two dice and will always give you outcomes for three rounds.
*/

function doubles(rolls) {
  let totalScore = 0;

  for (let i = 0; i < rolls.length; i++) {
    for (let j = 0; j < rolls[i].length; j++) {
      if (rolls[i][j] === rolls[i][j + 1]) {
        return 0;
      }

      totalScore += rolls[i][j];
    }
  }

  return totalScore;
}

console.log(
  doubles([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
);

console.log(
  doubles([
    [1, 1],
    [5, 6],
    [6, 4]
  ])
);
