/*
Currying a bind
• je technika, kdy funkce s více parametry je převedena na sérii 
  funkcí, z nichž každá přijímá jen jeden argument

Bind() pro částečné předání argumentů
• metoda .bind() se běžně používá nejen pro nastavení this, ale i 
  pro částečné předání argumentů → což je vlastně forma currying
*/

const multiply  = (num1, num2) => {
    return num1 * num2
}

// normální fungování
console.log(multiply(5, 10)); // 5 * 10

console.log('-------------');

const multiplyByTwo = multiply.bind(this, 2); // 2 *
console.log(multiplyByTwo(30)); // 2 * 30
console.log(multiplyByTwo(13)); // 2 * 13
console.log(multiplyByTwo(5)); // 2 * 5

console.log('-------------');

const multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByThree(40)); // 3 * 40
console.log(multiplyByThree(15)); // 3 * 15
console.log(multiplyByThree(100)); // 3 * 100