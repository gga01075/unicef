$(document).ready(function () {

  //SLOGAN
  var mySwiper1 = new Swiper('.slogan .swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

  });

  /*  SLOGAN슬라이드 bullets 타입 생성 및 컨트롤 */
  var menu = ['슬라이드1', '슬라이드2', '슬라이드3'];

  for (var i = 1; i < menu.length + 1; i++) { //3
    if (i === 1) {
      // add active class if it is the first bullet
      $('#bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'swiper-pagination-bullet-active' +
        ' ' + 'slide' + i + '" role="button" tabindex="0" aria-label="' + menu[i - 1] + '"></span>');
    } else {
      $('#bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'slide' + i + '"  role="button" tabindex="0" aria-label="' + menu[i - 1] + '"></span>');
    }
  }

  // fraction에 활성화 추가
  var _sloganBullets = $('.swiper-pagination-bullet');


  mySwiper1.on('slideChange', function () {
    // 현재 슬라이드 가져오기
    var slide = "slide" + ($('.swiper-pagination-current').text());

    // 기존 슬라이더 클래스명 제거 후 활성화 bullet에 클래스명 추가하기
    _sloganBullets.removeClass("swiper-pagination-bullet-active");
    $.each(_sloganBullets, function (index, value) {
      if ($(this).hasClass(slide)) {
        $(this).addClass("swiper-pagination-bullet-active");
        return false;
      }
    });
  });

  //불릿 클릭이벤트
_sloganBullets.on('click', function () {
      var _target = $(this);
      bulletMove(_target);
  }); 

_sloganBullets.keydown(function(key) {
    var _target = $(this);
    if (key.keyCode == 13) {
      bulletMove(_target);
    }
});
  function bulletMove(_target){
    _target.addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
    var slideIdx = _target.index()+1;
    mySwiper1.slideTo(slideIdx);
  }

  $('.slogan .play_stop .autoplay').hide();
  //stop,play버튼 클릭 이벤트
   /* 일시정지 클릭 */
   $('.slogan .play_stop .autostop').on('click',function(){
      $(this).hide().siblings().show();
      mySwiper1.autoplay.stop();
      return false;
   });
   /* 자동실행 클릭 */
   $('.slogan .play_stop .autoplay').on('click',function(){
      $(this).hide().siblings().show();
      mySwiper1.autoplay.start();
      return false;
   });

  //SLOGAN mask animation
  function maskAni() {
    var _slideMask = $('.slide_mask');
    _slideMask.children().each(function () {
      $(this).addClass('mask_fade');
    });
  }
  maskAni();


 //코로나 스크롤이벤트

  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();
    var coronaTop = $('.corona').offset().top;
    var uchampTop = $('.uchamp').offset().top;
    if(scrollTop > coronaTop - 250){
      $('.corona_spon ul li').animate({opacity:1});
    }

    if(scrollTop > uchampTop - 650){
      $('.uchamp .h3_txt2').addClass('uchamp_ani');
      $('.uchamp_recruit>p:first,.uchamp_recruit li').addClass('fadeUp');
    }

    if(scrollTop > uchampTop + 70){
      $('.uchamp_recruit>p:first,.uchamp_recruit li').addClass('fadeUp');
    }
    
  });














  //NEWS 슬라이더
  var mySwiper2 = new Swiper('.news .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  //NEWS 말줄임표 생성 
  var _newsDt = $('.swiper-slide dl dt');
  _newsDt.each(function (index, element) {
    var newsTxt = $(this).text();
    if (newsTxt.length > 18) {
      newsTxt = newsTxt.slice(0, 19);
      newsTxt = newsTxt + '...';
      $(this).text(newsTxt);
    }
  });



  //UCHAMP

  //유챔프9기 마감기간까지 남은 날짜 계산하는 함수
  function uchampDeadline() {
    var now = new Date();
    var nowYy = now.getFullYear();

    var dDay = new Date(nowYy, 11, 10);

    var remain = dDay - now;
    var remainDay = Math.floor(remain / (1000 * 60 * 60 * 24));
    remain %= (1000 * 60 * 60 * 24);
    var remainHor = Math.floor(remain / (1000 * 60 * 60));
    if (remainHor < 10) remainHor = '0' + remainHor;
    remain %= (1000 * 60 * 60);
    var remainMin = Math.floor(remain / (1000 * 60));
    if (remainMin < 10) remainMin = '0' + remainMin;
    remain %= (1000 * 60);
    var remainSec = Math.floor(remain / (1000));
    if (remainSec < 10) remainSec = '0' + remainSec;

    $('.uchamp_recruit p:last-of-type').text(remainDay + ' Days ' + remainHor + ' hours ' + remainMin + ' minutes ' + remainSec + ' seconds ');
  }

  uchampDeadline();

  var timer = setInterval(uchampDeadline, 1000);




});