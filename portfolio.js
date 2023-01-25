/**
 * portfolio.js
 */
 
  $(document).ready(function() {
	$('.menu').hide();
	$('.me').css('color','blue');
	$('.aboutMe').show();
	$btn = $('.btn');

	var menu = ["aboutMe" ,"skillSet", "introduction", "project"];
	$btn.each(function(index) {
		$(this).on('click', function() {
			$('.btn').css('color','black');
			$(this).css('color','blue');
			$('.menu').hide();
			$('.' + menu[index]).show();
		});
	});
});