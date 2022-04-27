//우클릭 메뉴 막음
// $("body").on("contextmenu", function () {
//     return false;
// });

const itemList = $("#works .itemList");
const filterItem = $("#filter li");
let grid = null;

$.ajax({
    url: "../data/typo.json",
    success: function (res) {
        //console.log(res);
        const typoList = [...res.typoList];
        let output = "";
        $.each(typoList, function (i, item) {
            output += `
            <li class="item ${item.category}">
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

        //이미지가 로딩 된 후 실행되어야 함(중요). 이미지는 나중에 로딩되기 때문에
        itemList.imagesLoaded(function () {
            // images have loaded

            //자바스크립트 변수의 유효범위 (scope)는 block {} 안에서만 유효하다.
            //특별하게 var 의 경유는 function scope를 따른다.
            //전역변수로 빼야함!!!! const 말고 let

            //카테고리별로 화면에 뿌림
            grid = itemList.isotope({ ///grid 아래에 있어서 변수처리
                // set itemSelector so .grid-sizer is not used in layout
                itemSelector: '.item',

                //정렬하기
                getSortData: {
                    title: '.title', // text from querySelector
                    point: '.point parseFloat', // value of attribute
                },
                sortBy: ['point', 'title']
            });

        });

    }
});
filterItem.on("click", function () {
    const _this = $(this);
    _this.addClass("on").siblings().removeClass("on");
    const _filter = "." + _this.data("filter"); //class로 isotope가 선택자로 쓰기때문에 . 붙여줌

    grid.isotope({
        //$grid.isotope({
        //filter: '.metal'
        filter: _filter
    }); //grid 의 변수 범위가 위에 함수 안에 있어서 위에다가 grid = 을 붙여 처리
});

//마우스 이벤트
const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
    //console.log(e);
    // $("input[name='clientY']").val(e.clientY);
    // $("input[name='pageY']").val(e.pageY);
    // $("input[name='offsetY']").val(e.offsetY);
    // $("input[name='screenY']").val(e.screenY);
    gsap.to(cursor, {
        left: e.clientX,
        top: e.clientY
    });
});

function cursorOver(msg) {
    cursor.find(".txt").text(msg);
    gsap.killTweensOf(".cursor");
    gsap.to(cursor, {
        width: 80,
        height: 80,
        background: "#c92a2a",
        ease: "elastic",
        duration: 1
    });
}

function cursorLeave() {
    gsap.killTweensOf(".cursor");
    cursor.find(".txt").text("");
    gsap.to(cursor, {
        width: 10,
        height: 10,
        background: "#fff",
        ease: "poewr4",
        duration: 0.4
    });
}

itemList.on("mouseenter", "li", function () {
    cursorOver("VIEW");
});
itemList.on("mouseleave", "li", function () {
    cursorLeave()
});
filterItem.on("mouseenter", function () {
    cursorOver("CLICK");

});
filterItem.on("mouseleave", function () {
    cursorLeave();
});