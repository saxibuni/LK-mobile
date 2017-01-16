define([], function() {
	'use strict';

	var directive = function () {
		return {
			restrict: 'EA',
			replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/Number2Directive.html',
      link:function(scope, element, attrs) {
        var plate = scope.views.playingMethods.plate || scope.views.playingMethods;
        scope.methodName = scope.views.playingMethods.methodName ||  scope.views.playingMethods.names[0];
        scope.resetBetRuleInstance();
        if(plate.numbers[0]){
          var minNum = plate.numbers[0].start;
          var maxNum = plate.numbers[0].end;
        }else{
          var minNum = plate.numbers.start;
          var maxNum = plate.numbers.end;
        }
        scope.ballList = [];
        for(var i = minNum; i<= maxNum; i++){
          var ball = null;
          if(i < 10 && scope.betRuleInstance.gameCode != 'LT'){
            ball = '0' + i
          }else{
            ball = i
          }
          scope.ballList.push(ball.toString())
        }
        scope.betRuleInstance.result = [[]];//结果
        var betRuleInstance = scope.reductionBall();
        if(betRuleInstance){
          scope.setBetRuleInstance(betRuleInstance)
        }
      },
      controller:['$scope','Lottery','$stateParams','BetAlgorithm',function($scope,Lottery,$stateParams,BetAlgorithm){
        var betType = $stateParams.parameter;
        $scope.betRuleInstance.betType = betType;
        $scope.views.playFamily = Lottery.getPlayFamilyByBetType($scope.betRuleInstance.gameCode,betType);
        $scope.playData.getPlayMethods(betType);
        $scope.views.oddsGroup = $scope.playData.getOddsGroup(betType, $stateParams.gameCode);

        $scope.$watch('views.playingMethods',function(newValue, oldValue){
          if(newValue == oldValue) return;
          if(!$scope.views.playingMethods.plate) return;
          $scope.dataList = $scope.views.playingMethods.plate.names;
        });
        //选择球
        $scope.selectBall = function(ball){
          var maxLength = $scope.views.playingMethods.plate == undefined ?undefined:$scope.views.playingMethods.plate.maxLength;
          if(maxLength){
            var num = $scope.betRuleInstance.result[0].indexOf(ball);
            if(num < 0 && maxLength > $scope.betRuleInstance.result[0].length){
              $scope.betRuleInstance.result[0].push(ball)
            }else if(num < 0 && maxLength <= $scope.betRuleInstance.result[0].length){
              $scope.betRuleInstance.result[0].splice(0,1);
              $scope.betRuleInstance.result[0].push(ball);
            }else if(num >= 0){
              $scope.betRuleInstance.result[0].splice(num,1);
            }
          }else{
            var num = $scope.betRuleInstance.result[0].indexOf(ball);
            if( num < 0){
              $scope.betRuleInstance.result[0].push(ball)
            }else{
              $scope.betRuleInstance.result[0].splice(num,1)
            }
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
