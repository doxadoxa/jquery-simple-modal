/**********************************************
Simle Jquery Modal
https://github.com/doxadoxa/jquery-simple-modal
MIT License
***********************************************/
(function($) {
	var defaults = { 'bgColor' : '#000', 'opacity' : '0.8'};
	var options;

	var showModal = function( elem, params ) {
		options = $.extend({}, defaults, options, params);

		var opacity = typeof( options.opacity ) != undefined ? options.opacity : '.80';
		var $elem = $(elem);

		$elem.fadeIn();

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

		var popuptopmargin = ( $elem.outerHeight() ) / 2;
		var popupleftmargin = ( $elem.outerWidth() ) / 2;

		$elem.css({
			'margin-top' : -popuptopmargin,
			'margin-left' : -popupleftmargin,
			'top' : '50%',
			'left' : '50%',
			'position' : 'fixed',
			'z-index' : '10000'
		});


		var closer = function( e ) {
			e.preventDefault();
			$(elem + ", #fade" ).fadeOut( 'fast', function() {
				$("#fade").detach();
			});
		}

		$("#fade").click( closer );

		if ( typeof( options.close ) != undefined ) {
			$( "#" + options.close ).click( closer );
		}

		return $elem;
	}

	$.createModal = function( elem, params ) {
		return showModal( elem, params );
	}

	$.fn.modal = function ( params ) {
		var popupid = $(this).attr('rel');

		$(this).on( 'click', function( ev ) {
			ev.preventDefault();
			showModal('#' + popupid, params);
		});

		return this;
	};

})(jQuery);
