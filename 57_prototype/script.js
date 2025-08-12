/*
Prototype v JS
• je mechanismus, kterým JS umožňuje objektům dědit vlastnosti a 
  metody od jiných objektů
• každý objekt má vnitřní odkaz na jiný objekt, který se nazývá jeho prototype
• pokud se při přístupu k vlastnosti/metodě tato nenajde přímo na objektu, 
  JS ji hledá v jeho prototype chain (řetězu prototypů)
*/
const array = [1, 2, 3];

console.log(array.length); // 3
console.log(array.reverse()); // [3, 2, 1]
console.log(array.includes(2)); // true

console.log(array.__proto__); // object
console.log(array.__proto__.__proto__); // base object
console.log(array.__proto__.__proto__.__proto__); // null
console.log('------------------- Další příklad -------------------');

const firstName = 'David';
console.log(firstName.__proto__); // object
console.log(firstName.__proto__.__proto__); // base object
console.log(firstName.__proto__.__proto__.__proto__); // null
console.log('------------------- Další příklad -------------------');

// Prototype v JS a funkce
const myFunction = () => {};
console.log(myFunction.__proto__); // base function
console.log(myFunction.__proto__.__proto__); // base object
console.log('------------------- Další příklad -------------------');

// Prototype v JS a object
const myObject = {};
console.log(myObject.__proto__); // base object
console.log(myObject.__proto__.__proto__); // null