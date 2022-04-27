const computerItems = document.querySelectorAll("#computer li");
const userItems = document.querySelectorAll("#user li");
const resultCover = document.querySelector("#resultCover");
const btnRestart = document.querySelector("#btnRestart");
const resultList = document.querySelector("#resultList");
const winner = document.querySelector("#winner");
const over = document.querySelector("#over");
let computerPick = 0; //computerSelect안에 변수가 있어서 clickItem에서 사용할수 없기에 사용하고자 변수를 밖에 또 만들어둠
let gameCount = 0; //게임 횟수 제한을 위한 초기값
let winners = 0; //게임 횟수 제한을 위한 초기값

//컴퓨터 가위바위보 랜덤으로 돌아가는 함수
//함수를 변수에 바로 저장하면 여러곳에서 자유롭게 사용가능!!!!
const computerSelect = function(){    
    for(let i=0;i<computerItems.length;i++){//반복문 컴퓨터 가위바위보
        computerItems[i].style.display = "none";//전부 안보이게 처리
    }
    //forEach 구문
    // computerItems.forEach(function(item,i){
    //     item.style.display = "none";
    // });
    
    //3개중 값을 랜덤으로 정수로 가져오게함
    const random = Math.floor(Math.random()*3);
    //랜덤값을 가져와 보이게 처리
    computerItems[random].style.display = "block";
    //랜덤 값을 컴퓨터 선택으로 저장(변수를 밖에서도 사용하기위해 사용)
    computerPick = random;
}

//clearInterval 을 위해 변수로 저장 실행
//0.01초 간격으로 컴퓨터 가위바위보를 무한 실행
let clearID = setInterval(computerSelect,10);

//클릭 이벤트 함수
const clickItem = function(e){
    clearInterval(clearID);//clearInterval을 위에 담은 setInterval 변수로 실행하여 반복을 취소
    const userPick = e.currentTarget.dataset.id;//유저가 선택 한 data-id 값을 userPick에 할당
    //만약 computerPick과 userPick이 같으면 "비겼습니다"
    //computerPick 0일때 userPick 1이면 "이겼습니다"
    //computerPick 1일때 userPick 2이면 "이겼습니다"
    //computerPick 2일때 userPick 0이면 "이겼습니다"
    //그 외는 "졌습니다"
    if(computerPick == userPick){
        console.log("비겼습니다");
        //결과 출력 방법1-흔적이 안남음
        //resultList.innerHTML="<div class='draw'><span>D</span></div>";
        //결과 출력 방법2
        let inner = document.createElement("div");
        inner.classList.add("draw");
        inner.innerHTML="<span>D</span>";
        resultList.appendChild(inner);
    } else if(
        (computerPick==0 && userPick==1) || 
        (computerPick==1 && userPick==2) ||
        (computerPick==2 && userPick==0) ){
        console.log("이겼습니다");
        //결과 출력 방법1
        //resultList.innerHTML="<div class='win'><span>W</span></div>";
        //결과 출력 방법2
        let inner = document.createElement("div");
        inner.classList.add("win");
        inner.innerHTML="<span>W</span>";
        resultList.appendChild(inner);
    } else{
        console.log("졌습니다");
        //결과 출력 방법1
        //resultList.innerHTML="<div class='lose'><span>L</span></div>";
        //결과 출력 방법2
        let inner = document.createElement("div");
        inner.className="lose";
        inner.innerHTML="<span>L</span>";
        resultList.appendChild(inner);
    }
    //유저 가위바위보를 계속 클릭하는 버그 방지위해 이벤트 삭제
    for(let i=0;i<userItems.length;i++){
        userItems[i].removeEventListener("click",clickItem)
    }
    // userItems.forEach(function(item,i){
    //     item.removeEventListener("click",clickItem);
    // });

    //유저 가위바위보 클릭 후 1초 동안 멈춤 함수를 여러곳에서 쓰기위해 clearTimeoutID 변수에 저장
    const clearTimeoutID = setTimeout(function(){
        //1초 후 아래 함수들 실행
        //다시 컴퓨터 가위바위보 돌리고
        clearID = setInterval(computerSelect,10);
        //유저 가위바위보에 클릭 이벤트 추가
        for(let i=0;i<userItems.length;i++){
            userItems[i].addEventListener("click",clickItem);
        }
        // userItems.forEach(function(item,i){
        //     item.addEventListener("click",clickItem);
        // });
    },1000);
    gameCount++;//clickItem 함수가 실행될때마다 증가
    //게임을 3번 이상하면 
    if(gameCount>=3){
        //resultCover 보이게
        resultCover.className="on";
        //1초 후 돌아가는 setTimeout을 clearTimeout 함수에 clearTimeoutID 변수에 저장한 함수를 취소
        clearTimeout(clearTimeoutID);
    }
    //2번 이상 승리시 winner 이미지 출력
    //class가 win의 개수를 체크해서 2개 이상시 winner 출력 아니면 over 출력
    let winners = document.getElementsByClassName("win").length;
    if(winners >= 2){
        winner.style.display="block";
        over.style.display="none";
    }else{
        over.style.display="block";
        winner.style.display="none";
    }
}
// userItems 반복문으로 클릭 이벤트가 일어 났을때 clickItem 함수 실행
for(let i=0;i<userItems.length;i++){
    userItems[i].addEventListener("click",clickItem);
}
//forEach 구문
// userItems.forEach(function(item,i){
//     item.addEventListener("click",clickItem);
// });

//restart 버튼을 눌렀을때 이벤트
btnRestart.addEventListener("click",function(){
    resultCover.className="off";//resultCover의 클래스를 off해주고
    //컴퓨터 셀렉을 돌아가게 만들어주고
    clearID = setInterval(computerSelect,10);
    //userItems 반복문을 다시 실행해주고
    for(let i=0;i<userItems.length;i++){
        userItems[i].addEventListener("click",clickItem);
    }
    // userItems.forEach(function(item,i){
    //     item.addEventListener("click",clickItem);
    // });
    gameCount=0;//게임 수를 초기화해주고
    resultList.innerHTML="";//결과를 지운다    
});
    
