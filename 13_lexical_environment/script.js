/*
Execution context
• funkční kontext
• globální kontext

Lexical environment
• execution context nám říká, který lexical environment zrovna teď běží
• je koncept, který v JS říká, jak má ukládat proměnné a jak má řídit jejich dosah
*/

const a = 100;

// const firstFunction = () => {
//     console.log(a);   
// }

// const secondFunction = () => {
//     console.log(a);   
// }

// const thirdFunction = () => {
//     console.log(a);  
// }

// firstFunction();
// secondFunction();
// thirdFunction();

const firstFunction = () => {
    const b = 200;
}

const secondFunction = () => {
    console.log(b); // error
}

const thirdFunction = () => {
    const d = 400;
}
secondFunction();