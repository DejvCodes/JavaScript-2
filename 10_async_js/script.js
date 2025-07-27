/*
Asynchronní JavaScript
• 
*/

console.log(1); // sync

setTimeout(() => {  // async - neblokuje kód
    console.log(2);
}, 2000);

console.log(3); // sync