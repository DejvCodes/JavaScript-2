/*
Principy OOP - Object-oriented programming
• dědičnost (inheritance)
• zapouzdření (encapsulation)
• abstrakce (abstraction)
• polymorfismus (polymorphism)

Polymorphism (polymorfismus)
• princip OOP, kdy stejné rozhraní (metoda) může mít různé chování podle toho, kdo 
  ji implementuje
• umožňuje používat stejný název metody, ale s jinou logikou v různých třídách 
  (přepisování metod)
• cíl: flexibilita a možnost psát obecnější kód
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

    viewBalance() {
        console.log('Váš zůstatek na účtu je: 1 000 Kč');
    }
}

class BankAccount extends Account {

}

class SavingsAccount extends Account {

}

class BusinessAccount extends Account {
    viewBalance() {
        console.log('Podnikatelský účet má zůstatek 34 000 Kč');
    }
} 

const bankAccount1 = new BankAccount('David', 'Kalmus', 1234);
bankAccount1.viewBalance(); // Váš zůstatek na účtu je: 1 000 Kč

const savingsAccount1 = new SavingsAccount('Jarda', 'Novotný', 2222); 
savingsAccount1.viewBalance(); // Váš zůstatek na účtu je: 1 000 Kč

const businessAccount1 = new BusinessAccount('Dan', 'Rozkošný', 2323); 
businessAccount1.viewBalance(); // Podnikatelský účet má zůstatek 34 000 Kč