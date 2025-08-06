// Jsou primitivní datové typy objekty?
// Object wrapper
const primitiveString = 'David';
const stringObject = new String(`Já jsem ${primitiveString}`);
console.log(stringObject.length);

console.log('-----------------');

const primitiveNumber = 123.433;
const numberObject = new Number(152.321);
console.log(numberObject.toFixed(1));

console.log('-----------------');

const primitiveBoolean = true;
const booleanObject = new Boolean(false);
console.log(booleanObject.toString());

console.log('-----------------');

// Primitivní datové typy
console.log(typeof 'David');  // object
console.log(typeof 10);  // object
console.log(typeof true);   // object
console.log(typeof undefined);  // undefined
console.log(typeof null); // object
console.log(typeof Symbol('test'));  // Symbol

// Neprimitivní datové typy
console.log(typeof {});  // object
console.log(typeof []);  // object
console.log(typeof function () {});  // object