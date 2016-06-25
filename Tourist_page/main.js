var mobileMenu = $('#selections');

//NAV BEHAIVIOR

//social icons
$('.fa-facebook').on({
    'mouseenter': function () {
        'use strict';
        $('.fa-facebook').animate({backgroundColor: 'rgb(59, 89, 152)'});
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-facebook').animate({backgroundColor: 'rgb(197, 197, 197)'});
    }
});

$('.fa-youtube').on({
    'mouseenter': function () {
        'use strict';
        $('.fa-youtube').animate({backgroundColor: 'rgb(187, 0, 0)'});
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-youtube').animate({backgroundColor: 'rgb(197, 197, 197)'});
    }
});

$('.fa-twitter').on({
    'mouseenter': function () {
        'use strict';
        $('.fa-twitter').animate({backgroundColor: 'rgb(0, 172, 237)'});
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-twitter').animate({backgroundColor: 'rgb(197, 197, 197)'});
    }
});

//mobile nav

$('.fa-bars').on({
    'click': function () {
        'use strict';
        if (mobileMenu.hasClass('hide')) {
            $('#fade').css({
                'background-image': 'url(../grey.png)',
                'opacity': '.4'
            });
            mobileMenu.css('width', '0');
            mobileMenu.removeClass('hide').animate({width: '15em'});
            setTimeout(function () {
                $(document).on('click', function () {
                    mobileMenu.animate({width: '0'});
                    $('#fade').removeAttr('style');
                    setTimeout(function () {
                        mobileMenu.addClass('hide');
                    }, 1000);
                }, 1000);
            });
            $('#selections li').on({
                'mouseenter': function () {
                    $(this).css('color, rgb(245, 122, 44)');
                },
                'mouseleave': function () {
                    $(this).css('color, rgb(0, 174, 211)');
                }
            });
        }
    },
    'mouseenter': function () {
        'use strict';
        $('.fa-bars').css('color', 'rgb(245, 122, 44)');
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-bars').css('color', 'rgb(97, 97, 97)');
    }
});

//max nav

$('#max-selections').hide();

$('.fa-home').on({
    'mouseenter': function () {
        'use strict';
        $('.fa-home').css('color', 'rgb(0, 174, 211)');
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-home').css('color', 'rgb(97, 97, 97)');
    }
});

$('.town, .town-selections').on({
    'mouseenter': function () {
        'use strict';
        $('.town').css({
            'background-color': 'rgb(245, 122, 44)',
            'color': 'white'
        });
        $('.town-selections li').on({
            'mouseenter': function () {
                $(this).css('color', 'rgb(245, 122, 44)');
            },
            'mouseleave': function () {$(this).css('color', 'rgb(97, 97, 97)'); }
        });
        $('#max-selections, .town-selections').fadeIn();
    },
    'mouseleave': function () {
        'use strict';
        $('.town').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
        $('#max-selections, .town-selections').fadeOut();
    }
});

$('.discover, .discover-selections').on({
    'mouseenter': function () {
        'use strict';
        $('.discover').css({
            'background-color': 'rgb(93, 186, 93)',
            'color': 'white'
        });
        $('.discover-selections li').on({
            'mouseenter': function () {
                $(this).css('color', 'rgb(93, 186, 93)');
            },
            'mouseleave': function () {$(this).css('color', 'rgb(97, 97, 97)'); }
        });
        $('#max-selections, .discover-selections').fadeIn();
    },
    'mouseleave': function () {
        'use strict';
        $('.discover').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
        $('#max-selections, .discover-selections').fadeOut();
    }
});

$('.quick, .quick-selections').on({
    'mouseenter': function () {
        'use strict';
        $('.quick').css({
            'background-color': 'rgb(232, 76, 61)',
            'color': 'white'
        });
        $('.quick-selections li').on({
            'mouseenter': function () {
                $(this).css('color', 'rgb(232, 76, 61)');
            },
            'mouseleave': function () {$(this).css('color', 'rgb(97, 97, 97)'); }
        });
        $('#max-selections, .quick-selections').fadeIn();
    },
    'mouseleave': function () {
        'use strict';
        $('.quick').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
        $('#max-selections, .quick-selections').fadeOut();
    }
});

$('.live, .live-selections').on({
    'mouseenter': function () {
        'use strict';
        $('.live').css({
            'background-color': 'rgb(0, 174, 211)',
            'color': 'white'
        });
        $('.live-selections li').on({
            'mouseenter': function () {
                $(this).css('color', 'rgb(0, 174, 211');
            },
            'mouseleave': function () {$(this).css('color', 'rgb(97, 97, 97)'); }
        });
        $('#max-selections, .live-selections').fadeIn();
    },
    'mouseleave': function () {
        'use strict';
        $('.live').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
        $('#max-selections, .live-selections').fadeOut();
    }
});


//SLIDESHOW BEHAIVIOR

$('#slideshow').slidesjs({
    width: 100,
    height: 20,
    play: {
        active: false,
        effect: 'fade',
        interval: 5000,
        auto: true,
        restartDelay: 2500
    },
    effect: {fade: {speed: 900}},
    navigation: {active: false},
    pagination: {active: false}
});

//COLUMN BEHAIVIOR


// ICON BEHAIVIOR

$('#bill-icons i, #city-directory i').on({
    'mouseenter': function () {
        'use strict';
        $(this).animate({backgroundColor: 'white', color: 'rgb(0, 174, 211)'});
    },
    'mouseleave': function () {
        'use strict';
        $(this).animate({backgroundColor: 'rgb(0, 174, 211)', color: 'white'});
    }
});