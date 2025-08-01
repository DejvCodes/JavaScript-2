/*
Rest parameter
• přebírá všechny argumenty
*/

const firstFunction = (firstName, secondName, ...rest) => {
    console.log(firstName, secondName, rest);
}
firstFunction('David', 'Dejv', 'jsem front-end developer', 'ČR'); 

console.log('--------------------------------');

function secondFunction(firstName, secondName, ...rest) {
    console.log(firstName, secondName, rest);
}
secondFunction('David', 'Dejv', 'jsem front-end developer', 'ČR');