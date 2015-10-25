/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var contentScroll=null;
var sidemenushown=false;
var isIE=navigator.userAgent.indexOf('IEMobile', 0)>=0?true:false;
jQuery(function($){
    var k, h;
    
	function disabletouch(e){
        e.preventDefault();
    }
    $('#top-nav-link-hide, #top-nav-link').click(k=function(){
       
       console.log("clicked menu--"+$('.not-internet').is(":visible"));
        if($('.not-internet').is(":visible")){
            return false;
        }
        
        if(!sidemenushown){
            $(document).bind('touchmove', false, disabletouch);
            $('body').css({
                overflow:'hidden'
            })
            $('.sidebar').show();
            sidemenushown=true;
            /* $('header').css({ 
                 left:'100px'
            })*/
            $('#ofa-wrapper').stop().animate({
                'left':'100px'
            },300,false, function(){
//                if(!isIE)
//                contentScroll = new iScroll('sidebar-hide-scroll',{
//                    vScrollbar:false
//                });
            });
                        if($('.r-tabs-nav').css("position") == "fixed")
                        $('.r-tabs-nav').stop().animate({'left':'100px', 'right':'-100px'},300,false, function(){ });
                       
                       if($('header').css("position") == "fixed")
                        $('header').stop().animate({'left':'100px', 'right':'-100px'},300,false, function(){ });
                       
                       if($('.fix-to-tabs-home').css("position") == "fixed")                           
                        $('.fix-to-tabs-home').stop().animate({'left':'100px'},300,false, function(){ });
                         if($('.fix-to-tabs').css("position") == "fixed")                           
                        $('.fix-to-tabs').stop().animate({'left':'100px'},300,false, function(){ });
        }else{
            h();
        }
        return false;
    });
    $('#top-nav-link-hide, #top-nav-link').bind('touchstart', {}, k);
    $('#ofa-wrapper').click(h=function(){
        if(sidemenushown){
            //if(!isIE) contentScroll.destroy(true);
            sidemenushown=false;
            $('#ofa-wrapper').stop().animate({
                'left':'0px'
            },300,false, function(){
                 if(!isIE) $(document).unbind('touchmove', disabletouch);
                $('.sidebar').hide();
                $('body').css({
                    overflow:'visible'
                });
            });
            if($('.r-tabs-nav').css("position") == "fixed")
            $('.r-tabs-nav').stop().animate({'left':'0px', 'right':'0px'},300,false, function(){ });
           
           if($('header').css("position") == "fixed")
            $('header').stop().animate({'left':'0px', 'right':'0px'},300,false, function(){ });
        
         if($('.fix-to-tabs-home').css("position") == "fixed")
            $('.fix-to-tabs-home').stop().animate({'left':'0px'},300,false, function(){ });
       
            if($('.fix-to-tabs').css("position") == "fixed")
            $('.fix-to-tabs').stop().animate({'left':'0px'},300,false, function(){ });
        
        }
    });
    //==========new code for li click===============
    $('.menu-item').click(h=function(){
        
       // alert("clicked");
       if(sidemenushown){
            //if(!isIE) contentScroll.destroy(true);
            sidemenushown=false;
            $('#ofa-wrapper').stop().animate({
                'left':'0px'
            },300,false, function(){
                 if(!isIE) $(document).unbind('touchmove', disabletouch);
                $('.sidebar').hide();
                $('body').css({
                    overflow:'visible'
                });
            });
            if($('.r-tabs-nav').css("position") == "fixed")
            $('.r-tabs-nav').stop().animate({'left':'0px', 'right':'0px'},300,false, function(){ });
           
           if($('header').css("position") == "fixed")
            $('header').stop().animate({'left':'0px', 'right':'0px'},300,false, function(){ });
           
            if($('.fix-to-tabs-home').css("position") == "fixed")
            $('.fix-to-tabs-home').stop().animate({'left':'0px'},300,false, function(){ });
           
            if($('.fix-to-tabs').css("position") == "fixed")
            $('.fix-to-tabs').stop().animate({'left':'0px'},300,false, function(){ });
        
        }
       
       
    });
    //===========end of new code for li click=======
    
    $('#ofa-wrapper').bind('touchstart', {}, h);
	var c=null;
	$('#sidebar-hide-scroll li').has('ul').find('>a').click(c=function(){
		$(this).parent().find('ul').slideToggle(500, function(){
			contentScroll.refresh();
		});
		return false;
	})
})
			// JavaScript Document