var output = document.getElementById("output");

var newElement = document.createElement('p');

var elementContent = document.createTextNode('zawartość akapitu');

newElement.appendChild(elementContent);

output.appendChild(newElement);

//wersja light

var nowyElement2 = document.createElement('button');
nowyElement2.innerHTML = 'Zawartość buttona';

output.appendChild(nowyElement2);

//wersja superlight

output.innerHTML = '<h4>Nagłowek H4</h4>';

var rodzic = document.getElementById('par-first');
var akapit = rodzic.firstElementChild;
rodzic.removeChild(akapit);

rodzic.removeAttribute('id');


var rodzic2 = document.getElementById('par-second');
var newH6 = document.createElement('h6');
newH6.innerText = 'zawartosc h6';
var firstElem = rodzic2.firstElementChild;
rodzic2.insertBefore(newH6, firstElem);



var tytulH1 = document.getElementsByTagName('h1')[0];
console.log(tytulH1.innerHTML);
console.log(tytulH1.outerHTML);
console.log(tytulH1.innerText);

var linki = document.getElementsByTagName('a');
for(var i = 0; i < linki.length; i++) {
	console.log(linki[i].href);
	console.log(linki[i].className);
}