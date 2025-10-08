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
console.log(typeof 'David');        // string 
console.log(typeof 10);             // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object (bug v JS)
console.log(typeof Symbol('test')); // symbol 

// Neprimitivní datové typy (všechny jsou objekty)
console.log(typeof {});                 // object 
console.log(typeof []);                 // object 
console.log(typeof function (){});     // function (speciální typ objektu)
