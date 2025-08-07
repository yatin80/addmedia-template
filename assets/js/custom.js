(function ($) {

	"use strict";

	$('.hero-banner').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      nav: true,
    //   dots: true,
      onChanged: function (event) {
        
        $('.hero-banner-text, .hero-banner-title, .hero-banner-btn').removeClass('animate__animated animate__fadeInDown animate__fadeInUp animate__fadeIn animate__delay-1s animate__delay-2s');
      }
    });

    
    $('.hero-banner').on('translated.owl.carousel', function () {
      var $activeSlide = $('.owl-item.active .item');

      $activeSlide.find('.hero-banner-text')
        .addClass('animate__animated animate__fadeInDown');

      $activeSlide.find('.hero-banner-title')
        .addClass('animate__animated animate__fadeInUp animate__delay-1s');

      $activeSlide.find('.hero-banner-btn')
        .addClass('animate__animated animate__fadeIn animate__delay-2s');
    });

    // Trigger animation for first slide
    $('.hero-banner .owl-item.active .hero-banner-text').addClass('animate__animated animate__fadeInDown');
    $('.hero-banner .owl-item.active .hero-banner-title').addClass('animate__animated animate__fadeInUp animate__delay-1s');
    $('.hero-banner .owl-item.active .hero-banner-btn').addClass('animate__animated animate__fadeIn animate__delay-2s');



	$('.owl-feature-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	})

	$('.owl-testimonials-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: false,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	})

	$('.scroll-animate').each(function () {
		var $el = $(this);
		var animation = $el.data('animation') || 'fadeInUp';
		var delay = $el.data('delay') || '0.2s';


		$el.css({
			'animation-delay': delay,
			'opacity': 0
		});


		$el.waypoint(function () {
			$el.addClass('animate__animated animate__' + animation);
			$el.css('opacity', 1);
		}, {
			offset: '95%'
		});
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('#top').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});


	// Window Resize Mobile Menu Fix
	mobileNav();


	


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}






	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);