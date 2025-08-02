// Memory leak a praxe
/*
1.Globální proměnné
• garbage collector se na to dívá tak, že je globální a nemůže ji po 
  odstranění funkce dát pryč z paměti
• pokud nepotřebujeme proměnnou mimo funkci, vždy ji omezíme na lokální rozsah
• globální proměnné jsou trvale dosažitelné, takže hrozí memory leak, pokud 
  je plníme daty, která už nejsou potřeba
*/
let a = 10;
console.log(a);

const myFunction = () => {
    console.log(a);
}
myFunction();
console.log(a);

/*
2.Event listener
• je lepší listener odstranit pokud ho už nepotřebujeme
*/
let count = 0;
const button = document.querySelector('button');

const onclick = () => {
    count++;
    console.log('Klik', count);

    if (count >= 5) {
        button.removeEventListener('click', onclick);
        console.log('remove event listener');
    }
}
button.addEventListener('click', onclick);

/*
3.SetInterval 
• každý má svůj identifikátor
• pokud nepotřebujeme interval je lepší ho zastavit
*/
let intervalID = setInterval(() => {
    console.log('test');
}, 3000);
console.log('ID intervalu', intervalID);
clearInterval(intervalID);