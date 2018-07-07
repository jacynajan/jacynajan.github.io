var zmiennaGlobalna = 'Jestem globalną';
console.log(zmiennaGlobalna);

function func() {
	zmiennaGlobalna = 'Jestem lokalną';
    console.log(zmiennaGlobalna);
}

func();
console.log(zmiennaGlobalna);
