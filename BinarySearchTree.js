
// The tree is a hierarchical or none linear data structure.
// it consists of nodes, each node has 2 pieces of information.
// the data value itself and a pointer that references other node.
// the starting node is called the root node, the ones beneath are child nodes.
// the node above is a parent. 
// A binary tree is type of tree where each node has max of 2 immediate children, 
// it is possible to have 1 or 0 children.
// A binary search tree (BST) is a tree that naturally stays sorted 
// ever left child must be left than its parent, ever right must be greater than its parent 
// An example of a BST is someone is trying to create a new account on a Reddit. 
// They have to come up with a unique username in order to create an account. 
// They start typing in characters, and each time they do this, 
// Reddit will let the user know if those set of characters are already taken up (invalid) or free to use (valid). 
// How does Reddit know whether the username is taken or not? They have a sorted list (like the binary tree) 
// that allows them to search quickly through the millions if not billions of usernames already taken. 
// Searching an extremely large list in this way would be much faster than starting at the 
// beginning of the list and checking every single username to see if it is already taken.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }
  // Size returns the number of nodes
  size() {
    return this.count;
  }

  // Insert traverses the tree and adds a new node
  // in the correct location
  insert(value) {
    this.count++;
    let newNode = new Node(value)
    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode; 
          // if left child, look left again
        } else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      if (value > node.value ) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
          // if right child, look right again
        } else {
          searchTree(node.right);
        }
      }
    }
    searchTree(this.root);
  }

  // Min returns the smallest number found in the tree.
  min() {
    let currentNode = this.root;
    // continue traversing left until no more children
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // Max returns the highest number in the tree.
  max() {
    let currentNode = this.root;
    // continue traversing right until no more children
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  // Contains returns if a value exists in the tree.
  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if(value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // Depth first search - branch by branch
  // in-order: Used to get the values of the nodes in non-decreasing order in a BST.
  // in-order
  // <left>, <root>, <right>
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      // if left exists, go left again
      if (node.left) {
        traverse(node.left);
      } 
      // capture root node value
      result.push(node.value);
      // if right child exists, go right again
      if (node.right) { 
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  // Pre-order: Used to create a copy of a tree. 
  // For example, if you want to create a replica of a tree, 
  // put the nodes in an array with a pre-order traversal. 
  // Then perform an Insert operation on a new tree for each value in the array. 
  // You will end up with a copy of your original tree.
  // <root>, <left>, <right>
  dfsPreOrder() {
    let result = []
    const traverse = (node) => {
      // capture root node value
        result.push(node.value);
      // if left exists, go left again
      if (node.left) {
        traverse(node.left);
      } 
      // if right child exists, go right again
      if (node.right) { 
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  // Post-order
  // Used to delete a tree from leaf to root
  // <left>, <right>, <root>
  dfsPostOrder() {
    let result = []
    const traverse = (node) => {
      // if left exists, go left again
      if (node.left) {
        traverse(node.left);
      } 
      // if right child exists, go right again
      if (node.right) { 
        traverse(node.right);
      }
      // capture root node value
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  // Breadth first search - level by level
  // uses a queue
  bfs() {
    let result = [];
    let  queue = [];
    queue.push(this.root);
    while(queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
}


















