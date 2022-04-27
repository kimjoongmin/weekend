const header = $("header");
const gnbLI = $("#gnb .list > li");
const circle = $("#gnb .circle");

gnbLI.on("mouseenter", function () {
    header.addClass("on");
    //console.log($(this).offset().left, "===", $(this).offset().top);
    const tx = $(this).offset().left + $(this).width() / 2;
    gsap.to(circle, {
        left: tx,
        ease: "power4",
    })
});
header.on("mouseleave", function () {
    header.removeClass("on");
});

Splitting();
// fullpage 설정
$("#main").fullpage({
    navigation: true,
    navigationPosition: 'right', //default
    navigationTooltips: ['WHO AM I', 'BUSINESS', "PORTFOLIO", "COMMUNITY", "ADDRESS"],
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction) {
        const leavingSection = this;
        //구역 2를 떠난 후
        const target = destination.index;
        switch (target) {
            case 0:
                mainVisualTL.play(); //해야할 일;
                //mainVisualTL.restart(); //계속 실행 방지
                break;
            case 1:
                businessTL.play();
                break;
            case 2:
                portfolioTL.play(); //해야할 일;
                break;
            case 3:
                communityTL.play();
                $("#fp-nav").removeClass("last");
                break;
            case 4:
                $("#fp-nav").addClass("last");
                break;
        }
        // if (origin.index == 0 && direction == 'down') {
        //     mainVisualTL.restart();
        // } else if (origin.index == 1 && direction == 'down') {
        //     businessTL.restart();
        // } else if (origin.index == 2 && direction == 'down') {
        //     portfolioTL.restart();
        // } else if (origin.index == 3 && direction == 'down') {
        //     communityTL.restart();
        // }
    }
});

gsap.defaults({
    ease: "power4",
    duration: 1
}); //공통 적용

//:after나 :before를 잡아서 애니메이션 주기위해
const mainVisualLine = CSSRulePlugin.getRule("#mainVisual .txtBox strong:after");
let mainVisualTL = gsap.timeline();
mainVisualTL.from("#mainVisual .txtBox h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.01
}).from("#mainVisual .txtBox p .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.01
}, "-=1").from(mainVisualLine, {
    cssRule: {
        scaleX: 0 //transform-origin : 0 50%; 있어야함
    }
});

const businessLine = CSSRulePlugin.getRule("#business .txtBox strong:after");
let businessTL = gsap.timeline({
    paused: true // play() 실행하면 모두다 실행 되버려서 끝나버린걸 방지 위해 멈춤
});
businessTL.from("#business .txtBox h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}).from("#business .txtBox p .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}, "-=1").from(businessLine, {
    cssRule: {
        scaleX: 0
    }
}).from("#business .iconBox li", {
    opacity: 0,
    y: "+=50",
    stagger: 0.2
});

let portfolioTL = gsap.timeline({
    paused: true
});
const portfolioLine = CSSRulePlugin.getRule("#portfolio .txtBox strong:after");
portfolioTL.from("#portfolio .txtBox h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}).from("#portfolio .txtBox p .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}, "-=1").from(portfolioLine, {
    cssRule: {
        scaleX: 0
    }
}).from("#portfolio .more", {
    opacity: 0,
    y: "+=50",
    stagger: 0.02
}).from("#portfolio .portfolioBox li", {
    opacity: 0,
    y: "+=50",
    stagger: 0.1
}, "-=0.3");
let communityTL = gsap.timeline({
    paused: true
});
const communityLine = CSSRulePlugin.getRule("#community .txtBox strong:after");
communityTL.from("#community .txtBox h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}, "-=1").from("#community .txtBox p .char", {
    opacity: 0,
    x: "+=100",
    stagger: 0.02
}).from(communityLine, {
    cssRule: {
        scaleX: 0
    }
}).from("#community .communityBox li", {
    opacity: 0,
    y: "+=50",
    stagger: 0.1
});