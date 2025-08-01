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

// Oba dva scopy jsou lokální (blokové), protože jsou uvnitř if-bloků
if (true) {
  // první blokový scope (nadřazený)
  const age1 = 23;

  if (true) {
    // druhý blokový scope (vnořený do prvního)
    const age = 23;

    console.log(age);  // přístupné – je ve stejném (vnitřním) scope
    console.log(age1); // přístupné – je z nadřazeného (vnějšího) scope
  }

  // console.log(age); // ReferenceError – age není dostupné mimo vnitřní blok
}