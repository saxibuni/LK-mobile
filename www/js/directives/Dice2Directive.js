define([], function() {
  'use strict';

  var directive = function () {
    return {
      restrict: 'EA',
      replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/Dice2Directive.html',
      link:function(scope, element, attrs) {
        scope.ballList = scope.views.playingMethods.data;
        scope.resetBetRuleInstance();
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
        var calculation = function(){
          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService,$scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
        };
        $scope.allSelectBall = function(ball){
          var list;
         angular.forEach($scope.ballList,function(data,item){
           if(data.key[0] == ball){
             list = data.value
           }
         });
          var num0 = $scope.betRuleInstance.result[0].indexOf(list[0]);
          var num1 = $scope.betRuleInstance.result[0].indexOf(list[1]);
          var num2 = $scope.betRuleInstance.result[0].indexOf(list[2]);
          var num3 = $scope.betRuleInstance.result[0].indexOf(list[3]);
          var num4 = $scope.betRuleInstance.result[0].indexOf(list[4]);
          if(num0 >= 0 && num1 >= 0 && num2 >= 0 && num3 >= 0 && num4 >= 0 ){
            angular.forEach(list,function(data1,index1){
              angular.forEach($scope.betRuleInstance.result[0],function(data2,index2){
               if(data1 == data2){
                 $scope.betRuleInstance.result[0].splice(index2,1);
               }
              });
            })
          }else{
            angular.forEach(list,function(data,item){
              if($scope.betRuleInstance.result[0].indexOf(data) < 0 ){
                  $scope.betRuleInstance.result[0].push(data)
              }
            });
          }
          calculation();
          console.log(JSON.stringify($scope.betRuleInstance.result))
        };
        //选择球
        $scope.selectBall = function(ball){
          var num = $scope.betRuleInstance.result[0].indexOf(ball);
          if( num < 0){
            $scope.betRuleInstance.result[0].push(ball)
          }else{
            $scope.betRuleInstance.result[0].splice(num,1)
          }
          calculation();
          console.log(JSON.stringify($scope.betRuleInstance.result))
        }
      }]
    }
  }
  return directive;
});
