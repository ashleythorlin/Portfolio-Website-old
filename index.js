$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 500){
            $("#nav-bio").css("font-weight", "bold");
            $("#nav-edu").css("font-weight", "normal");
            $("#nav-work").css("font-weight", "normal");
            $("#nav-proj").css("font-weight", "normal");
            $("#nav-cont").css("font-weight", "normal");
        }
        else if(scroll < 1000){
            $("#nav-bio").css("font-weight", "normal");
            $("#nav-edu").css("font-weight", "bold");
            $("#nav-work").css("font-weight", "normal");
            $("#nav-proj").css("font-weight", "normal");
            $("#nav-cont").css("font-weight", "normal");
        }
        else if(scroll < 1400){
            $("#nav-bio").css("font-weight", "normal");
            $("#nav-edu").css("font-weight", "normal");
            $("#nav-work").css("font-weight", "bold");
            $("#nav-proj").css("font-weight", "normal");
            $("#nav-cont").css("font-weight", "normal");
        }
        else if(scroll < 1550){
            $("#nav-bio").css("font-weight", "normal");
            $("#nav-edu").css("font-weight", "normal");
            $("#nav-work").css("font-weight", "normal");
            $("#nav-proj").css("font-weight", "bold");
            $("#nav-cont").css("font-weight", "normal");
        }
        else{
            $("#nav-bio").css("font-weight", "normal");
            $("#nav-edu").css("font-weight", "normal");
            $("#nav-work").css("font-weight", "normal");
            $("#nav-proj").css("font-weight", "normal");
            $("#nav-cont").css("font-weight", "bold");
        }
    })
})