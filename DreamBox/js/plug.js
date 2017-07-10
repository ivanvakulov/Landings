(function($){

	$.fn.testPlug = function(options){ 

		var options = $.extend({ 
			speed: 1000
		}, options)

		var make = function(){
			
			$(this).click(function(e){
				e.preventDefault();
				var id = $(this).attr('href');
				var offset = $(id).offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, options.speed);
			})

		}

		return this.each(make) 
	}

}(jQuery))