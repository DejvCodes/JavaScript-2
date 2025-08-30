/*
Constructor function 
• vrací instanci objektu
• je běžná funkce, která se volá pomocí klíčového slova new -> a ta vytvoří 
  nový objekt, nastaví mu prototyp a vrátí ho
*/

function CreateWizard(firstName, mySpell) {
    this.name = firstName;
    this.spell = mySpell;

    // return 'David'

    return {
        firstName: 'David',
        secondName: 'Kalmus'
    };
}

const wizard = new CreateWizard('DAVO', 'abraka');

console.log(wizard);
// console.log(wizard.name);
// console.log(wizard.spell);

/*
Znaky Constructor function 
• název funkce začíná velkým písmenem
• používá klíčové slovo this
• používá new
*/

/*
Když se použije slovo new
• vytvoří se prázdný objekt
• přiřadí this nově vytvořenému objektu
• vrátí objekt (nemusíme psát return)
*/