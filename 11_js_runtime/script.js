/*
JavaScript runtime 
• je prostředí, které umožňuje spouštění JavaScriptového kódu – zahrnuje:

1.Call Stack – sleduje, jaké funkce jsou volány a kdy se mají dokončit
2.Memory Heap – místo pro ukládání objektů a dat v paměti
3.Garbage Collector – automaticky uvolňuje nepoužívanou paměť
4.Web APIs (v prohlížeči) – časovače, DOM, AJAX atd., které běží mimo hlavní thread
5.Callback Queue – fronta funkcí čekajících na dokončení asynchronních operací
6.Event Loop – propojuje stack a queue – vybírá, kdy se má co vykonat
*/

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

/*
Výstup A C B

• setTimeout běží mimo call stack (ve Web API), a výstup B se dostane 
  zpět do fronty až po dokončení hlavního kódu (díky event loopu
*/

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);


// Výstup 1 3 2