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