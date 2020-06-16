// Should return the most repeated character in a string

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let mostRepeated = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; 
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      mostRepeated = char;
    }
  }
  
  console.log(`char ${mostRepeated} was repeasted ${max} times`); // should print g was repeated 6 times 
}

maxChar('aaabbbcccgggggg')

