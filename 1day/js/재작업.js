const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const btnResult = document.querySelector("#btnResult");
const txtResult = document.querySelector("#txtResult");
const txtResultText = document.querySelector("#txtResultText");
const txtResultNum = document.querySelector("#txtResultNum");
const btnReset = document.querySelector("#btnReset");
function showBMI(_bmi,msg){
    txtResult.style.display="block";
    txtResultNum.innerHTML=_bmi;
    txtResultText.innerHTML=msg;
}
btnResult.addEventListener("click",function(){
    if(inputHeight.value ==""){
        alert("키를 입력하세요");
        inputHeight.focus();
        return;
    }
    if(inputWeight.value ==""){
        alert("몸무게를 입력하세요");
        inputWeight.focus();
        return;
    }
    txtResult.className="";
    let myHeight = inputHeight.value;
    let myWeight = inputWeight.value;
    let meterHeight = myHeight/100;
    //소수점 둘째자리
    let bmi = Math.round(myWeight/(meterHeight*meterHeight)*100)/100;
    //18.5 23 25 30 
    if(bmi <= 18.5){
        txtResult.classList.add("blue");
        showBMI(bmi,"저체중입니다.");
    } else if(bmi <= 23){
        txtResult.classList.add("green");
        showBMI(bmi,"정상입니다.");
    } else if(bmi <= 25){
        txtResult.classList.add("yellow");
        showBMI(bmi,"과체중입니다.");
    } else if(bmi <= 30){
        txtResult.classList.add("orange");
        showBMI(bmi,"비만입니다.");
    } else if(bmi > 30){
        txtResult.classList.add("red");
        showBMI(bmi,"고도비만입니다.");
    }
});
btnReset.addEventListener("click", hideBMI);
function hideBMI(){
    txtResult.style.display="none";
    inputHeight.value="";
    inputWeight.value="";
    inputHeight.focus();
}