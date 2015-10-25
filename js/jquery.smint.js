/*

SMINT V1.0 by Robert McCracken

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/
(function(){

	
	$.fn.smint = function( options ) {

		// adding a class to users div
		$(this).addClass('smint')

		var settings = $.extend({
            'scrollSpeed '  : 500
            }, options);
				//mujeeb added below lin
var stickyTop = $('.smint').offset().top+$('.skdslider').height()-12;
		return $('.smint a').each( function() {

// $(this).removeClass('r-tabs-state-active');				
//$(this).addClass('r-tabs-state-default');
			if ( settings.scrollSpeed ) {

				var scrollSpeed = settings.scrollSpeed

			}


			///////////////////////////////////

			// get initial top offset for the menu 
				//mujeeb commented below lin
			//var stickyTop = $('.smint').offset().top+$('.skdslider').height();
            //alert(stickyTop);
			// check position and make sticky if needed
			var stickyMenu = function(){
				
				// current distance top
				var scrollTop = $('#wrapper').scrollTop(); 
                                //var scrollTop = $('html,body').scrollTop();
                                //alert(scrollTop);
				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop) { 
					$('.smint').css({ 'position': 'fixed', 'top':55 }).addClass('fxd');

					} else {
						$('.smint').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fxd'); 
					}   
			};
					
			// run function
			stickyMenu();
					
			// run function every time you scroll
			$('#wrapper').scroll(function() {
				 stickyMenu();
			});

			///////////////////////////////////////
    
//        
//        	$(this).on('click', function(e){
//				alert("hi");
//				
//$(this).removeClass('r-tabs-state-default');				
//$(this).addClass('r-tabs-state-active');
//				e.preventDefault();

/*
				// gets the height of the users div. This is used for off-setting the scroll so th emenu doesnt overlap any content in the div they jst scrolled to
				var selectorHeight = $('.smint').height();   

        		// stops empty hrefs making the page jump when clicked
				e.preventDefault();

				// get id pf the button you just clicked
		 		var id = $(this).attr('id');
				//console.log(id);
				// gets the distance from top of the div class that matches your button id minus the height of the nav menu. This means the nav wont initially overlap the content.
				var goTo =  $('div.'+ id).offset().top -selectorHeight;
				
				// Scroll the page to the desired position!
				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);
*/
//			});	

            

		});

	}

})();
