/*
Single Threaded 
 • znamená, že JS vykonává kód v jednom vlákně, tedy jednu operaci 
   v čase – všechny funkce běží postupně v rámci jednoho call stacku.

Stack Overflow 
• nastane, když se call stack příliš zaplní (např. nekonečnou rekurzí) 
  a už nelze přidat další volání funkce, což způsobí pád programu.
*/

// const multiplication = (number) => {
//     return number * 10;
// }

// const calculation = () => {
//     const sum = 2 + 5;
//     const result = multiplication(sum)
//     return result
// }

// calculation();

// Stack Overflow - stack přeteče (prohlížeč to stopne)
const calculation = () => {
    calculation();
}

calculation();