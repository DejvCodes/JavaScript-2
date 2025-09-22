/*
Finally

Co je .finally()
• metoda, kterou můžeš použít na Promise řetěz
• spustí se vždy, ať už Promise skončí úspěchem (resolve) nebo chybou (reject)
• hodí se pro úklid, odhlášení uživatele, zavření spojení, skrytí loaderu atd...
*/

const api = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/todos'
];

Promise.all(
    api.map((oneApi) => fetch(oneApi).then(
        (response) => response.json()
    )))
    .then((data) => console.log(data))
    .catch((err) => console.error('Chyba:', err))
    .finally(() => console.log('Finální příkaz')) // logování / výpis