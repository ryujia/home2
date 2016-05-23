$(function(){
  id=setInterval(function(){next()},3000)
  b=1;
  $(".gnb li").mouseover(function(){
    n=$(this).attr("data-n");
    $(".sub"+n).stop().slideDown();
  })
  $(".gnb li").mouseout(function(){
    n=$(this).attr("data-n");
    $(".sub"+n).stop().slideUp();
  })
  $(".bc>li").click(function(){
    b=parseInt($(this).attr("data-n"));
    $(".imgs>li").stop().fadeOut();
    $(".img"+b).stop().fadeIn();
    $(".bc>li").removeClass("sliderBcSelect");
    $(".bc"+b).addClass("sliderBcSelect");
  })
  function next(){
    b+=1;
    if( b == 4)
    {
      b=1;
    }
    $(".imgs>li").stop().fadeOut();
    $(".img"+b).stop().fadeIn();
    $(".bc>li").removeClass("sliderBcSelect");
    $(".bc"+b).addClass("sliderBcSelect");
  }

  $(".slider").mouseenter(function(){
    clearInterval(id);
  })
  $(".slider").mouseleave(function(){
    id=setInterval(function(){next()},3000)
  })
})
