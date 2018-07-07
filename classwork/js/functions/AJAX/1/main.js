'use strict';

function ajax(method, url) {
	var httpReq = new XMLHttpRequest();
	httpReq.open(method, url);

	httpReq.onreadystatechange = function () {
		console.log(httpReq.readyState);
		if (httpReq.readyState == 4) {
			if (httpReq.status == 200) {
				var returnData = httpReq.responseText;
				console.log(returnData);
				httpReq = null;
			}
		}
	}
	httpReq.send();
}

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');

 ajax('GET', 'http://echo.jsontest.com/name/Jan/surname/Jacyna/');
