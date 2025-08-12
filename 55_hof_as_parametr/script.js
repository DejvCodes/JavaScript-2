/*
Higher-Order Functions (HOF) v JS
• přijímají jiné funkce jako argumenty
• vrací jiné funkce jako svůj výdělek
*/

/* 
Vlastní funkce - funkce jako argument
• map, filter, every, some, find
*/
const repeatAction = (action, times) => {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}
const myFun = index => {
    console.log(`Iteration: ${index}`);
}
repeatAction(myFun, 3); // Iteration: 1 Iteration: 2 Iteration: 3

repeatAction(index => console.log(`Iteration: ${index}`), 3);
// Iteration: 1 Iteration: 2 Iteration: 3

/* 
Vlastní funkce - vrácení funkce
*/
const createMultiplier = multiplier => {
    return num => num * multiplier;
}

const double = createMultiplier(2);
console.log(double(10));
console.log(double(20));

const triple = createMultiplier(3);
console.log(triple(10));
console.log(triple(20));