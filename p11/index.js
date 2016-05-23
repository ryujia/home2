$(function(){

	id=setInterval(function(){next()},3000)
	slideNum = 1;
	$(".slideBtnUl > .leftBtn").click(function(){
		prev();
	})
	$(".slideBtnUl > .rightBtn").click(function(){
		next();
	})

	function prev(){
		slideNum-=1;
		if( slideNum == 0 )
		{
			slideNum=2;
			$(".txtUl").css("left",-200+"%");
			$(".mainSlder > .bg").css("left",-200+"%");
		}
			$(".txtUl").stop().animate({"left":(slideNum-1)*-100+"%"});
				$(".mainSlder > .bg").stop().animate({"left":(slideNum-1)*-100+"%"});
	}
	function next(){
		slideNum+=1;
		if( slideNum==4 )
		{
			slideNum=2;
			$(".txtUl").css("left",0);
			$(".mainSlder > .bg").css("left",0);
		}
		$(".txtUl").stop().animate({"left":(slideNum-1)*-100+"%"});
		$(".mainSlder > .bg").stop().animate({"left":(slideNum-1)*-100+"%"});
	}

	$(".mainSlder").mouseenter(function(){
		clearInterval(id);
	})

	$(".mainSlder").mouseleave(function(){
		id=setInterval(function(){next()},3000);
	})
})
