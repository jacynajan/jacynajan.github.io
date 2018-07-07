function pobierzImie(event) {
	event.preventDefault();
	var userName = document.getElementsByTagName('input');
	console.log(userName[0].value);
	console.log(userName[1].value);
}