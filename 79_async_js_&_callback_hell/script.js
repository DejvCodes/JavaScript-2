/*
Asynchronní JavaScript - CallBack Hell

• vzniká, když v asynchronním JS zavoláš callback uvnitř callbacku a ten zase uvnitř 
  dalšího callbacku…
• kód je pak zbytečně hluboce vnořený, nečitelný a hůř udržovatelný
• typicky při sekvenci async úloh, které na sebe navazují (např. získat 
  uživatele -> získat jeho posty -> získat komentáře k postu -> …)

Problémy Callback Hell
• špatná čitelnost (přílišné vnoření)
• horší debugování (těžko najít, kde se stala chyba)
• duplicitní logika (opakující se error handling)
*/

// 1. příklad
setTimeout(() => {
    console.log('Krok 1: připojení k databázi...');

    setTimeout(() => {
        console.log('Krok 2: nastavení uživatele...');

        setTimeout(() => {
            console.log('Krok 3: Ověření přístupu...');

            setTimeout(() => {
                console.log('Krok 4: Načítání dat...');

            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// 2. příklad
getData(function(data){
    processData(data, function(processed){
        savedData(processed, function() {
            console.log('Hotovo');
        });
    });
})

// Řešení - Promise | async / await