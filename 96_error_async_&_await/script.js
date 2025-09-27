// Async a await
const readData = async () => {
    try {
        const response = await fetch('https://example.com/api/data');
        const data = await response.json();
        console.log('Data natčena:', data);
    } catch (err) {
        console.error('Nastala chyba při načítání dat:', err.message);
    }
}
readData();