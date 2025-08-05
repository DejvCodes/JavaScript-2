/*
this 
• odkaz na objekt, se kterým kód aktuálně pracuje
• this je speciální klíčové slovo, které odkazuje na 
  kontext (objekt), ve kterém je kód spuštěn – jeho hodnota 
  se mění podle toho, kde a jak je použitá
*/

const person = {
    firstName: 'David',
    secondName: 'Kalmus',
    age: 23,
    introduction: () => { // function declaration 
        return `Ahoj, moje jméno je ${this.firstName} a příjmení ${this.secondName} a je mi ${this.age} let.`;
    }
}

console.log(person.firstName);
console.log(person.secondName);
console.log(person.introduction());