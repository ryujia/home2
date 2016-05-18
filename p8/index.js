$(function(){
	n=1
	prevent=0
	id=setInterval( function(){next()},2000)
	
	$(".next").click(function(){
		next()
	})
	
	$(".prev").click(function(){
		
		if( prevent == 0)
		{
			n-=1
			if(n==0)
			{
				$(".img_container").css("left",-300+"%")
				n=3	
			}
			change()	
		}
	})
	
	$(".breadcrumb li").click(function(){
		n=parseInt(		$(this).attr("data-n")	)
		change()
	})
	
	function change(){
		$(".img_container").animate({"left":(n-1)*-100+"%"})
		prevent=1
		setTimeout(function(){prevent=0},500)
		$(".breadcrumb li").removeClass("active")
		$(".radio"+n).addClass("active")
	}
	function next(){
		if(prevent==0){
			n+=1
			if(n==5)
			{
				$(".img_container").css("left",0)
				n=2	
			}
			change()
		}	
	}
	
	$(".visual").mouseenter( function(){
		clearInterval(id)	
	})
	$(".visual").mouseleave(function(){
		id=setInterval(function(){next()},2000)
		})
})