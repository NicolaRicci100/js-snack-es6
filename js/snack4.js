console.log('JS OK');

//* SNACK 4

//* Squadre di calcio prese da Google:
// Juventus.
// Inter.
// Milan.
// Roma.
// Napoli.
// Lazio.
// Atalanta.
// Fiorentina.

// array iniziale squadre di calcio
const footballTeams = [
    {
        name: 'Juventus',
        points: 0,
        foul: 0
    },
    {
        name: 'Inter',
        points: 0,
        foul: 0
    },
    {
        name: 'Milan',
        points: 0,
        foul: 0
    },
    {
        name: 'Roma',
        points: 0,
        foul: 0
    },
    {
        name: 'Napoli',
        points: 0,
        foul: 0
    },
    {
        name: 'Lazio',
        points: 0,
        foul: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        foul: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        foul: 0
    },
];
// console.table(footballTeams);

//funzione random
function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//nuovo array con punti e falli generati casualmente
footballTeams.forEach((team) => {
    team.points = getRandom(1, 50);
    team.foul = getRandom(1, 3);
});
// console.table(footballTeams);

//array finale con solo nomi e falli
const teams = footballTeams.map((team) => {
    return {
      name: team.name,
      foul: team.foul,
    }
});
console.table(teams); //stampo nel log l'array finale