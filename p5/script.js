$(function(){
	n=1
	setInterval(function(){next()},4000)
	
	function next(){
			n+=1
			if( n==4)
			{
				n=1
			}
			$(".visual li").stop().fadeOut()
			$(".mainbg"+n).stop().fadeIn()
		}
	
	$(".next").click(function(){
			next()
		})
		
	$(".prev").click(function(){
		n-=1
		if( n==0)
		{
			n=3
		}
		$(".visual li").stop().fadeOut()
		$(".mainbg"+n).stop().fadeIn()
		})
		
		//////////////////////////////////////////////
		
		m=1
		setInterval( function (){sliding()},4000)
		function sliding(){
			m+=1
			if( m == 6 )
			{
				$(".img_container").css("left",0)
				m=2
				}
			change()
			}
		function change(){
			$(".img_container").stop().animate({"left":(m-1)*-340})
			$(".breadcrumb li").removeClass("active")
			$(".btn"+m).addClass("active")			
			}
		$(".breadcrumb li").click(function(){
			m = parseInt($(this).attr("data-n"))
			change()
			})
			
			////////////////////////////////////////////////////
			
			init()
			function init(){
				offset1 = $(".content1").offset().top //1페이지의 거리
				offset2 = $(".content2").offset().top
				offset3 = $(".content3").offset().top
				offset4 = $(".content4").offset().top
				offset5 = $(".content5").offset().top
				offset6 = $(".content6").offset().top
				}
			$(".nav li").click(function(){
				t = $(this).attr("data-t")
				//스크롤애니메이션
				$("body,html").stop().animate({"scrollTop":eval("offset"+t)})
				})
			$(window).scroll(function(){//브라우저에서 스크롤이 발생하는 동안
				
				scrT = $(window).scrollTop()
				//현재 스크롤 값을 알아내기
				$(".nav li").removeClass("radio_on")
				if( scrT < offset2 ){//content1
					$(".radio1").addClass("radio_on")
					}
				else if( scrT >=offset2 && scrT < offset3 ){//content2
					$(".radio2").addClass("radio_on")
					}
				else if( scrT >=offset3 && scrT < offset4 ){//content3
					$(".radio3").addClass("radio_on")
					}
				else if( scrT >=offset4 && scrT < offset5 ){//content4
					$(".radio4").addClass("radio_on")
					}
				else if( scrT >=offset5 && scrT < offset6 ){//content5
					$(".radio5").addClass("radio_on")
					}
				else{//content6
					$(".radio6").addClass("radio_on")
					}
				
				})
	})