
// Primitive data types:
// Immutable and hold a single value.
// Examples: string, number, boolean, null, undefined, symbol, bigint
let x = 10;
let y = x; // Copy by value
x = 20;
console.log(x); // Output: 20
console.log(y); // Output: 10 

// Non-primitive data types:
// Mutable and hold multiple values or references.
// Examples: object, array, function.
let obj1 = { name: 'Alice' };
let obj2 = obj1; // Copy by reference
obj1.name = 'Bob';
console.log(obj2.name); // Output: 'Bob'

