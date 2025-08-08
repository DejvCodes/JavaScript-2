/*
Type Coercion (automatické přetypování)
• je proces, při kterém JS automaticky převádí hodnoty mezi 
  různými datovými typy při porovnávání nebo operacích
• převod jednoho datového typu na jiný

https://dorey.github.io/JavaScript-Equality-Table/
*/
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 == true); // true
console.log([[]] == false); // true

if (0) { // false
    console.log('test - false');
} 

if (1) { // true
    console.log('test - true');
}   