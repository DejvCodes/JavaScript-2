/*
Prototype v JS
• je mechanismus, kterým JS umožňuje objektům dědit vlastnosti a 
  metody od jiných objektů
• každý objekt má vnitřní odkaz na jiný objekt, který se nazývá jeho prototype
• pokud se při přístupu k vlastnosti/metodě tato nenajde přímo na objektu, 
  JS ji hledá v jeho prototype chain (řetězu prototypů)
*/
const array = [1, 2, 3];

console.log(array.length); // 3
console.log(array.reverse()); // [3, 2, 1]
console.log(array.includes(2)); // true

console.log(array.__proto__); // object
console.log(array.__proto__.__proto__); // base object
console.log(array.__proto__.__proto__.__proto__); // null
console.log('------------------- Další příklad -------------------');

const firstName = 'David';
console.log(firstName.__proto__); // object
console.log(firstName.__proto__.__proto__); // base object
console.log(firstName.__proto__.__proto__.__proto__); // null
console.log('------------------- Další příklad -------------------');

// Prototype v JS a funkce
const myFunction = () => {};
console.log(myFunction.__proto__); // base function
console.log(myFunction.__proto__.__proto__); // base object
console.log('------------------- Další příklad -------------------');

// Prototype v JS a object
const myObject = {};
console.log(myObject.__proto__); // base object
console.log(myObject.__proto__.__proto__); // null
console.log('------------------- Další příklad -------------------');

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

/*
!! __proto__ by se v našem kódu nemělo správně nikdy objevit. Nesmíme používat !!

Rozdíl:
prototype – vlastnost funkce (konstruktoru), používaná při vytváření nových objektů pomocí new
__proto__ – odkaz každého objektu na jeho prototyp (není doporučeno používat přímo, místo toho Object.getPrototypeOf)
*/   