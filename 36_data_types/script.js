/*
Datové typy v JS
• téměř vše v JS je objekt
*/

// Primitivní datové typy
console.log(typeof 'David'); // string
console.log(typeof 23); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined -> něco není definováno
console.log(typeof null); // null (object)
console.log(typeof Symbol('test')); // Symbol(test)

console.log('-------------');

// Neprimitivní datové typy 
console.log(typeof {}); // object
console.log(typeof []); // array (object)
console.log(typeof function(){}); // function