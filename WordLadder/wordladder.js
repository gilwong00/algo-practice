function ladderLength(beginWord, endWord, wordList) {
  let level = 1;
  let queue = [beginWord];
  const set = new Set(wordList);
  const seen = new Set(queue);

  while (queue.length) {
    const next = [];

    for (let word of queue) {
      if (word === endWord) return level;

      const arr = word.split('');

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 26; j++) {
          arr[i] = String.fromCharCode(97 + j);

          const newValue = arr.join('');

          if (!seen.has(newValue) && set.has(newValue)) {
            next.push(newValue);
            seen.add(newValue);
          }
          arr[i] = word[i];
        }
      }
    }
    queue = next;
    level++;
  }

  return 0;
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
); // returns 5

console.log(ladderLength('hot', 'dog', ['hot', 'dog', 'dot'])); // returns 3
