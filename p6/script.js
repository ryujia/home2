$(function(){

	id=setInterval(function(){next()},3000)
	$(".gnb>li").mouseenter(function(){
		$(".sub_ul, .sub_bg").stop().slideDown()
		
		})
	$(".gnb>li").mouseleave(function(){
		$(".sub_ul, .sub_bg").stop().slideUp()
		})
		
		
		n=1
		prd=1
		function next(){
			n+=1
			if(n==5)
			{
				n=1
				$(".img_container").css("left",0)
			}
			$(".img_container").animate({"left":(n-1)*-100+"%"})
			
			
			prd+=1
			if(prd == 6 )
			{
				prd=1
				$(".prd_img_container").css("left",0)
			}
			change()
		}
		
		$(".tabbtn img").click(function(){
			b = $(this).attr("data-n")
			$(".board ul").hide()
			$(".board"+b).show()
			})
			
		
		$(".breadcrumb>li").click(function(){
				prd=parseInt($(this).attr("data-n"))
				change()
			})
			
		function change(){
			$(".prd_img_container").animate({left:(prd-1)*-100+"%"})
			}
			
		////////////////////////////////////////등속도 움직임을 이용한 바네이 구현
		x = 0
		mid=setInterval(function(){moveleft()},100)
		function moveleft(){
			x-=5
			if( x <  -945 ) {x=0}
			$(".rolling ul").css("left",x)
		}
		$(".rolling").mouseenter(function(){
			clearInterval( mid )
			})
		$(".rolling").mouseleave(function(){
			mid=setInterval(function(){moveleft()},100)
			})
})








