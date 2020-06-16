// Assume no special characters

function isPalidrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log('true', isPalidrome('racecar'));
console.log('false', isPalidrome('yeet'))