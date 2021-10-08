$(function () {

    "use strict";


    // ======Menufix===== //

       var navoff = $(".main_menu").offset().top;
    
       $(window).scroll(function () {
           var scrolling = $(this).scrollTop();
    
           if (scrolling > navoff) {
               $(".main_menu").addClass("menu_fix");
           } else {
               $(".main_menu").removeClass("menu_fix");
           }
       });


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

  
    // ======Slick Slider===== //

    $('.banner__slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        fade:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }, 
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
},
    {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });


    
    $('.testi__slider').slick({
        dots: false,
        arrows:true,
        // infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    }, 
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
},
    {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });


    // =====Aos Js===== n//

    AOS.init(
        {
            duration: 2000,
        }
    );



});

$(document).ready(function(){
    $('.venobox').venobox(); 
});