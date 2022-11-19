$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow" /></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.png" alt="prev arrow" /></button>',
    responsive: [
      {
        breakpoint: 1024,
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
