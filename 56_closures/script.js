/*
Closures
• vzniká, když funkce má přístup k proměnným z vnější (nadřazené) funkce, 
  i poté, co ta vnější funkce už skončila

Closure = funkce + její lexikální prostředí (proměnné z okolního scope, 
          které má stále k dispozici)
*/
const organizationStructure = () => {
    const one = 'CEO';
    let anotherPosition = 'cleaner';
    return () => {
        const two = 'Manager';
        return () => {
            const three = 'employee';
            return `${one} > ${two} > ${three} > ${anotherPosition}`;
        }
    }
}

console.log(organizationStructure());
console.log(organizationStructure()());
console.log(organizationStructure()()()); // CEO > Manager > employee > cleaner

const myFun = organizationStructure();
console.log(myFun()()); // CEO > Manager > employee > cleaner

console.log('------------------- Další příklad -------------------');

// Další příklad
const introduction = greeting => {
    return firstName => {
        return secondName => {
            return `${greeting} ${firstName} ${secondName}`;
        }
    }
}

console.log(introduction('Ahoj')('David')('Kalmus')); // Ahoj David Kalmus

console.log('------------------- Další příklad -------------------');

// Postupné zavolání
const myFun2 = introduction('Ahoj');
console.log(myFun2('David')('Kalmus')); // Ahoj David Kalmus

// Kratší zápis
const introduction2 = greeting => firstName => secondName => `${greeting} ${firstName} ${secondName}`;
const myFun3 = introduction2('Čégo');
console.log(myFun3('David')('Kalmus')); // Čégo David Kalmus

console.log('------------------- Další příklad -------------------');

// Closures - další příklad
const sayHello = () => {
    setTimeout(() => {
        console.log(greeting);
    }, 2000);
    const greeting = 'Ahoj, jak se máš?';
}
// sayHello(); // Ahoj, jak se máš?

/*
Closures - praktický příklad
• closures a paměť
• tip: .fill() je užitečné pro inicializaci polí, např. při generování testovacích dat

Klíčová myšlenka:
• heavyFunction se spustí jen jednou -> bigData se vytvoří jen jednou
• díky closure si myFun4 pamatuje bigData i po ukončení heavyFunction
• proto už není potřeba bigData znovu vytvářet při každém volání myFun4
*/
const heavyFunction = (item) => {
    const bigData = new Array(5000).fill('X');
    console.log('bigData byla vytvořena');
    return item => bigData[item];
}

// const myFun4 = heavyFunction();
let myFun4 = heavyFunction();
console.log(myFun4(100)); // X
console.log(myFun4(200)); // X
console.log(myFun4(300)); // X

// Nastavení na null
myFun4 = null; // vyhodí z paměti
console.log(myFun4(100)); // myFun4 is not a function
console.log(myFun4(200)); // myFun4 is not a function
console.log(myFun4(300)); // myFun4 is not a function