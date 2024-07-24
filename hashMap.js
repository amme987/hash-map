class HashMap {
  capacity = 16;
  loadFactor = 0.75;

  constructor() {
    // this.key = key;
    // this.value = value;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  // takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }

  set(key, value) {
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.map(obj => obj.key).indexOf(key);
    console.log(this.hash(key));
    if (index !== -1) {
      bucket[index].value = value;
    } else {
      bucket.push({ key, value });

      // If stored keys > capacity * load this.loadFactor, grow buckets size and rehash table
      if (this.length() > this.capacity * this.loadFactor) {
        this.capacity *= 2;

        let entries = this.entries();
        let newBuckets = Array.from({ length: this.capacity }, () => []);

        entries.forEach(obj => {
          [key, value] = obj;
          newBuckets[this.hash(key)].push({ key, value });
        });
        this.buckets = newBuckets;
      }
    }
  }

  // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    console.log(`this: ${this}`);
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.map(obj => obj.key).indexOf(key);

    if (index !== -1) {
      return bucket[index].value;
    }

    return null;
  }

  // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    let bucket = this.buckets[this.hash(key)];
    return bucket.map(obj => obj.key).includes(key);
  }

  // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and
  // return true.If the key isn’t in the hash map, it should return false.
  remove(key) {
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.map(obj => obj.key).indexOf(key);

    if (index !== -1) {
      bucket.splice(index, 1);
      return true;
    }

    return false;
  }

  // returns the number of stored keys in the hash map.
  length() {
    let count = 0;
    for (let arr of this.buckets) {
      count += arr.length;
    }
    return count;
  }

  // removes all entries in the hash map.
  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  // returns an array containing all the keys inside the hash map.
  keys() {
    let keys = [];
    for (let i of this.buckets) {
      for (let j of i) {
        keys.push(j.key);
      }
    }
    return keys;
  }

  // returns an array containing all the values.
  values() {
    let values = [];
    for (let i of this.buckets) {
      for (let j of i) {
        values.push(j.value);
      }
    }
    return values;
  }

  // returns an array that contains each key, value pair.
  entries() {
    let entries = [];
    for (let i of this.buckets) {
      for (let j of i) {
        entries.push([j.key, j.value]);
      }
    }
    return entries;
  }
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

// console.log(JSON.stringify(test));

// test.set('hat', 'yellow');
// console.log(JSON.stringify(test));

// console.log(test.length());
console.log(JSON.stringify(test));

test.set('moon', 'silver');
console.log(JSON.stringify(test));
// console.log(test);
// console.log(JSON.stringify(test));

// TODO: load and capacity factors
