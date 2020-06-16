// Reversing a string

function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  console.log('reversed', reversed)
}

reverse('apple');