/** Easy As Pie Responsive Navigation Plugin

 The MIT License (MIT)

 * Copyright (c) 2013 Chris Divyak

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/
(function($){

 	$.fn.extend({ 
 		
		//pass the options variable to the function
 		easyPie: function(options) {


			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				icon: "+",
				navClass: "applePie",
				collapseClass: "pieCollapse"
			}
			
				
			var options =  $.extend(defaults, options);

    		return this.each(function() {
				var o = options;
				
				if ($(window).width() > 800) {
					//Call Superfish menu for nice drop-downs
					$("."+o.navClass).superfish({delay:0,speed:'fast',});
					}
				//IF WINDOW SIZE kindle
				if ($(window).width() < 800) {
					//IF NAV LI CONTAINS DROPDOWN, ADD PLUS SIGN
					$("li").find('ul').addClass(o.collapseClass);
					$("span").remove();
					$("ul."+o.collapseClass).before('<span>'+o.icon+'</span>');  
				}
				
				//ON WINDOW RESIZE
				$(window).on('resize', function(){
			      
			      	if ($(window).width() < 800) {
			   
					    //Check if span exists within li, if not, add 
					    if($("."+o.navClass+" li span").length < 1){	
					  	   $("."+o.navClass+" li").append("<span>"+o.icon+"</span>");	
					  	}
					  	
					  	//If slideToggle was open, close
						if ($("."+o.navClass+" ul").is(":visible")){
							$("."+o.navClass+" ul:first").hide();
							}
						//FIX menu hide issue when nav gets to bottom of device
						if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
							$("."+o.navClass+" ul:first").show();
							}
					 }
					 if ($(window).width() > 800) {
					 	//Show nav even if slideToggle collapsed
						$("."+o.navClass+" ul:first").show();
						
						//CALL SUPERFISH ON RESIZE
						$("."+o.navClass).superfish({delay:0,speed:'fast',});
						}
				}); 
					
				//ON CLICK SLIDETOGGLE
				 $("."+o.navClass+" li span, .menubtn").click(function(e){
				     e.preventDefault();	
				     $(this).next("ul").slideToggle(function(){
					     $(this).parent().toggleClass("menuOpen");
						 });
				     
				     if($("ul#nav").is(":visible")){
					     $(".menubtn").addClass("menuOpen");
				     }
				    if($("ul#nav").is(":hidden")){
					     $(".menubtn").removeClass("menuOpen");
				     }
			
					
				 });  

						
    		});
    	}
	});
	
})(jQuery);
