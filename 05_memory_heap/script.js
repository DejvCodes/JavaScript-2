/*
Memory heap
• přidělení, použití, uvolnění paměti
• nemá žádné pořadí
• paměť kam se potřebné věci dají uloži

• je oblast v paměti, kam JS ukládá dynamicky alokovaná data – jako objekty, funkce nebo 
  uzly DOMu a kde správa paměti probíhá pomocí garbage collectoru.
*/

const age = 23;
const firstName = 'David';

// 100 řádků kódu
console.log(`Váš věk je - ${age}`);
console.log(`Vaše jméno je - ${firstName}`);