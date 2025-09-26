const api = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/todos'
];

/*
Promise.all()
• spustí víc Promisů najednou (paralelně)
• vrátí nový Promise, který se resolve teprve tehdy, když se všechny Promisy 
  úspěšně dokončí
• pokud alespoň jeden selže (reject), selže i celý Promise.all()

For await...of
• slouží k iteraci přes víc Promisů, ale sekvenčně (po jednom)
• čeká na vyřešení každého Promise, než přejde na další
• funguje jen uvnitř async funkce 
*/
const fetchData = async () => {
    for await (const url of api) { 
        // jede to postupně ne najednou jako u Promise.all()
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    }
}
fetchData();