console.log('JS OK');

//* SNACK 2

// array degli studenti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];

// creo un array per gli studenti con voti superiori a 70
const betterStudents = students.filter((student) =>{
    return student.grades > 70;
});
console.table(betterStudents);

// creo un array per gli studenti con voti superiori a 70 e id superiore a 120
const highNumberStudents = students.filter((student) =>{
    return student.grades > 70 && student.id > 120;
});
console.table(highNumberStudents);

// creo un array per le targhe coi nomi degli studenti (tutti in maiuscolo)
const studentsPlate = students.map((student) =>{
    return{
        name: student.name.toUpperCase()
    };
});
console.table(studentsPlate);