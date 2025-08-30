/*
Interview
• Má JS classy? -> JS má class syntaxi, ale je to jen syntactic sugar, 
  která překrývá jeho skutečný model: prototype-based inheritance

• Proč metodu attack nedáme do constructoru?
  - do constructoru dáváme jen data
  - vyhneme se zbytečné duplikaci v paměti
  - Metody píšeme do class/prototype, aby se neserializovaly 
    do každé instance znovu
*/

class Wizard {
    constructor(firstName, mySpell) {
        this.name = firstName;
        this.spell = mySpell;
    }

    attack() {
        return 'Útok pomocí kouzla ' + this.spell;
    }
}   

// objekt -> říkat instance -> new provadí instancianci classy
const wizard1 = new Wizard('DAVO', 'abraka');
const wizard2 = new Wizard('Wizz', 'fuuuu');