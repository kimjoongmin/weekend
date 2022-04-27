Splitting();
const section01TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section01",
        markers: {
            indent: 50,
            startColor: "#ff0000",
            endColor: "#00ff00"
        },
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true
    }
});
section01TL
    .from(".section01 .txt01 .char", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {
        cssRule: {
            scaleX: 0
        }
    })
    .from(".section01 .txt02 .char", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(".section01 .txt0301", {
        opacity: 0,
        x: -100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section01 .txt0302", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section01 .txt0303", {
        opacity: 0,
        x: -100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section01 .txt04", {
        opacity: 0,
        scale: 0,
        ease: "back",
        duration: 1.5
    });

/////////////section02////////////////////////
const section02TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section02",
        markers: {
            indent: 50,
            startColor: "#ff0000",
            endColor: "#00ff00"
        },
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true
    }
});
section02TL
    .from(".section02 .title", {
        background: "transparent",
        ease: "power4",
        duration: 1.5,
    })
    .from(".section02 .title .char", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(".section02 .mainTxt01", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(".section02 .mainTxt02", {
        opacity: 0,
        x: -100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section02 .mainTxt03", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section02 .circleList li", {
        opacity: 0,
        x: -100,
        ease: "power4",
        stagger: {
            each: 1
        }
    })
    .from(".section02 .cduBox", {
        opacity: 0,
        scale: 0,
        ease: "back",
        duration: 1.5
    });

/////////////section03////////////////////////
const section03TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section03",
        markers: {
            indent: 150,
            startColor: "#ffcc00",
            endColor: "#336699"
        },
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true
    }
});
section03TL
    .from(".section03 .title", {
        background: "transparent",
        ease: "power4",
        duration: 1.5,
    })
    .from(".section03 .title .char", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(".section03 .mainTxt .char", {
        opacity: 0,
        x: 100,
        ease: "power4",
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
    .from(".section03 .list > li", {
        opacity: 0,
        x: -100,
        ease: "power4",
        stagger: {
            each: 1
        }
    })
    .from(".section03 .redBox", {
        opacity: 0,
        y: -100,
        ease: "power4",
        duration: 1.5
    })
    .from(".section03 .airplane", {
        opacity: 0,
        y: -100,
        ease: "power4",
        duration: 1.5
    });