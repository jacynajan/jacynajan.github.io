/*var zmiennaGlobalna = 'Jestem zmienną';
console.log(zmiennaGlobalna);

function pokazZmienne() {
    console.log(zmiennaGlobalna);
    var zmiennaLokalna = 'Lokalna zmienna';
}

pokazZmienne();

console.log(zmiennaLokalna);*/

var config = '123';

function update() {
    var config = '456'; 
    console.log('Zasięg = ' + config);
}

update();

console.log(config); 