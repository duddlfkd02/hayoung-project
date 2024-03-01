$(document).ready(function(){
    $('.modal, .modal button').click(function(){
        $('.modal').css({"display":"none"});
    })

    var resume;
    $('.sell').click(function(){//모달 열 때
        resume = $(window).scrollTop()
        $('.res_modalwrap').css({"dispaly":"block", "top":resume})
        $('html, body'),on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });


    
    $('.sell img').click(function(){
        $('.res_modalwrap').show();
    });

    $('.close,.res_modalwrap').click(function(){
        $('.res_modalwrap').hide();
    })
});
