// Co ještě umí promise?
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'První promise');
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Druhá promise');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Třetí promise');
})

Promise.all([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.error(err))