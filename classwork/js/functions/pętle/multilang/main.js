'use strict';
var langPlSwitch = document.getElementById('switch-pl');
var langEnSwitch = document.getElementById('switch-en');

function setLangLabels() {
	let langCode = this.getAttribute('lang');

	let elements = document.querySelectorAll('[lang-key]');

	for (let link of elements) {
		let langKey = link.getAttribute('lang-key');
		link.innerHTML = lang[langCode][langKey];
	}

}

langPlSwitch.addEventListener('click', setLangLabels);
langEnSwitch.addEventListener('click', setLangLabels);


function setDefaultLang() {
	let html = document.documentElement;

	console.log(html.lang);
}

document.addEventListener('DOMContentLoaded', setDefaultLang);
