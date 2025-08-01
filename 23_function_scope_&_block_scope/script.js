/*
Scope
• lokální scope
• vnořený scope
• globální scope

• funkční scope - lokální a vnořený
• block scope - lokální a vnořený 
*/

/*
Funkční scope
• proměnné jsou dostupné pouze uvnitř funkce, kde byly deklarovány
• platí pro var, let i const, ale hlavně se projevuje u var, protože 
  var není blokově scoped
*/

const firstFunction = () => {
    const firstName = 'Dejv';
    console.log(firstName);
}

firstFunction();

/*
Block scope 
• proměnné jsou dostupné pouze uvnitř bloku – tj. mezi { ... }
• Platí pro let a const, ne pro var
*/