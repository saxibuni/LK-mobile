define([], function() {
    'use strict';

    function ctrl($scope, $ionicHistory, $state, $ionicPopup, Socket, $ionicLoading, Common, $interval, $timeout, Localize, $ionicViewSwitcher) {
        $scope.betInfo = null;
        $scope.chaseInfo = null;
        $scope.uiShow = true;
        $scope.setUiShow = function(state){
          $scope.uiShow = state
        };
        //跳到投注详情,追号详情
        $scope.goMyDetail = {
            goBet: function(bet) {
                $scope.betInfo = bet;
                $state.go("betDetail");
                $ionicViewSwitcher.nextDirection("forward");
            },
            goChase: function(chase) {
                $scope.chaseInfo = chase;
                $state.go("chaseDetail");
                $ionicViewSwitcher.nextDirection("forward");
            }
        };
        $scope.Common = Common;
        $scope.Localize = Localize;
        $scope.requestCount = 0;
        $scope.mainShow = false;
        $scope.balance = 0;
        $scope.acctName = '';
        //任选checkbox默认
        $scope.currentCheckbox = {
            checkboxType1: [],
            checkboxType2: [],
            AnyNumber1Play: null,
            AnyNumber2Play: null
        };
        //存储默认任选选择框的值
        $scope.setCurrentCheckbox = function(Checkbox, type) {
            $scope.currentCheckbox[type] = angular.copy(Checkbox);
        };
        //投注提示消息存储变量
        $scope.messageBet = {
            gameCode: '',
            code: '',
            drawNum: '',
            allBetAmount: '',
            allBetCount: '',
            market: ''
        };
        //提示消息变量赋值
        $scope.setMessageBet = function(messageBet) {
            $scope.messageBet.gameCode = messageBet.gameCode;
            $scope.messageBet.code = messageBet.code;
            $scope.messageBet.drawNum = messageBet.drawNum;
            $scope.messageBet.allBetAmount = messageBet.allBetAmount;
            $scope.messageBet.allBetCount = messageBet.allBetCount;
            $scope.messageBet.market = messageBet.market;
        };
        //追号计划
        $scope.betPlan = {
            type: '1',
            periods: '10', //追号期数
            interest1: '50', //最低收益率
            startMultiple: '1', //起始倍数
            tbPeriods:'1',//号码篮默认期数
            interval3: '2', //隔
            multiple3: '2', //期倍

            maxPeriods: '', //最大期数
            maxCount: '', //最大倍数
            gameCode: '',
            market: "",
            stopUtilWin:true

        };
      $scope.removeBetPlan = function(){
        //追号计划
        $scope.betPlan = {
          type: '1',
          periods: '10', //追号期数
          interest1: '50', //最低收益率
          startMultiple: '1', //起始倍数
          tbPeriods:'1',//号码篮默认期数
          interval3: '2', //隔
          multiple3: '2', //期倍

          maxPeriods: '', //最大期数
          maxCount: '', //最大倍数
          gameCode: '',
          market: "",
          stopUtilWin:true

        };
      }
        //改变金额
        $scope.changeBalance = function(balance) {
            $scope.balance = balance;
        };
        //返回
        $scope.goBack = function() {
            if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else {
                $state.go('tab.drawList');
            }
            $ionicViewSwitcher.nextDirection("back");
        };
        //任选选择框赋值 == 还原
        $scope.setCheckBox = function() {
            var parent = $ionicHistory.currentView().stateName.split('.')[1];
            if (parent == 'AnyNumber1Play') {
                angular.forEach($scope.currentCheckbox.checkboxType1, function(data, index) {
                    data.checked = false;
                });
                angular.forEach($scope.reduction_betRuleInstance.result[$scope.betRuleInstance.result.length - 1], function(data, index) {
                    angular.forEach($scope.currentCheckbox.checkboxType1, function(data2, index2) {
                        if (data2.value == data) {
                            data2.checked = true;
                        }
                    });
                });
            } else if (parent == 'AnyNumber2Play') {
                angular.forEach($scope.currentCheckbox.checkboxType2, function(data, index) {
                    data.checked = false;
                });
                angular.forEach($scope.reduction_betRuleInstance.result[$scope.betRuleInstance.result.length - 1], function(data, index) {
                    angular.forEach($scope.currentCheckbox.checkboxType2, function(data2, index2) {
                        if (data2.value == data) {
                            data2.checked = true;
                        }
                    });
                });
            }
        };
        //还原
        $scope.reduction_betRuleInstance = undefined;
        $scope.reductionBall = function(item) {
            if (item) {
                $scope.reduction_betRuleInstance = angular.copy(item);
            } else {
                if ($scope.reduction_betRuleInstance) {
                    $scope.setCheckBox()
                }
                var data = angular.copy($scope.reduction_betRuleInstance);
                $scope.reduction_betRuleInstance = undefined;
                return data
            }
        };

        $scope.redirectTo = function(routeString) {
            $state.go(routeString);
        };
        // 确认弹框 type == sure ,bet
        $scope.sureAndBetModel = function(type, title, content, callback) {
            $scope.myPop = $ionicPopup.confirm({
                title : "<p class='popupTitle'>" + title + "</p>",
                scope: $scope,
                template: function() {
                    var str = '';
                    if (type == 'sure') {
                        str += "<div class='modelContent' style='text-align: center'>" + content + "</div>";
                    }else if (type == 'toggleDraw') {
                        if ($scope.myPop) {
                            $scope.myPop.close();
                        }
                        str += "<div class='modelContent' style='text-align: left'>" + content.marketCNName + "本期已经结束,你的注单将进入第<span class='font_red'>" + content.drawData.nextDraw.drawNumber + "</span>期</div>";
                    }else if(type == 'play'){
                        str +="<div class='select-method'>"+content.selectMethod+"</div><div class='winning-rule'>"+content.winningRule+"</div>";
                    }
                    return str;
                }(),
                buttons: [{
                    text: "<b class='pop_sure'>确认</b>",
                    onTap: function(e) {
                        if (callback) {
                            callback();
                        }
                    }
                }]
            });

            if (!callback) {
                $timeout(function() {
                    $scope.myPop.close();
                }, 5000);
            }
        };
        // 确认投注提示
        $scope.confirmCancelModel = function(type, item, callback) {
         $scope.confirmModel =  $ionicPopup.confirm({
                title: function() {
                    var str = '';
                    if (type == 'commit' || type == 'commit_TB') {
                        str += "<p class='popupTitle'>投注确认</p>";
                    } else if(type == 'sure'){
                        str += "<p class='popupTitle'>" + item.title + "</p>"
                    }else if(type == 'plan'){
                        str += "<p class='popupTitle'>追号确认</p>";
                    }
                    return str;
                }(),
                template: function() {
                    var str = '';
                  if (type == 'commit_TB') {
                    str += "<div class='modelContent'><div><span class='betSum'>投注总额</span><span class='font_blue'>" + item.balance + "元</span></div><div>起始期<span class='font_red'>" + item.drawNumber + "</span>追号<span  class='font_red'>" + item.betPeriods + "</span>期</div>";
                  }else if (type == 'commit') {
                        str += "<div class='modelContent'><div><span class='betSum'>投注总额</span><span class='font_blue'>" + item.balance + "元</span></div><div>当前期<span class='font_red'>{{currentMarket.drawData.drawNumber}}</span>投注<span  class='font_red'>" + item.betCount + "</span>注</div>";
                    } else if(type == 'plan'){
                      str += "<div class='modelContent'><div><span class='betSum'>投注总额</span><span class='font_blue'>" + item.balance + "元</span>" +
                        "</div><div>起始期<span class='font_red'>" + item.drawNumber + "</span>" +
                        "追号<span  class='font_red'>" + item.periods + "" +
                        "</span>期</div>"
                    }else if(type == 'sure'){
                      str += "<div class='modelContent' style='text-align: left'>" + item.content + "</div>";
                    }
                    return str;
                }(),
                scope: $scope,
                buttons: [{
                    text: "<b class='pop_cancel'>取消</b>"
                }, {
                    text: "<b class='pop_sure'>确认</b>",
                    onTap: function() {
                        if (callback) {
                            if(item.show != 'no')$scope.show();
                            callback()
                        }
                    }
                }]
            });
        };
        //资金模式
        $scope.currentSelect = 2;
        //资金模式切换
        $scope.changeUnit = function(betUnit) {
            $scope.currentSelect = betUnit;
        };
        //资金模式弹框
        $scope.moneyModel = function() {
            $ionicPopup.confirm({
                title: "<p class='popupTitle'>资金模式</p>",
                template: "<div class=\"modelContent\">" +
                                "<em ng-click=\"changeUnit(2)\" ng-class=\"{'unit-selected': currentSelect == 2}\" >元</em>" +
                                "<em ng-click=\"changeUnit(0.2)\" ng-class=\"{'unit-selected': currentSelect == 0.2}\">角</em>" +
                                "<em ng-click=\"changeUnit(0.02)\" ng-class=\"{'unit-selected': currentSelect == 0.02}\">分</em>" +
                            "</div>",
                scope: $scope,
                buttons: [{
                    text: "<b class='pop_cancel'>取消</b>",
                    onTap: function(e) {
                        $scope.currentSelect = $scope.betRuleInstance.betUnit;
                    }
                }, {
                    text: "<b class='pop_sure'>确认</b>",
                    onTap: function(e) {
                        $scope.betRuleInstance.betUnit = $scope.currentSelect;
                        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
                    }
                }]
            })
        };

        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };

        $scope.hide = function() {
            $ionicLoading.hide();
        };

        //玩法属性集合
        $scope.betRuleInstance = {
            market: '',
            gameCode: '',
            betType: '',
            result: null,
            maxCount: 0,
            betAmount: 0.00,
            betCount: 0,
            multiple: 1,
            odds: 0,
            comm: 0,
            betUnit: 2,
            prizeGroup: '',
            drawId: '',
            drawNumber: '',
            marketCNName: ''
        };

        $scope.setBetRuleInstance = function(item) {
            $scope.betRuleInstance = {
                market: item.market,
                gameCode: item.gameCode,
                betType: item.betType,
                result: item.result,
                betAmount: item.betAmount,
                betCount: item.betCount,
                multiple: item.multiple,
                odds: item.odds,
                comm: item.comm,
                betUnit: item.betUnit,
                prizeGroup: item.prizeGroup,
                drawId: item.drawId,
                serialNo: item.serialNo,
                drawNumber: item.drawNumber,
                marketCNName: item.marketCNName,
                maxCount: item.maxCount
            };
        };
        //清空球
        $scope.resetBetRuleInstance = function() {
            $scope.betRuleInstance.betAmount = 0;
            $scope.betRuleInstance.betCount = 0;
            $scope.betRuleInstance.multiple = 1;
            $scope.betRuleInstance.serialNo = undefined;
            var parent = $ionicHistory.currentView().stateName.split('.')[1];
            if ($scope.betRuleInstance.result) {
                if (parent == 'AnyNumber1Play') {
                    $scope.currentCheckbox.checkboxType1 = angular.copy($scope.currentCheckbox.AnyNumber1Play);
                    $scope.betRuleInstance.result[0] = [];
                    $scope.betRuleInstance.result[1] = [];
                    angular.forEach($scope.currentCheckbox.checkboxType1, function(data, index) {
                        if (data.checked) {
                            $scope.betRuleInstance.result[1].push(data.value)
                        }
                    })
                } else if (parent == 'AnyNumber2Play') {
                    $scope.currentCheckbox.checkboxType2 = angular.copy($scope.currentCheckbox.AnyNumber2Play);
                    $scope.betRuleInstance.result[0] = [];
                    $scope.betRuleInstance.result[1] = [];
                    angular.forEach($scope.currentCheckbox.checkboxType2, function(data, index) {
                        if (data.checked) {
                            $scope.betRuleInstance.result[1].push(data.value)
                        }
                    })
                } else {
                    angular.forEach($scope.betRuleInstance.result, function(item, index) {
                        $scope.betRuleInstance.result[index] = [];
                    })
                }

            } else {
                $scope.betRuleInstance.result = null;
            }
        };

        $scope.betSetting = {}; //玩法设置集合
        $scope.betZoneData = []; //投注区变量
        //清空
        $scope.removeZoneData = function() {
            $scope.betZoneData = []
        };

        $scope.getMarket = function(gameCode, market) {
            $scope.currentMarket = $scope.marketList.filter(function(item, index) {
                return gameCode == item.gameCode && market == item.market;
            })[0];
        };
        $scope.currentMarket = {};

        $scope.marketList = [{
            gameCode: 'LT',
            market: 'CQ',
            marketCNName: '重庆时时彩',
            imgUrl: "img/common/draw_LT_CQ.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N5P',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 3,
            drawData: {},
            saleRule:"10:00-22:00(10分钟一期,共72期),22:00-01:55(5分钟一期,共48期)全天120期"
        }, {
            gameCode: 'LT',
            market: 'TJ',
            marketCNName: '天津时时彩',
            imgUrl: "img/common/draw_LT_TJ.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N5P',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 3,
            drawData: {},
            saleRule:"9:00-23:00(10分钟一期,共84期)"
        }, {
            gameCode: 'LT',
            market: 'XJ',
            marketCNName: '新疆时时彩',
            imgUrl: "img/common/draw_LT_XJ.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N5P',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 2,
            drawData: {},
            saleRule:"10:00-2:00(10分钟一期,共96期)"
        }, {
            gameCode: 'HL11x5',
            market: 'SH',
            marketCNName: '上海11选5',
            imgUrl: "img/common/draw_HL11x5_SH.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3PH',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 2,
            drawData: {},
            saleRule:"8:50-00:00(10分钟一期,共90期)"
        }, {
            gameCode: 'HL11x5',
            market: 'GD',
            marketCNName: '广东11选5',
            imgUrl: "img/common/draw_HL11x5_GD.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3PH',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 2,
            drawData: {},
            saleRule:"9:00-23:00(10分钟一期,共84期)"
        }, {
            gameCode: 'HL11x5',
            market: 'JX',
            marketCNName: '江西11选5',
            imgUrl: "img/common/draw_HL11x5_JX.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3PH',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 2,
            drawData: {},
            saleRule:"9:00-23:00(10分钟一期,共84期)"
        }, {
            gameCode: 'HL11x5',
            market: 'SD',
            marketCNName: '山东11选5',
            imgUrl: "img/common/draw_HL11x5_SD.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3PH',
            defaultParentPlate: 'Number1Play',
            intervalId: '',
            drawNumLength: 2,
            drawData: {},
            saleRule:"8:55-21:55(10分钟一期,共78期)"
        }, {
            gameCode: 'K3',
            market: 'JS',
            marketCNName: '江苏快三',
            imgUrl: "img/common/draw_K3_JS.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3T',
            defaultParentPlate: 'Number2Play',
            intervalId: '',
            drawNumLength: 3,
            drawData: {},
            saleRule:"8:30-22:10(10分钟一期,共82期)"
        }, {
            gameCode: 'K3',
            market: 'AH',
            marketCNName: '安徽快三',
            imgUrl: "img/common/draw_K3_AH.png",
            timeLeft: '00:00:00',
            defaultMethod: 'N3T',
            defaultParentPlate: 'Number2Play',
            intervalId: '',
            drawNumLength: 3,
            drawData: {},
            saleRule:"8:40-22:00(10分钟一期,共80期)"
        }];

        var init = function() {
            var acctId = Common.getQueryString("acctId");
            var sessionId = Common.getQueryString("sid");
            var token = Common.getQueryString("token");
            acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
            var req = {
                /* acctId: "TESTPLAYER17@TEST",*/
                acctId: sessionId == null ?acctId:null,
                passwd: sessionId == null ?"000000":null,
                sessionId: sessionId,
                token: token
            };

            $scope.show();
            Socket.login(req, function(res) {
                if (res.code == 0) {
                    queryAcctInfo(5);
                    queryGameSetting();
                    queryServerTimeAndDraw();
                    bindPushEvent();
                };
            });
        }

        var queryAcctInfo = function() {
            Socket.queryAcctInfo({}, function(res) {
                if (res.code == 0) {
                    var acct = res.acct;
                    $scope.balance = acct.balance;
                    $scope.acctName = acct.acctName;
                }
            });
        }

        var queryGameSetting = function() {
            Socket.queryGameSetting({}, function(res) {
                if (res.code == 0) {
                    $scope.betSetting = res.map;
                    $scope.betSetting.oddsGroups = res.availableGroup;
                    $scope.betSetting.currentOddsGroup = {
                        LT: res.availableGroup['LT'][0],
                        HL11x5: res.availableGroup['HL11x5'][0],
                        K3: res.availableGroup['K3'][0]
                    };

                    $scope.requestCount++;
                }
            });
        }

        var req2resTimeArr = [];
        $scope.jetLag; //时间差
        var queryServerTimeAndDraw = function(requstTimes) {
            var t1 = (new Date()).getTime(),
                t2 = 0;

            Socket.queryServerTime({}, function(res) {
                t2 = (new Date()).getTime();
                if (res.code == 0) {
                    if (requstTimes > 0) {
                        req2resTimeArr.push(t2 - t1);
                        requstTimes--;
                        queryServerTime(requstTimes);
                    } else {
                        req2resTimeArr.push(t2 - t1);
                        var serverTime = req2resTimeArr.reduce(function(prev, cur) {
                            return prev + cur;
                        }) / (2 * 6) + res.timeMillis;
                        $scope.jetLag = serverTime - t2;

                        queryDrawList();
                    }
                }
            });
        }

        var queryDrawList = function() {
            var req = { gameCode: 'LT,HL11x5,K3' };
            Socket.queryDrawInfo(req, function(res) {
                if (res.code == 0) {
                    var data = res.list;
                    initDrawData(data);
                    $scope.requestCount++;
                }else{
                    $scope.sureAndBetModel("sure",'错误信息','' + $scope.Localize.data[res.code],function(){});
                }
            });
        };

        var initDrawData = function(data) {
            var gameCode;
            var market;
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < $scope.marketList.length; j++) {
                    gameCode = $scope.marketList[j].gameCode;
                    market = $scope.marketList[j].market;
                    if (gameCode == data[i].gameCode && market == data[i].market) {
                        $scope.marketList[j].drawData = data[i];
                        if (!data[i].marketClosed && awaitGetNextDraw(gameCode, market, $scope.marketList[j])) {
                            $scope.marketList[j].drawData = $scope.marketList[j].drawData.nextDraw;
                        }
                    }
                }
            }
            $scope.drawInterval = $interval(runDraw, 500);
        }

        var runDraw = function() {
            var drawData;
            var serverTime = new Date().getTime() + $scope.jetLag;
            for (var i = 0; i < $scope.marketList.length; i++) {
                drawData = $scope.marketList[i].drawData;
                if (!drawData.marketClosed) {
                    var now = new Date();
                    var closeTimeSerials = Common.getDateByDateString(drawData.closeTime).getTime();
                    now.setTime(closeTimeSerials - serverTime - 480 * 60000);
                    $scope.marketList[i].timeLeft = now.format("hh:mm:ss");

                    if (now.format("hh:mm:ss") == "00:00:00") {
                        if (drawData.nextDraw) {
                            drawChangePrompt($scope.marketList[i]);
                            console.log(drawData.gameCode + ', ' + drawData.market);
                            console.log($scope.marketList[i]);
                            awaitGetNextDraw(drawData.gameCode, drawData.market, $scope.marketList[i], true);

                            drawData.beginTime = drawData.nextDraw.beginTime;
                            drawData.endTime = drawData.nextDraw.endTime;
                            drawData.closeTime = drawData.nextDraw.closeTime;
                            drawData.drawNumber = drawData.nextDraw.drawNumber;
                            drawData.drawId = drawData.nextDraw.drawId;
                            drawData.marketClosed = drawData.nextDraw.marketClosed;
                        }
                    }

                } else {
                    $scope.marketList[i].timeLeft = '00:00:00';
                }
            }
        }

        var updateDraw = function(gameCode, market, marketItem) {
            var req = { gameCode: gameCode, market: market };
            Socket.queryDrawInfo(req, function(res) {
                console.log('end-inject' + gameCode + '-----' + market + '----' + (new Date()));
                if (res.code == 0) {
                    if (res.list[0].nextDraw) {
                        marketItem.drawData.nextDraw = res.list[0].nextDraw;
                    } else {
                        marketItem.drawData.nextDraw = null;
                    }
                } else {
                    marketItem.drawData.nextDraw = null;
                    $scope.sureAndBetModel("sure",'错误信息','' + $scope.Localize.data[res.code],function(){});
                }
            });
        }

        var awaitGetNextDraw = function(gameCode, market, marketItem) {
            var closeTimeSerials = Common.getDateByDateString(marketItem.drawData.closeTime).getTime();
            var endTimeSerials = Common.getDateByDateString(marketItem.drawData.endTime).getTime();
            var serverTime = new Date().getTime() + $scope.jetLag;
            var now = new Date();
            now.setTime(closeTimeSerials - serverTime - 480 * 60000);
            var timeleft = now.format('hh:mm:ss');
            var flag = (closeTimeSerials < serverTime || timeleft == '00:00:00') ? true : false;
            console.log(gameCode + ', ' + market + ', ' + (closeTimeSerials - serverTime) + ', ' + flag);

            if (flag) {
                console.log('inject interval:' + gameCode + ', ' + market + (new Date()));

                marketItem.intervalId = setInterval(function() {
                    serverTime = new Date().getTime() + $scope.jetLag;
                    if (serverTime > endTimeSerials + 1000 * 10) { //endtime 10秒后再取
                        updateDraw(gameCode, market, marketItem);
                        clearInterval(marketItem.intervalId);
                    }
                }, 1000);
            }
            return flag;
        }

        var drawChangePrompt = function(marketItem) {
            var stateName = $ionicHistory.currentView().stateName;
            if (stateName == 'numberFamily' || stateName.indexOf('ballBetting') > -1) {
                if (marketItem.gameCode == $scope.currentMarket.gameCode && marketItem.market == $scope.currentMarket.market) {
                        $scope.sureAndBetModel('toggleDraw', '奖期已切换', marketItem,function(){
                        $scope.getMarket($scope.currentMarket.gameCode,$scope.currentMarket.market)
                    });
                }
            }
        }

        var bindPushEvent = function() {
            var acctInfoUpdate = function() {
                Socket.bindPushEvent(-3, function(res) {
                    queryAcctInfo();
                });
            }

            //开奖
            var drawAward = function() {

            }

            var marketOpen = function() {
                Socket.bindPushEvent(-9, function(res) {
                    for (var i = 0; i < $scope.marketList.length; i++) {
                        if ($scope.marketList[i].gameCode == res.gameCode && $scope.marketList[i].market == res.market) {
                            $scope.marketList[i].drawData = res.currentDraw;
                            if (awaitGetNextDraw(res.gameCode, res.market, $scope.marketList[i])) {
                                $scope.marketList[i].drawData = res.currentDraw.nextDraw;
                                break;
                            }
                        }
                    }
                });
            }

            var marketClose = function() {
                Socket.bindPushEvent(-10, function(res) {
                    for (var i = 0; i < $scope.marketList.length; i++) {
                        if ($scope.marketList[i].gameCode == res.gameCode && $scope.marketList[i].market == res.market) {
                            $scope.marketList[i].drawData.marketClosed = true;
                            $scope.redirectTo('tab.drawList');
                            break;
                        }
                    }
                });
            }

            acctInfoUpdate();
            drawAward();
            marketOpen();
            marketClose();
        }

        // 手机锁频后socket停止响应，彩期无法继续走。 激活屏幕后如果彩期数据不对 则重新请求彩期继续走
        var bindPageActiveEvent = function(){
            var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            if (isMobile) {
                var hiddenProperty = 'hidden' in document ? 'hidden' :
                    'webkitHidden' in document ? 'webkitHidden' :
                    'mozHidden' in document ? 'mozHidden' :
                    null;
                var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
                var onVisibilityChange = function(){
                    if (!document[hiddenProperty]) {
                        //激活窗体
                        console.log('activating window');

                        var isNeedRefresh = false;
                        for(var i = 0; i < $scope.marketList.length; i ++){
                            if ($scope.marketList[i].timeLeft.indexOf('00:') == 0) {
                                continue;
                            }else{
                                isNeedRefresh = true;
                                break;
                            }
                        }
                        if (isNeedRefresh) {
                            $interval.cancel($scope.drawInterval);
                            queryDrawList();
                        }
                    }
                }
                document.addEventListener(visibilityChangeEvent, onVisibilityChange);
            }
        }

        $scope.$watch('requestCount', function(newValue, oldValue, scope) {
            if ($scope.requestCount == 2) {
                $scope.mainShow = true;
                $scope.hide();
            }
        });

        init();
        bindPageActiveEvent();
    }

    ctrl.$inject = ['$scope', '$ionicHistory', '$state', '$ionicPopup', 'Socket', '$ionicLoading', 'Common', '$interval', '$timeout', 'Localize', '$ionicViewSwitcher'];
    return ctrl;
});
