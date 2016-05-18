$(function(){
	//////////////main slider
	n = 1
	id = setInterval( function(){	next() 	} , 3000)
	function next(){
		n += 1
		if(n == 4){
			n = 1
		}
		change()
	}//next End
	function change(){
		$('.visual li').stop().fadeOut()
		$('.mainbg'+n).stop().fadeIn()
		$('.intro1,.intro2,.intro3').stop(true).css({'opacity':0,'top':'60%'})
		$('.intro1,.intro2,.intro3').stop(true).delay(700).animate({'opacity':1 ,'top':'50%'})
		$('.thumb1, .thumb2, .thumb3').hide()
		rn = n + 1
		$('.next_preview  .thumb'+rn).stop().fadeIn()
		ln= n-1
		$('.prev_preview  .thumb'+ln).stop().fadeIn()
	}//change
	$('.next').click(function(){
		next()
	})//next
	$('.prev').click(function(){
		n -= 1
		if(n == 0){
			n = 3
		}
		change()
	})//prev
	$('.next').mouseenter(function(){
		$('.next_preview').stop().animate({'right':0})
	})//next end
	$('.next').mouseleave(function(){
		$('.next_preview').stop().animate({'right':-300})
	})//next end
	$('.prev').mouseenter(function(){
		$('.prev_preview').stop().animate({'left':0})
	})//next end
	$('.prev').mouseleave(function(){
		$('.prev_preview').stop().animate({'left':-300})
	})//next end
	$('.content1').mouseenter(function(){
		clearInterval(id)	
	})
	$('.content1').mouseleave(function(){
		id = setInterval( function(){	next() 	} , 3000)
	})
	
	////////////////////////////////////////////////////////////////// lightbox, modal window
	$('.video_img').click(function(){
		$('.lightbox').fadeIn()
		/*동적으로 iframe 객체를 만들어주기*/
		$('.lightbox').html("<iframe src='http://player.vimeo.com/video/34132895?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1;' width='500/embed/?moog_width=500' height='344' frameborder='no'></iframe>")
	})//click end
	$('.lightbox').click(function(){
		$('.lightbox').fadeOut()
		/*동적으로 iframe 객체를 제거하기*/
		$('.lightbox  iframe').remove()
	})//click end
	
	//////////////////////////////////////////////////////////////////content3 slider
	
	m=1
	
	function slide(){
		
		$(".course").stop().animate({"left": (m-1)*-100+"%"})
		if( m==4){
			$(".number").html(1)
			}
		else
		{$(".number").html(m)}
		
		}
	
	function slide_next(){
		m+=1
		if( m== 5 )
		{
			$(".course").css("left",0)
			m=2
		}
		slide()
		}
	
	$(".down").click(function(){
		
		slide_next()
		})
		
	function slide_prev(){
			m-=1
			if( m== 0 )
			{
				$(".course").css("left","-300%")
				m=3
			
			}
			slide()
		}
	$(".up").click(function(){
		slide_prev();
	})
	
	$(".course").mousedown(function(e){
		mdown = e.clientX 
		
		})
	$(".course").mouseup(function(e){
		mup = e.clientX
		
		if(mdown >mup)
		{
			slide_next()
		}
		if(mdown<mup){
			slide_prev()
			}
		})
/////////////////////////////////////////////////////////////////onepage scroll
	function init(){
		offset1 = $(".content1").offset().top
		offset2 = $(".content2").offset().top
		offset3 = $(".content3").offset().top
		offset4 = $(".content4").offset().top
		offset5 = $(".content5").offset().top
		offset6 = $(".content6").offset().top
		offset7 = $(".content7").offset().top
	
		}
	init()	
	$(window).resize(function(){
		init()
		})
	$(window).scroll(function(){
		scrT = $(window).scrollTop()
		$(".gnb li").removeClass("active")
		
		if(scrT < offset2){
			$(".btn1").addClass("active")
			}
		else if(scrT >= offset2 && scrT < offset3)
		{
			$(".btn2").addClass("active")
		}
		else if(scrT >= offset3 && scrT < offset4)
		{
			$(".btn3").addClass("active")
		}
		else if(scrT >= offset4 && scrT < offset5)
		{
			$(".btn4").addClass("active")
		}
		else if(scrT >= offset5 && scrT < offset6)
		{
			$(".btn5").addClass("active")
		}
		else if(scrT >= offset6 && scrT < offset7)
		{
			$(".btn6").addClass("active")
		}
		else{
			$(".btn7").addClass("active")
			}
		})
	$(".gnb li").click(function(){
		
		t=$(this).attr("data-t")
		$("body,html").stop().animate({"scrollTop":eval("offset"+t)})
		
		})
		
	$(".content").mousewheel(function(e,delta){
		t=$(this).attr("data-t")-delta
		if(t==0){t=1}
		if(t==8){t=7}
		$(body,html).stop().animate({"scrollTop":eval("offset"+t)})
		return false
		})
})//jQuery End








