/*
Arguments a functions

• arguments (! není to pole !)
• eval()
• with
• for in
• delete
*/ 

// arguments - function declaration
function firstFunction (firstName, secondName){ // má dva paramentry
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log('-----------------');

    // arguments.map((item) => { // nemůžeme použít map (arguments není pole)
    //     console.log(item);  
    // })

    const newArguments = Array.from(arguments);

    newArguments.map((item) => {
        console.log(item);  
    })
}
firstFunction('David', 'Dejv');

console.log('------------------------------');

// arguments - function expression
// ! šipková notace nezná klíčové slovo arguments !
const secondFunction = (firstName, secondName) => {
    console.log(arguments);
}
secondFunction('David', 'Dejv');