/*
Error handling
• synchronní JavaScript
*/

const problem = () => {
    try {
        conole.log('Vše ok'); // chyba
    } catch (err) {
        console.log('Něco se pokazilo:', err);
    } finally {
        console.log('Kód může pokračovat dál...');
    }
}
problem();

console.log('Kód běží dál...');

console.log('-----------------------');

const parseNumber = (input) => {
    try {
        const number = parseInt(input);
        if (isNaN(number)) {
            throw new Error('Vstup není platné číslo.');
        }
        console.log('Převedené číslo:', number);
    } catch (err) {
        console.error('Chyba:', err.message);
    } finally {
        console.log('Toto se provede vždy.');
        // můžeme také zavřít loader, odpojit data atd...
    }
}
parseNumber('17');
parseNumber('abc');