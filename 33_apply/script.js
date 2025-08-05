/*
Call, apply, bind

Apply
• funguje stejně jako call(), ale argumenty se předávají jako pole
• vhodné, když máš dynamický počet parametrů
*/

const teacher = {
    index: 'Učitel',
    firstName: 'David',
    secondName: 'Kalmus',
    points: 0,
    givePoints: function(num1, num2) {
        return this.points += num1 + num2;
    }
}

const student = {
    index: 'Žák',
    firstName: 'Dan',
    secondName: 'Rozkošný',
    points: 0
}

console.log(student);
teacher.givePoints.apply(student, [10, 15]);
console.log(student);

const numbers = [1, 10, 2, 8];

console.log('Nejvyšší číslo: ' + Math.max(...numbers));
console.log('Nejvyšší číslo: ' + Math.max.apply(null, numbers));