function CreateWizard(firstName, mySpell) {
    // console.log('this', this); // CreateWizard {}
    this.name = firstName;
    this.spell = mySpell;
    // console.log('this', this); // CreateWizard {name: 'DAVO', spell: 'abraka'}
}

CreateWizard.prototype.attack = function() {
    return 'Útok pomocí kouzla ' + this.spell;
}

const wizard1 = new CreateWizard('DAVO', 'abraka');
const wizard2 = new CreateWizard('Wizz', 'fuuuu');

// console.log(wizard1.__proto__);
// console.log(wizard1.prototype);
// console.log(CreateWizard.prototype);

// console.log(wizard1.__proto__ === CreateWizard.prototype); // true

// Pouze funkce mají prototype
console.log(wizard1.prototype); // undefined -> je to objekt ne funkce
console.log(wizard2.prototype); // undefined -> je to objekt ne funkce

console.log(CreateWizard.prototype); // existuje -> je to funkce