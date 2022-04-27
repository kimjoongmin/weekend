//우클릭 메뉴 막음
// $("body").on("contextmenu", function () {
//     return false;
// });



const itemList = $("#works .itemList");
const filterItem = $("#filter li");
let grid = null;

const effectList = ["fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right", "fade-up-left", "flip-up", "flip-down", "zoom-in", "zoom-out"]

$.ajax({
    url: "../data/typo.json",
    success: function (res) {
        //console.log(res);
        const typoList = [...res.typoList];
        let output = "";
        $.each(typoList, function (i, item) {
            output += `
            <li class="item ${item.category}" data-aos="${effectList[Math.floor(Math.random()*effectList.length)]}" data-aos-delay="500" data-aos-duration="1000" >
            <a href="../images/${item.img}" data-fancybox="${item.category}" data-caption="${item.title} <a href='https://daum.net' target='_blank'>link </a>">
              <div class="img">
                <img src="../images/${item.img}" alt="" />
              </div>
              <div class="info">
                <h2>${item.title}</h2>
                <p class="desc">${item.desc}</p>
                <p class="point">
                  <span>${item.point}</span>
                </p>
              </div>
            </a>
          </li>
            `
        });
        itemList.html(output);
        //layout
        itemList.imagesLoaded(function () {
            AOS.init();
        });
    }
});