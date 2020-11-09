$(document).ready(function(){
   
  //슬로건
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

    //뉴스
    var mySwiper2 = new Swiper('.news .swiper-container', {

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
        },
      });


    
      //유챔프

      //유챔프9기 마감기간까지 남은 날짜 계산하는 함수
      function uchampDeadline(){  
        var now = new Date();
        var nowYy = now.getFullYear();
  
        var dDay = new Date(nowYy,10,25);
  
        var remain = dDay - now;
        var remainDay = Math.floor(remain/(1000*60*60*24));   
        remain %= (1000*60*60*24);
        var remainHor = Math.floor(remain/(1000*60*60));
        if(remainHor < 10) remainHor= '0'+remainHor;
        remain %= (1000*60*60);
        var remainMin = Math.floor(remain/(1000*60));
        if(remainMin < 10) remainMin= '0'+remainMin;
        remain %= (1000*60);
        var remainSec = Math.floor(remain/(1000));
        if(remainSec < 10) remainSec= '0'+remainSec;

        $('.uchamp_recruit p:last-of-type').text(remainDay + ' Days '+ remainHor +' hours '+ remainMin + ' minutes '+ remainSec +' seconds ');
      }

      uchampDeadline();

      var timer = setInterval(uchampDeadline,1000);



      
});