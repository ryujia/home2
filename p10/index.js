$(function(){

	n=1;
	setInterval(function(){next()},4000)

	function next(){
		n+=1;
		if(n==6){
			n=2;
			$(".imgUl").css("left",0);
		}
		$(".imgUl").stop().animate({"left":(n-1)*-100+"%"})
	}
})
