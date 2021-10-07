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
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.bottom-next',
        prevEl: '.bottom-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            centeredSlides: true,
          },
        751: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        993: {
          slidesPerView: 4,
        },
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
let whySlider = new Swiper('.why_slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 2,
          },
        769: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          993: {
            slidesPerView: 3,
          },
      }
});
let featuresSlider = new Swiper('.features_slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.features-next',
    },
    breakpoints: {
        577: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        769: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        993: {
            slidesPerView: 4,
          }, 
        1201: {
            slidesPerView: 6,
          },
      }
});