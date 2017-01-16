define([], function() {
  'use strict';

  var directive = function () {
    return {
      restrict: 'EA',
      replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/Dcie1Directive.html',
      link:function(scope, element, attrs) {
        var ballList = scope.views.playingMethods.data;
         scope.resetBetRuleInstance();
        scope.ballList = [];
        angular.forEach(ballList,function(data,index){
          angular.forEach(data,function(item,index2){
            scope.ballList.push(item)
          })
        });
        scope.betRuleInstance.result = [[]];//结果
        var betRuleInstance = scope.reductionBall();
        if(betRuleInstance){
          scope.setBetRuleInstance(betRuleInstance)
        }
      },
      controller:['$scope','$stateParams','Lottery','BetAlgorithm',function($scope,$stateParams,Lottery,BetAlgorithm){
        var betType = $stateParams.parameter;
        $scope.betRuleInstance.betType = betType;
        $scope.playName =  Lottery.getPlayFamilyByBetType($stateParams.gameCode,betType);
        $scope.views.playFamily = Lottery.getPlayFamilyByBetType($scope.betRuleInstance.gameCode,betType);
        $scope.playData.getPlayMethods(betType);
        $scope.views.oddsGroup = $scope.playData.getOddsGroup(betType, $stateParams.gameCode);
        //选择球
        $scope.selectBall = function(ball){
          var num = $scope.betRuleInstance.result[0].indexOf(ball);
          if( num < 0){
            $scope.betRuleInstance.result[0].push(ball)
          }else{
            $scope.betRuleInstance.result[0].splice(num,1)
          }
          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService,$scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
          console.log(JSON.stringify($scope.betRuleInstance.result))
        }
      }]
    }
  }
  return directive;
});
