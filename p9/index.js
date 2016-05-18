$(function(){
	n = 1
	prevent = 0 
	id = setInterval(function(){next()},2000)
	function next(){
		//1:0	2:-100%	3:-200%....
		if(prevent == 0){
			n += 1
			if(n==6){
				$('.bg_container').css('left' , 0)
				n=2
			}
			change()
		}
	}
	
	function change(){
			$('.bg_container').animate({'left': (n-1)*-100+"%" })
			prevent = 1
			setTimeout( function(){ prevent = 0 } , 1000)
			$(".breadcrumb li").removeClass("active")
			$(".btn"+n).addClass("active")
	}
	
	
	$('.next').click(function(){
		next()
	})//next click end
	
	
	$('.prev').click(function(){
		if(prevent == 0){
			n -= 1
			if(n==0){
				$('.bg_container').css('left' , "-400%" )
				n=4
			}
			change()
		}
	})//next click end
	
	$(".breadcrumb li").click(function(){
		n = parseInt($(this).attr("data-n"))
		change()
	})
	
	$("visual").mouseenter(function(){
		clearInterval(id)	
	})
	$("visual").mouseleave(function(){
		id = setInterval(function(){next()},2000)
	})
})







