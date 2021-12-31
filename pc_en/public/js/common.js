/* 전역변수 */
var idx = 0;
var speed = 0;
var delay = 0;

$(document).ready(function(){
	/* 컨텐츠 화면의 높이 100% */
	if( $('.swiper-container').hasClass('main') ){ $('html,body').css({height:'100%'}); }

	/* 스크롤 스와이퍼 변수 정의 */
    var swiperV = new Swiper('.swiper-container-v', {
        direction:'vertical',
        slidesPerView: 1,
        spaceBetween:0,
        speed:1000,
		//effect:'fade', // fade 효과
        mousewheel: true,
        pagination: {
            el:'.swiper-pagination',
            clickable:true,
        },
        onlyExternal:true,
        autoHeight:true
    });	

	/* 섹션변경시 메뉴 active & 각 컨텐츠 animation 실행 */
	swiperV.on('slideChange', function () {
		for(i=0;i<$('#gnb .dep1').length+1;i++){
			if(swiperV.activeIndex === i){
				$('#gnb .dep1').removeClass('on');
				$('#gnb .dep1').eq(i-1).addClass('on');

				mainAni(i);
			}
		}

		if(swiperV.activeIndex === $('#gnb .dep1').length+1 || swiperV.activeIndex === 0){
			$('#gnb .dep1').removeClass('on');		
		}
		
		//if(swiperV.activeIndex === 1){ $('#gnb .dep1').eq(0).addClass('on'); }
	});
	mainAni(0);

	/* 메뉴 언어팩 오픈 */
	$('.header_lang_list .dep1').on('click',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$(this).find('.dep2_list').stop().slideDown();
		}/*else{
			$(this).removeClass('on');
			$(this).find('.dep2_list').stop().slideUp();
		}*/
	});

	/* 메뉴 언어팩 닫기 */
	$('.header_lang_list .dep1').on('mouseleave',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).find('.dep2_list').stop().slideUp();
		}
	});

	/* 메뉴 클릭시 해당 섹션으로 이동 */
	$('#gnb .dep1').on('click',function(){ 
		idx = $(this).index();
		
		swiperV.slideTo(idx+1); 
		$('#gnb .dep1').removeClass('on');
		$(this).addClass('on');
	});

	/* 홈 네비게이션 */
	$('.main_home_list li').on('click',function(){
		idx = $(this).index();

		swiperV.slideTo(idx+2); 
	});

	/* 푸터 네비게이션 */
	$('#footer_gnb .dep1_1 .dep2').on('click',function(){
		swiperV.slideTo(0); 
	});
	$('#footer_gnb .dep1_2 .dep2').on('click',function(){
		idx = $(this).index();

		swiperV.slideTo(idx+1); 
	});

	/* 동영상 나오기 */
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
		swiperV.slideTo(0); 
	});

	/* 홈 일때 탑버튼 숨김 */
	swiperV.on('slideChange', function () {
		if(swiperV.activeIndex === 0){ 
			$('.top').stop().fadeOut();
		}else{
			$('.top').stop().fadeIn();
		}
	});

});

$(window).scroll(function() {
    /* 메뉴좌우스크롤 */
    $('.header_con').css({left: 0 - $(this).scrollLeft()});
});

/* 애니메이션 함수 */
function mainAni (idx){
	speed = 1000;
	delay = 500;

	if(idx === 0){
		homeAni();
	}else if(idx === 1){
		bizautoAni();
	}else if(idx === 2){
		platformAni();
	}else if(idx === 3){
		exchangeAni();
	}else if(idx === 4){
		mallAni();
	}else if(idx === 5){
		didAni();
	}else if(idx === 6){
		pressAni();
	}
}

var homeAni = function(){
	/* 클리어 */
	$('.main_home_txt h1, .main_home_txt p, .main_home_txt h6, .main_home_list li').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_home_txt h1').addClass('animated fadeIn'); // 1번

		setTimeout(function(){ 
			$('.main_home_txt p').addClass('animated fadeInUp');
		}, delay); // 2번

		setTimeout(function(){ 
			$('.main_home_txt h6').addClass('animated fadeInUp');
		}, delay*2); // 3번		

		$('.main_home_list li').each(function(i){
			setTimeout(function(){				
				$('.main_home_list li').eq(i).addClass('animated fadeIn');
			}, delay*3+70*i );
		}); // 4번
	}, delay );	
};

var bizautoAni = function(){
	/* 클리어 */
	$('.main_bizauto .main_tit, .main_history_tit, .main_bizauto .main_tit_txt, .main_history_list, .main_history_num_list li').css({opacity:0});
	if(!$('.main_history_num_bar').hasClass('on')){ 
		$('.main_history_num_bar').css({width:0}); 
	}

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_bizauto .main_tit').addClass('animated fadeIn'); // 1번

		setTimeout(function(){ 
			$('.main_bizauto .main_tit_txt').addClass('animated fadeInUp');
		}, delay); // 2번
		
		setTimeout(function(){
			$('.main_history_tit').addClass('animated fadeIn');
		}, delay*2 ); // 3번
		
		$('.main_history_list').each(function(i){
			setTimeout(function(){				
				$('.main_history_list').eq(i).addClass('animated fadeIn');
				$('.main_history_num_list li').eq(i).addClass('animated fadeIn');
			}, delay*3+70*i );
		}); // 4번

		setTimeout(function(){
			$('.main_history_num_bar').stop().animate({width:'100%'}, 500).addClass('on');
		}, delay*4 ); // 5번		
	}, delay );
};

var platformAni = function(){
	/* 클리어 */
	$('.main_platform .main_tit, .main_platform .main_store_list, .main_platform .main_product_mockup img').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_platform .main_tit').addClass('animated fadeIn');// 1번

		setTimeout(function(){
			$('.main_platform .main_store_list').addClass('animated fadeInUp');
		}, delay); // 2번

		setTimeout(function(){
			$('.main_platform .main_product_mockup img').addClass('animated fadeInUp');
		}, delay*2 ); // 3번
	}, delay );
};

var exchangeAni = function(){
	/* 클리어 */
	$('.main_exchange .main_tit, .main_exchange .main_store_list, .main_exchange .main_product_mockup img').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_exchange .main_tit').addClass('animated fadeIn');// 1번

		setTimeout(function(){
			$('.main_exchange .main_store_list').addClass('animated fadeInUp');
		}, delay); // 2번

		setTimeout(function(){
			$('.main_exchange .main_product_mockup img').addClass('animated fadeInUp');
		}, delay*2 ); // 3번
	}, delay );
};

var mallAni = function(){
	/* 클리어 */
	$('.main_mall .main_tit, .main_mall .main_store_list, .main_mall .main_product_mockup img').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_mall .main_tit').addClass('animated fadeIn');// 1번

		setTimeout(function(){
			$('.main_mall .main_store_list').addClass('animated fadeInUp');
		}, delay ); // 2번

		setTimeout(function(){
			$('.main_mall .main_product_mockup img').addClass('animated fadeInUp');
		}, delay*2 ); // 3번
	}, delay );
};

var didAni = function(){
	/* 클리어 */
	$('.main_did .main_tit, .main_did_txt').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_did .main_tit').addClass('animated fadeIn');// 1번

		setTimeout(function(){
			$('.main_did_txt').addClass('animated fadeIn');
		}, delay*1.5 ); // 2번

	}, delay );
};

var pressAni = function(){
	/* 클리어 */
	$('.main_mov_list li, .main_news_list').css({opacity:0});

	/* 애니메이션 */
	setTimeout(function(){
		$('.main_mov_list li').each(function(i){
			setTimeout(function(){				
				$('.main_mov_list li').eq(i).addClass('animated fadeIn');
			}, delay+200*i );
		}); // 1번

		setTimeout(function(){				
			$('.main_news_list').addClass('animated fadeInUp');
		}, delay*2+800 ); // 2번
	}, delay );
};