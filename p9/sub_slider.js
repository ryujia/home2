$(function(){
	n=1
	s = setInterval( function(){next()},500)
	$(".breadcrumb li").click(function(){
		n=$(this).attr("data-n")
		change()
		})
		
	function change(){
		$(".img_container li").stop().fadeOut()
		$(".img"+n).stop().fadeIn()
		
		$(".breadcrumb li").removeClass("active")
		$(".btn"+n).addClass("active")
		}
	$(".next").click(function(){
		next()
		})
	function next(){
		n+=1
		if( n==5)
		{
			n=1
		}
		change()
		}
	$(".prev").click(function(){
		n-=1
		if(n==0)
		{n=4}
		change()
		})
	$(".sub_slider").mouseenter(function(){
		clearInterval(s)
		})
	$(".sub_slider").mouseleave(function(){
		s = setInterval( function(){next()},500)
		})
		
		////////////////////////////////slider End
		///////////////////////////////////////snb,path
		
	addr = location.href//현재 웹문서 주소를 저장한다.
	if(addr.match("greet.html")){
		$(".snb1").show()
		$(".subbtn1").addClass("sub_active")
		$(".path1").show()
		}
	if(addr.match("map.html")){
		$(".snb1").show()
		$(".subbtn2").addClass("sub_active")
		$(".path2").show()
		}
	if(addr.match("business1.html")){
		$(".snb2").show()
		$(".subbtn3").addClass("sub_active")
		$(".path3").show()
		}
	if(addr.match("business2.html")){
		$(".snb2").show()
		$(".subbtn4").addClass("sub_active")
		$(".path4").show()
		}
	if(addr.match("gallery.html")){
		$(".snb3").show()
		$(".subbtn5").addClass("sub_active")
		$(".path5").show()
		}
	if(addr.match("online.html")){
		$(".snb4").show()
		$(".subbtn6").addClass("sub_active")
		$(".path6").show()
		}
	if(addr.match("notice.html")){
		$(".snb5").show()
		$(".subbtn7").addClass("sub_active")
		$(".path7").show()
		}
	if(addr.match("freeboard.html")){
		$(".snb5").show()
		$(".subbtn8").addClass("sub_active")
		$(".path8").show()
		}
	if(addr.match("qna.html")){
		$(".snb5").show()
		$(".subbtn9").addClass("sub_active")
		$(".path9").show()
		}
})