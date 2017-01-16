/**
 * Created by Administrator on 2016/10/20 0020.
 */
define([], function() {
  'use strict';
  var ctrl = function($scope,$stateParams,$http){
    $scope.items =[];
    var url = config.trendsUrl + "trendsMap_"+$stateParams.gameCode+"_"+$stateParams.market+"_Ball_today.json"
    $scope.getCNName = function(gameCode,market) {
      return $scope.marketList.filter(function (item, index) {
        return item.gameCode == gameCode && item.market == market;
      })[0]
    };
    //根据gameCode,market 获取市场名称
    $scope.theMarket = $scope.getCNName($stateParams.gameCode, $stateParams.market);

    $http.get(url).success(function(response) {
      var item =  {
        "list":response.list,
        "drawNumLength": $scope.theMarket.drawNumLength
      };
      angular.forEach(item.list,function(data1,index1){
        if(data1.result.split(",").length == 5){
          data1.result = data1.result.split(",");
        }else{
          data1.result = data1.result.split("");
          if(data1.result.length == 3){
            var sum = 0;
            for(var i = 0;i<3;i++){
              for(var i = 0 ;i< data1.result.length ; i++){
                sum += parseInt(data1.result[i]);
              }
            }
            data1.sum = sum;
          }
        }
        data1.drawNoStart = data1.drawNo.slice(0,-(item.drawNumLength))
        data1.drawNoEnd = data1.drawNo.slice(-(item.drawNumLength))
      });
      $scope.items.push(item);
    });
  };
  ctrl.$inject =  ['$scope','$stateParams','$http'];
  return ctrl;
});
