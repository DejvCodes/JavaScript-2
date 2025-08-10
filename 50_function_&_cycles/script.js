// Co nedělat s funkcemi
// 1. v cyklu nevytvářet funkci
const myArray = [100, '$100', 80, 30, '$92'];

const cleanPrice = (price) => {
    if (typeof(price) === 'string') {
        const result = parseInt(price.replace('$', ''));
        console.log(result);
    }
}

for(let one of myArray) {
    cleanPrice(one);
}