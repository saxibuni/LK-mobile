define([], function() {
  'use strict';

  var directive = function() {
    return {
      restrict: 'EA',
      replace: false, //  是否替换指定标签
      templateUrl: 'templates/directiveComponent/Number1Directive.html',
      link: function(scope, element, attrs) {
        if (!scope.views.playingMethods.plate) return;
        scope.resetBetRuleInstance();
        var minNum = scope.views.playingMethods.plate.numbers[0].start;
        var maxNum = scope.views.playingMethods.plate.numbers[0].end;
        var format = scope.views.playingMethods.plate.numbers[0].format || false;
        if (scope.betRuleInstance.gameCode == 'HL11x5') {
          format = true
        }
        scope.ballList = [];
        for (var i = minNum; i <= maxNum; i++) {
          i = (format && i < 10) ? ('0' + i) : i.toString();
          scope.ballList.push(i);
        }
        scope.dataList = scope.views.playingMethods.plate.names;
        scope.operations = scope.views.playingMethods.plate.operations;
        scope.betRuleInstance.result = []; //结果
        angular.forEach(scope.dataList, function(data, index) {
          scope.betRuleInstance.result.push([]);
        });
        scope.views.getPlayMethodNumber();
        var betRuleInstance = scope.reductionBall()
        if (betRuleInstance) {
          scope.setBetRuleInstance(betRuleInstance)
        }
      },
      controller: ['$scope','Lottery','$stateParams','BetAlgorithm',function($scope, Lottery, $stateParams, BetAlgorithm) {
        var betType = $stateParams.parameter;
        $scope.betRuleInstance.betType = betType;
        $scope.views.playFamily = Lottery.getPlayFamilyByBetType($scope.betRuleInstance.gameCode, betType);
        $scope.playData.getPlayMethods(betType);
        $scope.views.oddsGroup = $scope.playData.getOddsGroup(betType, $stateParams.gameCode);

        $scope.$watch('views.playingMethods', function(newValue, oldValue) {
          if (newValue == oldValue) return;
          $scope.dataList = $scope.views.playingMethods.plate.names;
        });
        //选择球
        $scope.selectBall = function(ball, index) {
          var maxLength = $scope.views.playingMethods.plate.maxLength;
          var num = $scope.betRuleInstance.result[index].indexOf(ball);
          if(maxLength && index == 0){
            var num2 =  $scope.betRuleInstance.result[1].indexOf(ball);
            if(num < 0 && maxLength > $scope.betRuleInstance.result[0].length){
              if(num2 >= 0)  $scope.betRuleInstance.result[1].splice(num2,1);
              $scope.betRuleInstance.result[0].push(ball)
            }else if(num < 0 && maxLength <= $scope.betRuleInstance.result[0].length){
              $scope.betRuleInstance.result[0].push(ball);
              $scope.betRuleInstance.result[0].splice(maxLength -1,1);
              if(num2 >= 0)  $scope.betRuleInstance.result[1].splice(num2,1);
            }else if(num >= 0){
              $scope.betRuleInstance.result[0].splice(num,1);
            }
          }else{
            if( num < 0){
              if(maxLength){
                var num1 =  $scope.betRuleInstance.result[0].indexOf(ball);
                if(num1 >= 0) $scope.betRuleInstance.result[0].splice(num1,1);
                $scope.betRuleInstance.result[index].push(ball)
              }else{
                $scope.betRuleInstance.result[index].push(ball)
              }
            }else{
              $scope.betRuleInstance.result[index].splice(num,1)
            }
          }
          //计算注数
          var gameCode = $scope.betRuleInstance.gameCode;
          var betService = BetAlgorithm[gameCode + 'Service'];
          $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService, $scope.betSetting);
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
        };

        $scope.randomBall = function(index, ballList) {
          var maxLength = $scope.views.playingMethods.plate.maxLength;
          var isRepeat = $scope.views.playingMethods.plate.isRepeat;
          var randomArr = $scope.views.playingMethods.plate.random;
          $scope.betRuleInstance.result[index] = [];
          var getNumber = randomArr[index];
          var numLength = ballList.length;
          if(maxLength && index == 1){
            var randomNum1 = random(randomArr[0], numLength);
            var randomNum2 = random(maxLength, numLength,randomNum1);
            $scope.betRuleInstance.result[0] = [];
            $scope.betRuleInstance.result[1] = [];
            $scope.betRuleInstance.result[0].push(ballList[randomNum1]);
            for (var i = 0; i < randomNum2.length; i++) {
              $scope.betRuleInstance.result[1].push(ballList[randomNum2[i]])
            }
          }else if(isRepeat){
            var num;
            if(index == 0 )  num =  $scope.betRuleInstance.result[1];
            if(index == 1 )  num =  $scope.betRuleInstance.result[0];
            if(numLength - num.length <  getNumber) num = [];
            var randomNum = random(getNumber, numLength,num);
            for (var i = 0; i < randomNum.length; i++) {
              $scope.betRuleInstance.result[index].push(ballList[randomNum[i]])
            }
          }else{
              var randomNum = random(getNumber, numLength);
              for (var i = 0; i < randomNum.length; i++) {
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
