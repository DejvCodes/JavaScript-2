/*
Factory function
• je obyčejná funkce, která vrací nový objekt a poskytuje jednodušší 
  a flexibilnější alternativu ke konstruktorům
*/

const wizardFunction = {
    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}

function createWizard(name, spell) {
    return {
        name: name,
        spell: spell,
    }
}

const wizard = createWizard('DAVØ', 'abraka');
wizard.attack = wizardFunction.attack;

const wizard2 = createWizard('Senta', 'daka');
wizard2.attack = wizardFunction.attack;

console.log(wizard.name);
console.log(wizard.spell);
console.log(wizard.attack());
console.log('------------------------');

console.log(wizard2.name);
console.log(wizard2.spell);
console.log(wizard2.attack());
console.log('------------------------');

console.log(wizard.attack());
console.log(wizard2.attack());