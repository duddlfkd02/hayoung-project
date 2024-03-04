$(window).ready(function(){
    var height = $(document).scrollTop();
    console.log(height);


    /*----애니메이션 스크롤  위치 구간----*/
    $(document).on("scroll",function(){
        if($(document).scrollTop() > 115){ 
            $(".second_myself_wrap").addClass("animate__fadeInUp");
            $(".second_myself_wrap").css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 700){ 
            $(".bg").addClass("animate__fadeInUp");
            $(".bg").css({"visibility":"visible"});
        }
    });
});


