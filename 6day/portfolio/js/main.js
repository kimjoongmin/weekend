Splitting();
const typed = new Typed("#intro .typing .txt", {
    strings: ["I am little <strong>slow</strong>",
        "But, try <strong>steadily</strong>",
        "I want to be a <strong>full stack developer</strong>.",
        "My name is <strong>KIM Joong Min</strong>",
        "Keep an <strong>eyes on me.</strong>",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    cursorChar: "👩",
});

//팝업창
$("#popup .close").on("click", function () {
    gsap.to("#popup ", {
        y: "-1000",
        ease: "back.in",
        duration: 0.5
    });
});

//popup none 되어있어야함
$("#popup .oneday").on("click", function () {
    gsap.to("#popup ", {
        y: "-1000",
        ease: "back.in",
        duration: 0.5
    });
    //쿠키에 따른 팝업창 js.cookie.min.js
    Cookies.set("oneday", "one", {
        expires: 1
    });
});
if (Cookies.get("oneday") !== "one") {
    $("#popup").show();
}


const profileTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#profile",
        markers: {
            indent: 50,
            fontSize: "30px"
        },
        start: "top-=100 top",
        end: "bottom-=1000 top",
        scrub: 2,
        pin: true,
        pinSpacing: 1000
    }
});

profileTL.from("#profile h2 .char", {
    y: 150,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.1
    }
}).from("#profile .contents .char", {
    x: 150,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: {
        each: 0.1
    }
});

const careerTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#career",
        markers: {
            indent: 50,
            fontSize: "30px"
        },
        start: "top-=100 top",
        end: "bottom-=1000 top",
        scrub: 2,
        pin: true,
        pinSpacing: 1000
    }
});

careerTL.from("#career h2 .char", {
    y: 150,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.1
    }
}).from("#career .contents .char", {
    x: 150,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: {
        each: 0.1
    }
});


const skillObj = {
    Markup: 100,
    _Css: 90,
    Javascript: 80,
    Node: 70,
    Java: 60,
    Spring: 50
}

const skillTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#skill",
        markers: {
            indent: 50,
            fontSize: "30px"
        },
        start: "top-=100 top",
        end: "bottom-=1000 top",
        scrub: 2,
        pin: true,
        pinSpacing: 1000
    }
});

skillTL.from("#skill h2 .char", {
    y: 150,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.1
    }
}).from("#skill .contents li", {
    opacity: 0,
    y: 300,
    stagger: {
        each: 0.2
    }
}, "start").from(skillObj, {
    Markup: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(1) .num").text(Math.ceil(skillObj.Markup));
    }
}, "start+=1").from(skillObj, {
    _Css: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(2) .num").text(Math.ceil(skillObj._Css));
    }
}, "start+=1").from(skillObj, {
    Javascript: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(3) .num").text(Math.ceil(skillObj.Javascript));
    }
}, "start+=1").from(skillObj, {
    Node: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(4) .num").text(Math.ceil(skillObj.Node));
    }
}, "start+=1").from(skillObj, {
    Java: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(5) .num").text(Math.ceil(skillObj.Java));
    }
}, "start+=1").from(skillObj, {
    Spring: 0,
    duration: 3,
    onUpdate: function () {
        $("#skill .contents li:nth-child(6) .num").text(Math.ceil(skillObj.Spring));
    }
}, "start+=1").to("#skill .contents li:nth-child(1) circle", {
    strokeDashoffset: 0,
    duration: 3
}, "start+=1").to("#skill .contents li:nth-child(2) circle", {
    strokeDashoffset: -570 * 0.1,
    duration: 3
}, "start+=1").to("#skill .contents li:nth-child(3) circle", {
    strokeDashoffset: -570 * 0.2,
    duration: 3
}, "start+=1").to("#skill .contents li:nth-child(4) circle", {
    strokeDashoffset: -570 * 0.3,
    duration: 3
}, "start+=1").to("#skill .contents li:nth-child(5) circle", {
    strokeDashoffset: -570 * 0.4,
    duration: 3
}, "start+=1").to("#skill .contents li:nth-child(6) circle", {
    strokeDashoffset: -570 * 0.5,
    duration: 3
}, "start+=1");



const portfolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#portfolio",
        markers: {
            indent: 50,
            fontSize: "30px"
        },
        start: "top-=100 top",
        end: "bottom-=1000 top",
        scrub: 2,
        pin: true,
        pinSpacing: 1000
    }
});

portfolioTL.from("#portfolio h2 .char", {
    y: 150,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.1
    }
}).from("#portfolio .contents .char", {
    x: 150,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: {
        each: 0.1
    }
});