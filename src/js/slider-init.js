let swiper = new Swiper(".HeroSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    grabCursor:'true',
    navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev',
      }
  });
let bottomSlider = new Swiper('.bottom_slider', {
    slidesPerView: 4,
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.bottom-next',
        prevEl: '.bottom-prev',
    }
});
let detailSlider = new Swiper('.detail_slider', {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 1,
    navigation: {
        nextEl: '.detail-next',
        prevEl: '.detail-prev',
    }
});