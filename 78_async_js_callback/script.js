/*
Asynchronní JavaScript - CallBack
• callback je funkce, kterou předáš jiné funkci jako argument -> a ta ji zavolá později, 
  až se dokončí nějaká operace
• v asynchronním JS se to používá proto, aby kód nečekal na dlouhou úlohu 
  (např. API request, timeout)
*/

// 1. příklad
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {});

// 2. příklad
const sayHello = (name, callback) => {
    console.log(`Čau, ${name}`);
    callback();
}

const onComplete = () => {
    console.log('Operace byla úspěšně dokončena');
}
sayHello('David', onComplete);

// 3. příklad
setTimeout(() => {
    console.log('Toto se zobrazí po 2,5 vteřinách');
}, 2500);