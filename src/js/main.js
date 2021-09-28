"use strict"
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector(".header");


window.addEventListener('DOMContentLoaded', () => {
  pagescroll();
});

@@include('modules/nav.js') 
@@include('modules/fixed-header.js')

@@include('lazyscripts.js')
@@include('modules/accordion.js')

 



