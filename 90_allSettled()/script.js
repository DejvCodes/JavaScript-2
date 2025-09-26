/*
allSettled()
• Promise.allSettled() je metoda v JS, která spustí více Promise současně a vrátí 
  jejich výsledky ať už skončí splněním (fulfilled) nebo chybou (rejected)
*/
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
})

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
})

Promise.allSettled([firstPromise, secondPromise])
    .then((data) => console.log(data))
    .catch((err) => console.log('Vyskytla se chyba'))
    
/*
  0: {status: 'fulfilled', value: undefined}
  1: {status: 'rejected', reason: undefined}
  length: 2
  [[Prototype]]: Array(0)
*/