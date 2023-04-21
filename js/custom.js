$(function ($) {
    "use strict";

    $(document).ready(function () {

     // pre_loader
        $("#pre_loader").delay(300).animate({
            "opacity": "0"
        }, 500, function () {
            $("#pre_loader").css("display", "none");
        });


    // On SCROLL actions
        var scroll_offset = 120;
        $(window).scroll(function(){
            var $this = $(window);
            if( $('.header_area').length ) {
                if( $this.scrollTop() > scroll_offset ) { 
                    $('.header_area').addClass('nav_fixed');
                } else {
                    $('.header_area').removeClass('nav_fixed');
                }	
            }
        });
 

    // Scroll Top
        $(window).scroll(function(){
            if($(window).scrollTop() > 500 ){
                $('.scrollToTop').addClass('topActive');
            }
            else{
                $('.scrollToTop').removeClass('topActive');
            }
        });
  
    // magnific-popup
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        // gridGallery
        $('.popup_img').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            }
        });

    // form validate

        $("#frmContactus").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                message: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                website: {
                    required: true
                }
            },
            messages: {
                name: {
                    minlength: "Name should be at least 2 characters"
                },
                message: {
                    number: "Offer should be at least 5 characters"
                }
            }
        });
 
        // ajax
        jQuery('#frmContactus').on('submit',function(e){
            jQuery('#msg').html('');
            jQuery('#submit').html('Please wait....');
            jQuery('#submit').attr('disabled',true);
            jQuery.ajax({
                url:'mail.php',
                type:'POST',
                data:jQuery('#frmContactus').serialize(),
                success:function(result){
                    jQuery('#msg').html(result);
                    jQuery('#submit').html('Send Message');
                    jQuery('#submit').attr('disabled',false);
                    jQuery('#frmContactus')[0].reset();

                    setTimeout(function () {
                        $('.alert-dismissible').fadeOut('slow', function(){
                            $(this).remove();
                        });
                    }, 3000);
                }
            });
            e.preventDefault();
        });
        
        // Email Subscribe
        jQuery('#frmSubscribe').on('submit',function(e){
            var emailSubscribe = jQuery("input[name='sMail']").val();
            jQuery('#subscribeMsg').html('');
            jQuery('#emailSubscribe').html('Please wait....');
            jQuery('#emailSubscribe').attr('disabled',true);
            jQuery.ajax({
                url:'mail.php',
                type:'POST',
                data: {
                    'subscribes': '',
                    'emailSubscribe': emailSubscribe
                },
                success:function(result){
                    jQuery('#subscribeMsg').html(result);
                    jQuery('#emailSubscribe').html('Subscribe');
                    jQuery('#emailSubscribe').attr('disabled',false);
                    jQuery('#frmSubscribe')[0].reset();

                    setTimeout(function () {
                        $('.alert-dismissible').fadeOut('slow', function(){
                            $(this).remove();
                        });
                    }, 3000);
                }
            });
            e.preventDefault();
        });

      // Countdown
        window.onload = ()=>{
            // $(selector).countMe(delay,speed)
            $("#num1").countMe(60,20);
            $("#num2").countMe(90, 90);
            $("#num3").countMe(100, 100);
            $("#num4").countMe(90,10);
        };
 
     
    // swiper slider
    var swiper = new Swiper(".client_company", {
        slidesPerView: '2',
        spaceBetween: 24,
        loop: true,
        freeMode: true,
        autoplay: {
            delay:1,
        },
        speed: 6000,
        allowTouchMove: false,
        breakpoints: { 
            480: {
            slidesPerView: 2,
            spaceBetween: 24,
            },
            576: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
            992: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
        },
    });

    // client_review
        var swiper = new Swiper(".client_review_swiper", {
            slidesPerView: 1,
            spaceBetween: 25,
            freeMode: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    // choose_holiday_swiper
        var swiper = new Swiper(".choose_holiday_swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            freeMode: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: { 
                480: {
                slidesPerView: 2,
                },
                576: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 3,
                },
                992: {
                slidesPerView: 4,
                },
            },
        });


        // my next birthday
        let custom_countdown = document.querySelector(".custom_countdown");
        if(custom_countdown){
            const newDate = new Date('sep 12 23 23:59:59').getTime()
            const countdown = setInterval(() =>{
            
                const date = new Date().getTime()
                const diff = newDate - date
    
                const month =  Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
                const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
                const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
                let secondsPara = document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
                let minutesPara = document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes :minutes
                let hoursPara = document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
                let daysPara = document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
                let monthsPara = document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month
    
                $(".secondsV1").html(secondsPara.toString().split('')[0]);
                $(".secondsV2").html(secondsPara.toString().split('')[1]);
                $(".minutesV1").html(minutesPara.toString().split('')[0]);
                $(".minutesV2").html(minutesPara.toString().split('')[1]);
                $(".hoursV1").html(hoursPara.toString().split('')[0]);
                $(".hoursV2").html(hoursPara.toString().split('')[1]);
                $(".daysV1").html(daysPara.toString().split('')[0]);
                $(".daysV2").html(daysPara.toString().split('')[1]);
                $(".monthsV1").html(monthsPara.toString().split('')[0]);
                $(".monthsV2").html(monthsPara.toString().split('')[1]);
    
                if(diff === 0){
                    clearInterval(countdown)
                    document.querySelector(".countdown").innerHTML = 'Happy Birthday'
                }
    
            }, 1000)
        }

    });    
});


