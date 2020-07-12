$(document).ready(function(){
    $(".slick").slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
    });
});