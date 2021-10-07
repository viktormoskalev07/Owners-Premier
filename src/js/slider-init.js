let HeroSwiper = new Swiper(".HeroSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    grabCursor:'true',
    navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev',
      }
});
let ChooseSwiper = new Swiper(".ChooseSwiper", {
    spaceBetween: 0,
    loop: true,
    grabCursor:'true',
    centeredSlides: false,
    navigation: {
        nextEl: '.choose-next',
        prevEl: '.choose-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 3,
        },
        576: {
            slidesPerView: 1.8,
          
        },
        768: {
            slidesPerView: 2.5,
        },
        991: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 6,
        },
    },
});
let IncludedSwiper = new Swiper(".IncludedSwiper", {
  spaceBetween: 0,
  loop: true,
  grabCursor:'true',
  centeredSlides: false,
  navigation: {
      nextEl: '.included-next',
      prevEl: '.included-prev',
  },
  breakpoints: {
      0: {
        slidesPerView: 3,
      },
      576: {
          slidesPerView: 1.8,
      },
      768: {
          slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 4,
      },
  },
});