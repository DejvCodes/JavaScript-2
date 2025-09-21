// Promise 
const myPromise = new Promise((resolve, reject) => {
    const condition = true; // podmínka např: stav připojení, vstup od uživatele, API atd...

    setTimeout(() => {
        if (condition) {
            resolve('Operace proběhla úspěšně!')
        } else {
            reject('Chyba, něco se pokazilo!')
        }
    }, 2500);
})
 
myPromise
    .then((result) => `Úspěch ${result}`)
    .then((result2) => `${result2}  Y`)
    .then((result3) => console.log(`${result3} Z`))
    .catch((err) => console.error('Neúspěch:', err))