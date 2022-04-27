let myChart = null;

function loadCorona(_date) {
    $.ajax({
        url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=19dSCzsKHChy3B7Q9KYxkmOaaV9259HgMYckw%2FKzdsQPFcHbY%2BMyK0La2YWTevtye27%2FWbl6H7LjogeVXYs34g%3D%3D&_type=json&startCreateDt=${_date}&endCreateDt=${_date}`,
        success: function (res) {
            //console.log(res.response.body.items.item);
            const cities = [];
            const coronaIncDec = [];
            const backgroundList = [];
            const coronaData = res.response.body.items.item;

            $.each(coronaData, function (i, item) {
                //console.log(item.gubun + "===" + item.incDec);
                cities.push(item.gubun);
                coronaIncDec.push(item.incDec);
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                backgroundList.push(`rgba(${r},${g},${b},1)`);
            });
            const ctx = document.querySelector("#myChart").getContext("2d");
            if (myChart !== null) myChart.destroy();
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: cities,
                    datasets: [{
                        label: "시도별 Corona 19 발생현황",
                        data: coronaIncDec,
                        backgroundColor: backgroundList,
                        borderWidth: 1,
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    });
}

//달력
const days = ["SUN", "MON", "TUE", "WED", "THI", "FRI", "SAT"];
const month = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const now = new Date();
let changeNow = new Date();

function makeCalendar(_year, _month) {
    const startDate = new Date(_year, _month, 1);
    const startYear = startDate.getFullYear(); //const 사용 불가
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDay(); //0~6
    let selectedYear; //데이터 변경 방지용 새로 만듬
    $(".yearAndMonth .year").text(startYear);
    $(".yearAndMonth .month").text(month[startMonth]);
    // 4년마다 윤년
    // 100으로 떨어지면 윤년아님
    // 400으로 떨어지면 또 윤년
    if (startYear % 4 === 0) {
        if (startYear % 100 === 0) {
            selectedYear = notLeapYear;
            if (startYear % 400 === 0) {
                selectedYear = leapYear;
            }
        } else {
            selectedYear = leapYear;
        }
    } else {
        selectedYear = notLeapYear;
    }
    let output = "";
    let count = 1;
    for (let i = 0; i < 42; i++) {
        if (i < startDay) {
            output += `<li class="blank"><span></span></li>`
        } else {
            if (startYear === now.getFullYear() && startMonth === now.getMonth() && count === now.getDate()) {
                //오늘 일 때
                output += `<li class="today"><span>${count}</span></li>`
            } else {
                output += `<li data-no="${count}"><span>${count}</span></li>`;
            }
            count++;
        }
        if (count > selectedYear[startMonth]) {
            break;
        }
        //if(count > startYear[startMonth]) break; 위에꺼랑 같음
    }
    $("#calendar .days .list").html("");
    $.each(days, function (i, item) {
        $("#calendar .days .list").append(`<li><span>${item}</span></li>`);
    });
    $("#calendar .dates .list").html(output);
    gsap.from("#calendar .dates .list li", {
        scale: 0,
        ease: "power3",
        stagger: 0.02
    });
}

function addZero(num) {
    if (num < 10) return "0" + num
    else "" + num
}
$("#calendar .dates .list").on("click", "li", function () {
    //console.log($(this).data("no"));
    const coronaDate = changeNow.getFullYear() + addZero(changeNow.getMonth() + 1) + addZero($(this).data("no"));
    $(this).addClass("pickedDay").siblings().removeClass("pickedDay");
    loadCorona(coronaDate);
});
$("#calendar .header .btnNextMonth").on("click", function () {
    //makeCalendar(2022, 0);
    changeNow = new Date(changeNow.getFullYear(), changeNow.getMonth() + 1, 1);
    makeCalendar(changeNow.getFullYear(), changeNow.getMonth());
});
$("#calendar .header .btnPrevMonth").on("click", function () {
    //makeCalendar(2022, 0);//
    changeNow = new Date(changeNow.getFullYear(), changeNow.getMonth() - 1, 1);
    makeCalendar(changeNow.getFullYear(), changeNow.getMonth());
});
makeCalendar(changeNow.getFullYear(), changeNow.getMonth());

loadCorona(20220109);