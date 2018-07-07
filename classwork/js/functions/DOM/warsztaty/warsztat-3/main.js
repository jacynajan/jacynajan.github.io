var lastCheckbox = document.getElementById('wszystkie-zgody');
var checkbox1 = document.getElementById('zgoda-marketingowa-1');
var checkbox2 = document.getElementById('zgoda-marketingowa-2');

var sendBut = document.getElementById('wyslij');
var news = document.getElementById('wiadomosc');
function checkboxState() {
	checkbox1.checked = lastCheckbox.checked;
	checkbox2.checked = lastCheckbox.checked;
	checkbox1.disabled = lastCheckbox.checked;
	checkbox2.disabled = lastCheckbox.checked;
}

lastCheckbox.addEventListener('change', checkboxState);

function validateFor(event){
	event.preventDefault();
	var inputs = document.querySelectorAll('input');
	news.innerHTML = '';
	inputs.forEach(function(el, ind) {
		if(ind > 2 ) {
			return;
		}
		
		
		if(ind == 2) {
			if(el.checked == false) {
				var errorLi = document.createElement('li');
				errorLi.innerHTML = 'nie zaznaczono zgody'; 
				news.appendChild(errorLi);
			}
			
		} else {
			if(el.value == '') {
				var errorLi = document.createElement('li');
				errorLi.innerHTML = 'nie wypełnione pola ' + el.id; 
				news.appendChild(errorLi);
			}
		}
		console.log(el, ind);
	});
}




