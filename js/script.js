"use strict"

const reviewsSwiper = document.querySelector('.swiper_reviews');

if(reviewsSwiper) {
    const swiper = new Swiper('.swiper_reviews', {
    
      loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

   
  });

}