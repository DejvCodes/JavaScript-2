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

/*
Memory heap a garbage collector
- Co ukládá? (nachází se v Memory heap)
  • objekty
  • funkce
  • proměnné
  • closures

Garbage collector
• je automatický nástroj v JS enginu, který pravidelně uvolňuje 
  paměť tím, že odstraňuje objekty a data, ke kterým už ve kódu 
  neexistuje žádný odkaz.
*/

const garbageCollecotrExample = () => {
  let num1 = 42;
  let num2 = 100;

  console.log(num1, num2);
}

garbageCollecotrExample();

// Kód pokračuje - num1 a num2 v paměti už není uloženo