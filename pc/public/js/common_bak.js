/* 파라미터 */
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var loca = getParameterByName('loca');

$(document).ready(function(){

	/** 스크롤이벤트 **/
	/* 레이아웃 */
    if( $('.swiper-container').hasClass('main') ){ $('html,body').css({height:'100%'}); }
	
	/* 스와이퍼_변수_정의 */
    var swiperV = new Swiper('.swiper-container-v', {
        direction:'vertical',
        slidesPerView: 1,
        spaceBetween:0,
        speed:1000,
		effect:'fade',
        mousewheel: true,
        pagination: {
            el:'.swiper-pagination',
            clickable:true,
        },
        onlyExternal:true,
        autoHeight:true
    });	

	swiperV.on('slideChange', function () {
		console.log(swiperV.activeIndex);
		for(i=0;i<$('#gnb .dep1').length+1;i++){
			if(swiperV.activeIndex === i){ 
				$('#gnb .dep1').removeClass('on');
				$('#gnb .dep1').eq(i-1).addClass('on');
				mainAnimation(i);
			}
		}

		if(swiperV.activeIndex === $('#gnb .dep1').length+1 || swiperV.activeIndex === 0){
			$('#gnb .dep1').removeClass('on');		
		}
		
		//if(swiperV.activeIndex === 1){ $('#gnb .dep1').eq(0).addClass('on'); }
	});

	if(loca == 'amaxg'){
		swiperV.slideTo(0); 	
	}else if(loca == 'bizauto'){
		swiperV.slideTo(1); 	
	}else if(loca == 'platform'){
		swiperV.slideTo(2); 	
	}else if(loca == 'exchange'){
		swiperV.slideTo(3); 	
	}else if(loca == 'mall'){
		swiperV.slideTo(4); 	
	}else if(loca == 'did'){
		swiperV.slideTo(5); 	
	}else if(loca == 'press'){
		swiperV.slideTo(6); 	
	}

	/** 메뉴 **/
	/* 메뉴_언어팩_오픈 */
	$('.header_lang_list .dep1').on('click',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$(this).find('.dep2_list').stop().slideDown();
		}/*else{
			$(this).removeClass('on');
			$(this).find('.dep2_list').stop().slideUp();
		}*/
	});

	/* 메뉴_언어팩_닫기 */
	$('.header_lang_list .dep1').on('mouseleave',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).find('.dep2_list').stop().slideUp();
		}
	});

	/* 메뉴_클릭이벤트 */
	/*$('#gnb .dep1').on('click',function(){ 
		var idx = $(this).index();
		
		swiperV.slideTo(idx+1); 
		$('#gnb .dep1').removeClass('on');
		$(this).addClass('on');
	});*/


	/* 메인_네비게이션 */
	/*$('.main_home_list li').on('click',function(){
		var idx = $(this).index();
		swiperV.slideTo(idx+2); 
	});*/

	/* 푸터_네비게이션 */
	$('#footer_gnb .dep1_1 .dep2').on('click',function(){
	
	});

	/* 탑 */
	$('.top').on('click',function(){ 
		swiperV.slideTo(0); 
	});
	swiperV.on('slideChange', function () {
		if(swiperV.activeIndex === 0){ 
			$('.top').stop().fadeOut();
		}else{
			$('.top').stop().fadeIn();
		}
	});
});

function mainAnimation (idx){
	if(idx===0){
	
	}
	if(idx===1){
	
	}
}