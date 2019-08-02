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
var sOnOff = true;
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
    if(cnt===(len+1)){
        cnt=0;
    }
    for(var i=0; i<=len; i++){
        $('.cont-banner').removeClass('on'+i);
    }
    $('.roll').removeClass('on');
    $('.banner-box li').fadeOut('fast')
    
    $('.cont-banner').addClass('on'+cnt);
    $('.banner-box li').eq(cnt).fadeIn('fast')
    $('.roll').eq(cnt).addClass('on');
}
moveSlide = setInterval(moving,3000);
//슬라이드 반대방향
function movingReverse() {
    cnt --;
    if(cnt===-1){
        cnt=len;
    }
    for(var i=0; i<=len; i++){
        $('.cont-banner').removeClass('on'+i);
    }
    $('.roll').removeClass('on');
    $('.banner-box li').fadeOut('fast')
    
    $('.cont-banner').addClass('on'+cnt);
    $('.banner-box li').eq(cnt).fadeIn('fast')
    $('.roll').eq(cnt).addClass('on');
}
//재생정지
$('.stop-btn a').click(function(){
    clearInterval(moveSlide);
    sOnOff = false;
    $('.stop-btn').hide();
    $('.start-btn').show();
});
$('.start-btn a').click(function(){
    moveSlide = setInterval(moving,3000);
    sOnOff = true;
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
        if(sOnOff===true){
            moveSlide = setInterval(moving,3000);
        }
    });
});
//좌우화살표
$('.arrow-R').click(function(){
    clearInterval(moveSlide);
    moving();
    if(sOnOff===true){
        moveSlide = setInterval(moving,3000);
    }
});
$('.arrow-L').click(function(){
    clearInterval(moveSlide);
    movingReverse();
    if(sOnOff===true){
        moveSlide = setInterval(moving,3000);
    }
});

//Tab//
$('.pick ul').eq(0).show();
$('.hash-tag').eq(0).addClass('on');
$('.hash-tag').each(function(index){
    $(this).click(function(){
        var num=index+1
        $('.hash-tag').removeClass('on');
        $('.pick ul').hide();
    
        $(this).addClass('on');
        $('.pick'+num+' ul').show();
    });
});












