$(document).ready(function () {

    // load background image 
    $('[data-background]').each(function () {
        $(this).css({ "background-image": "url(" + $(this).data("background") + ")" });
    });
    // end load background image 


    // show language 
    $(".buttonLanguageTopHeader").on("click", function () {
        $(".wrapperLanguageTopHeader").fadeToggle();
        $(".backgroundCloseLanguageTopHeader").fadeToggle();
    })
    $(".backgroundCloseLanguageTopHeader").on("click", function () {
        $(".wrapperLanguageTopHeader").fadeOut();
        $(this).fadeOut();
    })


    $(".itemMainMenu").hover(function () {
        if ($(document).width() > 992) {
            let subMenu = $(this).children(".wrapperSubMenu");
            subMenu.stop().fadeIn();
        }
    }, function () {
        if ($(document).width() >= 992) {
            let subMenu = $(this).children(".wrapperSubMenu");
            subMenu.stop().fadeOut();
        }
    })

    $(window).resize(function () {
        if ($(document).width() >= 992) {
            $(".wrapperSubMenu").stop().fadeOut();
        }
    });

    $(".haveSubMenu").on("click", function () {
        $(".wrapperSubMenu").slideToggle();
    })

    $(".buttonMainMenuTopHeader").on("click", function () {
        if($(document).width() < 992){
            $(this).children(".iconShowMenu, .iconHideMenu").fadeToggle();
            $(".wrapperBottomHeader, .buttonCloseMainMenu").toggleClass("active");
            $("body").toggleClass("overflow-hidden");
        }
        
    })
    $(".buttonCloseMainMenu").on("click", function () {
        if($(document).width() < 992){
            $(".wrapperBottomHeader, .buttonCloseMainMenu").removeClass("active");
            $(".iconShowMenu, .iconHideMenu").fadeToggle();
            $("body").removeClass("overflow-hidden");
        }
        
    })


    $(document).scroll(function () {
        if($(document).scrollTop() > 100){
            $(".containerLogoTopHeader").addClass("fixed");    
        }else {
            $(".containerLogoTopHeader").removeClass("fixed");
        }
        
        if ($(document).scrollTop() > 700) {
            $(".wrapperButtonShowBookingBottomHeader").fadeIn();
        } else {
            $(".wrapperButtonShowBookingBottomHeader").fadeOut();
        }
    })

    $(".buttonShowBooking, .buttonShowBookingBottomHeader").on("click", function () {
        $(".wrapperPopupBooking, .backgroundCLosePopupBooking").toggleClass("active");
    })

    $(".backgroundCLosePopupBooking, .buttonClosePopupBooking").on("click", function () {
        $(".wrapperPopupBooking, .backgroundCLosePopupBooking").toggleClass("active");
    })


    $(".showMainSlide").slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        fade: true,
        prevArrow: '<button class="slideArrowPrimary prevArrow"></button>',
        nextArrow: '<button class="slideArrowPrimary nextArrow"></button>',
    })
    $(".contentSpecial").slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: '<button class="slideArrowPrimary prevArrow"></button>',
        nextArrow: '<button class="slideArrowPrimary nextArrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })



    // booking

    $("#checkIn").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: "0",
        onSelect: function (dateStr) {
            $("#textCheckIn span").html(dateStr);
            var min = $(this).datepicker('getDate');
            if (min) {
                min.setDate(min.getDate() + 1);
            }
            $('#checkOut').datepicker('option', 'minDate', min || '0');
        }
    }).datepicker("setDate", new Date);
    
    $("#checkOut").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: "0",
        onSelect: function (dateStr) {
            $("#textCheckOut span").html(dateStr);
            var max = $(this).datepicker('getDate');
            if (max) {
                max.setDate(max.getDate() - 1);
            }
            $('#checkIn').datepicker('option', 'maxDate', max);
        }
    }).datepicker("setDate", new Date);
    
    $("#textPopupCheckIn").datepicker({
        dateFormat: 'dd/mm/yy',
        onSelect: function (dateText, inst) {
            $("#textCheckIn span").html(dateText);
        },
        minDate: "0",
        onSelect: function (dateStr) {
            var min = $(this).datepicker('getDate');
            if (min) {
                min.setDate(min.getDate() + 1);
            }
            $('#textPopupCheckOut').datepicker('option', 'minDate', min || '0');
        }
    });

    $("#textPopupCheckOut").datepicker({
        dateFormat: 'dd/mm/yy',
        onSelect: function (dateText, inst) {
            $("#textCheckOut span").html(dateText);
        },
        minDate: "0",
        onSelect: function (dateStr) {
            var max = $(this).datepicker('getDate');
            if (max) {
                max.setDate(max.getDate() - 1);
            }
            $('#textPopupCheckIn').datepicker('option', 'maxDate', max);
        }
    });


    $(".buttonExtendField").on("click", function () {
        $(this).toggleClass("active")
        $(".wrapperExtendFied").fadeToggle();
    })
    // end booking 




    $(document).scroll(function () {
        if ($(document).scrollTop() > 250) {
            $(".wrapperButtonScrollTop").addClass("active");
            $(".wrapperListLinkSocialFixed").addClass("active");

        } else {
            $(".wrapperButtonScrollTop").removeClass("active");
            $(".wrapperListLinkSocialFixed").removeClass("active");
        }
    })

    $(".buttonScrollTop").on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    })


    // moments
    if ($(".elementMoments").length < 5) {
        $(".contentMoment").addClass("resize4");
    } else if ($(".elementMoments").length < 6) {
        $(".contentMoment").addClass("resize5");
    } else if ($(".elementMoments").length < 7) {
        $(".contentMoment").addClass("resize6");
    } else if ($(".elementMoments").length < 8) {
        $(".contentMoment").addClass("resize7");
    } else if ($(".elementMoments").length < 9) {
        $(".contentMoment").addClass("resize4");
    }
})