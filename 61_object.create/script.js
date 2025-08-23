/*
Object.create
• je metoda, která vytvoří nový objekt a nastaví jeho prototype 
  ([[Prototype]]) na objekt, který jí předáš jako argument

Souvislosti s prototypem
*/
const wizardFunction = {
    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}

function createWizard(name, spell) {
    const newWizard = Object.create(wizardFunction);
    // console.log(newWizard.__proto__); // {attack: ƒ}
    newWizard.name = name;
    newWizard.spell = spell;
    return newWizard;
}

const wizard = createWizard('DAVØ', 'abraka');
wizard.attack = wizardFunction.attack;

const wizard2 = createWizard('Senta', 'daka');
wizard2.attack = wizardFunction.attack;

console.log(wizard.name);
console.log(wizard.spell);
console.log(wizard.attack());
console.log('------------------');

console.log(wizard2.name);
console.log(wizard2.spell);
console.log(wizard2.attack());