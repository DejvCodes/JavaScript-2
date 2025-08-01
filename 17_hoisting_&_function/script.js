/*
Hoisting a funkce

Function Declaration
• plně se hoistuje – jak jméno, tak i tělo funkce
• můžeme ji volat ještě před tím, než je v kódu definovaná
*/
firstFunction();

function firstFunction() {
    console.log('TEST');
}

/*
Function Expression (včetně arrow funkcí)
• pokud je definována pomocí var -> hoistuje se jen název proměnné, 
  hodnota je undefined -> TypeError
• pokud je pomocí let/const -> proměnná existuje, ale je v TDZ -> ReferenceError
*/
secondFunction(); // ReferenceError: Cannot access 'secondFunction' before initialization

const secondFunction = () => {
    console.log('TEST');
}

/*
Function Expression pomocí var
• hoistuje se název, hodnota je undefined -> TypeError při volání
*/
thirdFunction(); // TypeError: thirdFunction is not a function

var thirdFunction = function () {
    console.log('TEST');
}