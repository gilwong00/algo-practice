/**
 * FILO (First In Last Out)
 * A stack has 4 methods
 * push - add
 * pop - remove
 * peek - returns last element
 * size returns length of stack
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

// test case

const stack = new Stack();

stack.push(1);
stack.push(4);
console.log(stack.size()); // should return 2 (length)
console.log(stack.peek()); // should return 4
stack.pop();
console.log(stack.size()); // should return 1
