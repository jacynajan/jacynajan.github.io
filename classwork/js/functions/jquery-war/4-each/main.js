$(function(){
	$('body').find('p:eq(1)').css({
		'color' : 'blue',
		'font-style' : 'italic',
	}).after('<strong>Drugi paragraf</strong>');
	
	$('p').each(function(index, value){
		console.log('Index: ' + index + '| Value: ' + value);
		$(this).addClass('paragraf - ' + index).append('<strong> index = ' + index + '</strong>');
	});
});