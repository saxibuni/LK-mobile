define([], function() {
  'use strict';
  var ctrl = function($scope,$stateParams,$http,LTBetConfig,K3BetConfig,HL11X5BetConfig){
    $scope.getInfo = function(){
      $scope.getMarket($stateParams.gameCode, $stateParams.market);
      $scope.marketCNName = $scope.currentMarket.marketCNName;
      $scope.saleRule=$scope.currentMarket.saleRule
      $scope.imgUrl ="img/common/draw_"+$scope.currentMarket.gameCode+"_"+$scope.currentMarket.market+".png"
      switch ($scope.currentMarket.gameCode){
        case "LT": $scope.allDesc = LTBetConfig;break;
        case "K3": $scope.allDesc = K3BetConfig;break;
        case "HL11X51": $scope.allDesc = HL11X5BetConfig;break;
        default:$scope.allDesc = LTBetConfig;break;
      }
    };
    $scope.getInfo();
  };
  ctrl.$inject = ['$scope','$stateParams','$http','LTBetConfig','K3BetConfig','HL11X5BetConfig'];
  return ctrl;
});
