var pierwszyDiv = document.getElementById('par-first');
console.log(pierwszyDiv);
var rodzicPierwszegoDiva = pierwszyDiv.parentElement;
console.log(rodzicPierwszegoDiva);

var dzieciSekcji = rodzicPierwszegoDiva.childNodes;
console.log(dzieciSekcji[0]);

var fajniejszeDzieciSekcji = rodzicPierwszegoDiva.children;
console.log(fajniejszeDzieciSekcji);

var pierwszeDzieckoSekcji = rodzicPierwszegoDiva.firstElementChild;
console.log(pierwszeDzieckoSekcji);

var ostatnieDziecko = rodzicPierwszegoDiva.lastElementChild;
console.log(ostatnieDziecko);

var link = document.querySelector('#par-first .link');
console.log(link);

var rodzenstwoLink = link.previousElementSibling;
console.log(rodzenstwoLink);
var rodzenstwoLinkNastepny = link.nextElementSibling;
console.log(rodzenstwoLinkNastepny);

rodzicPierwszegoDiva.childNodes.forEach(function(element){
	console.log(element.nodeType);
});

