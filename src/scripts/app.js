$(document).ready(function(){
	'use strict';

	var $sliderMain = $('.gallery-main .gallery-main-list'),
		$sliderThumb = $('.gallery-thumb .gallery-thumb-list');

	$sliderMain.slick({
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		respondTo: 'slider',
		slide: '.gallery-main-list-item',
		dots: false,
		arrows: false,
		asNavFor: $sliderThumb
	});

	$sliderThumb.slick({
		infinite: true,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 1,
		mobileFirst: true,
		respondTo: 'slider',
		slide: '.gallery-thumb-list-item',
		dots: false,
		arrows: true,
		asNavFor: $sliderMain,
		focusOnSelect: true
	});

	$sliderMain.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$sliderThumb.find('.active').removeClass('active');
		$sliderThumb.find('.gallery-thumb-list-item:nth-child(' + (currentSlide+1) + ')').addClass('active');
	});


	$('.gallery-main .image-main').on('mouseenter', function () {
		var index = $(this).parent().index() - 1,
			imageUrl = $(this).attr('src');

		$(this).addClass('opacity');

		$('.gallery-zoom .image-zoom').attr('src', imageUrl);
		$('.gallery-zoom').fadeIn();
		// $('.avc__m-product-content-image-zoom-len').fadeIn();

		$(this).on('mousemove', function (event) {
			var posX = event.pageX - $(this).parent().offset().left,
				posY = event.pageY - $(this).parent().offset().top;

			$('.image-zoom').css('transform-origin', '' + posX + 'px ' + posY + 'px');

			// $('.avc__m-product-content-image-zoom-len').css({
			// 	'left': posX - 60,
			// 	'top': posY - 60
			// });
		});
	});

	$('.gallery-main .image-main').on('mouseleave', function () {
		$('.gallery-zoom').fadeOut();
		// $('.avc__m-product-content-image-zoom-len').fadeOut();

		$(this).removeClass('opacity');
	});
});