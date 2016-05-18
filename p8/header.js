$(function(){
	$(".gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
		})
	$(".gnb>li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
		})
	})