(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

  $('nav.mobile ul li.sub').click(function(){
    $(this).toggleClass('active');
    $(this).find('ul').slideToggle();
  });
  $('nav.mobile ul li.sub').one("click", false);
  $('header .shadow').click(function(){
    $('nav.mobile').css('transform', 'translateX(-100%)');
    $(this).removeClass('active');
    $('.burger').removeClass('active');
  });
  $(' .burger').click(function(){
    $('nav.mobile').css('transform', 'translateX(0)');
    $('.shadow').addClass('active');
    $(this).addClass('active');
  });

  if($(window).width()<=1024){
    $('.bannercontainer ul li .caption').attr('data-x', 'center');
    $('.bannercontainer ul li .caption').attr('data-y', 'center');
  }
  if($(window).width()<=768){
    $('nav').addClass('mobile');
    
  }


  $("#cities").select2();


    $('input#pol').on('change', function(){
    if($(this).prop('checked')){
      $(this).parent().removeClass('active');
      $(this).parent().parent().find('label').removeClass('active');
    }else{
      $(this).parent().addClass('active');
      $(this).parent().parent().find('label').addClass('active');
    }
    });

    $('.politics > label > a').click(function(){
      $('.privacy-policy-text').slideToggle();
    });

    
    jQuery('.bannercontainer').revolution({
        delay:4000,
        startwidth:960,
        startheight:500,
        autoHeight:"off",
        fullScreenAlignForce:"on",

        onHoverStop:"off",

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:3,

        hideThumbsOnMobile:"off",
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResoluition:0,

        hideThumbs:0,
        hideTimerBar:"on",

        keyboardNavigation:"on",

        navigationType:"bullet",
        navigationArrows:"solo",
        navigationStyle:"round",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:30,
        navigationVOffset:30,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,


        touchenabled:"on",
        swipe_velocity:"0.7",
        swipe_max_touches:"1",
        swipe_min_touches:"1",
        drag_block_vertical:"false",

        stopAtSlide:-1,
        stopAfterLoops:-1,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        dottedOverlay:"none",

        fullWidth:"on",
        forceFullWidth:"off",
        fullScreen:"on",
        fullScreenOffsetContainer:"#topheader-to-offset",
        data_transition: "slotzoom-horizontal",
        shadow:0

     });


     $('.new_collection_slider').slick({
        dots: false,
        autoplay: true,
        arrows: true,
        prevArrow: $('.new_collection_slider_arrows a.arrow-prev'),
        nextArrow: $('.new_collection_slider_arrows a.arrow-next'),
        infinite: true,
        pauseOnHover: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.product_card_slider').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
        // asNavFor: '.product_card_slider_nav'
      });
      $('.product_card_slider_nav').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product_card_slider'
      });





      $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if(scrolled>=150){
          $('header > nav:not(.mobile)').addClass('active');
        } else  $('header > nav:not(.mobile)').removeClass('active');
      });


      $('.filters_box').hide();
      $('a.filter-btn').click(function(){
        $('.filters_box').slideToggle();
      });


      $('.categorie_tabs_nav > ul > li > a').click(function(){
        $('.categorie_tabs_nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
        $('.categorie_tab').removeClass('active');
        $('.categorie_tab[id='+ $(this).attr('data-id') +']').addClass('active');
      });


    })
},{}]},{},[1]);
