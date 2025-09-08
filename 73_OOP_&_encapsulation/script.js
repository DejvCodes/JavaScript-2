/*
Principy OOP - Object-oriented programming
• dědičnost (inheritance)
• zapouzdření (encapsulation)
• abstrakce (abstraction)
• polymorfismus (polymorphism)

Encapsulation (zapouzdření)
• princip OOP, kdy vnitřní data objektu držíme skrytá a přístup k nim řídíme přes 
  veřejné metody
• jak ochránit data uvnitř objektu
• vnitřní stav je skrytý a manipulace probíhá jen přes metody třídy/objektu
• cíl: bezpečnost a kontrola přístupu
*/

class BankAccount {
    #pinCode // zapouzdření

    constructor(firstName, secondName, pinCode) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.#pinCode = pinCode;
        this.income = 0;
        this.expense = 0;
        this.movements = [];
    }

    #addMovement(amount) {
       this.movements.push(amount);
    }

    createIncome(amount) {
        this.income += amount;
        this.#addMovement(amount);
    }

    createExpense(amount) {
        this.expense -= amount;
        this.#addMovement(-amount);
    }
}

const account1 = new BankAccount('David', 'Kalmus', 1111);
console.log(account1.firstName); // David
console.log(account1.secondName); // Kalmus
console.log(account1.pinCode); // undefined
// console.log(account1.#pinCode); // Private field '#pinCode'

console.log('-------------');

console.log(account1.movements); // []
account1.createIncome(500);
console.log(account1.movements); // [500]
account1.createIncome(300);
console.log(account1.movements); // [500, 300]
account1.createExpense(200);
console.log(account1.movements); // [500, 300, -200]

console.log(account1.income); // 800
console.log(account1.expense); // -200

// console.log(account1.#addMovement(1200)); // Private field '#addMovement'