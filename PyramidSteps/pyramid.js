/*
  Write a function that accepts a position number, N
  the function should log a pyramid shape
  with N levels using a #
  Make sure the pyramid has spaces on both sides

  pyramid(2)
  ' # '
  '###'

  pyramid(3)
  '  #  '
  ' ### '
  '#####'
*/

/* 
  Find column relationship
  when n = 2, we print 3 columns
  when n = 3, we print 5 columns
  columns = (n * 2) - 1; ie (2 * 2) - 1 = 3 or (3 * 2) - 1 = 5

  this gives us our columns to interate over.

  Determining midpoint
  if n = 3, we have 3 rows and 5 columns
  in a array columns would look like this [0,1,2,3,4] and rows would look like this [0,1,2];
  when row is 1, we need to display a # for index 1 2 3, so [ 0, #, #, #, 4]
  we need to find the center index of the columns and check the left and right index of the center by calculating the midpoint
  finding the middle. since columns is [0,1,2,3,4] the length is 5, if we do Math.floor(5 (length of columns)/2) this will return 2 which is the median element of the array
  show now we have our median we can use what row we are on to determine how many elements to the right and left need to display a #.
  If row = 0, then no other elements besides the median should display a #.
  if row = 1, then we display one element to the right and left as a #, if row is 2 then we display 2 to the each side;
*/

function printPyramid(n) {
  // find total columns
  const columns = n * 2 - 1;
  // finding the midpoint of the array
  const midpoint = Math.floor(Math.floor(columns / 2));

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < columns; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

printPyramid(3);
