/***************************************/
// jQuery Tabber
// By Jordan Boesch
// www.boedesign.com
// Dec 25, 2007 (Merry Christmas!)
/***************************************/

(function($){

		$.jtabber = function(params){
				
				// parameters
				var navDiv = params.mainLinkTag;
				var selectedClass = params.activeLinkClass;
				var hiddenContentDiv = params.hiddenContentClass;
				var showDefaultTab = params.showDefaultTab;
				var showErrors = params.showErrors;
				var effect = params.effect;
				var effectSpeed = params.effectSpeed;
				// If we want to show the first block of content when the page loads
				if(!isNaN(showDefaultTab)){
					showDefaultTab--;
					$("."+hiddenContentDiv+":eq("+showDefaultTab+")").css('display','block');
					$(navDiv+":eq("+showDefaultTab+")").addClass(selectedClass);	
				}
				
				// each anchor
				$(navDiv).each(function(){
										
					$(this).click(function(){
						// once clicked, remove all classes
						$(navDiv).each(function(){
							$(this).removeClass();
						})
						// hide all content
						$("."+hiddenContentDiv).css('display','none');
						
						// now lets show the desired information
						$(this).addClass(selectedClass);
						var contentDivId = $(this).attr('title');
						
						if(effect != null){
							
							switch(effect){
								
								case 'slide':
								$("#"+contentDivId).slideDown(effectSpeed);
								break;
								case 'fade':
								$("#"+contentDivId).fadeIn(effectSpeed);
								break;
								
							}
								
						}
						else {
							$("#"+contentDivId).css('display','block');
						}
						return false;
					})
				})
			
			}
	
})(jQuery);	



$(document).ready(function(){
		
		$.jtabber({
			mainLinkTag: "#nav_mct a", // much like a css selector, you must have a 'title' attribute that links to the div id name
			activeLinkClass: "selected", // class that is applied to the tab once it's clicked
			hiddenContentClass: "hiddencontent", // the class of the content you are hiding until the tab is clicked
			showDefaultTab: 1, // 1 will open the first tab, 2 will open the second etc.  null will open nothing by default
			showErrors: true, // true/false - if you want errors to be alerted to you
			effect: 'fade', // null, 'slide' or 'fade' - do you want your content to fade in or slide in?
			effectSpeed: 'slow' // 'slow', 'medium' or 'fast' - the speed of the effect
		})
		
		
		
	})
	
	
$(document).ready(function(){
		
		$.jtabber({
			mainLinkTag: "#nav_mct1 a", // much like a css selector, you must have a 'title' attribute that links to the div id name
			activeLinkClass: "selected1", // class that is applied to the tab once it's clicked
			hiddenContentClass: "hiddencontent1", // the class of the content you are hiding until the tab is clicked
			showDefaultTab: 1, // 1 will open the first tab, 2 will open the second etc.  null will open nothing by default
			showErrors: true, // true/false - if you want errors to be alerted to you
			effect: 'fade', // null, 'slide' or 'fade' - do you want your content to fade in or slide in?
			effectSpeed: 'slow' // 'slow', 'medium' or 'fast' - the speed of the effect
		})
		
		
		
	})