$(function() {
	
	//Theme switcher
	
	$('.switch').on('click', function() {
   	$('body').toggleClass('black');
	});
	
	//Icon colour switcher
	hashWatch();
	
	$(window).on('hashchange', function() {
   	hashWatch();
   });

});

function hashWatch() {
   if(location.hash == '#menu' || location.hash == '#search' || location.hash == '#designer') {
   	$('.buttons span').css({
         "background": "black"
       });
   	$('.buttons svg').css({
         "fill": "black"
       });
	} else {
   	$('.buttons span').attr('style','');
   	$('.buttons svg').attr('style','');
	}
}