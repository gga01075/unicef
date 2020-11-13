$(document).ready(function(){
    var _gnb = $('#gnb');
    var _depth2_now = $('.depth2_now');
    var _dep1a = $('#gnb>ul>li>a');
    var _dep2a = $('.depth2>li>a');
    var _dep1First = $('#gnb ul>li>a[data-link="first1"]');
    var _dep1Last = $('#gnb ul>li>a[data-link="last1"]');
    console.log(_dep1First,_dep1Last);

    //햄버거 메뉴 클릭
    $('.btn_menu').on('click',function(){
        if($(this).hasClass('active')){ //gnb닫을때
            $(this).removeClass('active').find('.blind_b').text('메뉴 열기');
            _gnb.stop().animate({left: '100%'}, 300, function () {
                $(this).css({display:'none'});
              });
            _dep1a.show();
            $('#gnb>ul>li>ul').hide().css({left:0}).removeClass('on').find('>li').removeClass().find('ul').hide();
            _depth2_now.hide();  

        }else{                          //gnb열때
            $(this).addClass('active').find('.blind_b').text('메뉴 닫기');
            _gnb.css({display:'block'}).stop().animate({left:0},function(){
               _dep1First.focus();
       });
       }
    });

          //depth1 첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
          _dep1First.on('keydown', function (e) {
            console.log(e.keyCode);   //tab을 클릭하면 9를 반환
            if ( e.shiftKey && e.keyCode == 9) {
              e.preventDefault();   //포커스 이동을 강제로 제한
              $last.focus();        //처음 포커스로 이동, #gnb를 벗어나지 않고 순환됨
            }
          });
          //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
          _dep1Last.on('keydown', function (e) {
            if ( !e.shiftKey && e.keyCode == 9) {
              e.preventDefault();
              $('.btn_menu').focus();
            }
          });
  
    //#gnb depth1 a클릭
    _dep1a.on('click',function(){
        var _dep1click = $(this);
        _depth2_now.show();
        var dep1Txt = $(this).text();
        $('.depth2_now span').text(dep1Txt);
        $(this).next().show().animate({left:'-19.44444444444444vw'},'fast').find('[data-link="first2"]').focus();
        // $('#gnb>ul>li>a').css({display:'none'});
        $('#gnb>ul>li>a').css({display:'none',marginRight: 75, marginLeft: -75});
        $(this).next().addClass('on');
        dep2Focus(_dep1click);
        return false;
    });

    //depth2 a에서 포커스 순환
    function dep2Focus(_dep1click){
      var _dep2First =  _dep1click.next().find('[data-link="first2"]');
      var _dep2Last =  _dep1click.next().find('[data-link="last2"]');

      
          //depth1 첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
          _dep2First.on('keydown', function (e) {
            console.log(e.keyCode);   //tab을 클릭하면 9를 반환
            if ( e.shiftKey && e.keyCode == 9) {
              e.preventDefault();   //포커스 이동을 강제로 제한
              $last.focus();        //처음 포커스로 이동, #gnb를 벗어나지 않고 순환됨
            }
          });
          //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
          _dep2Last.on('keydown', function (e) {
            if ( !e.shiftKey && e.keyCode == 9) {
              e.preventDefault();
              $('.btn_menu').focus();
            }
          });

    }
    





    //#gnb depth2 a클릭
    _dep2a.on('click',function(){
        if($(this).next().length===0){
            location.href = $(this).attr('href');
        }else{
            $(this).parent().siblings().removeClass('dep3_on').find('ul').stop().slideUp();
            $(this).next().stop().slideToggle().parent().toggleClass('dep3_on');
            return false;
        }
    });

    //.depth2_now 버튼 클릭 후 depth으로 이동
    _depth2_now.on('click',function(){
        $('#gnb>ul>li>ul').hide().css({left:0});
        _depth2_now.hide();  
        _dep1a.show().stop().animate({left:'0px', marginRight: 0, marginLeft: 0}).removeClass('on').find('>li').removeClass().find('ul').hide();
        /* depth1 a가 left 0으로 이동하고 on을 제거하고 depth2 ul을 올리고 */
    });

    //#footer Top버튼 클릭 애니메이션
    $('#footer #topBtn').on('click',function(){
        $('html,body').stop().animate({scrollTop:0});
        $('#header .logo a').focus();
        return false;
    });
});