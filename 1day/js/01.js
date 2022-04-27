//alert("Hello World");
//할당
//변수 var let const
const myName = "김중민";
let myAge = 27;
let myHeight = 183;
let myWeight = 77;
let meterHeight = myHeight/100;
let biman = myWeight/(meterHeight*meterHeight);

console.log("이름" +" : "+ myName);
console.log("나이" +" : "+ myAge);
console.log("비만지수" +" : "+ biman);

// 18.5 보다 작으면 저체중
// 23 보다 작으면 정상
// 25 보다 작으면 과체중
// 30 보다 작으면 비만
// 30 보다 크면 고도비만

//조건문(if, switch, else) 반복문(for, while)

if(biman <= 18.5){
    console.log("비만도 : 저체중");
} else if (biman <= 23){
    console.log("비만도 : 정상");
} else if (biman <= 25){
    console.log("비만도 : 과체중");
} else if (biman <= 30){
    console.log("비만도 : 비만");
} else if (biman > 30){
    console.log("비만도 : 고도비만");
}
