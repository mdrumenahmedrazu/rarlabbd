/*
  Theme Name: Marktoo NFT Marketplace Template
  Author: ThemexHunter
  Description: NFT Non Fungible Token Marketplace Template
  Version: 1.0
*/


(function ($) {
    "use strict";

	/* Scroll Up */
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-angle-up"></i>',
	});
	/* mobile menu */
	$('#menuToggle').click(function() {
	   $(this).toggleClass('active');
	   $('#mobile-menu').toggleClass('open');
	 });

	/* search menu */
	$('#search-click').click(function() {
	   $(this).toggleClass('active');
	   $('.mobile-open').toggleClass('open');
	 });
	 
	/* slider-active */
$('.slider-3-active').owlCarousel({
    loop:true,
    nav:true,
	autoplay:false,
	smartSpeed: 1000,
	margin:30,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})	
/********* SLIDER 5 *********/	
/* slider-active */
$('.service-active').owlCarousel({
    loop:true,
    nav:true,
	margin:30,
	smartSpeed: 1000,
	autoplay:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
/********* SLIDER 5 *********/	
/* slider-active */
$('.project-mini-slider').owlCarousel({
    loop:true,
    nav:false,
	margin:20,
	smartSpeed: 1000,
	autoplay:true,
	dots:true,
	navText:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	/********* collection slider *********/	
/* collection-active */
$('.collection-active').owlCarousel({
    loop:true,
    nav:true,
	margin:30,
	smartSpeed: 1000,
	autoplay:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
	/********* collection slider *********/	
/* collection-active */
$('.collection-active-2').owlCarousel({
    loop:true,
    nav:true,
	margin:30,
	smartSpeed: 1000,
	autoplay:false,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

	/* Preloader */ 
	$(window).on('load', function() {
	  $('.hola').delay(2000).fadeOut('slow');
	}); 
	
	/* sidebar sticky */ 
	$(function() {
		$('.sticky-scroll').StickySidebar({
		   // Settings
		   additionalMarginTop: 90
		 });
	});	

	/*------------------
		Search model
	--------------------*/
	$('.bid-btn').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});
$( document ).ready(function () {
/* project-area */
    $('.project-area-3').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     var $grid = $('.grid-warp.filter').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });
});	
//for filter menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
$( document ).ready(function () {
		//$(".moreBox").slice(0, 3).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	});		
	$('#slide-sidebar').click(function() {
		$(this).toggleClass('active');
		$('#side-item').toggleClass('open');
	 });		
	 /*  TAB   */ 
	$(document).ready(function() { 
		(function ($) { 
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			
			$('.tab ul.tabs li a').click(function (g) { 
				var tab = $(this).closest('.tab'), 
					index = $(this).closest('li').index();
				
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				
				tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
				tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
				
				g.preventDefault();
			} );
		})(jQuery);
	});	
/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})		
	/******** header_sticky ********/	
 $(window).on('scroll',function() {
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$("#header_sticky_2").removeClass("scroll_header_2");
	   }else{
		$("#header_sticky_2").addClass("scroll_header_2");
	   }
  });
	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
		$("#header_sticky").removeClass("scroll_header");
		}else{
		$("#header_sticky").addClass("scroll_header");
		}
	});

	  /* Scrolling Effect js */
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 500, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	});	
	

})(jQuery);