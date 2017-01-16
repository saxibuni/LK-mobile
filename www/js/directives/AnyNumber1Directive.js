define([], function() {
  'use strict';

  var directive = function () {
    return {
      restrict: 'EA',
      replace: false, //  是否替换指定标签
      templateUrl:'templates/directiveComponent/AnyNumber1Directive.html',
      link:function(scope, element, attrs) {
        if(!scope.views.playingMethods.plate) return;
        scope.resetBetRuleInstance();

        scope.dataList = scope.views.playingMethods.plate.names;
        scope.currentCheckbox.checkboxType1 = [];
        if(scope.views.playingMethods.plate.unitGroup){
          scope.currentCheckbox.checkboxType1 = [{name:'万',checked:false,value:'5th'},{name:'千',checked:false,value:'4th'},{name:'百',checked:false,value:'3rd'},{name:'十',checked:false,value:'2nd'},{name:'个',checked:false,value:'1st'}];
          angular.forEach(scope.views.playingMethods.plate.unitGroupChecked,function(item,index){
            scope.currentCheckbox.checkboxType1[item].checked = true;
          })
        }
        scope.setCurrentCheckbox(scope.currentCheckbox.checkboxType1,'AnyNumber1Play');
        scope.ballList = ['0','1','2','3','4','5','6','7','8','9'];
        scope.betRuleInstance.result = [];//结果
        angular.forEach(scope.dataList,function(data,index){
          scope.betRuleInstance.result.push([]);
        });
        scope.betRuleInstance.result[scope.betRuleInstance.result.length] = [];
        scope.selectCheckBox();
        scope.views.getPlayMethodNumber();
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
          angular.forEach($scope.currentCheckbox.checkboxType1,function(data,index){
            if(data.checked){
              $scope.betRuleInstance.result[length].push(data.value)
            }
          });
          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService,$scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
        };
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
        //随机 机选
        $scope.randomBall = function (index,ballList) {
          var randomArr = $scope.views.playingMethods.plate.random;
          var isRepeat = $scope.views.playingMethods.plate.isRepeat;
          $scope.betRuleInstance.result[index] = [];
          var getNumber =  randomArr[index];
          var numLength = ballList.length;
          if(isRepeat){
            var num;
            if(index == 0 )  num =  $scope.betRuleInstance.result[1];
            if(index == 1 )  num =  $scope.betRuleInstance.result[0];
            if(numLength - num.length <  getNumber) num = [];
            var randomNum = random(getNumber, numLength,num);
            for (var i = 0; i < randomNum.length; i++) {
              $scope.betRuleInstance.result[index].push(ballList[randomNum[i]])
            }
          }else{
            var randomNum = random(getNumber,numLength);
            for(var i = 0; i< randomNum.length; i++){
              $scope.betRuleInstance.result[index].push(ballList[randomNum[i]])
            }
          }

          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService, $scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
        };
        var random = function(numSome,length,repeat) {
          var num = [];
          var num2 = repeat || [];
          num2 = num2.toString().split(",");
          for (var i = 0;; i++) {
            var a = Math.floor(Math.random() * parseInt(length));
            if (num.indexOf(a) < 0 &&  num2.indexOf(a.toString()) < 0) {
              num.push(a);
              if (num.length == numSome) {
                break
              }
            }
          }
          return num;
        }
      }]
    }
  }
  return directive;
});
