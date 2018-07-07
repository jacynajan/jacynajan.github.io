    'use strict';

    window.addEventListener('scroll', function () {

    	var d = document.documentElement;
    	var offset = d.scrollTop + window.innerHeight;
    	var height = d.offsetHeight;

    	if (height == offset) {
    		$.getJSON(
    			'https://jsonplaceholder.typicode.com/users',
    			function (data) {

    				data.forEach(function (element) {

    					$('body').append('<p>' + element.id + ' ' + element.name + ' ' + element.username + ' ' + element.email + '</p>');
    				})
					
    				//					for(var i = 0; i < data.length; i++) {
    				//						$('body').append('<p>' + data[i].id + ' ' + data[i].name + ' ' + data[i].email + '</p>');
    				//					}

    			})
    	}
    })
