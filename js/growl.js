// JavaScript Document
(function($){
$.growl = function(message, options){
	var defaults = {type:'warning', position:'topright',timeout:5000,class:'span4'};    
    var options = $.extend(defaults, options);
	var pos = {'bottomright' : {'bottom':0,'right':10 },'bottomleft' : {'bottom':0,'left':0},'topright' : {'top':10,'right':10 },'topleft' : {'top':10,'left':0 }};
	var alertbox = $('<div class="alert"><button class="close" data-dismiss="alert">×</button>'+message+'</div>');
    $(alertbox).addClass('alert-'+options.type).hide();
	var growl = $('#growl'+options.position);
	if (!$(growl).length) {
		growl = $('<div id="growl'+options.position+'"></div>');
		$('body').append(growl);
		$(growl).css({'position':'fixed'}).css(pos[options.position]).addClass(options.class);
	}
    $(growl).prepend(alertbox);
    $(alertbox).slideDown('slow').delay(options.timeout).slideUp('slow', function() { $(this).remove();if ($(growl).children().length <= 0){$(growl).remove();}});
}
})(jQuery);