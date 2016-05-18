$(function(){
	winw = $(window).width()
	$(window).resize(function(){
		winw = $(window).width()
		if(winw >= 800){
			$('.gnb').show()
		}else{
			$('.gnb').hide()	
		}
	})//resize end
	
	$('.opener').click(function(){
		$('.gnb').stop().slideToggle()
		$(this).toggleClass("tog")
	})//click
	
})