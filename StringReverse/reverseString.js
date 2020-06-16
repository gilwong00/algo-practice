// Reversing a string

//solution 1

function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  console.log('reversed', reversed)
}

reverse('apple');


// Solution 2

function reverse2(str) {
  return str.split('').reverse().join('')
}

console.log('reverse2', reverse2('apple'))