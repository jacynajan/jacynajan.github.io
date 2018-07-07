$(function () {
	var output = $('div');
	var btnShow = $('#show');
	var btnHide = $('#hide');

	btnHide.on({
		'click': function () {
			//			output.hide(2500, function(){
			//				console.log('schowany div');
			//			});
			//			output.fadeOut(2500, function () {
			//				console.log('schowany div');
			//			});
			output.slideUp(2500, function () {
				console.log('schowany div');
			});
		}
	});

	btnShow.on({
		'click': function () {
			//			output.show('slow', function(){
			//				console.log('widoczny div');
			//			});
			//			output.fadeIn('slow', function () {
			//				console.log('widoczny div');
			//			});
			output.slideDown('slow', function () {
				console.log('widoczny div');
			});
		}
	});
  var animBtn = $('#anim');
	animBtn.on({
		'click' : function() {
			output.animate({
				'left' : '300px',
				'top' : '400px',
				'width' : '600px'
			}, 1500, function(){
				alert('koniec animacji');
			});
		}
	})
});
