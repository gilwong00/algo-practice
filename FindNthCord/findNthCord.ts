/*
Binary tree that represents a string

A Cord tree consists of 2 types of nodes:
   Internal Node which contains the following properties:
      Length - the length of the string contained in its subtree
      Left child
      Right child
   Leaf Node which contains the following properties:
      Value - a string value
      Length - the length of the string

  Example 1: Leaf (Length: 5, Value: ABCDE)

  Example 2:
    Internal (Length 26)
      left: Leaf (Length: 5, Value: ABCDE)
      right: Internal (Length 21)
        left: Leaf (Length: 10, Value: FGHIJKLMNO)
        right: Leaf (Length: 11, Value: PQRSTUVWXYZ)

        represents ABCDEFGHIJKLMNOPQRSTUVWXYZ
*/

interface Leaf {
  length: number;
  value: string;
}

interface Internal {
  length: number;
  leftNode: Leaf | Internal;
  rightNode: Leaf | Internal;
}

const cord = {
  length: 26,
  leftNode: {
    length: 5,
    value: 'ABCDE'
  },
  rightNode: {
    length: 21,
    leftNode: {
      length: 10,
      value: 'FGHIJKLMNO'
    },
    rightNode: {
      length: 11,
      value: 'PQRSTUVWXYZ'
    }
  }
} satisfies Internal;

// write a function given a cord, and index n
//  returns the nth char of the cord
function getNthChar(cord: Internal | Leaf, n: number): string {
  // console.log("getNthChar", n, cord);
  // ignore a base case
  // make a utility to check
  if ('leftNode' in cord) {
    if (n >= cord.leftNode.length) {
      const leftLength = cord.leftNode.length;
      return getNthChar(cord.rightNode, n - leftLength);
    }
    return getNthChar(cord.leftNode, n);
  }
  //   console.log("pass internal check", cord, n);
  //   console.log("value", cord.value[8]);
  // if no left or right node then its a leaf
  // check leaf for value
  //   console.log("cord.value", cord.value);
  //   console.log("n", n);
  return cord.value[n];
}

for (let i = 0; i < cord.length; ++i) {
  console.log(i, getNthChar(cord, i));
}

// console.log(getNthChar(cord, 15));
