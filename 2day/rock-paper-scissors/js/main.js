//자바스크립트 객체
//메서드(행동)와 속성(특징)으로 이루어짐
//ex. 자동차
//속성,멤버필드,properties
//자동차.배기량 = 2000;
//자동차.컬러 = "yellow";
//자동차.브랜드 ="현대";
//자동차.엑셀(); //속도증가 - 함수
//자동차.브레이크(); // 속도감소

//window, document - 객체
//querySelector ... - 함수
const computerItems = document.querySelectorAll("#computer li");
const humanItems = document.querySelectorAll("#human li");
const resultList = document.querySelector("#resultList");
const resultCover = document.querySelector("#resultCover");
const btnRestart = document.querySelector("#btnRestart");
let computerPick = 0;
let gameCount = 0;
//items[0].style.display = "none";
//items[1].style.display = "none";
//items[2].style.display = "none";
//items.push 를 쓸수 없음..
//nodeList  유사배열 은 .push를 쓸수 없음
//배열은 사용할수 있음
/* 반복문
    let sum=0;
    for(let i=0;i<=10;i++){
        //홀수 는 i=1;
        if(i%2===0){//나머지 연산자. 짝수 홀수 구별
            continue; //조건을 만족해서 continue를 만나면 다음 조건으로 간다
            //반복문은 계속 이어진다.
        }//if(i%2 === 0) continue;
        sum=sum+i;
        console.log("i==="+i,"sum==="+sum);
    }
    console.log(sum);
    for(let i=0;true;i++){
        if(i>7) break; //범위를 모를때..조건을 만족한 순간 break을 만나면 for문을 건너 뛴다
        sum=sum+i;
        console.log("i==="+i,"sum==="+sum);
    }
    console.log(sum);
*/

function scope01(){
    //const innerSc01 = sc01;//안에서 밖은 가져옴
    if(true){
        var var01 = 10;
        let let01 = 20;
        const const01 = 30;
    }
    for(var i=0;i<3;i++){ //let을 쓰고 밖에서 console찍으면 i 안됨
        var temp = i;
    }
    //var는 function() 스코프 let 과 const 는 block 스코프
    console.log(var01);
    console.log(temp);
    console.log(i); //let 과 var 의 차이
    //console.log(let01);
    //console.log(const01);
}
scope01();

//rest api = url/user/01
const fruits = ["apple","banana","orange","kiwi","tomato"];
console.log(fruits.length);
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
fruits.forEach(function(item,i){
    console.log(item);
});
/*const fruits = ["orange","apple","kiwi","shine","totato"];
console.log(fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.forEach(function(item,i){
    console.log(item);
});*/

//배열의 개수
//.length
// for(let i=0;i<length;i++){

// }

function computerSelect(){
    /*for(let i=0;i<computerItems.length;i++){
        //console.log(i);
        computerItems[i].style.display = "none";
    }*/
    computerItems.forEach(function(item,i){//i는 순서가 필요할때 씀
        item.style.display="none";
    });
    const random = Math.floor(Math.random()*3);
    //console.log(random);
    computerItems[random].style.display = "block";
    computerPick = random;
}
//setInterval(computerSelect,10);
//console.log(items);
//document.title = "나는 타이틀";
let clearID = setInterval(computerSelect,10);
let clearTimeoutID = null;
// function removeEventListener(){
//     humanItems.forEach(function(item,i){
//         item.removeEventListener("click");
//     });
// }
const clickItem = function (e){
    clearInterval(clearID);
    const userPick = parseInt(e.currentTarget.dataset.id);
    //console.log("드디어 나는 사용자가 이벤트 중 click이벤트를 받을 수 있게 되었다." + userPick);
    if(computerPick === userPick){
        console.log("비김");
        //resultList.innerHTML+=`<li class="draw"><span>D</span></li>`;
        const inner = document.createElement("li");
        inner.classList.add("draw");
        inner.innerHTML="<span>D</span>";
        resultList.appendChild(inner);
    }else if(
        (computerPick===0 && userPick===1) ||
        (computerPick===1 && userPick===2) ||
        (computerPick===2 && userPick===0)){
        console.log("승리");
        //resultList.innerHTML+=`<li class="win"><span>W</span></li>`
        const inner = document.createElement("li");
        inner.classList.add("win");
        inner.innerHTML="<span>W</span>";
        resultList.appendChild(inner);
    }else{
        console.log("패배");
        //resultList.innerHTML+=`<li class="lose"><span>L</span></li>`
        const inner = document.createElement("li");
        inner.classList.add("lose");
        inner.innerHTML="<span>L</span>";
        resultList.appendChild(inner);
    }
    humanItems.forEach(function(item,i){
        item.removeEventListener("click",clickItem);
    });
    if(clearTimeoutID!==null){
         clearTimeout(clearTimeoutID);
    }
    clearTimeoutID = setTimeout(function(){
         clearID = setInterval(computerSelect,10);
         humanItems.forEach(function(item,i){
             item.addEventListener("click",clickItem);
         });
    },1000);
    gameCount++;
    if(gameCount>=3){
        clearTimeout(clearTimeoutID);
        resultCover.classList.remove("off");
        resultCover.classList.add("on");
    }
}

humanItems.forEach(function(item,i){
    item.addEventListener("click",clickItem);
});

btnRestart.addEventListener("click",function(){
    resultCover.classList.remove("on");
    resultCover.classList.add("off");
    gameCount = 0;
    resultList.innerHTML="";
    clearTimeoutID = setTimeout(function(){
        clearID = setInterval(computerSelect,10);
        humanItems.forEach(function(item,i){
            item.addEventListener("click",clickItem);
        });
   },10);
});





/*배열 예제

//배열은 번호메기기...규칙이 없는것들에게 번호를 메김.
const 우리반 = ["홍길동", "둘리", "고길동", "BTS"];
console.log(우리반[0]);
const now = new Date();
console.log(now);
//요일 얻어오기 getDat는 배열순으로 뱉어냄
console.log(now.getFullYear());
if(now.getDay() === 0){
    console.log("일요일");
}else if(now.getDay() === 1){
    console.log("월요일");
}//7번 써야함

const days = ["일","월","화","수","목","금","토"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
console.log(days[now.getDay()] + "요일");
console.log(months[now.getMonth()]);
*/

