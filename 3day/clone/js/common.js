$(function () {
  //gnb effect
  $("#gnb > ul > li")
    .on("mouseover focusin", function () {
      $("header").addClass("on");
    })
    .on("mouseleave focusout", function () {
      $("header").removeClass("on");
    });
  //gnb scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("scroll");
      $(".btn_top").addClass("on");
    } else {
      $("header").removeClass("scroll");
      $(".btn_top").removeClass("on");
    }
  });
});
