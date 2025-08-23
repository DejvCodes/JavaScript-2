const wizard = {
    spell: true,
    makeHardAttack() {
        return 8;
    },
    makeSoftAttack() {
        return 3;
    }
}

const ordinaryPerson = {
    firstName: 'David',
    makeOrdinaryAttack() {
        return 1;
    }
}

ordinaryPerson.__proto__ = wizard;

// Vypsání všech property, ke kterým má ordinaryPerson přístup
for (let property in ordinaryPerson) {
    console.log(property);
}
console.log('------------------');

// Vypsání property, které jsou přímo na ordinaryPerson
for (let property in ordinaryPerson) {
    if (ordinaryPerson.hasOwnProperty(property)){
        console.log(property);
    }
}

/*
hasOwnProperty 
• je metoda objektu, která vrací true, pokud daný objekt má vlastní 
  (přímo definovanou) vlastnost, a false, pokud ji pouze dědí z prototypu
*/