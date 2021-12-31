/* 전역변수 */
var idx = 0;
var speed = 0;
var delay = 0;
var homeScroll = 0;
var bizautoScroll = 0;
var productScroll = 0;
var didScroll = 0;
var pressScroll = 0;
var dappScroll = 0;

$(document).ready(function(){
	bizautoScroll = $('.main_bizauto').position().top;
	productScroll = $('.main_product_roll').position().top;
	didScroll = $('.main_did').position().top;
	pressScroll = $('.main_press').position().top;
	dappScroll = $('.main_coming').position().top;

	/* 메뉴 열기 */
	$('.header_toggle').on('click',function(){
		if(!$('.header_toggle').hasClass('on')){
			$('#gnb, .header_toggle').addClass('on');
		}else{
			$('#gnb, .header_toggle, #gnb .dep1').removeClass('on');
		}
	});
	
	/* 메뉴 클릭시 섹션 이동 */
	$('#gnb .dep1').on('click',function(){
		idx = $(this).index();
		speed = 2000;

		gnbClickScroll(idx);
		setTimeout(function(){
			$('#gnb, .header_toggle, #gnb .dep1').removeClass('on');
		}, speed);
	});

	/* 메뉴 언어팩 오픈&닫기 */
	$('.header_lang_list .dep1').on('click',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$(this).find('.dep2_list').stop().slideDown();
		}else{
			$(this).removeClass('on');
			$(this).find('.dep2_list').stop().slideUp();
		}
	});
	
	/* 홈 네비게이션 */
	$('.main_home_list li').on('click',function(){
		idx = $(this).index()+1;

		gnbClickScroll(idx);
		$('#gnb .dep1').removeClass('on');
	});

	/* 푸터 네비게이션 */
	$('#footer_gnb .dep1').on('click',function(){
		idx = $(this).index();

		if(idx === 0) {
			$('html,body').stop().animate({scrollTop:0},300);
		}else if(idx === 1){
			gnbClickScroll(1);
			$('#gnb .dep1').removeClass('on');
		}
	});

	/* 연혁 */
	var mainHistoryYear = [2019,2020,2021,2022,2023,2024];

	$('.main_history_roll').slick({
		dots:true,
		arrows:false,
		fade:true,
		speed: 700,
		adaptiveHeight:true
	});

	$('.main_history_roll .slick-dots li').each(function(i){
		$(this).html('<b>'+mainHistoryYear[i]+'</b>');
	});

	/* 상품 */
	$('.main_product_roll').slick({
		dots:true,
		arrows:false	
	});
	$('.main_product_roll .slick-dots li').html('');

	/* 동영상 열기 */
	$('.main_mov_list li').on('click',function(){
		idx = $(this).index();

		$('.main_play_pop').show();
		$('.main_play_box').eq(idx).fadeIn().addClass('on');
	});

	/* 동영상 닫기 */
	$('.main_play_bg').on('click',function(){
		$('.main_play_pop').fadeOut();
		$('.main_play_box').hide().removeClass('on')
	});

	/* 탑버튼 클릭시 홈으로 이동 */
	$('.top').on('click',function(){ 
		$('html,body').stop().animate({scrollTop:0},300);
	});

	topFade();
	mainAni();
});

$(window).scroll(function(){
	topFade();
	mainAni();
});

/* 메뉴 온오프 함수 */
function gnbOn (idx){
	$('#gnb .dep1').removeClass('on');
	$('#gnb .dep1').eq(idx).addClass('on');
}

/* 메뉴 클릭시 섹션 이동 함수 */
function gnbClickScroll (idx){
	speed = 300;
	bizautoScroll = $('.main_bizauto').position().top;
	productScroll = $('.main_product_roll').position().top;
	didScroll = $('.main_did').position().top;
	pressScroll = $('.main_press').position().top;
	dappScroll = $('.main_coming').position().top;

	gnbOn(idx);

	if(idx === 0){ // bizauto
		$('html,body').stop().animate({scrollTop:bizautoScroll}, speed);
	}else if(idx === 1){ // platform
		$('html,body').stop().animate({scrollTop:productScroll}, speed);
		$('.main_product_roll').slick('slickGoTo', 0);
	}else if(idx === 2){ // exchange
		$('html,body').stop().animate({scrollTop:productScroll}, speed);
		$('.main_product_roll').slick('slickGoTo', 1);
	}else if(idx === 3){ // mall
		$('html,body').stop().animate({scrollTop:productScroll}, speed);
		$('.main_product_roll').slick('slickGoTo', 2);
	}else if(idx === 4){ // did
		$('html,body').stop().animate({scrollTop:didScroll}, speed);
	}else if(idx === 5){ // press
		$('html,body').stop().animate({scrollTop:pressScroll}, speed);
	}else if(idx === 6){ // dapp
		$('html,body').stop().animate({scrollTop:dappScroll}, speed);
	}
}

/* 스크롤 위치에 따라 탑이 보였다가 사라졌다 */
function topFade (){
	if($(window).scrollTop() < 50){
		$('.top').stop().fadeOut();
	}else{
		$('.top').stop().fadeIn();
	}	
}

/* 애니메이션 함수 */
function mainAni (){
	/* 변수 */
	var empty = $(window).innerHeight()/4;
	speed = 1000;
	delay = 500;

	homeScroll = $('.main_home_list').position().top - empty;
	bizautoScroll = $('.main_bizauto').position().top - empty;
	productScroll = $('.main_product_roll').position().top - empty;
	didScroll = $('.main_did').position().top - empty;
	pressScroll = $('.main_press').position().top - empty;
	dappScroll = $('.main_coming').position().top - empty;

	/* 클리어 */
	$('.main_home_tit h1, .main_home_tit h6, .main_home_txt, .main_home_list li').css({opacity:0});
	$('.main_bizauto .main_tit, .main_bizauto_txt, .main_history').css({opacity:0});
	$('.main_product .main_tit, .main_product_roll .slick-dots, .main_product_mockup, .main_store_list').css({opacity:0});
	$('.main_did .main_tit, .main_did_txt').css({opacity:0});
	$('.main_mov_list li, .main_news_list').css({opacity:0});

	/* 함수호출 */
	homeAni();

	if($(window).scrollTop() >= 50 && $(window).scrollTop() < bizautoScroll){
		homeAni2();
	}else if($(window).scrollTop() >= bizautoScroll && $(window).scrollTop() < productScroll){
		bizautoAni();
	}else if($(window).scrollTop() >= productScroll && $(window).scrollTop() < didScroll){
		productAni();
	}else if($(window).scrollTop() >= didScroll && $(window).scrollTop() < pressScroll){
		didAni();
	}else if($(window).scrollTop() >= pressScroll){
		pressAni();
	}
}

var homeAni = function(){
	setTimeout(function(){
		$('.main_home_tit h1').addClass('animated fadeIn'); // 1번

		setTimeout(function(){ 
			$('.main_home_tit h6').addClass('animated fadeInUp');
		}, delay); // 2번

		setTimeout(function(){ 
			$('.main_home_txt').addClass('animated fadeInUp');
		}, delay*2); // 3번			
	},delay);
};

var homeAni2 = function(){
	$('.main_home_list li').each(function(i){
		setTimeout(function(){				
			$('.main_home_list li').eq(i).addClass('animated fadeIn');
		}, 70*i );
	}); // 1번
};

var bizautoAni = function(){
	$('.main_bizauto .main_tit').addClass('animated fadeIn'); // 1번

	setTimeout(function(){
		$('.main_bizauto_txt').addClass('animated fadeInUp'); // 2번

		setTimeout(function(){
			$('.main_history').addClass('animated fadeInUp'); 
		}, delay); // 3번
	}, delay);
};

var productAni = function(){
	$('.main_product .main_tit, .main_product_roll .slick-dots').addClass('animated fadeIn'); // 1번

	setTimeout(function(){
		$('.main_product_mockup').addClass('animated fadeInUp'); // 2번

		setTimeout(function(){
			$('.main_store_list').addClass('animated fadeInUp'); 
		}, delay); // 3번
	}, delay);
};

var didAni = function(){
	$('.main_did .main_tit').addClass('animated fadeIn'); // 1번

	setTimeout(function(){
		$('.main_did_txt').addClass('animated fadeInUp'); // 2번
	}, delay);
};

var pressAni = function(){
	$('.main_mov_list li').each(function(i){
		setTimeout(function(){				
			$('.main_mov_list li').eq(i).addClass('animated fadeIn');
		}, 200*i );
	}); // 1번

	setTimeout(function(){
		$('.main_news_list').addClass('animated fadeInUp'); // 2번
	}, delay+800 );
};