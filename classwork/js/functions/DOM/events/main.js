var action = document.getElementById('click-action');
action.onclick = function(e){
	e.preventDefault();
	action.classList.add('decor-link');
}

var header = document.getElementById('main-header');

header.addEventListener('mouseenter', function(e){
	document.body.classList.toggle('move');
});


header.addEventListener('mouseleave', function(e){
	document.body.classList.toggle('move');
});


document.getElementById('event_div').addEventListener('click', function(e){
	console.log('Kliknięty DIV');
});
document.getElementById('btn').addEventListener('click', function(e){
	e.stopPropagation();
	console.log('Kliknięty BUTTON');
});