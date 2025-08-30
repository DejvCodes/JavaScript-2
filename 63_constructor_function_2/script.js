function CreateWizard(firstName, mySpell) {
    this.name = firstName;
    this.spell = mySpell;

    this.attack = function() {
        return 'Útok pomocí kouzla ' + this.spell;
    };
}

const wizard = new CreateWizard('DAVO', 'abraka');
console.log(wizard); // {name: 'DAVO', spell: 'abraka', attack: ƒ}
console.log(wizard.attack()); // Útok pomocí kouzla abraka