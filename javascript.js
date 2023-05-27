$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");

        }
    });

    // slide up script

$('.scroll-up-btn').click(function(){
    $("html").animate({scrollTop:0});
})



    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
// typing animation script

var typed = new Typed(".typing",{
    strings:["Web-developer","Desginer","Youtuber"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".typing-2",{
    strings:["Web-developer","Desginer","Youtuber"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


    //owl-carousel script
   $(".owl-carousel").owlCarousel({
       items:3,
       loop:true,
       nav:true,
       dots:true,
       autoplay:true,
       autoplaySpeed:1000,
       smartSpeed:1000,
       autoplayHoverPause:true
   })
   

});