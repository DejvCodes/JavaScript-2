function CreateWizard(firstName, mySpell) {
    this.name = firstName;
    this.spell = mySpell;
}

CreateWizard.prototype.attack = function() {
    return 'Útok pomocí kouzla ' + this.spell;
}

CreateWizard.prototype.learn = function() {
    const self = this; // closures
    return function learning() {
        return self.name + ' se učí.';
    };
}

const wizard1 = new CreateWizard('DAVO', 'abraka');
const wizard2 = new CreateWizard('Wizz', 'fuuuu');

console.log(wizard1.learn()());
console.log(wizard2.learn()());