let a = ["a", "b", "c"];
let b = [...a];
b.push("d");
let aa = 10;
let bb = aa;
aa = 20;
console.log(a + "==" + b);

let tempStorage = JSON.parse(localStorage.getItem("recentSearchWord"));
let recentSearchWordArray = tempStorage === null ? [] : tempStorage;
// if(tempStorage===null) {
//     recentSearchWordArray = [];
// } else {
//     recentSearchWordArray = tempStorage;
// }

const searchResult = $("#searchResult");

function appendRecentWord() {
    let output = "";
    $.each(recentSearchWordArray, function (i, item) {
        $("#recentSearchWord .list").append(`<li><span>${item}</span></li>`);
        output += `<li><span>${item}</span></li>`;
    });
    $("#recentSearchWord .list").html(output);
}
//기존
// if (!recentSearchWordArray.includes(_img)) {
//     //console.log("기존에 있는 검색어...");
//     recentSearchWordArray.push(_img);
//     localStorage.setItem("recentSearchWord", JSON.stringify(recentSearchWordArray));
// } //를 아래 함수처럼
function overlap(_word) { //매개변수
    if (!recentSearchWordArray.includes(_word)) {
        //console.log("기존에 있는 검색어...");
        recentSearchWordArray.push(_word);
        localStorage.setItem("recentSearchWord", JSON.stringify(recentSearchWordArray));
    }
}

appendRecentWord();

function searchImage(_img) {
    if (_img.trim() === "") {
        alert("검색어를 입력해주세요");
        $("#seachTxt").val("");
        return;
    } //공백 엔터 시에도 데이터 안날아감
    $.ajax({
        url: `https://dapi.kakao.com/v2/search/image?query=${_img}&size=48`,
        //url:`https://dapi.kakao.com/v2/search/vclip?query=${_img}&size=20`,
        headers: {
            Authorization: "KakaoAK 93a2a9bdab634d61eb0325d93a6e624e"
        },
        success: function (res) {
            const imgList = [...res.documents];
            let output = "";
            searchResult.html("<ul></ul>");
            const resultUL = searchResult.find("ul");
            $.each(imgList, function (i, item) {
                output += `
                    <li><a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a></li>
                `
            });
            console.log(output);
            resultUL.html(output);
            gsap.from("#searchResult li", {
                scale: 0,
                ease: "power4",
                stagger: 0.02
            });
            overlap(_img); //매게변수
            appendRecentWord();
        }
    })
}

function searchVclip(_img) {
    $.ajax({

        url: `https://dapi.kakao.com/v2/search/vclip?query=${_img}&size=20`,
        headers: {
            Authorization: "KakaoAK 93a2a9bdab634d61eb0325d93a6e624e"
        },
        success: function (res) {
            const imgList = [...res.documents];
            let output = "";
            searchResult.html("<ul></ul>");
            const resultUL = searchResult.find("ul");
            $.each(imgList, function (i, item) {
                output += `
                    <li><a href="${item.url}" data-fancybox="gallery"><img src="${item.thumbnail}"></a></li>
                `
            });
            console.log(output);
            resultUL.html(output);
            gsap.from("#searchResult li", {
                scale: 0,
                ease: "power4",
                stagger: 0.02
            })
        }
    })
}
$("#btnSearch").on("click", function () {
    const search = $("#searchTxt").val();
    //searchVclip(search);
    searchImage(search);
    //$("#recentSearchWord .list").append(`<li>${search}</li>`);
});
$("#searchTxt").on("keyup", function (e) {
    //console.log("aaa");
    //console.log(e);
    if (e.keyCode === 13) {
        const search = $("#searchTxt").val();
        searchImage(search);
        //$("#recentSearchWord .list").append(`<li data-word="${search}">${search}</li>`);
    }
});
$("#recentSearchWord .list").on("click", "li", function () {
    const search = $(this).data("word");
    searchImage(search);
})