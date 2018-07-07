$(function(){
	var input = $('#input');
	var output = $('div');
	var btn = $('#colors');
	var colors = [
		'red',
		'yellow',
		'green',
		'white',
		'black',
		'fuchsia'
	];
	
	var startColor = 0;
	
	
	
	input.on({
		'keyup' : function() {
			var txt = input.val();
			output.text(txt);
		}
	});
	btn.on({
		'click' : function() {
			$('body').css({
				'background-color' : colors[startColor]
			});
			startColor++;
			if(startColor == colors.length) {
				startColor = 0;
			}
		}
	});
});