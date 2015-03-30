$(document).ready(function() {

	$('img').hover(function() {
		$('.tooltip').fadeIn(500);
	}, function() {
		$('.tooltip').fadeOut(500);
	});//end of img hover

	$('img').mousemove(function(e) {
		$('.tooltip').css({'top':e.pageY + 10, 
						'left':e.pageX + 10});
	});

});// end of document ready