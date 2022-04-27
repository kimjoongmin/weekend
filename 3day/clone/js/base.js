$(function () {
  allNew.init();
});

var allNew = {
  init: function () {
    allNew.tab();
    allNew.datepicker();
    allNew.fileBtn();
    allNew.modal();
    allNew.modalOpen();
    allNew.modalClose();
  },
  tab: function () {
    $(".tabContent").each(function () {
      var tabBar = $(this).children(".tabBar");
      var tabPage = $(this).children(".tabPage");
      if (!$(this).hasClass("notUsed")) {
        if (!tabBar.hasClass("useTabBtn") && tabBar.children("li.active").length == 0 && !tabBar.children("li").eq(0).children("a").hasClass("useLink")) {
          allNew.tabReset($(this));
          tabBar.children("li").eq(0).addClass("active");
          tabPage.eq(0).addClass("active");
        }
        tabBar
          .children("li")
          .children("a")
          .unbind("click")
          .click(function (e) {
            if (!$(this).hasClass("useLink")) {
              e.preventDefault();
              allNew.tabReset($(this));
              $(this).parent().parent().siblings(".tabPage").eq($(this).parent().index()).addClass("active");
              $(this).parent().addClass("active");
            }
          })
          .keydown(function (e) {
            if ($(this).parent().hasClass("active") && e.keyCode == 9 && e.shiftKey == false) {
              var focusItem = allNew.findFocusItem($(this).parents(".tabBar").eq(0).siblings(".tabPage.active"));
              if (focusItem.length == 0 || $(this).hasClass("useLink")) {
                if ($(this).parent().next().children("a").length > 0) {
                  e.preventDefault();
                  $(this).parent().next().children("a").trigger("click").focus();
                } else if ($(this).parents(".tabContent").eq(1).length > 0) {
                  $(this).parents(".tabContent").eq(1).find(".tabBar li.active").next().children("a").trigger("click");
                }
              }
            }
          });
      }
    });
    $(".tabPage").each(function () {
      if (!$(this).parent(".tabContent").hasClass("notUsed")) {
        var focusItem = allNew.findFocusItem($(this)); //탭페이지 포커스 이동
        if (focusItem.length > 0) {
          focusItem
            .last()
            .unbind("keydown")
            .keydown(function (e) {
              var inTabPage = $(this).parents(".tabPage").eq(0);
              var inTabBar = inTabPage.siblings(".tabBar");
              var target = inTabBar.children("li.active").next();
              if (e.keyCode == 9 && target.length > 0) {
                e.preventDefault();
                if (!target.children("a").hasClass("useLink")) {
                  target.children("a").trigger("click");
                } else {
                  inTabBar.children("li").removeClass("active");
                  target.addClass("active");
                }
                target.children("a").focus();
              }
            });
        }
      }
    });
    $(document).on("click", ".btn_tabOpen", function (e) {
      e.preventDefault();
      var tabNo = parseInt($(this).attr("data-tabNo")) - 1;
      $($(this).attr("href")).find(".tabBar > li > a").eq(tabNo).trigger("click");
    });
  },
  tabReset: function (tabItem) {
    if (tabItem.hasClass("tabContent")) {
      tabItem.children(".tabBar").children("li.active").removeClass("active");
      tabItem.children(".tabPage").removeClass("active");
    } else {
      tabItem.parents(".tabContent").eq(0).children(".tabBar").children("li.active").removeClass("active");
      tabItem.parents(".tabContent").eq(0).children(".tabPage").removeClass("active");
    }
  },
  datepicker: function () {
    var holidayData = [
      { mmdd: "1-1", title: "신정" },
      { mmdd: "3-1", title: "3.1절" },
      { mmdd: "5-5", title: "어린이날" },
      { mmdd: "5-10", title: "석가탄신일" },
      { mmdd: "6-6", title: "현충일" },
      { mmdd: "8-15", title: "광복절" },
      { mmdd: "10-3", title: "개천절" },
      { mmdd: "10-9", title: "한글날" },
      { mmdd: "12-25", title: "크리스마스" },
    ];

    $(".useDatepicker").each(function () {
      if (!$(this).hasClass(".hasDatepicker")) {
        var minDate = $(this).attr("data-minDate");
        var maxDate = $(this).attr("data-maxDate");
        var dateFormat = "yy-mm-dd";
        if ($(this).attr("data-format")) {
          dateFormat = $(this).attr("data-format");
        }
        $(this).datepicker({
          prevText: "이전 달",
          nextText: "다음 달",
          monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
          monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
          dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
          dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
          dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
          dateFormat: dateFormat,
          showMonthAfterYear: true,
          yearSuffix: "&nbsp;/",
          minDate: minDate,
          maxDate: maxDate,
          changeMonth: true,
          changeYear: true,
          yearRange: "c-60:c+0",
          showOn: "both",
          buttonImage: "/images/sub/bg_inputDate.png",

          beforeShowDay: function (date) {
            var holidayCheck = false;
            var mmdd = date.getMonth() + 1 + "-" + date.getDate();
            for (var i = 0; i < holidayData.length; i++) {
              if (holidayData[i].mmdd == mmdd) {
                holidayCheck = true;
                return [true, "date-holiday", holidayData[i].title];
                break;
              }
            }
            if (holidayCheck == false) {
              return [true, ""];
            }
          },
          onSelect: function (selectedDate) {},
          onClose: function (selectedDate) {
            if ($(this).hasClass("dateFrom")) {
              if (selectedDate != "" && $(this).parent().children(".dateTo").val() != "") {
                if (selectedDate >= $(this).parent().children(".dateTo").val()) {
                  alert("시작날짜는 종료날짜보다 작아야 합니다.");
                  $(this).val("");
                  return;
                }
              }
            } else if ($(this).hasClass("dateTo")) {
              if (selectedDate != "" && $(this).parent().children(".dataFrom").val() != "") {
                if ($(this).parent().children(".dateFrom").val() >= selectedDate) {
                  alert("종료날짜는 시작날짜보다 커야 합니다.");
                  $(this).val("");
                  return;
                }
              }
            }
          },
        });
      }
    });
  },
  fileBtn: function () {
    $("input.fileBtn").each(function () {
      if ($(this).css("display") != "none") {
        var file_name = $(this).attr("id");
        var file_class = $(this).attr("class").replace("fileBtn", "");
        $(this).after('<span id="for_' + file_name + '"><input type="text" class="' + file_class + '" value="" title="사진"> <a href="#" class="btn_inline for_fileBtn">찾아보기</a></span>');
        $(this).hide();
        $(this).change(function () {
          $("#for_" + file_name + " input[type='text']").val($(this).val());
        });
        $("#for_" + file_name + " .for_fileBtn").click(function (e) {
          e.preventDefault();
          var id = $(this).parent().attr("id").replace("for_", "");
          $("#" + id).click();
        });
      }
    });
  },
  modal: function () {
    $(document).on("click", ".btn_modalOpen", function (e) {
      e.preventDefault();
      var targetModal = $(this).attr("href");
      allNew.modalOpen(targetModal);
    });
    $(document).on("click", "#overlay, .btn_modalClose", function (e) {
      e.preventDefault();
      allNew.modalClose();
    });
  },
  modalOpen: function (id) {
    //$(window).scrollTop(0);
    $("#overlay").show();
    $(id).addClass("active");
    //$(id).find(".btn_modalClose").eq(0).focus();
  },
  modalClose: function () {
    var modalId = $(".modalWrap.active").attr("id");
    $(".modalWrap").removeClass("active");
    $("#overlay").hide();
    if ($("a.btn_modalOpen[href='#" + modalId + "']").length == 1) {
      $("a.btn_modalOpen[href='#" + modalId + "']").focus();
    }
  },
};
