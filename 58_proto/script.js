// Předání vlastností z jednoho objektu na druhý objekt pomocí proto
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

// Zkoumání normálního ordinaryPerson
console.log(ordinaryPerson);
console.log(ordinaryPerson.__proto__); // base object
const baseObj1 = ordinaryPerson.__proto__;

// Zkoumání ordinaryPerson po přídělení vlastností od wizarda
ordinaryPerson.__proto__ = wizard;
console.log(ordinaryPerson);
console.log(ordinaryPerson.__proto__); // object
console.log(ordinaryPerson.__proto__.__proto__); // base object
const baseObj2 = ordinaryPerson.__proto__.__proto__;

// Rovnají se base objects?
console.log(baseObj1 === baseObj2); // true

// Existuje vše na ordinaryPerson?
console.log(ordinaryPerson.spell); // true
console.log(ordinaryPerson.makeHardAttack()); // 8
console.log(ordinaryPerson.makeSoftAttack()); // 3
console.log('-------------------');
console.log(ordinaryPerson.__proto__.spell); // true
console.log(ordinaryPerson.__proto__.makeHardAttack()); // 8
console.log(ordinaryPerson.__proto__.makeSoftAttack()); // 3

// !! __proto__ by se v našem kódu nemělo správně nikdy objevit. Nesmíme používat !!