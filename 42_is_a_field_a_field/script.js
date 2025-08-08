/* 
isArray

Neprimitivní datové typy (non-primitive types)
• jsou všechny typy, které neukládají hodnotu přímo, ale odkazují na
  ni v paměti. Jsou založené na objektech a mají vlastnosti a metody
*/

console.log(typeof{}); // object
console.log(typeof[]); // object
console.log(typeof function(){}); // object

const myArray = ['1', '2', '3'];

const myObject = {
  0: '1',
  1: '2',
  2: '3'
}

console.log(myArray[0]); // 1
console.log(myObject[0]); // 1

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myObject)); // false