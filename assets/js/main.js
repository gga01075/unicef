$(document).ready(function () {

  //#relContent의 높이 
  var sloganHeight = $('.slogan').outerHeight();
  $('#relContent').css({
    top: sloganHeight
  });


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

  //SLOGAN mask animation
  function maskAni() {
    var _slideMask = $('.slide_mask');
    _slideMask.children().each(function () {
      $(this).addClass('mask_fade');
    });
  }
  maskAni();



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