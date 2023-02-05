// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

const newsSwiper = new Swiper(".news-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".tab-item").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  $(".job-list").hide();
  $(".job-list").eq(index).show();
});
