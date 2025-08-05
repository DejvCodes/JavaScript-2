/*
Symboly a jejich zvláštnosti
• každý symbol je vždy unikátní, bez ohledu na popis
*/

const symboll = Symbol('bookName');
const symbol2 = Symbol('year');
const symbol3 = Symbol('author');

// const book = {
//     bookName: 'Tou horou jste vy',
//     year: 2023,
//     author: 'Brianna Wiest'
// }

// console.log(Object.keys(book)); // ['bookName', 'year', 'author']
// console.log(Object.values(book)); // ['Tou horou jste vy', 2023, 'Brianna Wiest']

const book = {
    [symboll]: 'Tou horou jste vy',
    [symbol2]: 2023,
    [symbol3]: 'Brianna Wiest'
}

// console.log(Object.keys(book)); 
// console.log(Object.values(book));
console.log(book[symboll]);
console.log(book[symbol2]);
console.log(book[symbol3]);

console.log(symboll.description);
console.log(symbol2.description);
console.log(symbol3.description);