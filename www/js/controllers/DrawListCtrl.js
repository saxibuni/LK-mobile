define([], function() {
  'use strict';
  var ctrl =   function($scope, $state, Socket, Lottery, $ionicViewSwitcher) {
    $scope.goBet = function(marketItem) {
      var params = {
        parameter:marketItem.defaultMethod,
        gameCode: marketItem.gameCode,
        market: marketItem.market
      };
      $scope.removeZoneData();
      $scope.getMarket(marketItem.gameCode,marketItem.market);
      $state.go('ballBetting.' + marketItem.defaultParentPlate, params);
      $ionicViewSwitcher.nextDirection("forward");
    };
    $scope.marketClose = function () {
      $scope.sureAndBetModel("sure",'温馨提示','当前市场已关闭');
    };
  };
  ctrl.$inject = ['$scope', "$state", "Socket", "Lottery", '$ionicViewSwitcher'];
  return ctrl;

});
