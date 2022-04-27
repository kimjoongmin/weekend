Splitting();

const section01TL= gsap.timeline({
    scrollTrigger:{
        trigger:".section01",
        markers: {
            indent:50,
            startColor:"#ff0000",
            endColor:"#00ff00"
        },
        start:"top top",
        end:"bottom top",
        scrub:2,
        pin:true
    }
});
section01TL
.from(".section01 .txt01 .char",{
    opacity:0,x:100,ease:"power4",duration:1.5,stagger:{each:0.1}
})
.from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"),{cssRule:{scaleX:0}})
.from(".section01 .txt02 .char",{
    opacity:0,x:100,ease:"power4",duration:1.5,stagger:{each:0.1}
})
.from(".section01 .txt0301",{
    opacity:0,x:-100,ease:"power4",duration:1.5
})
.from(".section01 .txt0302",{
    opacity:0,x:100,ease:"power4",duration:1.5
})
.from(".section01 .txt0303",{
    opacity:0,x:-100,ease:"power4",duration:1.5
})
.from(".section01 .txt04",{
    opacity:0,scale:0,ease:"back",duration:1.5
});


//////////////////////////section02 //////////////////////////////////
const section02TL= gsap.timeline({
    scrollTrigger:{
        trigger:".section02",
        markers: {
            indent:50,
            startColor:"#00ccff",
            endColor:"#ff6699"
        },
        start:"top top",
        end:"bottom top",
        scrub:2,
        pin:true
    }
});
section02TL
.from(".section02 .title",{
    background:"transparent",ease:"power4",duration:1.5
})
.from(".section02 .title .char",{
    opacity:0,x:100,ease:"power4",duration:1.5,stagger:{each:0.1}
})
.from(".section02 .mainTxt .mainTxt01",{
    opacity:0,x:-100,ease:"power4",duration:1.5
})
.from(".section02 .mainTxt .mainTxt02",{
    opacity:0,x:100,ease:"power4",duration:1.5
})
.from(".section02 .mainTxt .mainTxt03",{
    opacity:0,x:-100,ease:"power4",duration:1.5
})
.from(".section02 .circleList li",{
    opacity:0,x:-100,ease:"power4",duration:1.5, stagger:{each:0.5}
})
.from(".section02 .cduBox",{
    opacity:0,scale:0,ease:"back",duration:1.5
});



