$(function(){
	var myLatlng=new google.maps.LatLng(37.49356868, 126.7234019)

    var myOptions = {  
        zoom: 18,  
        center: myLatlng,  
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };	

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    
    var marker=new google.maps.Marker({
        position:myLatlng,
        map:map
	});
	/////////////////////////구글맵
	

	init();
	function init(){
		winW=$(window).width();
		winH=$(window).height();

		offset1=$(".content1").offset().top;
		offset2=$(".content2").offset().top;
		offset3=$(".content3").offset().top;
		offset4=$(".content4").offset().top;
		offset5=$(".content5").offset().top;

	}
	//mobile
	$(".opener").click(function(){
		$(".gnb").stop().slideToggle();
	})

	//scroll
	$(window).scroll(function(){
		scrT=$(window).scrollTop();
		if(scrT>=winH-50){
			$("header").stop().animate({"top":0});
		}
		else{
			$("header").stop().animate({"top":-80})
		}
		
		$(".gnb li").removeClass("active");
		if( scrT<offset2-300){
			$(".btn1").addClass("active");
		}
		else if( scrT>=offset2-300 && scrT <offset3-300 ){
			$(".btn2").addClass("active");
		}
		else if( scrT>=offset3-300 && scrT <offset4-300){
			$(".btn3").addClass("active");
		}
		else if( scrT>=offset4-300 && scrT <offset5-300){
			$(".btn4").addClass("active");
		}
		else{
			$(".btn5").addClass("active");
		}
	})
	//네비게이션 클릭
	$(".gnb>li").click(function(){
		init();
		t=$(this).attr("data-n");
		$("body,html").animate({"scrollTop":eval("offset"+t)-80});
		if(winW<1024){$(".gnb").slideUp();}

	})

	//메인 배경 이미지 좌우 버튼 클릭
	n=1;
	$(".mainPrevBtn").click(function(){
		n-=1;
		if(n==0){
			$(".bgUl").css("left",-300+"%");
			n=3;
		}
		mainChange();
	})
	$(".mainNextBtn").click(function(){
		n+=1;
		if(n==5){
			n=2;
			$(".bgUl").css("left",0);
		}
		mainChange();
	})
	function mainChange(){
		$(".bgUl").animate({left:(n-1)*-100+"%"});
	}

	//배너 좌우 버튼 클릭
	b=1;
	$(".bannerPrevBtn").click(function(){
		n-=1;
		if(n==0){
			$(".textUl").css("left",-300+"%");
			n=3;
		}
		bannerChange();
	})
	$(".bannerNextBtn").click(function(){
		n+=1;
		if(n==5){
			$(".textUl").css("left",0);
			n=2;
		}
		bannerChange();
	})
	function bannerChange(){
		$(".textUl").animate({left:(n-1)*-100+"%"});
	}
	//risize
	$(window).resize(function(){
		init();
		gnbSH();
		
	})

	//gnb show or hide
	function gnbSH(){
		if(winW>=1024){
			$(".gnb").show();
		}//pc
		else{
			$(".gnb").hide();
		}//mobile
	}
	
	//메인 ENTER 클릭
	$(".title a").click(function(){
		init();
		$("body,html").animate({"scrollTop":eval("offset"+2)-90});
		gnbSH();
	})

	
	//포트폴리오 
	var coverBoxNum;
	$(".coverBox").click(function(){
		coverBoxNum=$(this).attr("data-n");
		$(".portfolioPop"+coverBoxNum).show();
		$("body").css({"overflow":"hidden"});
	})
	
	$(".close").click(function(){
		$(".portfolioPop"+coverBoxNum).hide();
		$("body").css({"overflow":"auto"});
	})

})