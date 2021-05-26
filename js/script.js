$(function ($) {

    var MainNav = $('.header_top'),
        wIn = $(window);

    var menuofset = MainNav.offset().top;
    wIn.on('scroll', function () {
        var scrol = wIn.scrollTop();
        if (scrol > menuofset) {
            MainNav.addClass('menufix');
        } else {
            MainNav.removeClass('menufix');
        }
    })
    $('.filture .btn_info ul li').on('click', function () {
        $('.filture .btn_info ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.menu_icon i').on('click', function () {
        $('.style_menu').animate({
            'left': '0'
        })
    })
    $('.close i').on('click', function () {
        $('.style_menu').animate({
            'left': '-255'
        })
    })

    // pogoslider part //
    $('.pogoSlider').pogoSlider({
        pauseOnHover: false,
        arrows: false,
    })

    // isotop plugin start here //

    //    $('.filter-button-group').on('click', 'button', function () {
    //        var filterValue = $(this).attr('data-filter');
    //        $grid.isotope({
    //            filter: filterValue
    //        });
    //    });
    //
    //    $('.grid').isotope({
    //        // set itemSelector so .grid-sizer is not used in layout
    //        itemSelector: '.grid-item',
    //        percentPosition: true,
    //        masonry: {
    //            // use element for option
    //            columnWidth: '.grid-item',
    //        }
    //    })


    var mixer = mixitup('.filtured_container');


    $('.product_slide').slick({
        slidesToShow: 3,
        slidesToScroll1: 1,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 1200,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
          ]
    });
    $('.feedback_slider').slick({
        slidesToShow: 1,
        slidesToScroll1: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: false,
        asNavFor: '.customer_slide',
    });

    $('.customer_slide').slick({
        slidesToShow: 3,
        slidesToScroll1: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        dotsClass: 'slick-dots',
        asNavFor: '.feedback_slider',
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
    });

});
