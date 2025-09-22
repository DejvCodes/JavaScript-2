/*
Async / await

Co je async?
• async se používá před funkcí → ta funkce vždy vrací Promise
• pokud něco vrátíš z async funkce, JS to automaticky zabalí do Promise (resolve)
• pokud uvnitř vyhodíš chybu (throw), je to automaticky reject

Co je await?
• await se používá uvnitř async funkce
• zastaví běh funkce, dokud se Promise nevyřeší -> výsledek pak uloží do proměnné
• díky tomu vypadá asynchronní kód jako synchronní
*/
const main = async () => {
    try {
        const data = await getData();

        if (!data) throw new Error('Odpověď není v pořádku');

        const processedData = await processData(data);
        await saveData(processedData);
        console.log('Hotovo');

    } catch (err) {
        console.error("Nastala chyba:", err.message);

    } finally {
        console.log("Program skončil (úspěch / chyba).");
    }
}

main();