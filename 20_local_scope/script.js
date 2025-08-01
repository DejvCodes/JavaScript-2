/*
Scope
• lokální scope
• vnořený scope
• globální scope

• funkční scope
• block scope
*/

// Lokální scope
const firstFunction = () => {
    const age = 23;
    console.log(age);
}
// console.log(age); // nemá přístup

const secondFunction = () => {
    const firstName = 'David';
    console.log(firstName);
}
// console.log(firstName); // nemá přístup

firstFunction();
secondFunction();