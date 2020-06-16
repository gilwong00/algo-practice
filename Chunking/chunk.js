// divide an array into subarrays(chunks). The sub arrays will be the length of the passed in size

function chunk(array, size) {
  const chunks = [];
  let index = 0;

  while(index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }
  console.log('chunks', chunks)
}

chunk([1,2,3,4,5,6,7,8], 2);