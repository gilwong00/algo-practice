// given an array ints and a value, find all pairs that multiplied equals the value

// brute force solution
function findPairs(array, sum) {
  const results = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] * array[j] === sum) {
        results.push([array[i], array[j]])
      }
    }
  }

  console.log('results', results)
}

findPairs([1, 2, 4, 6, 5, 10], 20);


// optimized solution
function getPairs(arr, sum) {
  const pairs = [];
  const map = {};

  for (let num of arr) {
    map[num] = map[num] + 1 || 1;
    const divisor = sum / num;
    
    if (map[divisor]) {
      pairs.push([num, divisor])
    }
  }

  console.log('pairs', pairs)
}

getPairs([1, 2, 4, 6, 5, 10], 20);