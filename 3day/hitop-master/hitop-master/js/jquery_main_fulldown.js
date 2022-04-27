const gnbList = $("#gnb > .list > li");
//const gnbList = document.querySelectorAll("#gnb > .list > li");
gnbList.on("mouseover focusin", function () {
    $("header").addClass("open");
}).on("mouseleave focusout", function () {
    $("header").removeClass("open");
});
//gnbList.off();
$(window).on("mousemove", function (e) {
    //console.log(e.clientX);
    const cursor = document.querySelector("#cursor");
    if (cursor === null) {
        return;
    }
    gsap.to("#cursor", {
        left: e.clientX - $("#cursor").width() / 2,
        top: e.clientY - $("#cursor").height() / 2,
        ease: "power3",
        duration: 1
    });
});
const header = $("#header");
$(window).on("scroll", function(){
    if($(window).scrollTop() > 0 ){
        header.addClass("scroll");
    } else {
        header.removeClass("scroll");
    }
});