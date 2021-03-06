$(document).ready(function () {

  //why_reg 슬라이드
  var mySwiper3 = new Swiper('.why_reg .swiper-container', {
    // Optional parameters
    effect: 'fade',

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
  });

  //how_reg 탭브라우징 

  /* 1) 초기값 */
  $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex', 0);
  $('.tab:first-of-type').attr('aria-selected', true).siblings().attr('aria-selected', false);
  $('.tabpanel:first-of-type').attr('aria-hidden', false).siblings('.tabpanel').attr('aria-hidden', true);

  /* 2) 탭버튼에서 키보드를 누르는 이벤트(keydown) - 키보드 제어 */
  $('.tab').on('keydown', function (e) {
    var key = e.keyCode;
    switch (key) {
      case 37: //왼쪽 방향키
        $(this).attr('tabIndex', -1);
        if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
        else $(this).prev().attr('tabIndex', 0).focus();
        break;
      case 39: //오른쪽 방향키
        $(this).attr('tabIndex', -1);
        if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
        else $(this).next().attr('tabIndex', 0).focus();
        break;
      case 36: //HOME 키는 가장 처음으로
        e.preventDefault();
        $(this).siblings('.first').attr('tabIndex', 0).focus();
        break;
      case 35: //END 키는 가장 마지막으로
        e.preventDefault();
        $(this).siblings('.last').attr('tabIndex', 0).focus();
        break;
      case 32: //스페이스바
      case 13: //엔터
        var $tg = $(this);
        activeOn($tg);
        break;
    }
  });


  //3) 탭 클릭 이벤트 
  $('.tab').on('click', function () {
    var $tg = $(this);
    activeOn($tg);
  });

  function activeOn($target) {
    $target.addClass('active').attr({
      'aria-selected': true,
      tabIndex: 0
    }).siblings().removeClass('active').attr({
      'aria-selected': false,
      tabIndex: -1
    });
    $('#' + $target.attr('aria-controls')).addClass('active').attr({
      'aria-hidden': false,
      tabIndex: 0
    }).siblings('.tabpanel').removeClass('active').attr({
      'aria-hidden': true,
      tabIndex: -1
    });
  }


 //by_reg 슬라이드 
 var mySwiper4 = new Swiper('.by_reg .swiper-container', {
  // Optional parameters

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable:true,
  },
});


  //정기후원 사용자정보입력페이지 - 이메일 select
  $('#emailBackSel').change(function () {
    $("#emailBackSel option:selected").each(function () {
      if ($(this).val() == '1') {
        //직접입력일 경우 
        $("#emailBack").val('');
        //값 초기화 
        $("#emailBack").attr("disabled", false);
        //활성화 
      } else {
        //직접입력이 아닐경우 
        $("#emailBack").val($(this).text());
        //선택값 입력 
        $("#emailBack").attr("disabled", true); //비활성화 
      }
    });
  });

  // #collectAgree 클릭 이벤트 
  $('#collectAgree').on('click', function () {

    var active = $(this).prop('checked'); //true or false

    $('.info_collect :checkbox[name="agree"]').prop({
      checked: active
    });
  });


});