/*
• JS pracuje s čísly tak, aby jim rozuměl počítač

BigInt 
• je speciální datový typ v JS (zavedený v ES2020), který umožňuje 
  pracovat s extrémně velkými celými čísly, která by běžný Number 
  typ nebyl schopen přesně reprezentovat
*/

console.log(0.1 + 0.2); // 0.30000000000000004
// integer: 2na53 - 1 (9 biliard) -> pracuje dobře do této hodnoty
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Jak zapsat bigInt (n)
const largeNum = 93786789007199254740991n;
console.log(largeNum);
const anotherLargeNum = BigInt('93786789007199254740991');
console.log(anotherLargeNum);