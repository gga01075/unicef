$(document).ready(function(){
    var _gnb = $('#gnb');

    $('.btn_menu').on('click',function(){
        if($(this).hasClass('active')){ //gnb닫을때
            $(this).removeClass('active').find('.blind_b').text('메뉴 열기');

            _gnb.stop().animate({left: '100%'}, 300, function () {
                $(this).css({display:'none'});
              });
        }else{                          //gnb열때
            $(this).addClass('active').find('.blind_b').text('메뉴 닫기');
            _gnb.css({display:'block'}).stop().animate({left:0},function(){
                
       });



        
              

        }
    });


});