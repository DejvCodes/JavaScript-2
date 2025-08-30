/*
THIS
• pomocí slova new  */
function Book(name, pages) {
    this.name = name;
    this.pages = pages;
}
const book1 = new Book('Dragon', 177);
console.log(book1); // Book {name: 'Dragon', pages: 177}
// Pokud přepíšeme funkci Book na šipkovou notaci, tak nebude fungovat

console.log('---------------------------------------');

/*
Implicitní binding
• this je název objektu, nejpoužívanější    */
const person = {
    firstName: 'David',
    secondName: 'Kalmus',
    hello() {
        console.log('Ahoj, ' + this.firstName);
    }
}
console.log(person); // {firstName: 'David', secondName: 'Kalmus', hello: ƒ}
person.hello(); // Ahoj, David

console.log('---------------------------------------');

/*
Explicitní binding
• my zadáváme, na co bude this odkazovat    */
const wizard = {
    firstName: 'DAVO',
    age: 1223,
    special() {
        console.log('Special ' + this.firstName);
    }

    // special: function() {
    //     console.log('Special ' + this.set);
    // }.bind(window),
}
console.log(wizard); // {firstName: 'DAVO', age: 1223, special: ƒ}
wizard.special(); // Special DAVO

console.log('---------------------------------------');

/*
Šipková notace (arrow function)
• this je název objektu */
const human = {
    firstName: 'David',
    age: 23,
    ordinary() {
        const inside = () => {
            console.log('Ahoj, ' + this.firstName);
        }
        return inside();
    }
    // ordinary() {
    //     const inside =  function() {
    //         console.log('Ahoj, ' + this.firstName);
    //     }
    //     return inside();
    // }
}
human.ordinary(); // Ahoj, David