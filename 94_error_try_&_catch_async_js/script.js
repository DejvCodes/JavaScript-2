/*
Error handling
• asynchronní JavaScript - try a catch nebude fungovat
*/

const bug = () => {
    try {
        setTimeout(() => {
            conole.log('Ok'); // Tato chyba nesouvisí s catch blokem
            // setTimeout se odsunulo do WEB API do pozadí a catch nevypsal žádnou chybu
        }, 3000);
    } catch (err) {
        console.log('Chyba:', err);
    }
}
bug();