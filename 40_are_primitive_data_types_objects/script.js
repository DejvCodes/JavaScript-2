// Jsou primitivní datové typy objekty?
const primitiveString = 'David';
const stringObject = new String(primitiveString);
const stringObject1 = new String(`Já jsem ${primitiveString}`);

console.log(primitiveString);

console.log(stringObject);
console.log(stringObject.length);

console.log(stringObject1);
console.log(stringObject1.length);

console.log('-----------------');

const primitiveNumber = 123.433;
const numberObject = new Number(152.321);   

console.log(primitiveNumber);

console.log(numberObject);
console.log(numberObject.toFixed(1));

console.log('-----------------');

const primitiveBoolean = true;
const booleanObject = new Boolean(false);

console.log(primitiveBoolean);

console.log(booleanObject);
console.log(booleanObject);

console.log(booleanObject.toString());