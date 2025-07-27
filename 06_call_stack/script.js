/*
Call Stack
• je struktura (zásobník), kterou JS používá k sledování pořadí volání 
  funkcí – každá nová funkce se přidá (push) na vrchol zásobníku a po 
  dokončení se odstraní (pop), čímž se řízení vrací zpět.

Snippets v Sources 
• debugger zastaví provádění kódu
*/

const multiplication = (number) => {
    return number * 10;
}

const calculation = () => {
    const sum = 2 + 5;
    const result = multiplication(sum)
    return result
}

calculation();