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
const myFun3 = introduction2('Nazdar');
console.log(myFun3('David')('Kalmus')); // Nazdar David Kalmus