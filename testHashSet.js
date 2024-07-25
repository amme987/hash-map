// This file is for testing purposes
import { HashSet } from './hashSet.js';

const test = new HashSet();
console.log(test);

test.set('apple');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');
test.set('grape');
test.set('hat');
test.set('ice cream');
test.set('jacket');
test.set('kite');
test.set('lion');

console.log(JSON.stringify(test));

test.set('elephant');
console.log(JSON.stringify(test));

test.set('moon');
test.set('carrot');
console.log(JSON.stringify(test));

console.log(test.get('apple')); // apple
console.log(test.get('ocean')); // null

console.log(test.has('elephant')); // true
console.log(test.has('ocean')); // false

console.log(test.remove('carrot')); // true
console.log(JSON.stringify(test));
console.log(test.remove('pliers')); // false

console.log(test.length()); // 12
test.set('trash can');
console.log(JSON.stringify(test));
console.log(test.length()); // 13

console.log(test.keys());
test.clear();
console.log(test);
