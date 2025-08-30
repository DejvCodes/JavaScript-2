function CreateWizard(firstName, mySpell) {
    this.name = firstName;
    this.spell = mySpell;
}

CreateWizard.prototype.attack = function() {
    return 'Útok pomocí kouzla ' + this.spell;
}

// prototype VS __proto__
Object.prototype.attack2 = function() {
    return 'Útok!!!!';
}

const wizard1 = new CreateWizard('DAVO', 'abraka');
console.log(wizard1); // {name: 'DAVO', spell: 'abraka', attack: ƒ}
console.log(wizard1.attack()); // Útok pomocí kouzla abraka
console.log(wizard1.attack2()); // Útok!!!!

const wizard2 = new CreateWizard('Wizz', 'fuuuu');
console.log(wizard2.attack()); // Útok pomocí kouzla fuuuu
console.log(wizard2.attack2()); // Útok!!!!

const newObject = {};
console.log(newObject.attack2()); // Útok!!!!

const myArray = [1, 2, 3];
console.log(myArray.prototype); // undefined
console.log(myArray.__proto__); // existuje -> přístup k řetězení