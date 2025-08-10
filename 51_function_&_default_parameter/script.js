// Co nedělat s funkcemi
// 2. používejte defaultní parametr

// const myFun = () => {
//     console.log(parameters);
// }
// myFun(); // error

// const myFun2 = () => {
//     if (parameters) {
//         console.log(parameters);
//     }
// }
// myFun2(); // error

// const myFun3 = (parameters) => {
//     console.log(parameters);
// }
// myFun3(10); // 10
// myFun3(); // undefined

const myFun4 = (parameters = 'default value') => {
    console.log(parameters);
}
myFun4(17); // 17
myFun4(); // default value