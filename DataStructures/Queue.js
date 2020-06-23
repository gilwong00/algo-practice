/**
 * First in First Out (FIFO)
 *
 */

class Queue {
  constructor() {
    // note an array is one example of what we can use as a queue. We can also use a linked list
    this.collection = [];
  }

  // push the first item onto the ququq
  enqueue(element) {
    this.collection.push(element);
  }

  // take an item off the queue, takes the first item from the collection
  dequeue() {
    return this.collection.shift();
  }

  // returns the first item at the front of the queue
  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    console.log(this.collection);
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
console.log('queue size', queue.size()); // should return 4
console.log('front of queue', queue.front()); // should return a
console.log('isEmpty should return false', queue.isEmpty());
queue.dequeue();
console.log('should return b as front', queue.front())
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log('isEmpty should return true', queue.isEmpty());