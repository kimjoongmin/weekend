// const marioUL = $(".marioList");
// $.ajax({
//     url: "../data/mario.json", //html 기준으로 잡아야함!!중요!!
//     success: function (res) {
//         //console.log(res);
//         const marioList = res.mario;
//         let output = "";
//         //marioList.forEach(function(item,i){});
//         $.each(marioList, function (i, item) {
//             //console.log(item, img);
//             output +=
//                 `<li class="swiper-slide">
//                 <div class="mario">
//                     <img src="${item.img}" alt="">
//                 </div>
//                 <div class="txt">
//                     <h2 class="title">${item.title}</h2>
//                     <p>
//                         ${item.desc}
//                     </p>
//                     <a href="${item.link}" target="_blank">MORE</a>
//                 </div>
//                 <div class="bg" style="background:${item.bg}"></div>
//             </li>`

//         });
//         //console.log(output);
//         marioUL.append(output);
//         new Swiper("#main .mask"), {
//             slidesPerView: "auto",
//             centeredSlides: true,
//             loop: true,
//             effect: "coverflow",
//             coverflowEffect: {
//                 rotate: 0,
//                 depth: 1000
//             },
//             mousewheel: true
//         };
//     }
// });

//대체텍스트 json으로 입력
$.ajax({
    url: "../data/alt.json", 
    success: function (res) {
        //dconsole.log(res);
        const altTxt = res.alt;
        $.each(altTxt, function (i, item) {
            const img = $(".cardList li").eq(i);
            const info = img.find("a").attr("data-info1");
            if( info == item.num ){
                img.find('img').attr("alt",item.text);
            }
        });
    }
});


// '<li>'+
//     '<div class="mario">'+
//         '<img src="'+item.img+'alt="">'+
//     </div>
//     <div class="txt">
//         <h2 class="title">${item.title}</h2>
//         <p>
//             ${items.desc}
//         </p>
//         <a href="${item.link}" target="_blank">MORE</a>
//     </div>
//     <div class="bg"></div>
// </li>


const marioUL = $(".marioList");
let mySwiper = null;

function loadMario(_url) {
    marioUL.html("");
    $.ajax({
        url: _url,
        success: function (res) {
            //console.log(res);
            const marioList = res.mario;
            let output = "";
            if (mySwiper !== null) {
                mySwiper.destroy();
            }
            //marioList.forEach(function(item,i){

            //});
            $.each(marioList, function (i, item) {
                //console.log(item.img);
                output +=
                    `<li class="swiper-slide">
                    <div class="mario">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="txt">
                        <h2 class="title">${item.title}</h2>
                        <p>
                            ${item.desc}
                        </p>
                        <a href="${item.link}" target="_blank">MORE</a>
                    </div>
                    <div class="bg"  style="background:${item.bg}"></div>
                </li>`
            });
            //console.log(output);
            marioUL.append(output);
            // setTimeout(function () {
            //     gsap.from("#main .mask li", {
            //         opacity: "0",
            //         y: -1000,
            //         ease: "bounce",
            //         duration: 1.5,
            //         // stagger: {
            //         //     each: 0.1,
            //         //     from: "edge"
            //         // }
            //     });
            // }, 0); //0초면 아래 실행 후 실행됨 ////////////////오류남 ㅡㅡ
            mySwiper = new Swiper("#main .mask", {
                slidesPerView: "auto",
                centeredSlides: true,
                loop: true,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    depth: 1000
                },
                mousewheel: true
            });
            gsap.from("#main .mask li", {
                opacity: "0",
                y: -1000,
                ease: "bounce",
                duration: 1.5,
                // stagger: {
                //     each: 0.1,
                //     from: "edge"
                // }
            });
        }
    });
}
loadMario("../data/mario.json");
let old = "mario";
//let old = 0;
$("#gnb .list li").on("click", function () {
    //if(old===$(this).index()) return
    const path = "../data/";
    const selected = $(this).data("url");
    const suffix = ".json";
    const url = path + selected + suffix;
    // if (old === selected) {
    //     return
    // }
    old = selected;
    //old = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    loadMario(url);
});