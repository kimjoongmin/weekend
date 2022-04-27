//new Swiper('#mainVisual'); //생성자 함수
//새로운 인스턴스를 하나 만든다
//new Dtae();
//객체는 추상적인 관념 같은거/설계도
//객체만이 가질 수 있는 특징 = 속성/properties/필드/멤버필드/상태
//코끼리.키, 코끼리.몸무게, 코끼리.상아의 유무
//코끼리.먹다() , 코끼리.달리다(), 코끼리.잔다()  행위/메서드
//new 코끼리(); // 생성자 함수
// let 학생 = {
//     키:180,
//     몸무게:80
// };
//json 자바스크립트 오브제트 노트어쩌고;;
// let 학생 = {
//     "키":180 //key 값에 "" 붙여줌 value 값은 그대로
//     "몸무게":80 //key 값에 "" 붙여줌
// };

Splitting(); //글씨 쪼개기
// const text = document.querySelector(".main");
// text.innerHTML = text.textContent.replace(/\s/g,"<span>$&</span>");

new Swiper("#mainVisual", {
  // 중괄호(오브젝트로 던짐! )
  effect: "cube", //option : cube, cards, fade....
  loop: "true",
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: "#mainVisual .paginationBox .pagination",
    type: "bullets",
    clickable: "true",
  },
});

// const mainTL = gsap.timeline();

// mainTL.from("#mainVisual .slogan .main .char", {
//     y: -100,
//     opacity: 0,
//     ease: 'bounce',
//     duration: 1,
//     //stagger: 0.05
//     stagger: {
//         amount: 1, //무조건 다 나오는데 3초
//         //each: 0.1 // 몇글자인지 몰라도 개당 0.1씩 나온다
//         from: "random" //end, random, [2,2]배열로도 가능, edge     //시작 지점 옵션
//     }
// }).from("#mainVisual .slogan .sub .word", {
//     x: 100,
//     opacity: 0,
//     ease: 'power4',
//     duration: 1.5,
//     //stagger: 0.05 //개별 셋팅
//     stagger: {
//         amount: 1, //무조건 다 나오는데 3초
//         //each: 0.1 // 몇글자인지 몰라도 개당 0.1씩 나온다
//         //from: "random" //end, random, [2,2]배열로도 가능, edge     //시작 지점 옵션
//     }
// }, 1); //절대 시간 1초.  위에께 실행 된 후 1초 후에 무조건 실행

//연습
const mainTL2 = gsap.timeline();
mainTL2
  .from("#logo", {
    y: -100,
    opacity: 0,
  })
  .from("#gnb .list > li", {
    opacity: 0,
    stagger: {
      //개별 셋팅
      each: 0.1,
    },
  })
  .from(".online", {
    opacity: 0,
  })
  .from(".all", {
    opacity: 0,
  })
  .from(
    "#mainVisual .slogan .main .char",
    {
      opacity: 0,
      y: -100,
      ease: "bounce",
      duration: 1,
      stagger: {
        amount: 1,
      },
    },
    0.8
  ) //절대개념
  .from(
    "#mainVisual .slogan .sub .char",
    {
      opacity: 0,
      x: -100,
      ease: "back",
      duration: 1,
      stagger: {
        amount: 1,
      },
    },
    "-=1.5",
    "subEnd"
  ) //상대개념
  .from(
    "#mainVisual .prev",
    {
      opacity: 0,
      x: -100,
    },
    "subEnd-=0.5"
  )
  .from(
    "#mainVisual .next",
    {
      opacity: 0,
      x: 100,
    },
    "subEnd-=0.5"
  )
  .from("#mainVisual .pagination", {
    opacity: 0,
    y: 100,
  })
  .from("#mainVisual .iconScroll", {
    opacity: 0,
    y: 100,
  });

const gnbList = $("#gnb > .list > li");
//const gnbList = document.querySelectorAll("#gnb > .list > li");
gnbList
  .on("mouseover", function () {
    //console.log(this);
    $(this).find(".depth02").stop().slideDown(200);
  })
  .on("mouseleave", function () {
    $(this).find(".depth02").stop().slideUp(100);
  });
//gnbList.off();

const header = $("#header");
const btnTop = $(".btnTop");
$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop(); //스크롤의 위치값을 알려줌
  if (scrollTop > 0) {
    header.addClass("scroll");
    btnTop.addClass("on");
  } else {
    header.removeClass("scroll");
    btnTop.removeClass("on");
  }
});
btnTop.on("click", function () {
  // gsap.to("html,body", {
  //     scrollTop: 0,
  //     ease: "power3.inOut",
  //     duration: 1
  // });
  $("html").animate({
    scrollTop: 0,
  });
});
$(".tabBox .tabMenu li").on("click", function () {
  const idx = $(this).index();
  $(this).addClass("on").siblings("li").removeClass("on");
  const selectTabContents = $(this).parents(".tabMenu").siblings(".tabContents").find(">ul>li").eq(idx);
  selectTabContents.show().siblings("li").hide();
});

$(".popup .close").on("click", function () {
  gsap.to(".popup", {
    top: -500,
    ease: "back.in",
    duration: 1.2,
  });
});
$(".popup .oneday").on("click", function () {
  gsap.to(".popup", {
    top: -500,
    ease: "back.in",
    duration: 1.2,
  });
  Cookies.set("oneday", "one", {
    expires: 1,
  });
});
if (Cookies.get("oneday") !== "one") {
  $(".popup").show();
}
