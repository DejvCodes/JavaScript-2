/*
Higher-Order Function (HOF) v JS
• je funkce, která buď přijímá jinou funkci jako argument, nebo 
  vrací jinou funkci (nebo obojí)
• opírá se o to, že funkce jsou v JS first-class citizens
*/ 

// 1. map -> původní pole
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((oneNum) => {
    return oneNum * 2;
})
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(double); // [2, 4, 6, 8, 10]
console.log('----------------------------------');

// 2. filter -> nové pole
const numbers2 = [1, 2, 3, 4, 5];
const filteredNumbers2 = numbers2.filter((oneNum) => {
    return oneNum >= 3;
})
console.log(numbers2); // [1, 2, 3, 4, 5]
console.log(filteredNumbers2); // [3, 4, 5]
console.log('----------------------------------');

/*
3. reduce
• pokud je zadaná hodnota (v tomto případě 0), je to hodnota, 
  se kterou reduce začne
• pokud není zadaná, použije první prvek pole jako počáteční hodnoru a 
  iterace začne druhým prvkem
*/
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => {
    return acc + num;
})
console.log(numbers3); // [1, 2, 3, 4, 5]
console.log(sum); // 15

// 4. forEach
const numbers4 = [1, 2, 3, 4, 5];
numbers.forEach( num => console.log(num * 10));