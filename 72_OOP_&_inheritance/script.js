/*
Principy OOP - Object-oriented programming
• dědičnost (inheritance)
• zapouzdření (encapsulation)
• abstrakce (abstraction)
• polymorfismus (polymorphism)

Inheritance (dědění)
• dědění v JS funguje díky prototype chain – instance má přístup ke svému prototypu a ten 
  může mít další prototypy, čímž vzniká řetěz dědění
*/

// Wizard je tzv. super class
class Wizard {
    constructor(name, spell) {
        this.name = name;
        this.spell = spell;
    }

    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}

/*
Subclassing (dědění tříd)
• znamená vytvoření nové třídy (podtřídy), která dědí vlastnosti a metody z jiné 
  třídy (nadřazené / parent class)
• díky tomu můžeš znovu použít existující kód a zároveň ho rozšířit o nové funkce
*/

// WizardTeacher je tzv subclass
class WizardTeacher extends Wizard {

    constructor(name, spell, experYears) {
        super(name, spell);
        // console.log(this); // WizardTeacher {name: 'DAVO', spell: 'abraka'}
        this.experYears = experYears;
        // console.log(this); // WizardTeacher {name: 'DAVO', spell: 'abraka', experYears: 717}
    }
}

class EvilWizard extends Wizard {

    constructor(name, spell, dangerLevel) {
        super(name, spell);
        this.dangerLevel = dangerLevel;
    }

    speak() {
        return 'Harry, jdu do baráku!!!';
    }
}

const wizard1 = new WizardTeacher('DAVO', 'abraka', 717);
console.log(wizard1); // WizardTeacher {name: 'DAVO', spell: 'abraka', experYears: 717}
console.log(wizard1.attack()); // Útok pomocí kouzla abraka

const voldemort = new EvilWizard('Voldemort', 'avada', 10);
console.log(voldemort); // EvilWizard {name: 'Voldemort', spell: 'avada', dangerLevel: 10}
console.log(voldemort.attack()); // Útok pomocí kouzla avada
console.log(voldemort.speak()); // Harry, jdu do baráku!!!

console.log('-------------------');

console.log(wizard1 instanceof Wizard); // true
console.log(wizard1 instanceof WizardTeacher); // true
console.log(wizard1 instanceof EvilWizard); // false

console.log('-------------------');

console.log(voldemort instanceof Wizard); // true
console.log(voldemort instanceof WizardTeacher); // false
console.log(voldemort instanceof EvilWizard); // true