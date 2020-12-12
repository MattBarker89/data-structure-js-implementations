// HashTables are data structures that use hashing to implement 
// an associative array, or mappings of 'key:value" pairs.
// Internally the backbone of a hashtable is a regular array.
// Their primary benefit is they are extremely fast at accessing 
// inserting or deleting values.

// The hash function takes in the key as a string, and the size of
// the table it is going to be used for. It then returns a 
// hashed key, which is the string converted into a number that can be used as
// an index for the array (fast lookup!). The '%' helps keep this number 
// random but still small.
const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey  % size 
}

// Hashtable class definition, the size is the number of buckets used
// those buckets get filled with an es6 Map() 
class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  // Add an item into the table 
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key,value);
  }
  // Remove an item from the table
  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }
  // Lookup an item with its key
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}