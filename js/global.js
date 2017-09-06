$(function() {
    
    $('.subscribe form').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert('error');
            } else { // 200
	            $('.subscribe input').prop('disabled', true);
	            $('.subscribe button').text('Thank You!').prop('disabled', true).removeClass('underline');
            }
        });
    });
	
	$('.carousel').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<img src="img/arrow.svg" class="arrow arrow-right">',
		prevArrow: '<img src="img/arrow.svg" class="arrow arrow-left">',
		adaptiveHeight: true,
		mobileFirst: true,
		responsive: [
		  {
	      breakpoint: 601,
	      settings: {
	        slidesToShow: 3
	      }
	      }
		]
	});
	
	$('.share').on('click', function() {
		$('#share').addClass('open');
		return false;
	});
	
	$('#share .close').on('click', function() {
		$('#share').removeClass('open');
		return false;
	});	

});

$(window).scroll(function() {
	if($(window).scrollTop() > 60) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
});