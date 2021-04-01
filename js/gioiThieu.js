$(document).ready(function(){
    $('.hach-slider').slick({
      dot: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<ion-icon class="my-slider-arrow" name="chevron-back-outline"></ion-icon>',
      nextArrow: '<ion-icon class="my-slider-arrow my-slider-arrow-right" name="chevron-forward-outline"></ion-icon>'
  
    }); 
  });