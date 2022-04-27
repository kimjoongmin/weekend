$.ajax({
    url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=19dSCzsKHChy3B7Q9KYxkmOaaV9259HgMYckw%2FKzdsQPFcHbY%2BMyK0La2YWTevtye27%2FWbl6H7LjogeVXYs34g%3D%3D&_type=json&startCreateDt=20220108&endCreateDt=20220108",
    method: "get",
    success: function (res) {
        console.log(res);
    }
});