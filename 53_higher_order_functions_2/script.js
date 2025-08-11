/*
Higher-Order Functions (HOF) v JS
• přijímají jiné funkce jako argumenty
• vrací jiné funkce jako svůj výdělek
*/

/*
sort
• řadí prvky 
• metoda .sort() seřadí prvky pole na místě (mění původní pole)
*/
const letters = ['a', 'z', 'd', 'c', 'b'];

const result = letters.sort();
console.log(result); // ['a', 'b', 'c', 'd', 'z']

const numbers = [4, 1, 2, 7, 9, 3, 5, 8, 6];

const result2 = numbers.sort();
console.log(result2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result3 = numbers.sort((a, b) => b - a);
console.log(result3); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

/* find
• vrací první prvek, který splňuje podmínku
• metoda .find() vrátí první prvek, který splňuje podmínku v callbacku 
• pokud nic nenajde -> vrátí undefined
*/
const myNumbers = [4, 1, 2, 7, 9, 3, 5, 8, 6];

const result4 = myNumbers.find(num => num > 4);
console.log(result4); // 7