/*
Principy OOP - Object-oriented programming
• dědičnost (inheritance)
• zapouzdření (encapsulation)
• abstrakce (abstraction)
• polymorfismus (polymorphism)

Abstraction (abstrakce)
• princip OOP, kdy objekt poskytuje uživateli jen nezbytné metody k použití, zatímco 
  detaily implementace zůstávají skryté
• jak skrýt složitost a ukázat jen to podstatné
• uživatel používá jednoduché rozhraní, aniž by znal vnitřní detaily implementace
• cíl: jednoduchost a čitelnost 
*/

class Account {
    
    constructor(firstName, secondName, pin) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.pin = pin;
    }

    insert(amount) {
        // podstata metody
    }

    select(amount) {
        // podstata metody
    }
}

class BankAccount extends Account {

}

class SavingsAccount extends Account {

}

class BusinessAccount extends Account {

} 

const bankAccount1 = new BankAccount('David', 'Kalmus', 1234);
console.log(bankAccount1.firstName); // David
console.log(bankAccount1.secondName); // Kalmus
console.log(bankAccount1.pin); // 1234