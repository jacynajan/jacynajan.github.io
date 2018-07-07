var elementPoId = document.getElementById('par-first');
console.log(elementPoId);
var elementPoKlasie = document.getElementsByClassName('link');
console.log(elementPoKlasie);

var elementyPoKlasie = document.getElementsByClassName('link');

for(var i = 0; i < elementyPoKlasie.lenght; i++) {
	console.log(elementyPoKlasie[i]);
}


var elementPoTagu = document.getElementsByTagName('a');
console.log(elementPoTagu);

var qsElementPoId = document.querySelector('#par-second');
console.log(qsElementPoId);

var qsAll = document.querySelectorAll('.superlink');
console.log(qsAll); 