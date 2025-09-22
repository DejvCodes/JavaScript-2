const api = 'https://jsonplaceholder.typicode.com/posts';

// then
const response = fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('Chyba:', err))
    .finally(() => console.log('-------------------------------------------'))

// async / await
const fetchData = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.error('Chyba - fetchData:', err);
    }
}
fetchData();