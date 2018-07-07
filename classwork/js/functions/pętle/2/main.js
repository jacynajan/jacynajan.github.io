    'use strict';
    var button = document.getElementById('button');
    var p = document.getElementById('p');
    button.addEventListener('click', function(){
		p.innerHTML += studenci + '<br>';
	})

    let studenci = ['janek', 'kasia', 'marta', 'zosia'];

