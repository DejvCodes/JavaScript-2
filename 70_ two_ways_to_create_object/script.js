// ES6 Class (syntactic sugar)
class Wizard {
    constructor(firstName, mySpell) {
        this.name = firstName;
        this.spell = mySpell;
    }

    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}

const wizard1 = new Wizard('DAVO', 'abraka');
const wizard2 = new Wizard('Wizz', 'fuuuu');

console.log(wizard1.name); // DAVO
console.log(wizard1.attack()); // Útok pomocí kouzla abraka
console.log(wizard2.name); // Wizz
console.log(wizard2.attack()); // Útok pomocí kouzla fuuuu

console.log('---------------------------');

// Object.create()
const wizardFunction = {
    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}

function createWizard(firstName, mySpell) {
    const newWizard = Object.create(wizardFunction);
    newWizard.name = firstName;
    newWizard.spell = mySpell;
    return newWizard;
}

const w1 = createWizard('DAVO', 'abraka');
const w2 = createWizard('Wizz', 'fuuuu');

console.log(w1.name); // DAVO
console.log(w1.attack()); // Útok pomocí kouzla abraka
console.log(w2.name); // Wizz
console.log(w2.attack()); // Útok pomocí kouzla fuuuu