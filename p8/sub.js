$(function(){
	addr=location.href
	if(addr.match("page1.html")){$(".snb1,.path1").show(); $(".subbtn1").addClass("sub_active");$(".gnb1").addClass("active")}
	if(addr.match("page2.html")){$(".snb1,.path2").show(); $(".subbtn2").addClass("sub_active");$(".gnb1").addClass("active")}
	if(addr.match("page3.html")){$(".snb1,.path3").show(); $(".subbtn3").addClass("sub_active");$(".gnb1").addClass("active")}
	
	if(addr.match("page4.html")){$(".snb2,.path4").show(); $(".subbtn4").addClass("sub_active");$(".gnb2").addClass("active")}
	if(addr.match("page5.html")){$(".snb2,.path5").show(); $(".subbtn5").addClass("sub_active");$(".gnb2").addClass("active")}
	if(addr.match("page6.html")){$(".snb2,.path6").show(); $(".subbtn6").addClass("sub_active");$(".gnb2").addClass("active")}
	if(addr.match("page7.html")){$(".snb2,.path7").show(); $(".subbtn7").addClass("sub_active");$(".gnb2").addClass("active")}
	
	if(addr.match("page8.html")){$(".snb3,.path8").show(); $(".subbtn8").addClass("sub_active");$(".gnb3").addClass("active")}
	if(addr.match("page9.html")){$(".snb3,.path9").show(); $(".subbtn9").addClass("sub_active");$(".gnb3").addClass("active")}
	
	if(addr.match("page10.html")){$(".snb4,.path10").show(); $(".subbtn10").addClass("sub_active");$(".gnb4").addClass("active")}
	if(addr.match("page11.html")){$(".snb4,.path11").show(); $(".subbtn11").addClass("sub_active");$(".gnb4").addClass("active")}
	
	if(addr.match("page12.html")){$(".snb5,.path12").show(); $(".subbtn12").addClass("sub_active");$(".gnb5").addClass("active")}
	if(addr.match("page13.html")){$(".snb5,.path13").show(); $(".subbtn13").addClass("sub_active");$(".gnb5").addClass("active")}
	if(addr.match("page14.html")){$(".snb5,.path14").show(); $(".subbtn14").addClass("sub_active");$(".gnb5").addClass("active")}
	
	
	////////////////////////slider
	n=1
	id = setInterval( function(){next()},2000)
	
	function next(){
		n+=1
		if( n==5)
		{
			$(".img_container").css("left",0)
			n=2
		}
		$(".img_container").animate({"left":(n-1)*-100+"%"})	
		$(".breadcrumb li").removeClass("active")
		$(".radio"+n).addClass("active")
	}
	
	$(".slider").mouseenter(function(){
		clearInterval( id )
	})
	$(".slider").mouseleave(function(){
		id = setInterval( function(){next()},2000)
		})
	
	})
	
	