//http://naver.me/G99IrYXQ

//const  ctx = $("#myChart");
let myChart = null;
function makeCoronaChart(pDate) {
    const cities = [];
    const dataArray = [];
    $.ajax({
        url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=fX4oWiF5bs6oLwuWPAzdcmry42Z3Tcb7AhAThCiWb8URpEB5wIqMatRlUw0%2FOOmhhJe5aXmAHLHHyKUfE9WdMw%3D%3D&startCreateDt=${pDate}&endCreateDt=${pDate}&_type=json`,
        success: function (data) {
            //console.log(data);
            //console.log(data.response.body.items);
            $(".corona").append(`<ul class="list"></ul>`);
            const itemArray = data.response.body.items.item;
            $.each(itemArray, function (i, item) {
                cities.push(item.gubun);
                dataArray.push(item.incDec);
                /*
                $(".corona .list").append(`<li>
                                            <div class="title">${item.gubun}</div>
                                            <div class="num">${item.incDec}</div>
                                           </li>`);
                */

            });
            if(myChart!==null) {
                myChart.destroy();
            }
            const ctx = document.getElementById("myChart");
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: cities,
                    datasets: [{
                        label: '코로나 발생현황',
                        data: dataArray,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
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



/////////////// 달력 만들기  ////////////////////
const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const korDayArray = ["일", "월", "화", "수", "목", "금", "토"];
const monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //윤년
const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년 아님

const now = new Date(); //오늘 날짜...
let changeNow = now;

function makeCalendar(pYear, pMonth) {
    //////여기서 달력 만들기 시작/////////
    $("#datePicker .days .list").html("");
    $("#datePicker .dates .list").html("");
    const startDay = new Date(pYear, pMonth, 1); // 첫날이 무슨 요일인지 확인
    const startYear = startDay.getFullYear(); // 첫날이 무슨 요일인지 확인
    const startMonth = startDay.getMonth(); // 첫날이 무슨 요일인지 확인
    let seletedYear = startDay.getFullYear();
    $("#datePicker .header .yearAndMonth .year").text(startYear);
    $("#datePicker .header .yearAndMonth .month").text(monthArray[startMonth]);
    //$("#datePicker .header .yearAndMonth .month").text(startMonth+1);
    if (startYear % 4 === 0) {
        if (startYear % 100 === 0) { //윤년 아님
            seletedYear = nonLeapYear;
        } else { //윤년
            seletedYear = leapYear;
        }
    } else { //윤년 아님
        seletedYear = nonLeapYear;
    }
    if (seletedYear % 400 === 0) {
        seletedYear = leapYear;
    }
    let count = 1;


    $.each(dayArray, function (i, item) {
        $("#datePicker .days .list").append(`<li class=""><span>${item}</span></li>`)
    })

    for (let i = 0; i < 42; i++) {
        if (i < startDay.getDay()) { // 
            //공백 집어 넣기...
            $("#datePicker .dates .list").append(`<li class="blank"><span></span></li>`);
        } else {
            //숫자 집어넣기

            $("#datePicker .dates .list").append(`<li class="" data-no="${count}"><span>${count}</span></li>`);
            if (startDay.getFullYear() === now.getFullYear() &&
                startDay.getMonth() === now.getMonth() &&
                count === now.getDate()) {
                $("#datePicker .dates .list li").eq(i).addClass("today");
            }
            count++;
        }
        if (count > seletedYear[startMonth]) {
            break;
        }
    }
    gsap.from("#datePicker .dates .list li", {
        scale: 0,
        duration: 1,
        ease: "power4",
        stagger: {
            amount: 0.5,
            grid: "auto",
            from: "0",
        }
    });
}

makeCalendar(changeNow.getFullYear(), changeNow.getMonth(), 1);

//now는 오을 날짜라서 바뀌면 안된다.  요거는 손대면 안됨.
//changeNow 는 제일 처음 오늘날짜를 세탕하기 위해 now를 할당 받는다.  changeNow = now;
//2021,9,1 ==> 2021,10,1 ==> 2021,11,1
$("#datePicker .header .btnNextMonth").on("click", function () {
    changeNow = new Date(changeNow.getFullYear(), changeNow.getMonth() + 1, 1);
    makeCalendar(changeNow.getFullYear(), changeNow.getMonth(), 1);
});
$("#datePicker .header .btnPrevMonth").on("click", function () {
    changeNow = new Date(changeNow.getFullYear(), changeNow.getMonth() - 1, 1);
    makeCalendar(changeNow.getFullYear(), changeNow.getMonth(), 1);
});


$("#datePicker #date").on("click", function () {
    $("#datePicker #calendar").toggle();
});

console.log(changeNow.getDate());

$("#datePicker").on("click", ".dates .list li", function () {
    const date = $(this).data("no");
    makeCoronaChart(  changeNow.getFullYear()+""+addZero(changeNow.getMonth()+1)+""+addZero(date) );
    $("#datePicker #calendar").hide();
    $("#datePicker #date").val(changeNow.getFullYear()+" / "+addZero(changeNow.getMonth()+1)+" / "+addZero(date));
    
});

function addZero(pNum) {
    if(pNum<10) {
        return "0"+pNum;
    } else {
        return ""+pNum;
    }
}
$("#datePicker #date").val(changeNow.getFullYear()+" / "+addZero(changeNow.getMonth()+1)+" / "+addZero(now.getDate()))
makeCoronaChart(  now.getFullYear()+""+addZero(now.getMonth()+1)+""+addZero(now.getDate()-1) );
