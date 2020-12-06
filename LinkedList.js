// Linked List are sequential collections of elements called 'Nodes'.
// These nodes can be stored anywhere in memory. and each node has a 
// pointer to the next and or previous node in the list. There are
// different flavours of LinkedLists such as; singley, doubley and
// even circular. It's tradeoffs are sacrificing lookup speed over
// inseertion and deletion speed.

// Node class definition that make up the elements
// used in a linkedList.
class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// LinkedList class definition. it starts with two empty nodes for
// both the head and tail.
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  // Apprend an element to the end of the list.
  append(value) {
    if (!this.tail ) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  // Prepend an element to the beginning of the list.
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  // Delete the head element in the list.
  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }
  // Delete the tail element in the list.
  deleteTail() {
    if (!this.tail) { 
      return null
    } else {
      let removedTail = this.tail
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }
  // Traverse the list searching for a value
  // and return the element that matches
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
