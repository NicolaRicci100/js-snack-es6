console.log('JS OK');

//* SNACK 1

// array con gli invitati
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//array per la lista dei segnaposto
const guestPlaceholders = [];

for (let i = 0; i < guests.length; i++){
    const guest = {
        name: guests[i],
        table: 'VIP table',
        seat: i + 1
    };
    guestPlaceholders.push(guest);
}
// array con i segnaposto
console.table(guestPlaceholders);