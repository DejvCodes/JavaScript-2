/*
IIFE - Immediately Invoked Function Expression
• je funkce v JS, která se okamžitě spustí, jakmile je definovaná
• používá se hlavně k vytvoření vlastního lokálního scope, aniž by 
  znečistila globální prostor
• používá se k tzv. modulárnímu programování
*/

// toto je tzv. IIFE
(() => {
    console.log('expression');
})(); // voláme pomocí ();

(function() {
    console.log('declaration');
})(); // voláme pomocí ();

// Modulární programování

// const firstFunction = () => { -> vytvoření funkce
//     console.log('expression');
// }
// firstFunction(); -> zavolání funkce