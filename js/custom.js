$(document).ready(function () {
    /***************** Navbar-Collapse ******************/

    $(window).scroll
    (
        function () 
        {
            if (document.documentElement.clientWidth < 992)
            {
 
            }
            else
            {
                if ($(".navbar").offset().top < 35) 
                {
                    $(".navbar-fixed-top").removeClass("navbar-default")
                    $(".navbar-fixed-top").removeClass("top-nav-collapse")
                    $(".navbar-fixed-top").addClass("navbar-default2");
                }
                else
                {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse")
                    $(".navbar-fixed-top").removeClass("navbar-default2")
                    $(".navbar-fixed-top").addClass("navbar-default");
            
                    if ($(".navbar").offset().top > 1090)
                    {
                        $(".navbar-fixed-top").addClass("top-nav-collapse");
                    }
                }
            }
        } 
    );
    

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    /***************** Owl Carousel ******************/
/*
    $("#owl-hero").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });


    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#main-image .item').css('height', slideHeight);

    $(window).resize(function () {
        $('#main-image .item').css('height', slideHeight);
    });
    /***************** Owl Carousel Testimonials ******************/
/*
    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 200,
        singleItem: true,
        transitionStyle: "backSlide",
        autoPlay: true

    });
    /***************** Countdown ******************/

    $('#fun-facts').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });
    /***************** Google Map ******************/

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(55.865469, -3.985093000000006),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /***************** Wow.js ******************/
    
    new WOW().init();
    
    /***************** Preloader ******************/
    
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
})