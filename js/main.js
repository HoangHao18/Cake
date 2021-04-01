$(document).ready(function(){
  $('.main-slider').slick({
    dot: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<ion-icon class="my-slider-arrow" name="chevron-back-outline"></ion-icon>',
    nextArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-right" name="chevron-forward-outline"></ion-icon>'

  });


});

$(document).ready(function(){
  $('.wwa-main-images').slick({
    dot: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    // prevArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-left" name="chevron-back-outline"></ion-icon>',
    // nextArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-right" name="chevron-forward-outline"></ion-icon>',

  });
});

$(document).ready(function(){
  $('.best-selling-slider').slick({
    dot: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 4000,
    centerPadding: '60px',
    prevArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-left" name="chevron-back-outline"></ion-icon>',
    nextArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-right" name="chevron-forward-outline"></ion-icon>'

  });
});

