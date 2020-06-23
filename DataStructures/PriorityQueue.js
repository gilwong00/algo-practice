/**
 * the same as the queue but we also specifiy the priroity of the element in the queue
 * elements with a higher priority(ascending) 1 being highest are set to the beginning of the queue, same priority, treat the same as a queue
 */

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    // empty queue, just add
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;

      for (let i = 0; i < this.collection.length; i++) {
        // element is an array with the value and priority, the 1 index is the priority of the element
        // if the element in the collection has a larger priority, place element before that index
        if (element[1] < this.collection[i][1]) {
          // checking priority
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    const value = this.collection.shift();
    return value[0];
  }

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

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(['tom', 3]);
priorityQueue.enqueue(['ron', 1]);
priorityQueue.enqueue(['andy', 2]);
priorityQueue.print();
priorityQueue.enqueue(['leslie', 4]);
priorityQueue.enqueue(['ann', 4]);
priorityQueue.print();
