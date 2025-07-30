/*
Execution context
• funkční kontext
• globální kontext

Lexical environment
• execution context nám říká, který lexical environmentzrovna teď běží
• je koncept, který v JS říká, jak má ukládat proměnné a jak má řídit jejich dosah.

• funkční environment
• globální environment
*/

// const e = 500;
// const f = 600;

// const firstFunction = () => {
//     console.log(e);
//     console.log(f);
// }

// const secondFunction = () => {
//     console.log(e);
//     console.log(f);
// }

// firstFunction();
// secondFunction();

const firstFunction = () => {
    const e = 500;

    const secondFunction = () => {
        console.log(e);
    }
    secondFunction();
}

firstFunction();