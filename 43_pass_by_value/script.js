/*
pass by value
• u primitivních typů (string, number, boolean, null, undefined, bigint, symbol) 
  JS předává kopii hodnoty
• změna uvnitř funkce nebo jiné proměnné neovlivní originál
*/
let a = 5;
const b = a;

console.log(a); // 5
console.log(b); // 5
a = 10;
console.log(a); // 10
console.log(b); // 5

/*
pass by reference
• u neprimitivních typů (např. object, array, function) JS předává referenci – tj. 
  ukazatel na stejná data v paměti
• změna jedné proměnné ovlivní i druhou
*/
let obj1 = {
    firstName: 'David',
    secondName: 'Kalmus'
}

let obj2 = obj1; // zde je jakoby furt jen jeden objekt

console.log(obj1); // {firstName: 'David', secondName: 'Kalmus'}
console.log(obj2); // {firstName: 'David', secondName: 'Kalmus'}

obj1.firstName = 'Dan';

console.log(obj1); // {firstName: 'Dan', secondName: 'Kalmus'}
console.log(obj2); // {firstName: 'Dan', secondName: 'Kalmus'}

// Array (pole)
const array1 = [1, 2, 3];

const array2 = array1;

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

array1[0] = 17.7;

console.log(array1); // [17.7, 2, 3]
console.log(array2); // [17.7, 2, 3]