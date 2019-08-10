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

//mouseover css effect//
//물품정보
$('.best-item .best-list li').hover(function(){
    $(this).find('.pro-info').addClass('on');
},
                                   function(){
    $(this).find('.pro-info').removeClass('on');
});


//콘텐츠 물품리스트 슬라이드
var listLeng = $('.new-list ul li').length;
var listWid = $('.new-list ul li').innerWidth();
var listPdR = $('.new-list ul li').css('padding-right').replace(/[^-\d\.]/g, '');
var listAllWid = listWid*listLeng-listPdR;
$('.new-list ul').css('width', listAllWid);

var position = 0;
$('.list-arrow-R').click(function(){
    if(position !== -(listAllWid-$('.new-list').width())){
        position -= listWid;
    }
    $('.new-list ul').animate({left:position});
});

$('.list-arrow-L').click(function(){
    if(position !== 0){
        position += listWid;
    }
    $('.new-list ul').animate({left:position});
});

//콘텐츠 배너 무한슬라이드
$('.interior-subject .subject-box ul').clone().appendTo('.interior-subject .subject-box');

var listLeng2 = $('.interior-subject .subject-box ul li').length;
var listWid2 = $('.interior-subject').width();
var listAllWid2 = listWid2*listLeng2;
$('.interior-subject .subject-box').css('width', listAllWid2);

var position2 = 0;
function slideR() {

    position2 -= listWid2;
    $('.interior-subject .subject-box').animate({left:position2},'fast',function(){
        if(position2 == -listAllWid2/2){
            $('.interior-subject .subject-box').stop().css('left', 0);
            position2 = 0;
        }

        var pcnt = Math.abs(position2/listWid2);
        $('.interior_view li').hide();
        $('.interior_view li').eq(pcnt).fadeIn('fast');
        });
}

function slideL() {
    if(position2 === 0){
        position2 = -listAllWid2/2;
        $('.interior-subject .subject-box').stop().css('left', -listAllWid2/2);
    }
    position2 += listWid2;
    $('.interior-subject .subject-box').stop().animate({left:position2},'fast');

    var pcnt = Math.abs(position2/listWid2);
    $('.interior_view li').hide();
    $('.interior_view li').eq(pcnt).fadeIn('fast');
}

$('.cont-arrow-R').click(function(){
    slideR();
});

$('.cont-arrow-L').click(function(){
    slideL();
});
