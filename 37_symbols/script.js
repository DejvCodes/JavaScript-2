/*
Symboly v JS
• je nový primitivní datový typ (od ES6), který představuje 
  unikátní a neměnnou hodnotu – často se používá jako unikátní 
  identifikátor vlastností objektů
*/

// symboly zaručují jedinečnost klíčů (i se stejným popisem)
const symbol1 = Symbol('bookName');
const symbol2 = Symbol('year');

const book = {
    [symbol1]: 'Tou horou jste vy',
    [symbol2]: 2023
}

console.log(book[symbol1]);
console.log(book[symbol2]);

// každý symbol je unikátní –> i se stejným popisem
const symbols = [Symbol('first'), Symbol('first')];
console.log(symbols[0] === symbols[1]); // false -> symboly nejsou stejné