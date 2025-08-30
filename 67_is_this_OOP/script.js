// Je toto už OOP? - ANO
function CreateWizard(firstName, mySpell) {
    this.name = firstName;
    this.spell = mySpell;
}

CreateWizard.prototype.attack = function() {
    return 'Útok pomocí kouzla ' + this.spell;
}

const wizard1 = new CreateWizard('DAVO', 'abraka');
const wizard2 = new CreateWizard('Wizz', 'fuuuu');

console.log(wizard1.attack());
console.log(wizard2.attack());