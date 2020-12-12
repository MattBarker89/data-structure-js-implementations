// QUEUE is a linear data structure
// they are first in first out (FIFO)
// an example of a queue is a printer queue.

class Queue {
  constructor() {
    this.storage = {}
    this.head = 0;
    this.tail = 0;
  }

  // Enqueue adds an element to the current tail
  // and increments that, the tail will increase
  // by 1 every time something is added 
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  // Dequeue removes the first element, or the 'head'
  // and then increments the head before returning it.
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }

}