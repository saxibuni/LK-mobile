define([], function() {
    'use strict';

    var directive = function() {
        return {
            restrict: 'EA',
            replace: false, //  是否替换指定标签
            templateUrl: 'templates/directiveComponent/FunDirective.html',
            link: function(scope, element, attrs) {
                scope.numList = [];
                if (!scope.views.playingMethods.plate) return;
                scope.resetBetRuleInstance();
                if (scope.views.playingMethods.plate.funrow) {
                    for (var key in scope.views.playingMethods.plate.funrow) {
                        scope.numList.push(key)
                    }
                    scope.ballTXList = [
                        ['小(0-4)', 'Small'],
                        ['大(5-9)', 'Big']
                    ]
                } else if (scope.views.playingMethods.plate.zonerow) {
                    for (var key in scope.views.playingMethods.plate.zonerow) {
                        scope.numList.push(key)
                    }
                    scope.ballTXList = [
                        ['一区(0,1)', 'R1'],
                        ['二区(2,3)', 'R2'],
                        ['三区(4,5)', 'R3'],
                        ['四区(6,7)', 'R4'],
                        ['五区(8,9)', 'R5']
                    ]
                } else {
                    for (var key in scope.views.playingMethods.plate.evenrow) {
                        scope.numList.push(key)
                    }
                    scope.ballTXList = [
                        ["5单0双", 'O5E0'],
                        ["4单1双", 'O4E1'],
                        ["3单2双", 'O3E2'],
                        ["2单3双", 'O2E3'],
                        ["1单4双", 'O1E4'],
                        ["0单5双", 'O0E5']
                    ];
                }
                scope.ballList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                scope.dataList = scope.views.playingMethods.plate.names;
                scope.betRuleInstance.result = []; //结果
                angular.forEach(scope.dataList, function(data, index) {
                    scope.betRuleInstance.result.push([]);
                });
              var list = ["FOEC"];//特殊处理
              if(list.indexOf(scope.betRuleInstance.betType) < 0)
                scope.views.getPlayMethodNumber();
                var betRuleInstance = scope.reductionBall();
                if (betRuleInstance) {
                    scope.setBetRuleInstance(betRuleInstance)
                }
            },
            controller: ['$scope','$stateParams','Lottery','BetAlgorithm',function($scope, $stateParams, Lottery, BetAlgorithm) {
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
                    var num = $scope.betRuleInstance.result[index].indexOf(ball);
                    if (num < 0) {
                        $scope.betRuleInstance.result[index].push(ball)
                    } else {
                        $scope.betRuleInstance.result[index].splice(num, 1)
                    }
                    //计算注数
                    var gameCode = $scope.betRuleInstance.gameCode;
                    var betService = BetAlgorithm[gameCode + 'Service'];
                    $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService, $scope.betSetting);
                    $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
                    console.log(JSON.stringify($scope.betRuleInstance.result))
                };
                //随机 机选
                $scope.randomBall = function(index, ballList) {
                    var randomArr = $scope.views.playingMethods.plate.random;
                    $scope.betRuleInstance.result[index] = [];
                    var getNumber = randomArr[index];
                    var numLength = ballList.length;
                    var randomNum = random(getNumber, numLength);
                    for (var i = 0; i < randomNum.length; i++) {
                        $scope.betRuleInstance.result[index].push(ballList[randomNum[i]])
                    }
                    //计算注数
                    var gameCode = $scope.betRuleInstance.gameCode;
                    var betService = BetAlgorithm[gameCode + 'Service'];
                    $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, betType, betService, $scope.betSetting);
                    $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
                };
                var random = function(numSome, length) {
                    var num = [];
                    for (var i = 0;; i++) {
                        var a = Math.floor(Math.random() * parseInt(length));
                        if (num.indexOf(a) < 0) {
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
