var $window = $(window),
	$animation_elements = $('.animation-element');

function check_if_in_view() {
	'use strict';
	var window_height = $window.height(),
		window_top_position = $window.scrollTop(),
		window_bottom_position = (window_top_position + window_height);
	
	$.each($animation_elements, function () {
		var $element = $(this),
			element_height = $element.outerHeight(),
			element_top_position = $element.offset().top,
			element_bottom_position = (element_top_position + element_height);
		
		if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} else {
			$element.removeClass('in-view');
		}
	});
}

$('.fa-bars').on('click', function () {
    'use strict';
    $('.open-min-nav').slideToggle();
});

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');