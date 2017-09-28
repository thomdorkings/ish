$(function() {
	
	//Theme switcher
	
	$('.switch').on('click', function() {
   	$('body').toggleClass('black');
	});
	
	$('.slider').slick();
	
	//Icon colour switcher
	hashWatch();
	
	//Close button toggle
	toggleClose();
	
	$(window).on('hashchange', function() {
   	hashWatch();
   	toggleClose();
   });
   
   $('.url').text(window.location.href);
   
   $('.subscribe').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert('error');
            } else { // 200
	            $('.subscribe input').prop('disabled', true);
	            $('.subscribe button').text('✔︎').prop('disabled', true);
            }
        });
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

function toggleClose() {
   if(location.hash == '#menu') {
      $('.button_menu').attr('href','#');
   } else {
      $('.button_menu').attr('href','#menu');
   }
   if(location.hash == '#search') {
      $('.button_search').attr('href','#');
   } else {
      $('.button_search').attr('href','#search');
   }
}