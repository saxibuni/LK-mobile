
define([], function() {
  'use strict';
  var ctrl = function($scope,$state,$ionicViewSwitcher){
    $scope.MarketCNName =  $scope.currentMarket.marketCNName;
    $scope.goBetHistory = function(){
      $state.go('tab.myDetail');
      $ionicViewSwitcher.nextDirection("forward");
    };
    $scope.continueBet = function(){
      var url = $scope.messageBet.url.split('/');
      $state.go('ballBetting.' + url[4], { parameter: url[5], gameCode: url[1], market:url[2] });
    };
    var  init = function(){
      if(!$scope.currentMarket.marketCNName){
        $state.go('tab.drawList')
      }
    };
    init()
  };
  ctrl.$inject = ['$scope',"$state","$ionicViewSwitcher"];
  return ctrl;

});
