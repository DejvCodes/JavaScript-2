/*
CallBack Hell - Promise
• promise v JS je objekt, který představuje asynchronní operaci a její budoucí výsledek
• je to něco jako „slib“, že kód jednou skončí buď úspěchem (fulfilled), nebo neúspěchem (rejected)

Stav Promise - každý Promise má 3 možné stavy:
• pending – čeká, ještě není hotový
• fulfilled – úspěšně vyřešen (resolve)
• rejected – chyba (reject)
*/

// Promise
getData()
    .then(processData)
    .then(saveData)
    .then(() => console.log('Hotovo'))
    .catch((err) => console.error('Error: ', err))

/*
Promise 
• je speciální objekt, který reprezentuje výsledek asynchronní operace, který může 
  přijít teď, později nebo nikdy
• je to vlastně „slib“, že operace skončí buď

• fulfilled (úspěch → resolve)
• rejected (neúspěch → reject)
• pending (ještě čeká na výsledek)
*/
const myPromise = new Promise((resolve, reject) => {
    const condition = true;

    setTimeout(() => {
        if (condition) {
            resolve('Operace proběhla úspěšně...')
        } else {
            reject('Chyba, něco se pokazilo...')
        }
    }, 2500);
})

myPromise
    .then((result) => console.log('Úspěch:', result))
    .catch((err) => console.log('Neúspěch:', err))