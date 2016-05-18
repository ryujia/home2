$(function(){
	
	id=setInterval(function(){next()},2000)
	
	$(".gnb>li").mouseenter(function(){
			icon = $(this).attr("data-n")
			$(".icon").hide()
			$(".icon"+icon).show()
			$(".sub,.headerbg").stop().slideDown()
		})
	$(".gnb>li").mouseleave(function(){
			$(".sub,.headerbg").stop().slideUp()
		})
	n=1	
	$(".breadcrumb li").click(function(){
		n=	$(this).attr("data-n")
		change()
		})
	function change(){
			$(".breadcrumb li").removeClass("active")
			$(".btn"+n).addClass("active")
			
			$(".img_container li").stop().fadeOut()
			$(".bg"+n).stop().fadeIn()
		}
	function next(){
		n+=1
		if( n==4)
		{n=1}
		change()
		}
	$(".visual").mouseenter(function(){
		clearInterval(id)
		})
	$(".visual").mouseleave(function(){
		id=setInterval(function(){next()},2000)
		})
	})