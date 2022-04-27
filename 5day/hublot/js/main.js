let fullpage = null;

function addZero(num) {
    return num > 9 ? "" + num : "0" + num; //삼항연산자 ㅠㅠ 기억이 안나!!!!!!!!!!!!!!!!!!!
}
$("#gnb .gnbList li").on("click", function (e) {
    e.preventDefault();
    const url = $(this).data("url");
    $(this).addClass("on").siblings("li").removeClass("on");
    loadClock(`../data/${url}.json`);
});
loadClock("../data/bigbang.json");

function loadClock(_url) {
    $.ajax({
        url: _url,
        success: function (res) {
            console.log(res);
            const clockList = [...res.clock] //원본 데이터 수정 하지 않기 위해서
            //console.log(clockList);
            const total = clockList.length;
            let output = "";
            $.each(clockList, function (i, item) {
                //background-attachment: fixed; 사전작업이 되어야함
                output += `<div class="section" id="clock"${addZero(i)}" style="background-image:url(${item.bg})" data-splitting>
                    <div class="info">
                        <p class="category">${item.category}</p>
                        <p class="title">
                            ${item.title}
                        </p>
                        <p class="depth">
                        ${item.depth} MM
                        </p>
                        <p class="price">
                        CHF ${item.price}
                        </p>
                    </div>
                </div>`
            });
            $("#main").html(output);
            Splitting();
            $("#indicator .num").text(`${addZero(1)}/${total}`);
            if (fullpage !== null) $.fn.fullpage.destroy("all");
            fullpage = $("#main").fullpage({
                scrollBar: true,
                onLeave: function (origin, destination, direction) {
                    gsap.set(`.section:nth-child(${destination.index+1}) .char`, {
                        y: -200,
                        opacity: 0
                    }) //시간없이 설정
                    $("#indicator .num").text(`${addZero(destination.index+1)}/${total}`)
                },
                afterLoad: function (origin, destination, direction) {
                    gsap.to(`.section:nth-child(${destination.index+1}) .char`, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "bounce",
                        stagger: {
                            amount: 0.3, //절대 시간
                            //each:0.1, //개당 시간
                            from: "random"
                        }
                    })
                }
            });
        }
    });
}

particlesJS.load('bg', '../data/particlesjs-config.json');