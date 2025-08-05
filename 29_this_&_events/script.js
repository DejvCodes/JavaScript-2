/*
this a události
• odkaz na objekt, se kterým kód aktuálně pracuje
*/

const h1 = document.querySelector('h1');

// Pouze s function declaration
h1.addEventListener('click', function() {
    console.log(this.textContent);
})

// h1.addEventListener('click', () => {
//     console.log(this); // výchozí this (nesouvisí s událostí)
// })