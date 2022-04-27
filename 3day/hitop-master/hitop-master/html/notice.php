<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INCLUDE HITOP</title>
    <link rel="shortcut icon" href="../images/layout/favicon.png" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="../css/reset.css" />
    <link rel="stylesheet" href="../css/swiper-bundle.css" />
    <link rel="stylesheet" href="../css/splitting.css">
    <link rel="stylesheet" href="../css/layout.css" />
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="../css/contents.css" />
    <link rel="stylesheet" href="../css/board.css">
    <script src="../js/swiper-bundle.min.js"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0a8cf008a6167b3310cdcd5642c0b1fb&libraries=services"></script>
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script src="../js/gsap/gsap.min.js"></script>
    <script src="../js/splitting.min.js"></script>
    <script src="../js/js.cookie.min.js"></script>
    <!-- <script src="../js/main.js" defer></script> -->
    <script src="../js/jquery_main.js" defer></script>
  </head>
  <body>
    <header id="header">
      <div class="container">
        <h1 id="logo">
          <a href="./"><img src="../images/layout/logo.png" alt="하이탑 로고" /></a>
        </h1>
        <nav id="gnb">
          <ul class="list">
            <li>
              <a href="">company</a>
              <ul class="depth02">
                <li><a href="introduce.php">사업개요</a></li>
                <li><a href="greeting.php">인사말</a></li>
                <li><a href="">경영이념</a></li>
                <li><a href="history.php">회사연혁</a></li>
                <li><a href="ci.php">CI</a></li>
                <li><a href="">조직도</a></li>
                <li><a href="location.php">오시는 길</a></li>
              </ul>
            </li>
            <li>
              <a href="">business</a>
              <ul class="depth02">
                <li><a href="">경관용포장재</a></li>
                <li><a href="">기능성포장재</a></li>
                <li><a href="">조립식바닥재</a></li>
                <li><a href="">스포츠필드</a></li>
              </ul>
            </li>
            <li>
              <a href="">pr</a>
              <ul class="depth02">
                <li><a href="">특허인증</a></li>
                <li><a href="">시공실적</a></li>
                <li><a href="">시공사진</a></li>
                <li><a href="">카달로그</a></li>
              </ul>
            </li>
            <li>
              <a href="notice.html">customer</a>
              <ul class="depth02">
                <li><a href="notice.html">공지사항</a></li>
                <li><a href="">나라장터 등록물품</a></li>
                <li><a href="inquiry.html">견적문의</a></li>
              </ul>
            </li>
            <li>
              <a href="">recruit</a>
              <ul class="depth02">
                <li><a href="">인재상</a></li>
                <li><a href="">인사&복지</a></li>
                <li><a href="">채용공고</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- gnb end -->
        <div class="etc">
          <a href="" class="btn online">온라인 견적문의</a>
          <button class="all">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    <!-- header end -->

<main id="subContentsWrap">
  <div id="subVisual" class="subVisual04">
    <div class="subTitle">
      <h2>Customer</h2>
      <p>하이탑의 다양하고 새로운 소식들을 전해드립니다.</p>
    </div>
    <nav id="lnb">
      <h3 class="hidden">local navigation bar</h3>
      <div class="contents">
        <div class="home">
          <a href=""><span class="material-icons"> home </span></a>
        </div>
        <div class="depth01 item">
          <button>
            Customer
            <span class="material-icons"> expand_more </span>
          </button>
          <ul class="mainLnb">
            <li><a href="">Company</a></li>
            <li><a href="">Business</a></li>
            <li><a href="">PR</a></li>
            <li><a href="">Customer</a></li>
            <li><a href="">Recruit</a></li>
          </ul>
        </div>
        <div class="depth02 item">
          <button>
            공지사항
            <span class="material-icons"> expand_more </span>
          </button>
          <ul>
            <li><a href="">공지사항</a></li>
            <li><a href="">나라장터 등록물품</a></li>
            <li><a href="">견적문의</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- subvisual end -->
  <div id="subContents">
    <h3 class="subTitle">공지사항</h3>
    <div class="contents">
      <table class="board">
        <colgroup>
          <col style="width: 100px" />
          <col />
          <col style="width: 150px" />
          <col style="width: 80px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <!--  col / row-->
            <th scope="col">제목</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="subject"><a href="">추석 휴무 공지</a></td>
            <td>2021-09-10</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <a href="" class="prev"><span class="material-icons">chevron_left</span></a>
        <ul>
          <li class="active"><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li><a href="">6</a></li>
          <li><a href="">7</a></li>
          <li><a href="">8</a></li>
          <li><a href="">9</a></li>
          <li><a href="">10</a></li>
        </ul>
        <a href="" class="next"><span class="material-icons">chevron_right</span></a>
      </div>
      <? include("../include/search.html"); ?>
    </div>
  </div>
</main>
<footer id="footer">
    <div class="utilMenu">
      <ul>
        <li><a href="">이용약관</a></li>
        <li><a href="">개인정보보호정책</a></li>
        <li><a href="">사이트맵</a></li>
        <li><a href="">온라인견적문의</a></li>
      </ul>
    </div>
    <div class="addressBox">
      <div class="logo">
        <img src="../images/layout/fLogo.png" alt="" />
      </div>
      <div class="address">
        <p>
          주소 : 서울 송파구 성내천로 14길 13 (3층) <br />
          대표전화 : 070-7715-4400 / 이메일 : hitop4400@hanmail.net <br />
          사업자번호 : 402-81-83259
        </p>
        <p class="copyright">Copyright ⓒ 2018 HITOP. All rights reserved</p>
      </div>
      <div class="tel">
        고객만족센터
        <strong>070-7715-4400</strong>
      </div>
    </div>
  </footer>
  <button class="btnTop">
    <span class="material-icons">north</span>
  </button>
</body>
<!-- body end -->
</html>

