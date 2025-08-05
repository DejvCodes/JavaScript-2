/*
Call, apply, bind
*/

const teacher = {
    index: 'Učitel',
    firstName: 'David',
    secondName: 'Kalmus',
    points: 0,
    givePoints: function() {
        return this.points += 10;
    }
}

console.log(teacher);
teacher.givePoints();
console.log(teacher);

const student = {
    index: 'Žák',
    firstName: 'Dan',
    secondName: 'Rozkošný',
    points: 0
}

console.log(student);
teacher.givePoints.call(student);
console.log(student);