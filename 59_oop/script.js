/*
OOP - Object-oriented programming

this 
• je speciální klíčové slovo, které odkazuje na objekt, v jehož 
  kontextu byla funkce spuštěna
*/

const wizard = {
    name: 'DAVØ',
    spell: 'abraka',
    attack() {
        return 'Útok pomocí kouzla ' +  this.spell;
        // return 'Útok pomocí kouzla ' + wizard.spell;
    }
}

const wizard2 = {
    name: 'Senta',
    spell: "daka",
    attack() {
        return 'Útok pomocí kouzla ' +   this.spell;
        // return 'Útok pomocí kouzla ' + wizard2.spell;
    }
}

console.log(wizard.name);
console.log(wizard.spell);
console.log(wizard.attack());
console.log('---------------------');

console.log(wizard2.name);
console.log(wizard2.spell);
console.log(wizard2.attack());