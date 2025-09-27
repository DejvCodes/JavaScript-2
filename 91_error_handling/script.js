// Error handling

// Toto nevyhodí chybu - jen vypíše objekt
const error1 = new Error('Chyba!!!');
console.log(error1);

// Chyba se musí vyhodit (throw)
// Jakmile se spustí chyba, tak se zastaví provádění kódu
throw new Error('Chyba2!!!');

// Co je to throw?
throw 'David'; // Uncaught David

console.log(17 + 3);