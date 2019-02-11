/*-- Main Site JS --*/

$(function(){

	$('.main-navigation a').on('click', function(){
		var target = $(this).attr('href');

		if ($(target.length)) {
			$('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);

			return false;
		}
	})
})