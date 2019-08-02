//메뉴//
$('.gnb li').mouseover(function(){
    $('.gnb li').removeClass('on');
    $(this).addClass('on');
    $('.gnb-sub').show().unbind('mouseover').unbind('mouseleave')
    .mouseover(function(){$(this).stop().slideDown();})
    .mouseleave(function(){$(this).stop().slideUp();});
});

$('.gnb li').mouseleave(function(){
    $('.gnb li').removeClass('on');
    $('.gnb-sub').stop().slideUp('fast');
});



//메인배너//
var moveSlide;
var cnt = 0;
var len = $('.banner-box li').length-1;

//원형 롤링버튼 생성
for(var j=0; j<=len; j++){
    $('.rolling-btn').append('<li class="roll"><a href="#">순차롤링버튼</a></li>');
}
var rollbox = $('.rolling-btn-box').width();
$('.rolling-btn-box').css('margin-left', -(rollbox/2) );

$('.banner-box li').eq(0).show().parents('.cont-banner').addClass('on0');
$('.roll').eq(0).addClass('on');
//슬라이드 자동롤링
function moving() {
    cnt ++;
    for(var i=0; i<=len; i++){
        $('.cont-banner').removeClass('on'+i);
    }
    $('.roll').removeClass('on');
    $('.banner-box li').fadeOut('fast')
    
    $('.cont-banner').addClass('on'+cnt);
    $('.banner-box li').eq(cnt).fadeIn('fast')
    $('.roll').eq(cnt).addClass('on');
    
    if(cnt===len){
        cnt=-1;
    }
}
moveSlide = setInterval(moving,3000);
//재생정지
$('.stop-btn a').click(function(){
    clearInterval(moveSlide);
    $('.stop-btn').hide();
    $('.start-btn').show();
});
$('.start-btn a').click(function(){
    moveSlide = setInterval(moving,3000);
    $('.start-btn').hide();
    $('.stop-btn').show();
});
//원형 롤링버튼
$('.roll').each(function(index){
    $(this).click(function(){
        clearInterval(moveSlide);
        for(var i=0; i<=len; i++){
            $('.cont-banner').removeClass('on'+i);
        }
        $('.roll').removeClass('on');
        $('.banner-box li').fadeOut();
        
        $(this).addClass('on');
        $('.banner-box li').eq(index).fadeIn();
        $('.cont-banner').addClass('on'+index);
        cnt=index;
        if(cnt===len){
            cnt=-1;
        }
        moveSlide = setInterval(moving,3000);
    });
});
//좌우화살표
$('.arrow-R').click(function(){
    clearInterval(moveSlide);
    moving();
    moveSlide = setInterval(moving,3000);
});
$('.arrow-L').click(function(){
    clearInterval(moveSlide);
    moving();
    moveSlide = setInterval(moving,3000);
});












