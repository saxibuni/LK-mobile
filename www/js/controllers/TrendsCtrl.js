define([], function() {
  'use strict';
  var ctrl = function($scope,$state,$http,$ionicViewSwitcher,Lottery){
    $scope.myDatas = {
      urlJson:[
        "trendsMap_LT_CQ_Ball_today.json",
        "trendsMap_LT_TJ_Ball_today.json",
        "trendsMap_LT_XJ_Ball_today.json",
        "trendsMap_HL11x5_SH_Ball_today.json",
        "trendsMap_HL11x5_GD_Ball_today.json",
        "trendsMap_HL11x5_JX_Ball_today.json",
        "trendsMap_HL11x5_SD_Ball_today.json",
        "trendsMap_K3_JS_Ball_today.json",
        "trendsMap_K3_AH_Ball_today.json"
      ],
      //根据gameCode,market 获取市场名称
      getCNName:function(gameCode,market) {
        return $scope.marketList.filter(function (item, index) {
          return item.gameCode == gameCode && item.market == market;
        })[0]
      },
      //请求json数据
      requestUrl:function(data,i) {
        $http.get(config.trendsUrl + data).success(function (response) {
          var startIndex = data.indexOf("_") + 1;
          var endIndex = data.indexOf("_Ball");
          var market = data.slice(startIndex, endIndex).split("_")[1];
          var gameCode = data.slice(startIndex, endIndex).split("_")[0];
          var item = {
            "gameCode": $scope.myDatas.getCNName(gameCode, market).gameCode,
            "market": $scope.myDatas.getCNName(gameCode, market).market,
            "marketName": $scope.myDatas.getCNName(gameCode, market).marketCNName,
            "drawNumLength":$scope.myDatas.getCNName(gameCode, market).drawNumLength,
            "list": response.list.slice(0, 3)
          };
          angular.forEach(item.list, function (data1, index1) {
            if (data1.result.split(",").length == 5) {//时时彩,11选5
              data1.result = data1.result.split(",");
            } else {
              data1.result = data1.result.split("");
              if (data1.result.length == 3) {//快3计算和值
                var sum = 0;
                for (var i = 0; i < 3; i++) {
                  for (var i = 0; i < data1.result.length; i++) {
                    sum += parseInt(data1.result[i]);
                  }
                }
                data1.sum = sum;
              }
            }
            data1.drawNoStart = data1.drawNo.slice(0,-(item.drawNumLength))
            data1.drawNoEnd = data1.drawNo.slice(-(item.drawNumLength))
          });
            $scope.items[i] = item;
        })
      }
    }
    $scope.items =[];
    for(var i = 0;i< $scope.myDatas.urlJson.length;i++){
      var data = $scope.myDatas.urlJson[i];
      $scope.myDatas.requestUrl(data,i);
    }
    //查看更多
    $scope.moreSeek = function(market){
      $state.go('lotteryBall',{market:market.market,gameCode: market.gameCode});
      $ionicViewSwitcher.nextDirection("forward")
    }
  };
  ctrl.$inject = ['$scope',"$state",'$http','$ionicViewSwitcher','Lottery'];
  return ctrl;
});
