/*
Call, apply, bind
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
teacher.givePoints.call(student, 10, 15);
console.log(student);