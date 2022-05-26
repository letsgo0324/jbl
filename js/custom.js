$(document).ready(function(){
	//배경 스크롤
	$('body,html').stop().animate({'scrollTop':0},1500,'swing');
	
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop(); //this = 스크롤하는 윈도우
		/* $('h1').text(scroll); */ //스크롤 위치값 알려줌
		
		//배경 하나씩 차례로 등장하기
		/* $('section > article').eq(0).css({'transform':'translateZ('+scroll+'px)'});
		$('section > article').eq(1).css({'transform':'translateZ('+parselnt(-5000+scroll)+'px)'}); //parselnt 정수
		$('section > article').eq(2).css({'transform':'translateZ('+parselnt(-10000+scroll)+'px)'});
		$('section > article').eq(3).css({'transform':'translateZ('+parselnt(-15000+scroll)+'px)'});
		$('section > article').eq(4).css({'transform':'translateZ('+parselnt(-20000+scroll)+'px)'}); */
		
		//for문(배경 하나씩 차례로 등장하기)
		for(var i=0; i<5; i++){
			$('section > article').eq(i).css({'transform':'translateZ('+parseInt((-5000*i)+scroll)+'px)'});
			
			//왼쪽 내비게이션. 스크롤시 클릭된 상태가 됨
			if(scroll>=i*5000 && scroll<(i+1)*5000){
				$('.scrollNavi li').removeClass();
				$('.scrollNavi li').eq(i).addClass('on');
				$('article').removeClass();
				$('article').eq(i).addClass('on');
			}
		}
	});
	
	
	//왼쪽 스크롤 네비게이션 클릭시 해당페이지로 이동
	/* $('.scrollNavi li').eq(0).on('click', function(){
		$('body, html').stop().animate({'scrollTop':0});
	});
	$('.scrollNavi li').eq(1).on('click', function(){
		$('body, html').stop().animate({'scrollTop':5000});
	});
	$('.scrollNavi li').eq(2).on('click', function(){
		$('body, html').stop().animate({'scrollTop':10000});
	});
	$('.scrollNavi li').eq(3).on('click', function(){
		$('body, html').stop().animate({'scrollTop':15000});
	});
	$('.scrollNavi li').eq(4).on('click', function(){
		$('body, html').stop().animate({'scrollTop':20000});
	}); */
	
	//왼쪽 스크롤 네비게이션 클릭시 해당페이지로 이동
	$('.scrollNavi li').on('click', function(){
		var i = $(this).index();
		$('body, html').stop().animate({'scrollTop':5000*i},1500,'swing');
	});
	
		
	//마우스 움직일때 이미지 살짝 움직이기
	$('body').on('mousemove', function(e){
		var posX = e.pageX/100;
		$('.obj11').css({'left':-9-posX});
		$('.obj12').css({'right':310-posX});
		$('.obj13').css({'right':540+posX});
		
		$('.obj21').css({'left':-110-posX});
		$('.obj22').css({'right':360-posX});
		$('.obj23').css({'left':100-posX});
		
		$('.obj31').css({'left':-65-posX});
		$('.obj32').css({'right':270-posX});
		$('.obj33').css({'left':100-posX});
		
		$('.obj41').css({'right':250-posX});
		$('.obj42').css({'left':-50-posX});
		$('.obj43').css({'right':450-posX});
		
		$('.obj51').css({'left':-35-posX});
		$('.obj52').css({'right':230-posX});
		$('.obj53').css({'left':155-posX});		
	});	
	
});