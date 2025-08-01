/*
Hoisting v JavaScriptu
• let, const, var -> dochází k hoistingu
• znamená, že deklarace proměnných a funkcí jsou "vytaženy" na začátek 
  jejich scope ještě před samotným vykonáním kódu

var
• deklarace je hoistovaná i s inicializací na undefined
• proměnná je dostupná ještě před deklarací, ale s hodnotou undefined


let a const
• deklarace je hoistovaná, ale není inicializovaná
• dokud se nedojde k deklaraci v kódu, proměnná je v tzv. TDZ 
 (Temporal Dead Zone) – jakýkoliv pokus o přístup skončí chybou
*/

// Vznikne tady hoisting -> const age = undefined;
console.log(age); 

var age = 23;
console.log(age);

console.log('--------------------');

// Vznikne tzv. dočasně mrtvá zona (k hoisting dochází) -> let age1;
console.log(age1);

let age1 = 23;
console.log(age1);

console.log('--------------------');

// Vznikne tzv. dočasně mrtvá zona (k hoisting dochází)
console.log(age2);

let age2 = 23;
console.log(age2);