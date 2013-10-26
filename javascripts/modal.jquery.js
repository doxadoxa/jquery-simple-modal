/**********************************************
Simle Jquery Modal
https://github.com/doxadoxa/jquery-simple-modal
MIT License
***********************************************/
(function($) {
	var defaults = { 'bgColor' : '#000', 'opacity' : '0.8'};
	var options;

	$.fn.modal = function ( params ) {
		options = $.extend({}, defaults, options, params);

		var popupid = $(this).attr('rel');
		var opacity = typeof( options.opacity ) != undefined ? options.opacity : '.80';


		$(this).click( function () {
			$('#' + popupid).fadeIn();

			$('body').append('<div id="fade"></div>');
			$("#fade").css( { 
				'display' : 'none', /* Скрыто по умолчанию */
				'background' : options.bgColor,
				'position': 'fixed',
				'left' : '0',
				'top' : '0',
				'width' : '100%', 
				'height' : '100%',
				'opacity' : options.opacity,
				'z-index' : '9999',
				'filter' : 'alpha(opacity=' + ( options.opacity * 100 ) + ')'
			}).fadeIn();

			var popuptopmargin = ($('#' + popupid).height() + 10) / 2;
			var popupleftmargin = ($('#' + popupid).width() + 10) / 2;

			$('#' + popupid).css({
			'margin-top' : -popuptopmargin,
			'margin-left' : -popupleftmargin,
			'top' : '50%',
			'left' : '50%',
			'position' : 'fixed'
			});

			$("#fade").click( closer );

		});


		var closer = function( e ) {
			e.preventDefault();
			$('#' + popupid+", #fade" ).fadeOut( 'fast', function() {
				$("#fade").detach();
			});
		}

		if ( typeof( options.close ) != undefined ) {
			$( "#" + options.close ).click( closer );
		}

		return this;
	};

})(jQuery);