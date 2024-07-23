class HashMap {
  capacity;
  loadFactor;

  constructor() {
    // this.key = key;
    // this.value = value;
    this.buckets = Array.from({ length: 16 }, () => []);
  }

  // takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.map(obj => obj.key).indexOf(key);
    if (index !== -1) {
      bucket[index].value = value;
    } else {
      bucket.push({ key, value });
    }
  }

  // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {}

  // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {}

  // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {}

  // returns the number of stored keys in the hash map.
  length() {}

  // removes all entries in the hash map.
  clear() {}

  // returns an array containing all the keys inside the hash map.
  keys() {}

  // returns an array containing all the values.
  values() {}

  // returns an array that contains each key, value pair.
  entries() {}
}

const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(JSON.stringify(test));

test.set('hat', 'yellow');
console.log(JSON.stringify(test));
