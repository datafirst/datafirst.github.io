$(function() {

    var partnerslider = $(".partner-slider");
    partnerslider.addClass("owl-carousel");
    partnerslider.owlCarousel({
        items:6,
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
