/*
Funkce = first class citizens
• v programování výraz first-class citizens (nebo first-class objects) znamená, 
  že hodnoty určitého typu lze používat stejně jako jiné hodnoty – ukládat je do 
  proměnných, předávat jako argumenty nebo vracet z funkcí

V JS jsou funkce first-class citizens:
• lze je uložit do proměnné
• lze je předat jako argument
• lze je vrátit z jiné funkce
• mohou mít vlastní vlastnosti (protože jsou to objekty)
*/

// 1 - funkci uložit do proměnné
const myFunction = function() {
    console.log('Jedna');
}
myFunction();

const myFunction2 = () => {
    console.log('Jedna');
}
myFunction2();

// 2 - funkci poslat jako parametr do jiné funkce
function first(fun) {
    fun();
}
first(function(){ console.log('Dva') });

const second = (fun) => {
    fun();
}
second(function(){ console.log('Dva') });

// 3 - funkci vracím z funkce
function returnFun() {
    return function a() {
        console.log('return');
    }
}
returnFun()();

const resultFun = returnFun();
resultFun();

// 4 - funkci mohu dát do pole
const arrayFun = () => {
    return 17;
}

const myArray = [arrayFun, 6, 7, 12];
console.log(myArray[0]());