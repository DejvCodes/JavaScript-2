/*
Higher-Order Functions (HOF) v JS
• přijímají jiné funkce jako argumenty
• vrací jiné funkce jako svůj výdělek
*/

/*
Every
• vrátí true, pokud všechny prvky pole splňují podmínku v callbacku
• pokud alespoň jeden ne -> vrátí false
*/
const numbers = [4, 1, 2, 7, 9, 3, 5, 8, 6];

const result = numbers.every( num => num > 0);
console.log(result); // true

/*
Some
• vrátí true, pokud alespoň jeden prvek pole splňuje podmínku v callbacku
• pokud žádný ne -> vrátí false
*/
const result2 = numbers.some( num => num > 7);
console.log(result2); // true