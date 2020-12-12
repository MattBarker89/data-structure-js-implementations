// STACK is a linear data structure, a collection of items.
// stacks are last in first out (LIFO) and an 
// example of a stack is a printer queue

class Stack {
  constructor() {
    this.storage = {}
    this.size = 0;
  }
  // Push adds an item to the end of the stack
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  // Pop removes the last items from the end of the stack
  // and returns it
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
    }
  // Peek returns the last item in the stack
  // But does not remove it.
  peek() {
    return this.storage[this.size]
  }
}