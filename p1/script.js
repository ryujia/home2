$(function(){
	
	winh = $(window).height()
	$(window).resize(function(){
			winh = $(window).height()
		})
	
	$(window).mousewheel(function(e,delta){
		
		scrT = $(window).scrollTop()//현재 스크롤 된 위치
		target_scr = scrT + 300 * -delta //다음 스크롤 위치
		$("body,html").stop().animate({"scrollTop":target_scr})
		return false//기본 휠 기능 제거
		})
	
	$(window).scroll(function(){
		scrT = $(window).scrollTop()
		//시차스크롤공식
		//스크롤 비율(0-1사이) = 스크롤 가능범위 /  현재스크롤위치
		scr_range = 4500 - winh //스크롤가능범위 = 컨텐트높이-창높이
		ratio = scrT / scr_range //스크롤비율(0-1사이)=현재스크롤위치/스크롤범위
		move_range=2985-winh//bg의 최대이동거리 - 창높이
		targetY= ratio * -move_range //bg의 이동목적지
		$(".bg_container").css("top",targetY)
		
		
		///////////////////////스크롤이 1100이 되었을 때 0.x의 속도로 (-,+를 붙이느냐 따라 왼쪽 오른쪽 방향이 달라짐) margin-left 를 -400으로 설정함
		$(".fish1").css("margin-left", (scrT - 1100) *0.2 + (-400))
		})
	})