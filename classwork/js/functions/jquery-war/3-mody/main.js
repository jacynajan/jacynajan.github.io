$(function () {
	//	var textParagrafu = $('#paragraf').text();
	//	console.log(textParagrafu);
	//	$('h1').text('Tytuł h1 nowy');
	//
	//	var body = $('body').html();
	//	console.log(body);
	//
	//	//	$('body').html('<div class="nowy-div"><h5>Tytul h5</h5></div>');
	//
	//	$('body').append('<div class="nowy-div"><h5>Tytul h5</h5></div>');
	//	$('body').prepend('<div class="nowy-div"><h5>Tytul h5</h5></div>');
	//	$('.color-div').after("<img src='https://www.google.pl/logos/doodles/2018/world-cup-2018-day-11-5692104616443904-5711312218750976-ssw.png' class='img'>");
	//	$('.color-div').before("<img src='https://www.google.pl/logos/doodles/2018/world-cup-2018-day-11-5692104616443904-5711312218750976-ssw.png' class='img-transform'>");
	//	
	//	$('p').remove();
	//	$('h1').remove();

	//	$('#second').css({
	//		'font-size': '4rem',
	//		'color' : 'green',
	//		'text-decoration' : 'underline'
	//	});
	//	
	setTimeout(function () {
		$('#second').addClass('ladny-napoj');
		$('#input').val('start akcji');
	}, 3500);

	setTimeout(function () {
       $('#second').removeClass('ladny-napoj');
		$('#input').val('powrot do początku');
	}, 6500);
	
	var inputValue = $('#input').val();
	console.log(inputValue);
});
