$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 300){
            $("#nav-bio").css("color", "blue");
        }
    })
})