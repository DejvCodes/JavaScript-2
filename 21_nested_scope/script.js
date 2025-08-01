/*
Scope
• lokální scope
• vnořený scope
• globální scope

• funkční scope
• block scope
*/

// Vnořený scope
const age = 23; // globální scope

const firstFunction = () => {
    console.log(age);
    // const age = 23;  

    const secondFunction = () => {
        const firstName = 'Dejv';
        console.log(firstName);
        console.log(age);
    }
    secondFunction();
}

firstFunction();