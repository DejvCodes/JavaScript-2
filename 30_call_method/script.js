/*
Call, apply, bind

Call metoda
• je metoda, která umožňuje spustit funkci s vlastním this 
  kontextem – tedy určit, na jaký objekt se this bude odkazovat 
  během volání funkce
*/

function a() {
    console.log('Funkce A');
}

const b =() => {
    console.log('Funkce B');
}

a.call();
b.call();