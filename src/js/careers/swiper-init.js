document.addEventListener('DOMContentLoaded', function () {
  let swiperInstance;

  function initSwiper() {
    if (window.innerWidth <= 768) {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.mySwiper', {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
      }
    }
  }

  initSwiper();
  window.addEventListener('resize', initSwiper);
});
