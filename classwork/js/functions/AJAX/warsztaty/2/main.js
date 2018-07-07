    'use strict';

    $('button').ready().click(function () {
    	$.getJSON(
    		'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/',
    		function (data) {
    			$('body').append('<p>' + data.userName + ' ' + data.userId + '</p>');
    		})
    });
