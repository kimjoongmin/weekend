$(function () {
  //swiper 사용
  const mainVisual = new Swiper("#mainVisual", {
    effect: "cube", //효과 설정
    loop: "true",
    speed: 1000, //효과 속도
    autoplay: {
      delay: 4000, //바뀌는 시간
      disableOnInteraction: true, //선택 및 포커스 시 멈춤
    },
    pagination: {
      //페이징 설정
      el: ".swiper-pagination", // 페이징 선택
      type: "bullets", // 페이징 종류 fraction,
      clickable: true, // 페이징 버튼 활성화
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },//custom
    },
    navigation: {
      //컨트롤
      prevEl: ".swiper-button-prev", //이전
      nextEl: ".swiper-button-next", //다음
    },
    // slidesPerView: 3, // 한페이지에 보여지는 개수
    // spaceBetween: 30, // 슬라이드 사이 넓이
  });

  // const text = document.querySelector(".main");
  // text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  //글자 자르기
  $(".main").html(function (index, html) {
    return html.replace(/\S/g, "<span>$&</span>");
  });

  const animation = anime.timeline({});
  animation
    .add({
      targets: "header *",
      opacity: [0, 1],
      translateX: [-10, 0],
      easing: "easeOutExpo",
      delay: anime.stagger(10),
    })
    .add(
      {
        targets: ".main span",
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: anime.stagger(150, { grid: [10, 5], from: "center" }),
      },
      "-=1300"
    )
    .add(
      {
        targets: ".sub",
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
      },
      "-=1000"
    )
    .add(
      {
        targets: ".swiper-button",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeOutExpo",
      },
      "-=500"
    )
    .add(
      {
        targets: ".swiper-pagination",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeOutExpo",
      },
      "-=500"
    )
    .add(
      {
        targets: ".iconScroll",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeOutExpo",
      },
      "-=500"
    );
  $(window).scroll(function () {
    const st = $(this).scrollTop();
    const mh = $("#mainVisual").height();
    console.log("🚀 ~ file: main.js ~ line 93 ~ scrollTop", scrollTop);
    if(){
      
    }
  });
});
