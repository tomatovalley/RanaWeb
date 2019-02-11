$(document).ready(function(){
    $(window).bind('scroll', function(){
    var navHeight = 64;
        if ($(window).scrollTop() > navHeight){
            $('.navbar-expand-lg').addClass('scrolled');
            $('.navbar-nav .nav-link').addClass('black');
        }else{
            $('.navbar-expand-lg').removeClass('scrolled');
            $('.navbar-nav .nav-link').removeClass('black');
        }
    });
});