// Error handling
Promise.resolve('Start')
    .then((value) => {
        console.log('1:', value);
        throw new Error('1. Chyba');
    })
    .then((data) => {
        console.log('2:', data);
    })
    .catch((err) => {
        console.error('Zachycení -', err);
        // return 'Obnova po chybě';
        throw new Error('2. Chyba');
    })
    .then((value) => {
        // pokračujeme po odchytu chyby
        console.log('3:', value);
    })
    .catch((err) => {
        console.error('Konečná chyba', err); 
    })

console.log('Konec'); // Bude první protože předtím je async kód