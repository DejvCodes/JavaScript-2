/*
Execution context
• funkční kontext
• globální kontext

Funkční kontext
• vzniká pokaždé, když je volána funkce
• má vlastní scope a this, nezávislý na globálním kontextu

Globální kontext
• vytváří se automaticky při spuštění skriptu
• obsahuje globální objekt (window v prohlížeči) a this
*/

// Funkční kontext
const firstFunction = () => {
    console.log('první funkce');   
}

const secondFunction = () => {
    console.log('druhá funkce');   
}

const thirdFunction = () => {
    console.log('třetí funkce');   
}

firstFunction();
secondFunction();
thirdFunction();

// Globální kontext
this.setInterval(() => {
    console.log('test - this');
}, 2000);

window.setInterval(() => {
    console.log('test - window');
}, 2000);

setInterval(() => {
    console.log('test');
}, 2000);