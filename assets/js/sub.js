$(document).ready(function(){

    //why_reg 슬라이드
    var mySwiper3 = new Swiper('.why_reg .swiper-container', {
        // Optional parameters
        effect:'fade',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        renderFraction: function (currentClass, totalClass) {
          return '<span class="0' + currentClass + '"></span>' +
                  ' of ' +
                  '<span class="0' + totalClass + '"></span>';
       }
      });


    //how_reg 탭브라우징 
    var _tabBtn = $('#howregTab .tablist .tab');
    _tabBtn.on('click',function(){
      console.log($(this));
      var controls = $(this).attr('aria-controls');
      console.log(controls);
    });






});