/*
 ===================================================================================================
 
    @VERSION			: 1.1.1
    @CREATED			: 03 JUL 2014
    @MODIFIED			: 02 MAR 2021
    @DESIGNER			: Daniel C. K. Tan
    
    @FILE				: ~/js/plugins.js
	@TYPE				: Script
	@DESCRIPTION		: ARC(S) JQuery Plugin Initialisations
	   
 ===================================================================================================
*/

/* TOC
====================================================================================================
	#1 AVOID ERRORS
	#2 JQUERY PLUGINS
*/

/* ----------------------------------------------------------------------------------------------------
   #1 AVOID ERRORS 
/* ----------------------------------------------------------------------------------------------------*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



/* ----------------------------------------------------------------------------------------------------
   #2 JQUERY PLUGINS 
/* ----------------------------------------------------------------------------------------------------
   Place any jQuery/helper plugins in this section.
/* ----------------------------------------------------------------------------------------------------*/

/* Navigation Scrollspy
/* -------------------------------------------------------------------------------------------------*/
// Highlight the top nav as scrolling occurs
// For one page website
$('body').scrollspy({
    target: '.navbar'
});


/* Tooltips
/* -------------------------------------------------------------------------------------------------*/
$("body").tooltip({ selector: '[data-toggle="tooltip"]' });
// Support Title attributes
$("a [title]").tooltip({  });
// Allow button groups to display tooltips correctly
$('.btn-group [title]').tooltip({
  container: 'body'
})


/* Responsive Image Maps
/* -------------------------------------------------------------------------------------------------*/
// https://github.com/stowball/jQuery-rwdImageMaps
//$(document).ready(function(e) {
//$(window).load(function() {
/*$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
});

$(window).load(function() {
	$('img[usemap]').rwdImageMaps();
});*/


jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/
	
	// Close collapsed  menu on click. Run at 1024 or lower
	// http://stackoverflow.com/a/19385791
	// For one page website
	/*$('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });*/
	
	
	
	
	/* Font Resizer
	/* -------------------------------------------------------------------------------------------------*/
	// http://demos.angstrey.com/jquery/plugins/jquery.textresizer/demos/index.html
	$("#textsizer a").textresizer({
		target: "#content-area",
		type: "fontSize",
		sizes: [ "12px", "14px", "16px" ],
		selectedIndex: 1
	});

	
	/* Scroll to Top
	/* -------------------------------------------------------------------------------------------------*/
	// http://webdesignerwall.com/tutorials/animated-scroll-to-top
	var scrollDiv = document.createElement("div");
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");    
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() != 0) {
			jQuery("#toTop").fadeIn();
		} else {
			jQuery("#toTop").fadeOut();
		}
	});
	jQuery("#toTop").click(function () {
		jQuery("body,html").animate({
			scrollTop: 0
		},
		800);
	});
	
	
	
	/* Add Icons to Menu Links
	/* -------------------------------------------------------------------------------------------------*/
	$("a[class*='contact']").prepend('<i></i> ').find('i').addClass("fa fa-bookmark fa-fw");
	$("a[class*='faq']").prepend('<i></i> ').find('i').addClass("fa fa-question-circle fa-fw");
	$("a[class*='sitemap']").prepend('<i></i> ').find('i').addClass("fa fa-sitemap fa-fw");
	$("a[class*='feedback']").prepend('<i></i> ').find('i').addClass("fa fa-star fa-fw");
	
	
	/* Sticky Mainnav onScroll
	/* -------------------------------------------------------------------------------------------------*/
	// http://jsfiddle.net/yeco/4EcFf/
	var menu = $('.mainnav');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.mainnav').removeClass('navbar-static').addClass('navbar-fixed-top navbar-collapse-fixed-top mainnav-sticky');
            //$('.content').addClass('menu-padding');
        } else {
            $('.mainnav').removeClass('navbar-fixed-top navbar-collapse-fixed-top mainnav-sticky').addClass('navbar-static');
            //$('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;
	
	
	/* Tabs
	/* -------------------------------------------------------------------------------------------------*/
	// Linking to a Bootstrap Tab from Button in Tab Content
	// http://jsfiddle.net/Bp2jm/
	$('.tab-content .tab-pane a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = this.href.split('#');
		$('.nav a').filter('a[href="#'+target[1]+'"]').tab('show');
		
		// Scroll to top after loading tab contents
		// http://stackoverflow.com/a/21105960
		var href = $(this).attr('href');		
		$("html, body").animate({ scrollTop:$('.itemFullText').position().top}, 'slow');
	})
	
	
	// Enable link to tabs
	// http://stackoverflow.com/a/10787789/2332958
	var hash = document.location.hash;
	var prefix = "tab_";
	if (hash) {
		$('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
	} 
	
	// Change hash for page-reload
	$('.nav-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash.replace("#", "#" + prefix);
	});

	
	/* PrettyPhoto Lightbox
	/* -------------------------------------------------------------------------------------------------*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
	

	/* Smooth Scrolling, supports other BS3 Components
	/* -------------------------------------------------------------------------------------------------*/
	// http://css-tricks.com/snippets/jquery/smooth-scrolling/
	// http://stackoverflow.com/questions/7144976/jquery-multiple-not-selector
	//$('a[href*=#]:not([href=#]):not([data-toggle])').click(function() {
	  $('a:not([href*=javascript]):not([href^=#]):not([data-toggle])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
	
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
		
	});
	
	
	/* Carousel Loading Timer
	/* -------------------------------------------------------------------------------------------------*/
	// http://bootsnipp.com/snippets/featured/carousel-with-timer-and-caption
	// Events that reset and restart the timer animation when the slides change
	$("#myCarousel").on("slide.bs.carousel", function(event) {
		//The animate class gets removed so that it jumps straight back to 0%
		$(".transition-timer-carousel-progress-bar", this)
			.removeClass("animate").css("width", "0%");
	}).on("slid.bs.carousel", function(event) {
		//The slide transition finished, so re-add the animate class so that
		//the timer bar takes time to fill up
		$(".transition-timer-carousel-progress-bar", this)
			.addClass("animate").css("width", "100%");
	});
	
	//Kick off the initial slide animation when the document is ready
	$(".transition-timer-carousel-progress-bar", "#myCarousel")
		.css("width", "100%");
	
	
	// Quotes Carousel
	$('#carousel-quotes').carousel({
	  interval: 10000,
	  cycle: true
	})
	
});


/* Convert a Menu to a Dropdown - Create the dropdown base on Top Navigation Menu
/* -------------------------------------------------------------------------------------------------*/
// http://css-tricks.com/convert-menu-to-dropdown/
// http://jsfiddle.net/bloqhead/Kq43X/
$(window).load(function(){
	// Create the dropdown base
	$("<select class='form-control' />").appendTo("#topnav-mobile");
	
	// Create default option "Go to..."
	$("<option />", {
		 "selected": "selected",
		 "value"   : "",
		 "text"    : "Go to..."
	}).appendTo("#topnav-mobile select");
	
	// Populate dropdown with menu items
	$(".topnav .nav a").each(function() {
		var el = $(this);
		$("<option />", {
		   "value"   : el.attr("href"),
		   "text"    : el.text()
		}).appendTo("#topnav-mobile select");
	});
	
	// To make dropdown actually work
	// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
	$("#topnav-mobile select").change(function() {
		window.location = $(this).find("option:selected").val();
	});

});


/* Parallax Effects
/* -------------------------------------------------------------------------------------------------*/
// Plugin: ~/js/stellar.js

// Detect Webkit Mobile Browser
var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

// Execute Parallax Effects based on Browsers
if (isMobileWebkit) {
	$(window).stellar({
		// Refreshes parallax content on window load and resize
		responsive:true,
		
		// Select which property is used to calculate scroll.
		scrollProperty: 'transform',
		
		// Select which property is used to position elements.
		positionProperty: 'transform', /* for iOS */
		
		// Enable or disable the two types of parallax
		//parallaxElements: false,
		
		// Set scrolling to be in either one or both directions
		horizontalScrolling: false,
		
		// Set the global alignment offsets
		horizontalOffset: 0,
		verticalOffset: 40
	});	
} else {
	$(window).stellar({
		// Refreshes parallax content on window load and resize
		responsive:true,
		
		// Select which property is used to calculate scroll.
		scrollProperty: 'scroll',
		
		// Select which property is used to position elements.
		positionProperty: 'transform', /* for iOS */
		
		// Enable or disable the two types of parallax
		//parallaxElements: false,
		
		// Set scrolling to be in either one or both directions
		horizontalScrolling: false,
		
		// Set the global alignment offsets
		horizontalOffset: 0,
		verticalOffset: 40
	});
}


/* Document Viewer
/* -------------------------------------------------------------------------------------------------*/
// http://codepen.io/ckuijjer/pen/azmVXG?editors=101
// https://jsfiddle.net/danielcktan/su5d7m1z/72/
$('.docViewer').click(function(){
	var url = $(this).attr('href');
	$("#docViewer .modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="'+url+'"></iframe>');
	$('#docViewer .modal-body').css('height', $(window).height() * 0.7);
})
 
