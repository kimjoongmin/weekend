gsap.to(".red", {
    x: 1500,
    rotation: 180,
    //scrollTrigger: ".red" 간단하게 효과!!
    scrollTrigger: { //오브젝트형태로 옵션작성
        trigger: ".red",
        markers: true,
        start: "top center", //첫번째 매개변수 트리거의 최상단을 어디다가 둘 것이냐 두번째가 화면 최상단.
        end: "bottom top", //첫번째 매개변수 트리거의 하단을 어디다가 둘 것이냐 두번째가 화면 하단.
        scrub: true,
        pin: true,
    }
});
gsap.to(".green", {
    x: 1500,
    rotation: 180,
    scrollTrigger: { //오브젝트형태로 옵션작성
        trigger: ".green",
        markers: {
            indent: 100,
            startColor: "#00ccff",
            endColor: "#ccff00"
        },
        start: "top center+=200", //첫번째 매개변수 트리거의 최상단을 어디다가 둘 것이냐 두번째가 화면 최상단.
        end: "bottom top+=200", //첫번째 매개변수 트리거의 하단을 어디다가 둘 것이냐 두번째가 화면 하단.
        //play restart pause reverse none resume
        toggleAction: "restart pause reverse none" //4군데 쓸 수 있음
    }
});
gsap.to(".blue", {
    x: 1500,
    rotation: 180,
    scrollTrigger: ".blue"
});