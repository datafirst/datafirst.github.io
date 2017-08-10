$(function() {

    $('.nav-open').on('click', function(e){
        e.preventDefault();
        $('body').addClass('no_scroll');
        $('.nav-scroll').addClass('visible');
    });
    $('.close-nav').on('click', function(e){
        e.preventDefault();
        $('body').removeClass('no_scroll');
        $('.nav-scroll').removeClass('visible');
    });

    var partnerslider = $(".partner-slider");
    partnerslider.addClass("owl-carousel");
    partnerslider.owlCarousel({
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6,
            }
        },
        margin:30,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:2500,
        dots:false,
        merge:3,
        nav: true,
        loop:true,
        navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
    });

    $(".scroll").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 900,
            easing: "swing"
        });
        return false;
    });

});
