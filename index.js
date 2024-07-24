// This file is for testing purposes
import { HashMap } from './hashMap.js';

const test = new HashMap();
console.log(test);

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

test.set('elephant', 'turqoise');
console.log(JSON.stringify(test));

test.set('moon', 'silver');
test.set('carrot', 'vegetable');
console.log(JSON.stringify(test));

console.log(test.get('apple')); // red
console.log(test.get('ocean')); // null

console.log(test.has('elephant')); // true
console.log(test.has('ocean')); // false

console.log(test.remove('carrot')); // true
console.log(JSON.stringify(test));
console.log(test.remove('pliers')); // false

console.log(test.length()); // 12
test.set('trash can', 'steel');
console.log(JSON.stringify(test));
console.log(test.length()); // 13

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test);
