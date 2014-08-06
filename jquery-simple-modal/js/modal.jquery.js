/**********************************************
Simle Jquery Modal
https://github.com/doxadoxa/jquery-simple-modal
MIT License
***********************************************/
(function($) {
	var defaults = { 
		'bgColor' : '#000', 
		'opacity' : '0.8', 
		'speed' : 'normal',
		'fadeID' : 'fade' 
	};
	
	var options;

	var showModal = function( elem, params ) {
		options = $.extend({}, defaults, options, params);

		var opacity = typeof( options.opacity ) != undefined ? options.opacity : '.80';
		var $elem = $(elem);

		$elem.fadeIn( options.speed );

		$('body').append('<div id="' + options.fadeID + '" style="display:none;"></div>');
		$('#' + options.fadeID ).css( { 
			'background' : options.bgColor,
			'position': 'fixed',
			'left' : '0',
			'top' : '0',
			'width' : '100%', 
			'height' : '100%',
			'opacity' : options.opacity,
			'z-index' : '9999',
			'filter' : 'alpha(opacity=' + ( options.opacity * 100 ) + ')'
		}).fadeIn( options.speed );

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

		var closer = function() {
			$( elem + ", #" + options.fadeID ).fadeOut( options.speed, function() {
				$( "#" + options.fadeID ).detach();
				options.onClose && options.onClose();
			});
			
			return false;
		}

		$( "#" + options.fadeID ).click( closer );

		if ( typeof( options.close ) != undefined ) {
			$( "#" + options.close ).on('click', closer );
		}

		return $elem;
	}

	$.createModal = function( elem, params ) {
		return showModal( elem, params );
	}

	$.fn.modal = function ( params ) {
		var popupID = $(this).attr('rel');

		$(this).on( 'click', function( ev ) {
			ev.preventDefault();
			showModal('#' + popupID, params);
		});

		return this;
	};

})(jQuery);
