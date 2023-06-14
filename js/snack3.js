console.log('JS OK');

//* SNACK 3

//* Informazioni prese da Google per creare l'array
// Tra le bici da corsa italiane nominiamo alcuni marchi: Bianchi, Atala, Olmo, Casati, Colnago, Bottecchia, Cinelli, Pistidda.
// In linea generale il peso di una bici da corsa dovrebbe rientrare nel minimo stabilito dall'UCI, fissato a 6,8 chili.

//array delle bici
const bikes = [
    {
        name: 'Bianchi',
        weight: 6.8
    },
    {
        name: 'Atala',
        weight: 6.5
    },
    {
        name: 'Olmo',
        weight: 7.0
    },
    {
        name: 'Casati',
        weight: 6.7
    },
    {
        name: 'Colnago',
        weight: 6.9
    },
    {
        name: 'Bottecchia',
        weight: 6.6
    },
    {
        name: 'Cinelli',
        weight: 7.1
    },
    {
        name: 'Pistidda',
        weight: 6.4
    },
];
// console.table(bikes);

//array del peso delle bici
const bikesWeight = bikes.map(bike => bike.weight);
// console.log(bikesWeight);

//peso della bici più leggera
const lightBikeWeight = Math.min(...bikesWeight);
// console.log(lightBikeWeight);

//array con solo la bici più leggera
const lightBike = bikes.filter((bike) => {
    return bike.weight === lightBikeWeight;
})
console.log(lightBike); //stampo nel log la bici più leggera