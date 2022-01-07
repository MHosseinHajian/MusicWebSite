$(document).ready(function(){


    $('.header-menu>nav>ul>li>a').on('click',function(){
        $('.header-menu>nav>ul>li>a').removeClass('active');
        $(this).addClass('active');
    });


    $('.header-search button').on('click',function(){

        $('.Search-Page').fadeIn(200);
        $('.Search-Page').css('display','flex');
    });


    $('.Search-Page .close-section').on('click',function(){
        $('.Search-Page').fadeOut(200);
    });


    $('.hamburger-menu button').on('click',function(){
        $('.HamburgerMenu-Area').fadeIn(200);
    });


    $('.HamburgerMenu-Area .close-section').on('click',function(){
        $('.HamburgerMenu-Area').fadeOut(200);
    });


    $(window).scroll(function(){
        var _scrollTop=$(window).scrollTop();
        if(_scrollTop>500){
            $('.scrollTop').css('display','flex');
        }

        else{
            $('.scrollTop').css('display','none');
        }
    });


    $('.scrollTop').on('click',function(){
        $('html, body').animate({
            scrollTop:0
        },300);
    });
    
    
    $(window).scroll(function(){

        var _scrollTop=$(window).scrollTop();
        if(_scrollTop>110){
            
            $('.header').addClass('headerFixed');
            $('.Add-Header').css('display','block');
          
        }

        else{
            $('.header').removeClass('headerFixed');
            $('.Add-Header').css('display','none'); 
        }
    });


    $('.tabs button').on('click',function(){
        $('.tabs button').removeClass('t-active');
        $(this).addClass('t-active');
        var _tabsNum=$(this).attr('tabs_num');
        $('.tabsContent').fadeOut(0);
        var _contentNum='[tabs_content="'+_tabsNum+'"]';
        $(_contentNum).fadeIn(100);
    });



});
