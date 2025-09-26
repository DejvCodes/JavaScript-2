/*
Job queue - fronta úloh 
• běžný pattern, když chceš úkoly spouštět asynchronně, postupně nebo na pozadí, 
  místo aby běžely přímo v hlavním procesu
*/

// Callback queue (task queue)
setTimeout(() => {
    console.log('Jedna');
}, 0);

setTimeout(() => {
    console.log('Dva');
}, 2000);

// Job queue (microtask queue) -> má přednost před Callback queue
Promise.resolve('Tři').then((data) => console.log(data));

console.log('Čtyři');

function asyncTask(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} done`);
            resolve(name); // promise se označí jako fulfilled
        }, delay);
    });
}

// parallel - paralelní, souběžné, čeká se až všechny doběhnou
async function runParallel() {
    console.log("Spouštím operace paralelně...");

    const results = await Promise.all([
        asyncTask("Task 1", 3000),
        asyncTask("Task 2", 2000),
        asyncTask("Task 3", 1000)
    ]);

    console.log("Všechny úlohy dokončeny:", results);
}
runParallel();

// sequence - jedno po druhém, každá operace čeká na dokončení předchozí
async function runSequential() {
    console.log("Spouštím operace sekvenčně...");

    const result1 = await asyncTask("Task 1", 3000);
    const result2 = await asyncTask("Task 2", 2000);
    const result3 = await asyncTask("Task 3", 1000);

    console.log("Všechny úlohy dokončeny:", [result1, result2, result3]);
}
runSequential();

// race - spustí se ta, která se dokončí jako první, ostatní mohou stále běžet, ale s 
// jejich výstupem se již nepočítá (nijak se s ním nepracuje)
async function runRace() {
    console.log("pouštím operace v race...");

    const winner = await Promise.race([
        asyncTask("Task 1", 3000),
        asyncTask("Task 2", 2000),
        asyncTask("Task 3", 1000)
    ]);

    console.log("První dokončená úloha:", winner);
}
runRace();