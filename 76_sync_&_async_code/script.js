/*
Synchronní a Asynchronní JavaScript

Synchronní JavaScript
• všechny příkazy se vykonávají řádek po řádku, přesně v pořadí, jak jsou napsané
• další úloha se spustí až tehdy, když se ta předchozí dokončí
• pokud nějaká úloha trvá dlouho, zablokuje běh programu

Asynchronní JavaScript
• některé operace (např. volání API, čtení souborů, časovače) neběží hned, ale na pozadí
• javaScript mezitím může pokračovat dál -> kód se nezablokuje
• jakmile je operace hotová, výsledek se vrátí pomocí callbacku, Promisu nebo async/await
*/

const p = document.createElement('p');
const body = document.querySelector('body');

setTimeout(() => {
    p.textContent = 'JavaScript';
    p.style.color = 'blue';
    body.append(p); // body.prepend(p);
}, 3000);

console.log('Konec kódu');