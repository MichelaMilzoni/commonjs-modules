// Importa la tua funzione da names.js
const firstAndLastName = require('./names.js');

// Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies.js');

// Crea una funzione che non ha parametri. 
function people () {
    const fullName = firstAndLastName('Michela', 'Milzoni');
    const hobbyList = hobbies('Scrittura', 'Lettura', 'Viaggi');
// La funzione dovrebbe restituire un oggetto con due proprietà:
// fullName ed hobbies.
    return {
        fullName,
        hobbies: hobbyList
    }
};

module.exports = people;

 
// All'interno della tua funzione, 
// usa le tue due funzioni precedenti per costruire l'oggetto.





