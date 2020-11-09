$(document).ready(function(){
    var mySwiper1 = new Swiper('.slogan .swiper-container', {
        // Optional parameters
        loop: true,
        effect:'fade',
        autoplay: {
            delay: 7000,
            disableOnInteraction:false,
          },
      
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

      });


    var mySwiper2 = new Swiper('.news .swiper-container', {

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
        },


      });



});