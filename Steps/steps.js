/*
  write a funcition that takes a position number (N)
  the function should log a step using # to represent N
  the step should also have spaces on the rite

  steps (2)
  '# '
  '##'

  steps(4)
  '#   '
  '##  '
  '### '
  '####'
*/

/*
  think of n as a n by n grid

  solution, look at each set of steps as a row and a column.
  iterate through each row, then iterate through columns
  if the row is greater than or equal to the current column column we will 
  print a # if not we will add a space
*/

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

steps(4);

// recursion
function recurseSteps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log('stair', stair);
    return recurseSteps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  recurseSteps(n, row, stair);
}

recurseSteps(4);
