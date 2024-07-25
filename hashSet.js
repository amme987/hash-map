export class HashSet {
  capacity = 16;
  loadFactor = 0.75;

  constructor() {
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

  set(key) {
    let bucket = this.buckets[this.hash(key)];

    if (bucket.indexOf(key) === -1) {
      bucket.push(key);

      // If stored keys > capacity * load this.loadFactor, grow buckets size and rehash table
      if (this.length() > this.capacity * this.loadFactor) {
        this.capacity *= 2;

        let keys = this.keys();
        let newBuckets = Array.from({ length: this.capacity }, () => []);

        keys.forEach(obj => {
          newBuckets[this.hash(obj)].push(obj);
        });
        this.buckets = newBuckets;
      }
    }
  }

  // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.indexOf(key);

    if (index !== -1) {
      return bucket[index];
    }

    return null;
  }

  // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    let bucket = this.buckets[this.hash(key)];
    return bucket.includes(key);
  }

  // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and
  // return true.If the key isn’t in the hash map, it should return false.
  remove(key) {
    let bucket = this.buckets[this.hash(key)];
    let index = bucket.indexOf(key);

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
    this.capacity = 16;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  // returns an array containing all the keys inside the hash map.
  keys() {
    let keys = [];
    // for (let i of this.buckets) {
    //   console.log(i);
    //   for (let j of i) {
    //     keys.push(j.key);
    //   }
    // }
    return this.buckets.flat();
  }
}
