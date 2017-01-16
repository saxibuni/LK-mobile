define([], function() {
	'use strict';

	var directive = function () {
		return {
			restrict: 'EA',
			replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/LHHDirective.html',
      link:function(scope, element, attrs) {
        if(!scope.views.playingMethods.plate) return;
        scope.resetBetRuleInstance();
        scope.dataList = scope.views.playingMethods.plate.names;
        scope.ballList = [['龙','L'],['虎','H'],['和','T']];
        scope.betRuleInstance.result = [];//结果
        angular.forEach(scope.dataList,function(data,index){
          scope.betRuleInstance.result.push([]);
        })
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
          $scope.dataList = $scope.views.playingMethods.plate.names;
        });
        //选择球
        $scope.selectBall = function(ball,index){
          var num = $scope.betRuleInstance.result[index].indexOf(ball);
          if( num < 0){
            $scope.betRuleInstance.result[index].push(ball)
          }else{
            $scope.betRuleInstance.result[index].splice(num,1)
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
