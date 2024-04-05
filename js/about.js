$(window).ready(function(){
    //swiper js
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 90,
        },
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var height = $(document).scrollTop();
    console.log(height);


    /*----애니메이션 스크롤  위치 구간----*/
    $(document).on("scroll",function(){
        if($(document).scrollTop() > 115){ 
            $(".second_myself_wrap").addClass("animate__fadeInUp");
            $(".second_myself_wrap").css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 758){ 
            $(".designP").addClass("animate__fadeIn");
            $(".designP").css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 1475){ 
            $(".bg").addClass("animate__fadeInUp");
            $(".bg").css({"visibility":"visible"});
        }
    });
});


