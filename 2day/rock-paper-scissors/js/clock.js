const now = new Date();
const clock = document.querySelector("#clock");
const clock2 = document.querySelector("#clock2");
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

//함수선언식
function kkk (){
    console.log("kkk");
}
//즉시실행함수
// (function kkk (){
//     console.log("kkk");
// })();
//함수 표현식(expression)
// const kkk = function (){
//     console.log("kkk");
// }
//ECMA
// const kkk = () => {
//     console.log("kkk");
// }cd
function clockTxt (){
    const now = new Date();
    const clock = document.querySelector("#clock");
    const clock2 = document.querySelector("#clock2");
    let hour = addZero(now.getHours());
    let min = addZero(now.getMinutes());
    let sec = addZero(now.getSeconds());
    // if(sec < 10){
    //     sec = "0"+sec;
    // }
    // if(min < 10){
    //     min = "0"+min;
    // }
    // if(hour < 10){
    //     hour = "0"+min;
    // }
    function addZero(num){
        if(num < 10){
            //`0${num}`
            return "0" + num;//어떠한 결과물을 받을때 리턴을 써줌
        } else {
            return "" + num;
        }
    }
    const newNum = addZero();
    clock.textContent = hour + ":" + min + ":" + sec;
}
setInterval(clockTxt,1000);
//clock2.textContent = `${hour}:${min}:${sec}`;