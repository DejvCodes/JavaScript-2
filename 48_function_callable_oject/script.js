// Funkce
function four() {
    console.log('test');
}

four.a = 10;
four.b = 'string';

console.log(four.a);
console.log(four.b);
four();

/*
Callable Object v JS
• v JS se „callable object“ obvykle označuje funkce, protože funkce 
  jsou objekty, které lze volat (jsou „callable“) – tj. mají [[Call]] 
  interní metodu

Základní definice:
• callable object = objekt, který se chová jako funkce – lze ho zavolat pomocí ()

Callable Object -> ukázka:*/
const specialObject = {
    a: 10,
    b: 'string',
    name: 'four',
    '()': () => console.log('test')
};

console.log(specialObject) // {a: 10, b: 'string', name: 'four', (): ƒ}