"use strict"
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector(".header");


window.addEventListener('DOMContentLoaded', () => {
  @@include('slider-init.js');

  let videoSrc;  
  $('.video-btn').click(function() {
      videoSrc = $(this).data( "src" );
  });
  
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src',videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  });

  $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', ''); 
  })
});

@@include('lazyscripts.js')