/*
Classy se také označují jako syntactic sugar
• v JS jsou class jen tzv. syntactic sugar (sladší syntaxe) nad starším 
  prototype-based systémem
• to znamená, že class je pouze pohodlnější způsob zápisu, ale pod kapotou 
  funguje úplně stejně jako konstruktorové funkce a prototypy
*/

class Wizard {
    constructor(firstName, mySpell) {
        this.name = firstName;
        this.spell = mySpell;
    }

    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
    // attack() {
    //     const self = this; // closures
    //     return function magic() {
    //         return 'Útok pomocí kouzla ' + self.spell;
    //     }
    // }
}   

// objekt -> říkat instance -> new provadí instancianci classy
const wizard1 = new Wizard('DAVO', 'abraka');
const wizard2 = new Wizard('Wizz', 'fuuuu');

// instance
console.log(wizard1 instanceof Wizard); // true
console.log(wizard2 instanceof Wizard); // true

console.log(wizard1.name); // DAVO
console.log(wizard1.spell); // abraka

console.log(wizard2.name); // Wizz
console.log(wizard2.spell); // fuuuu

console.log(wizard1.attack()); // Útok pomocí kouzla abraka
console.log(wizard2.attack()); // Útok pomocí kouzla fuuuu

// console.log(wizard1.attack()()); // Útok pomocí kouzla abraka
// console.log(wizard2.attack()()); // Útok pomocí kouzla fuuuu