// Error handling - properties
const error = new Error('Chyba');
console.log(error.name);
console.log(error.message);
console.log(error.stack);

// SyntaxError
const error1 = !.;

// ReferenceError
console.log(name);

throw new SyntaxError();
throw new ReferenceError();