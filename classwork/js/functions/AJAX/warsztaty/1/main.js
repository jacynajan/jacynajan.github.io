'use strict';

function pobierzDane(event) {
	var httpReq = new XMLHttpRequest();
	
	    httpReq.open('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/');
	
	    httpReq.onreadystatechange = function() {
			if (httpReq.readyState == 4) {
				if (httpReq.status == 200) {
					var returndata = httpReq.responseText;
					var paragraf = document.getElementById('paragraf');
					console.log(returndata);
					paragraf.innerHTML += returndata + '<br>';
					httpReq = null;
				}
			}
		}
		httpReq.send();
}

