"use strict";var body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector(".header");function addScript(e,r){localStorage.getItem(e)&&(r=1);var i=document.createElement("script");return i.async=!0,i.src=e,setTimeout((function(){body.appendChild(i),localStorage.setItem(e,!0)}),r),i}window.addEventListener("DOMContentLoaded",(function(){new Swiper(".HeroSwiper",{slidesPerView:1,spaceBetween:0,loop:!0,grabCursor:"true",lazy:!0,autoHeight:!0,navigation:{nextEl:".hero-next",prevEl:".hero-prev"},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".bottom_slider",{slidesPerView:1,autoHeight:!0,spaceBetween:20,loop:!0,navigation:{nextEl:".bottom-next",prevEl:".bottom-prev"},breakpoints:{480:{slidesPerView:2,centeredSlides:!0},751:{slidesPerView:3,centeredSlides:!1},993:{slidesPerView:4}},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".detail_slider",{slidesPerView:1,autoHeight:!0,spaceBetween:1,loop:!0,navigation:{nextEl:".detail-next",prevEl:".detail-prev"},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".why_slider",{slidesPerView:1,centeredSlides:!0,loop:!0,spaceBetween:50,breakpoints:{480:{slidesPerView:2},769:{slidesPerView:2,centeredSlides:!1},993:{slidesPerView:3}},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".features_slider",{slidesPerView:2,spaceBetween:20,loop:!0,navigation:{nextEl:".features-next"},breakpoints:{577:{slidesPerView:2.5,spaceBetween:40},769:{slidesPerView:3,spaceBetween:40},993:{slidesPerView:4},1201:{slidesPerView:6}},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".ChooseSwiper",{spaceBetween:0,loop:!0,grabCursor:"true",centeredSlides:!1,navigation:{nextEl:".choose-next",prevEl:".choose-prev"},breakpoints:{0:{slidesPerView:3},576:{slidesPerView:1.8},768:{slidesPerView:2.5},991:{slidesPerView:4},1440:{slidesPerView:6}}}),new Swiper(".IncludedSwiper",{spaceBetween:0,loop:!0,grabCursor:"true",centeredSlides:!1,navigation:{nextEl:".included-next",prevEl:".included-prev"},breakpoints:{0:{slidesPerView:2},768:{slidesPerView:2.5},991:{slidesPerView:4}},keyboard:{enabled:"true",onlyInViewport:"true"}}),new Swiper(".search_slider",{loop:!0,slidesPerView:1,autoHeight:!0,navigation:{nextEl:".search_next",prevEl:".search_prev"},keyboard:{enabled:"true",onlyInViewport:"true"}})})),window.addEventListener("load",(function(){var e=window.matchMedia("(max-width: 480px)").matches,r=1,i=document.querySelector(".swiper-delay_js");if(i){var t=parseInt(i.dataset.time);t>0&&(r=1+t/5,e&&(r=t),addScript("js/swiper-min.js",r).addEventListener("load",(function(){addScript("js/slider-init.js",0)})))}}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImh0bWwiLCJoZWFkZXIiLCJhZGRTY3JpcHQiLCJwYXRoIiwic3RpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29tZUpzIiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic3JjIiwic2V0VGltZW91dCIsImFwcGVuZENoaWxkIiwic2V0SXRlbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsImdyYWJDdXJzb3IiLCJsYXp5IiwiYXV0b0hlaWdodCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJrZXlib2FyZCIsImVuYWJsZWQiLCJvbmx5SW5WaWV3cG9ydCIsImJyZWFrcG9pbnRzIiwiY2VudGVyZWRTbGlkZXMiLCJtZWRpYVF1ZXJ5MiIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3dpcGVyTG9hZGluZ0RlbGF5Iiwic3dpcERlbGF5IiwiYWRkdGltZSIsInBhcnNlSW50IiwiZGF0YXNldCIsInRpbWUiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0EsSUFBTUEsS0FBT0MsU0FBU0MsY0FBYyxRQUM5QkMsS0FBT0YsU0FBU0MsY0FBYyxRQUM5QkUsT0FBU0gsU0FBU0MsY0FBYyxXQW1MdEMsU0FBU0csVUFBVUMsRUFBTUMsR0FDbEJDLGFBQWFDLFFBQVFILEtBQ3RCQyxFQUFTLEdBRVgsSUFBTUcsRUFBU1QsU0FBU1UsY0FBYyxVQU9wQyxPQU5GRCxFQUFPRSxPQUFNLEVBQ2JGLEVBQU9HLElBQUlQLEVBQ1hRLFlBQVcsV0FDVGQsS0FBS2UsWUFBWUwsR0FDbkJGLGFBQWFRLFFBQVFWLEdBQU8sS0FDM0JDLEdBRUtHLEVBNUxWTyxPQUFPQyxpQkFBaUIsb0JBQW9CLFdBQ3pCLElBQUlDLE9BQU8sY0FBZSxDQUN6Q0MsY0FBZSxFQUNmQyxhQUFjLEVB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Y3RcIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGxldCBIZXJvU3dpcGVyID0gbmV3IFN3aXBlcihcIi5IZXJvU3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBsb29wOnRydWUsXG4gICAgZ3JhYkN1cnNvcjondHJ1ZScsXG4gICAgbGF6eTogdHJ1ZSxcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmhlcm8tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5oZXJvLXByZXYnLFxuICAgICAgfSxcbiAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgIGVuYWJsZWQ6ICd0cnVlJyxcbiAgICAgICAgb25seUluVmlld3BvcnQ6ICd0cnVlJyxcbiAgICAgIH0sXG4gIH0pO1xubGV0IGJvdHRvbVNsaWRlciA9IG5ldyBTd2lwZXIoJy5ib3R0b21fc2xpZGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuYm90dG9tLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuYm90dG9tLXByZXYnLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNDgwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgNzUxOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIDk5Mzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgZW5hYmxlZDogJ3RydWUnLFxuICAgICAgICBvbmx5SW5WaWV3cG9ydDogJ3RydWUnLFxuICAgICAgfSxcbn0pO1xubGV0IGRldGFpbFNsaWRlciA9IG5ldyBTd2lwZXIoJy5kZXRhaWxfc2xpZGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5kZXRhaWwtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5kZXRhaWwtcHJldicsXG4gICAgfSxcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogJ3RydWUnLFxuICAgICAgb25seUluVmlld3BvcnQ6ICd0cnVlJyxcbiAgICB9LFxufSk7XG5sZXQgd2h5U2xpZGVyID0gbmV3IFN3aXBlcignLndoeV9zbGlkZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNDgwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIH0sXG4gICAgICAgIDc2OToge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDk5Mzoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgIGVuYWJsZWQ6ICd0cnVlJyxcbiAgICAgICAgb25seUluVmlld3BvcnQ6ICd0cnVlJyxcbiAgICAgIH0sXG59KTtcbmxldCBmZWF0dXJlc1NsaWRlciA9IG5ldyBTd2lwZXIoJy5mZWF0dXJlc19zbGlkZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuZmVhdHVyZXMtbmV4dCcsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA1Nzc6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgNzY5OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICAgICAgICB9LFxuICAgICAgICA5OTM6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgfSwgXG4gICAgICAgIDEyMDE6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBrZXlib2FyZDoge1xuICAgICAgICBlbmFibGVkOiAndHJ1ZScsXG4gICAgICAgIG9ubHlJblZpZXdwb3J0OiAndHJ1ZScsXG4gICAgICB9LFxufSk7XG5sZXQgQ2hvb3NlU3dpcGVyID0gbmV3IFN3aXBlcihcIi5DaG9vc2VTd2lwZXJcIiwge1xuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGdyYWJDdXJzb3I6J3RydWUnLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5jaG9vc2UtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5jaG9vc2UtcHJldicsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgfSxcbiAgICAgICAgNTc2OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjgsXG4gICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgICB9LFxuICAgICAgICA5OTE6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICB9LFxuICAgICAgICAxNDQwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5sZXQgSW5jbHVkZWRTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLkluY2x1ZGVkU3dpcGVyXCIsIHtcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBsb29wOiB0cnVlLFxuICBncmFiQ3Vyc29yOid0cnVlJyxcbiAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuaW5jbHVkZWQtbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuaW5jbHVkZWQtcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgICAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICB9LFxuICAgICAgNzY4OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgfSxcbiAgICAgIDk5MToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgfSxcbiAgfSxcbiAga2V5Ym9hcmQ6IHtcbiAgICBlbmFibGVkOiAndHJ1ZScsXG4gICAgb25seUluVmlld3BvcnQ6ICd0cnVlJyxcbiAgfSxcbn0pO1xubGV0IHNlYXJjaFNsaWRlciA9IG5ldyBTd2lwZXIoJy5zZWFyY2hfc2xpZGVyJywge1xuICBsb29wOiB0cnVlLCBcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zZWFyY2hfbmV4dCcsXG4gICAgcHJldkVsOiAnLnNlYXJjaF9wcmV2JyxcbiAgfSxcbiAga2V5Ym9hcmQ6IHtcbiAgICBlbmFibGVkOiAndHJ1ZScsXG4gICAgb25seUluVmlld3BvcnQ6ICd0cnVlJyxcbiAgfSxcbn0pO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFNjcmlwdChwYXRoICxzdGltZW91dCl7ICBcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXRoKSkge1xuICAgICAgc3RpbWVvdXQ9MTsgXG4gICAgfSAgXG4gICAgY29uc3Qgc29tZUpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7IFxuICAgIHNvbWVKcy5hc3luYz10cnVlO1xuICAgIHNvbWVKcy5zcmM9cGF0aDsgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChzb21lSnMpOyAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBhdGggLCB0cnVlKTtcbiAgfSwgc3RpbWVvdXQpOyAgICAgXG4gICAgICByZXR1cm4gKCBcbiAgICAgICAgICBzb21lSnMgXG4gICAgICApIFxufSAgIFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7ICAgXG5jb25zdCBtZWRpYVF1ZXJ5MiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0ODBweCknKS5tYXRjaGVzOyAgXG5sZXQgc3dpcGVyTG9hZGluZ0RlbGF5PTE7IFxuY29uc3Qgc3dpcERlbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1kZWxheV9qcycpOyBcbmlmKHN3aXBEZWxheSl7IFxuICBjb25zdCBhZGR0aW1lPSBwYXJzZUludChzd2lwRGVsYXkuZGF0YXNldC50aW1lKTtcbiAgaWYoYWRkdGltZT4wKXtcbiAgICBzd2lwZXJMb2FkaW5nRGVsYXk9MSsgYWRkdGltZS81O1xuICAgIGlmIChtZWRpYVF1ZXJ5Mikge1xuICAgICAgc3dpcGVyTG9hZGluZ0RlbGF5ID1hZGR0aW1lO1xuICAgIH0gXG4gICAgICBhZGRTY3JpcHQoJ2pzL3N3aXBlci1taW4uanMnICwgc3dpcGVyTG9hZGluZ0RlbGF5KS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+e1xuICAgICAgICBhZGRTY3JpcHQoJ2pzL3NsaWRlci1pbml0LmpzJyAsIDApO1xuICAgICAgfSkgXG4gICAgICAvL3N3aXBlciBsb2FkaW5nIG9ubHkgaWYgc3dpcGVyIGRlbGF5IGRhdGF0aW1lID4gMFxuICB9ICBcbn0gICBcbn0pIl19
