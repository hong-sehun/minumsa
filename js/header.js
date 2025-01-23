$(function(){
    $('header .headmid > ul').mouseenter(function(){
        $('header').animate({
            height:'350px'
        },800)
    })
    $('header').mouseleave(function(){
        $('header').stop().animate({
            height:'85px'
        },800)
    })
})

$(function(){
 $('.hamburger').click(function(){
    $('.m-nav').slideToggle()
 })
})