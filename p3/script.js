$(function(){
	init()
	function init(){
		winw = $(window).width()
		winh = $(window).height()
	}//init end
	$(window).resize(function(){
		init()
		if(winw >= 1024){
			$('.gnb').show()
		}else{
			$('.gnb').hide()
			$('.opener').removeClass('tog')
		}
	})//resize
	$(window).scroll(function(){
		st = $(window).scrollTop()
		if(st>=winh){
			$('header').css({'position':'fixed' , 'top':0})
		}else{
			$('header').css({'position':'absolute' , 'top':'100%'})
		}
	})//scroll
	$('.opener').click(function(){
		$('.gnb').stop().slideToggle()
		$('.opener').toggleClass('tog')
	})
	
	
	
})






