/*
Optimalizovaný kód

Způsobuje neoptimalizovaný kód
• eval()
• arguments
• for in
• with
• delete

• hidden classes
*/

class Animal {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 2);

obj1.a = 5;
obj1.b = 6;
obj2.a = 10;
obj2.b = 11;
// vytváří si tzv. hidden classes

console.log(obj1);
console.log(obj2);

delete obj1.a; // není to čistá úvaha (neoptimalizovaný kód)

console.log(obj1); // "a" zmizelo
console.log(obj2);