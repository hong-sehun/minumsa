$(document).ready(function(){
  $('#fullpage').fullpage({
    // responsiveWidth : 501,
  })
})

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

// 메인스와이퍼
var MainSwiper = new Swiper(".main_swiper  .swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView:1,
  });
  
  // 서브 스와이퍼
  var SubSwiper = new Swiper(".sub_swiper .swiper-container", {
   slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:5000,
    },
    speed:1200,
  });

MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;