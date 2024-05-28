//photo swiper
const isExistPhotoSwiper = document.querySelector('.photos__swiper');
if (isExistPhotoSwiper) {
  const swiper = new Swiper('.photos__swiper', {
    loop: true,
    autoplay: true,
    autoplay: true,
    slidesPerView: 3,
    effect: 'fade',
    crossFade: true,
    spaceBetween: 10,
     // Navigation arrows
     navigation: {
      nextEl: '.photos__swiper-next',
      prevEl: '.photos__swiper-prev',
    },
  })
}