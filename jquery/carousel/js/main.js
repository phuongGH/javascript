$(document).ready(function() {
	$('.img-switcher img:not(:first)').hide();
	$('.img-switcher img:first').addClass('current');
	
	var t = setInterval(switcher,2000);

	function switcher(){
		// alert('ok');
		// clearInterval(t);
		var $cur = $('img.current');
		var $next = $cur.next('img');
		if(!$next.length){
			$next = $('.img-switcher img:first');
		}

		// $cur.removeClass('current');
		// $cur.hide();

		// $next.addClass('current');
		// $next.show();


		$cur.removeClass('current').fadeOut(1000);
		$next.addClass('current').fadeIn(1000);
	}//end of switcher


	$('.img-switcher').hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval(switcher,2000);
	});//end of .img-switcher hover


	$('#next').hover(function() {
		$('#next').css('background-position', 'right');		
	}, function() {
		$('#next').css('background-position', 'right top');
	});// end of # next hover


	$('#prev').hover(function() {
		$('#prev').css('background-position', 'left');		
	}, function() {
		$('#prev').css('background-position', 'left top');
	});// end of # prev hover


	$('.btn').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var $title = $this.prop('title');
		// alert($title);
		var $cur = $('.current');
		var $next = '';
		switch($title){
			case 'next':
				$next = $('.current').next('img');
				if($next.length == 0){
					$next = $('.img-switcher img:first');
				}
				break;
			case 'prev':
				$next = $('.current').prev('img');
				if($next.length == 0){
					$next = $('.img-switcher img:last');
				}
				break;
		}
		$cur.removeClass('current').fadeOut(500);
		$next.addClass('current').fadeIn(500);
	});//end of .btn click

});//end of ready