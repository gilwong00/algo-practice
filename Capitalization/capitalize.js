// capitalize the the first word of each sentence

function capitalize(str) {
  const strArr = str.split(' ');
  const output = [];

  for (let str of strArr) {
    output.push(str.charAt(0).toUpperCase() + str.slice(1));
  }
  
  console.log('output', output.join(' '))
}

capitalize('i like shoes')