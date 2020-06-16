// listen, silent

// solution one using character maps

function anagrams(string1, string2) {
  const map1 = buildMap(string1);
  const map2 = buildMap(string2);

  for (let char in map1) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }

  return true;
}

function buildMap(str) {
  str = str.replace(/[^\w]/g, "").toLowerCase();

  let map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
};

console.log(anagrams("silent", "listen")) // true
console.log(anagrams("test", "rest")) // false

// solution 2
// clean, sort then join string and compare

function cleanAndSort(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}


function anagrams2(str1, str2) {
  return cleanAndSort(str1) === cleanAndSort(str2)
}

console.log(anagrams2("silent", "listen")) // true
console.log(anagrams2("test", "rest")) // false


