/*
Call, apply, bind

Bind
• nevykoná funkci hned. Vrátí novou funkci, kde je this navázán (bound)
• užitečné pro pozdější použití nebo jako callback
• vrací funkci pro její použití v budoucnu
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

const givePointsToStudents = teacher.givePoints.bind(student, 10, 15);

console.log(student);

givePointsToStudents();

console.log(student);