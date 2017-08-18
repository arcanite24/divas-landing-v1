/*
Template Name: Merceria
Author: http://bootexperts.com/
Version: 1.0
*/
(function ($) {
    "use strict";

	$(document).ready(function(){
    //Show/Hide vertical menu
		$('.vmenu-toggler').on('click', function(){
			if($('.vertical-menu').hasClass('vmenu-open')){
				$('.vertical-menu').addClass('vmenu-close');
				$('.vertical-menu').removeClass('vmenu-open');
				$('.wrapper').addClass('vmenu-close');
				$('.wrapper').removeClass('vmenu-open');
			} else {
				$('.vertical-menu').removeClass('vmenu-close');
				$('.vertical-menu').addClass('vmenu-open');
				$('.wrapper').removeClass('vmenu-close');
				$('.wrapper').addClass('vmenu-open');
			}
		});

	
	//Mobile Menu
		var mobileMenuWrapper = $('.mobile-menu-container');
		mobileMenuWrapper.find('.menu-item-has-children').each(function(){
			var linkItem = $(this).find('a').first();
			linkItem.after('<i class="fa fa-plus"></i>');
		});
		
	//Calculate the init height of menu
		var totalMenuLevelFirst = $('.mobile-menu-container .nav-menu > li').length;
		var mobileMenuH = totalMenuLevelFirst*40 + 10; //40 is height of one item, 10 is padding-top + padding-bottom;
	
		$('.mbmenu-toggler').on('click', function(){
			if(mobileMenuWrapper.hasClass('open')) {
				mobileMenuWrapper.removeClass('open');
				mobileMenuWrapper.animate({'height': 0}, 'fast');
			} else {
				mobileMenuWrapper.addClass('open');
				mobileMenuWrapper.animate({'height': mobileMenuH}, 'fast');
			}
		});
		
	//Set the height of all li.menu-item-has-children items
		$('.mobile-menu-container li.menu-item-has-children').each(function(){
			$(this).css({'height': 40, 'overflow': 'hidden'});
		});
		
	//Process the parent items
		$('.mobile-menu-container li.menu-item-has-children').each(function(){
			var parentLi = $(this);
			var dropdownUl = parentLi.find('ul.sub-menu').first();
			
			parentLi.find('.fa').first().on('click', function(){
				//set height is auto for all parents dropdown
				parentLi.parents('li.menu-item-has-children').css('height', 'auto');
				//set height is auto for menu wrapper
				mobileMenuWrapper.css({'height': 'auto'});
				
				var dropdownUlheight = dropdownUl.outerHeight() + 40;
				
				if(parentLi.hasClass('opensubmenu')) {
					parentLi.removeClass('opensubmenu');
					parentLi.animate({'height': 40}, 'fast', function(){
						//calculate new height of menu wrapper
						mobileMenuH = mobileMenuWrapper.outerHeight();
					});
					parentLi.find('.fa').first().removeClass('fa-minus');
					parentLi.find('.fa').first().addClass('fa-plus');
				} else {
					parentLi.addClass('opensubmenu');
					parentLi.animate({'height': dropdownUlheight}, 'fast', function(){
						//calculate new height of menu wrapper
						mobileMenuH = mobileMenuWrapper.outerHeight();
					});
					parentLi.find('.fa').first().addClass('fa-minus');
					parentLi.find('.fa').first().removeClass('fa-plus');
				}
				
			});
		});
	
	//Cart And Search Option
		$('.itemShow').on('mouseenter',  function(){
			$(this).addClass('float-down');
		}).on('mouseleave', function() {
			$(this).removeClass('float-down');
		});
	
	//Category view mode
		jQuery('.view-mode').each(function(){
			jQuery(this).find('.grid').on('click', function(event){
				event.preventDefault();
				
				jQuery('.view-mode').find('.grid').addClass('active');
				jQuery('.view-mode').find('.list').removeClass('active');
				
				jQuery('#archive-product .shop-products').removeClass('list-view');
				jQuery('#archive-product .shop-products').addClass('grid-view');
				
				jQuery('.list-col-4').removeClass('col-xs-12 col-sm-4');
				jQuery('.list-col-8').removeClass('col-xs-12 col-sm-8');
			});
			jQuery(this).find('.list').on('click', function(event){
				event.preventDefault();
			
				jQuery('.view-mode').find('.list').addClass('active');
				jQuery('.view-mode').find('.grid').removeClass('active');
				
				jQuery('#archive-product .shop-products').addClass('list-view');
				jQuery('#archive-product .shop-products').removeClass('grid-view');
				
				jQuery('.list-col-4').addClass('col-xs-12 col-sm-4');
				jQuery('.list-col-8').addClass('col-xs-12 col-sm-8');
			});
		});
		
    //Add to Cart Numbering
		$('.numbers-row').append('<div class="inc nbutton">+</div><div class="dec nbutton">-</div>');
		$('.nbutton').on('click', function() {
			var $button = $(this);
			var oldValue = $button.parent().find("input").val();
			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				//Don't allow decrementing below zero
				if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
				} else {
				newVal = 0;
				}
			}
			$button.parent().find("input").val(newVal);
		});
		
	//thumbnail click
		$('.quick-thumbnails a').each(function(){
			var quickThumb = $(this);
			var quickImgSrc = quickThumb.attr('href');
			
			quickThumb.on('click', function(event){
				event.preventDefault();
				
				$('.main-image').find('img').attr('src', quickImgSrc);
			});
		});
		
    //Owl Carousels (Featured Product)
        $('#featured_car').owlCarousel({
            loop:true,
			responsiveClass:true,
            dots:false,
            nav:true,
			navSpeed: 1000,
            navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                992:{
                    items:3
                },
                1200:{
                    items:4,
                    loop:false
                }
            }
        });

    //Owl Carousels (Featured Product Home-4)
        $('#home4_fproduct').owlCarousel({
            loop:true,
			responsiveClass:true,
            dots:false,
            nav:true,
			navSpeed: 1000,
			margin:30,
            navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:3,
                    loop:false
                }
            }
        });
		
    //Owl Carousels (Home Brands)
        $('#hbrand_car').owlCarousel({
            loop:true,
            responsiveClass:true,
            dots:false,
            nav:true,
			navSpeed: 2000,
            navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:4
                },
                992:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });
		
    //Owl Carousels (Home-2 Brands)
        $('#home2_brand').owlCarousel({
            loop:true,
            dots:false,
            nav:true,
			navSpeed: 2000,
            navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
			items:2
        });
		
    //Owl Carousels (Home Blog)
        $('#blog_car').owlCarousel({
            loop:false,
            dots:true,
            nav:false,
            responsiveClass:true,
			dotsSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
		
    //Owl Carousels (Home-2 Blog Post)
        $('#post_car').owlCarousel({
            loop:false,
            dots:false,
            nav:true,
			navSpeed: 2000,
			items: 1,
			navText:['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
        });
		
    //Owl Carousels (Home-3 Blog)
        $('#home3_blog').owlCarousel({
            loop:false,
            dots:true,
            nav:false,
            responsiveClass:true,
			dotsSpeed: 2000,
			margin: 30,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });	
		
    //Owl Carousels (Home Testimonials)
        $('#testimonials_car').owlCarousel({
			autoplay: true,
            loop:false,
            dots:true,
            nav:false,
			items: 1,
			dotsSpeed: 1000
        });
		
		
    //Go to top
		$('#back-top').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});

		//Scroll
		var currentP = 0;
		$(window).scroll(function(){
			var headerH = $('header').height();
			var navH = $('.nav-container').height();
			headerH+=navH;
			var scrollP = $(window).scrollTop();
			if($(window).width() > 1024){
				if(scrollP != currentP){
					//Back to top
					if(scrollP >= headerH){
						$('#back-top').addClass('show');
						$('.nav-container').addClass('ontop');
					} else {
						$('#back-top').removeClass('show');
						$('.nav-container').removeClass('ontop');
					}
					currentP = $(window).scrollTop();
				}
			}
		});
		
    //Modal
		$('#productModal').on('shown.bs.modal');
		
	//Tooltip
		$('[data-toggle="tooltip"]').tooltip();
		
	//Accordion
		$('.panel-heading a').on('click',function(e){
			if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
				e.preventDefault();
				e.stopPropagation();
			}
		});
		
	//Revolution Slider Initialize			
		$('#fullwidth_slider').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:1920,
			startheight:783,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:2,
			simplifyAll:"off",
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			touchenabled:"on",
			onHoverStop:"on",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 75,
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,					
			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,	
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			hideTimerBar:"on",
			shuffle:"off",
			autoHeight:"off",						
			forceFullWidth:"off",
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});	
	
	//Revolution Slider Initialize			
		$('#container_fw_slider').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:1170,
			startheight:783,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:2,
			simplifyAll:"off",
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			touchenabled:"on",
			onHoverStop:"on",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 75,
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			hideTimerBar:"on",
			shuffle:"off",
			autoHeight:"off",						
			forceFullWidth:"off",						
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});
	
	//Revolution Slider Initialize			
		$('#col9width_slider').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:870,
			startheight:738,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:2,
			simplifyAll:"off",
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			touchenabled:"on",
			onHoverStop:"on",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 75,
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,					
			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,	
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			hideTimerBar:"on",
			shuffle:"off",
			autoHeight:"off",						
			forceFullWidth:"off",								
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});
	
	//Revolution Slider Initialize			
		$('#col6width_slider').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:570,
			startheight:770,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:2,
			simplifyAll:"off",
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			touchenabled:"on",
			onHoverStop:"on",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 75,
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,					
			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			hideTimerBar:"on",
			shuffle:"off",
			autoHeight:"off",						
			forceFullWidth:"off",									
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});
	
    //Price Slider / UI jQuary Slider
		$( '#slider-range' ).slider({
			range: true,
			min: 40,
			max: 515,
			values: [ 40, 515 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
			
	//Shop toolbar sorting
		$('.toolbar .orderby').chosen({disable_search: true, width: "auto"})
	});
	
})(jQuery);	