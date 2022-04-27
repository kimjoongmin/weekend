
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const btnResult = document.querySelector("#btnResult");
const txtResult = document.querySelector("#txtResult");
const txtResultNum = document.querySelector("#txtResultNum");
const txtResultText = document.querySelector("#txtResultText");
//Math.round()일때 숙제- 완료 소수점두자리
function showAlertTxt(msg,_biman){
    txtResult.style.display="block";
    txtResultNum.textContent=_biman;
    txtResultText.innerHTML=msg;
}
function hideAlertTxt(){
    txtResult.style.display="none";
    inputHeight.value="";
    inputWeight.value="";
    inputHeight.focus();
}
//btnReset.addEventListener("click",hideAlertTxt);
btnReset.addEventListener("click",function(){
    hideAlertTxt();
});
btnResult.addEventListener("click",function(){
    txtResult.className = "";
    let myHeight = inputHeight.value;
    let myWeight = inputWeight.value;
    if(myHeight===""){
        alert("키를 입력하세요");
        inputHeight.focus();
        return;
    }
    if(myWeight===""){
        alert("몸무게를 입력하세요");
        inputWeight.focus();
        return;
    }
    let meterHeight = myHeight/100;
    let biman = Math.round(myWeight/(meterHeight*meterHeight)*100)/100;
    if(biman <= 18.5){
        showAlertTxt("비만도 결과 : 저체중 &#128541;","BMI 지수 : " + biman);
        txtResult.className="blue";
    } else if (biman <= 23){
        showAlertTxt("비만도 결과 : 정상 &#129321;","BMI 지수 : " + biman);
        txtResult.className="green";
    } else if (biman <= 25){
        showAlertTxt("비만도 결과 : 과체중 &#128523;","BMI 지수 : " + biman);
        txtResult.className="yellow";
    } else if (biman <= 30){
        showAlertTxt("비만도 결과 : 비만 &#128528;","BMI 지수 : " + biman);
        txtResult.className="orange";
    } else if (biman > 30){
        showAlertTxt("비만도 결과 : 고도비만 &#129398;","BMI 지수 : " + biman);
        txtResult.className="red";
    }
});


// console.log(myHeight);
// console.log(myWeight);

function 두배(num){
    //console.log(num * 2);
    return num*2;
}

//시계
// const now = new Date();
//console.log(now);
// console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());



//내장객체
//ex. document, window