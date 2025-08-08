/*
Funkce - 4 způsoby zápisu a zavolání funkce
*/

// 1. způsob
function one() {
    return 1;
}
console.log('1. způsob = ' + one()); // 1. způsob = 1
console.log('---------------------');

// 2. způsob
const obj = {
    two: function() {
        return 2;
    }
}

const obj1 = {
    two() {
        return 2;
    }
}
console.log('2. způsob = ' + obj.two()); // 2. způsob = 2
console.log('2. způsob = ' + obj1.two()); // 2. způsob = 2
console.log('---------------------');

// 3. způsob
function three() {
    return 3;
}

console.log('3. způsob = ' + three.call()); // 3. způsob = 3
console.log('---------------------');

// 4. způsob
const four = new Function('return 4');
console.log('4. způsob = ' + four()); // 4. způsob = 4

const four1 = new Function('num','return num');
console.log('4. způsob = ' + four1(10)); // 4. způsob = 10 

const four2 = new Function('num', 'num1', 'num2', 'return num + num1 + num2');
console.log('4. způsob = ' + four2(10, 20, 30)); // 4. způsob = 60

console.log(four2(10, 20, 30)); // 60