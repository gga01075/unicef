$(document).ready(function(){
    var _gnb = $('#gnb');
    var _depth2_now = $('.depth2_now');
    var _dep1a = $('#gnb>ul>li>a');
    var _dep2a = $('.depth2>li>a');

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
                
       });
       }
    });

    //#gnb depth1 a클릭
    _dep1a.on('click',function(){
        _depth2_now.show();
        var dep1Txt = $(this).text();
        $('.depth2_now span').text(dep1Txt);
        $(this).next().show().animate({left:'-70px'},'fast');
        $('#gnb>ul>li>a').css({display:'none'});
        $(this).next().addClass('on');
    });

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
        $('#gnb>ul>li>ul').hide();
        _depth2_now.hide();  
        _dep1a.show();
        _dep1a.stop().animate({left:'0px'}).removeClass('on').find('>li').removeClass().find('ul').hide();
    });




    //#footer Top버튼 클릭 애니메이션
    $('#footer #topBtn').on('click',function(){
        $('html,body').stop().animate({scrollTop:0});

        return false;
    });

});