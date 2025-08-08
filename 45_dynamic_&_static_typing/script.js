/*
Dynamické typování (Dynamic Typing)
• typ proměnné se určuje až za běhu (runtime)
• proměnná může změnit typ kdykoli
• typy se kontrolují až při provádění kódu
• typický pro JavaScript, Python, PHP...
*/
let x = 10; // number
x = "Ahoj"; // string – žádná chyba!
x = true; // boolean

/*
Statické typování (Static Typing)
• typ proměnné je pevně určen už při deklaraci a nelze ho později změnit
• typy se kontrolují už při kompilaci (před spuštěním)
• typický pro C, Java, TypeScript...

let y: number = 10;
y = "Ahoj"; // chyba – nelze přiřadit string do number
*/