// 头部的js代码
import "./index.less";
import "swiper/css/swiper.css";

$("header .head .right-layout .nav-list .nav-item").on("mouseenter", function(){
    $(".nav-container").hide();
    const index = $(this).index();
    const isSub = $(".nav-container").find(".nav-list").eq(index).find(".nav-item").length
    if(!isSub){
        return;
    }
    $(".nav-container").show();
    $(".nav-container").find(".nav-list").eq(index).show().css({
        display:"flex"
    }).siblings().hide();
})
$(".nav-container").on("mouseleave", function(){
    $(".nav-container").hide();
    $(".nav-container .nav-list").hide();
})
$(".language-button").on("click", function(){
    $(this).next(".language-list").slideToggle();
})