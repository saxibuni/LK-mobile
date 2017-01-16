define([], function() {
  'use strict';

  var directive = function () {
    return {
      restrict: 'EA',
      replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/AnyNumber2Directive.html',
      link:function(scope, element, attrs) {
        if(!scope.views.playingMethods.plate) return;
        scope.resetBetRuleInstance();
        var minNum = scope.views.playingMethods.plate.numbers[0].start;
        var maxNum = scope.views.playingMethods.plate.numbers[0].end;
        scope.ballList = [];
        for(var i = minNum; i<= maxNum; i++){
          scope.ballList.push(i.toString());
        }
         if(scope.views.playingMethods.plate.unitGroup){
           scope.currentCheckbox.checkboxType2 = [{name:'万',checked:false,value:'5th'},{name:'千',checked:false,value:'4th'},{name:'百',checked:false,value:'3rd'},{name:'十',checked:false,value:'2nd'},{name:'个',checked:false,value:'1st'}];
          angular.forEach(scope.views.playingMethods.plate.unitGroupChecked,function(item,index){
            scope.currentCheckbox.checkboxType2[item].checked = true;
          })
        }
        scope.setCurrentCheckbox(scope.currentCheckbox.checkboxType2,'AnyNumber2Play');
        scope.betRuleInstance.result = [[]];//结果
        scope.betRuleInstance.result[scope.betRuleInstance.result.length] = [];
        scope.selectCheckBox();
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
        //选择勾选
        $scope.selectCheckBox = function(){
          var length = $scope.betRuleInstance.result.length -1;
          $scope.betRuleInstance.result[length] = [];
          angular.forEach($scope.currentCheckbox.checkboxType2,function(data,index){
            if(data.checked){
              $scope.betRuleInstance.result[length].push(data.value)
            }
          });
          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService,$scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
          console.log(JSON.stringify($scope.betRuleInstance.result))
        }
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
