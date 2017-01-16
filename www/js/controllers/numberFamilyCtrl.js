define([], function() {
  'use strict';
  var ctrl = function($scope,$state,$ionicPopup,Socket,Lottery,$ionicViewSwitcher,$timeout,PlayRandom,BetAlgorithm,PlaceBet,BetTrollery){
    $scope.Lottery = Lottery;
    $scope.goChaseSet = function(){
      if($scope.betZoneData.length > 1){
        for(var i = 0; i < $scope.betZoneData.length -1; i++){
          if($scope.betZoneData[0].betType != $scope.betZoneData[i+1].betType || $scope.betZoneData[0].betUnit != $scope.betZoneData[i+1].betUnit){
            $scope.sureAndBetModel("sure",'错误信息','利润率追号不支持混投,请确保您的投注都为同一玩法类型且元角模式一致');
            return false;
          }
        }
      }else  if($scope.betZoneData.length == 0){
        $scope.sureAndBetModel("sure",'错误信息','号码篮不能为空');
        return false;
      }
      $scope.betPlan.gameCode = $scope.betZoneData[0].gameCode;
      $scope.betPlan.market = $scope.betZoneData[0].market;
      $scope.betPlan.maxCount = $scope.betZoneData[0].maxCount;
      for(var i = 0; i< $scope.betZoneData.length;i++){
        if(!$scope.betZoneData[i+1]) break;
        if($scope.betZoneData[i].maxCount <= $scope.betZoneData[i+1].maxCount){
          $scope.betPlan.maxCount = $scope.betZoneData[i].maxCount;
        }else{
          $scope.betPlan.maxCount = $scope.betZoneData[i+1].maxCount;
        }
      }
      $state.go("chasePlan");
    };
    $scope.viewsNumberFamily = {
      allBetAmount:0,
      allMultiple:0,
      allBetCount:0
    };
    //删除
    $scope.removeList = function(index,event){
      if($scope.removeIndex != undefined) return false;
      $scope.removeIndex = index;
      $timeout(function(){
        var list =  event.target.parentElement.parentElement.parentElement.children;
        var height = list[index].offsetHeight + parseInt(getComputedStyle(window.document.documentElement)['font-size']) * 1;
        for(var i = 0; i < list.length; i++){
          if(i>index){
            var style= {
              'transform': 'translateY(-'+height+'px)',
              '-ms-transform':  'translateY(-'+height+'px)',
              '-webkit-transform':  'translateY(-'+height+'px)',
              '-o-transform':  'translateY(-'+height+'px)',
              '-moz-transform':  'translateY(-'+height+'px)',
              'transition': 'All 0.15s ease-in',
              '-webkit-transition': 'All 0.15s ease-in',
              '-o-transition':'All 0.15s ease-in',
              '-moz-transition':'All 0.15s ease-in'
            };
            var value = JSON.stringify(style).replace(/[{}"]/g,'').replace(/[,]/g,';');
            list[i].setAttribute("style",value);
          }
        }
      },350);
      $timeout(function(){
        event.target.parentElement.parentElement.style.display = 'none';
        $scope.removeIndex = undefined;
        var list =  event.target.parentElement.parentElement.parentElement.children;
        for(var i = 0; i < list.length; i++){
          if(i>index){
            list[i].removeAttribute("style");
          }
        }
      },500);
      $timeout(function(){
        $scope.betZoneData.splice(index,1);
        $scope.viewsNumberFamily = {
          allBetAmount:0,
          allMultiple:0,
          allBetCount:0
        };
        getAll();
      },550);
    };
    //还原
    $scope.reduction = function(item){
      var list = Lottery.gameMapCNName[item.gameCode][item.betType];
      $scope.reductionBall(item);
      $scope.betSetting.currentOddsGroup[item.gameCode] = item.prizeGroup;
      $state.go('ballBetting.' + list.parentPalte + 'Play', { parameter: item.betType, gameCode: item.gameCode, market: item.market });
      $ionicViewSwitcher.nextDirection("back");
    };
    var getAll = function(){
      var list = $scope.betZoneData;
      angular.forEach(list,function(item,index){
        $scope.viewsNumberFamily.allBetAmount += item.betAmount;
        $scope.viewsNumberFamily.allMultiple += item.multiple;
        $scope.viewsNumberFamily.allBetCount += item.betCount;
      })
    };
    var getDataList = function(){
      var data = angular.copy($scope.betZoneData);
      var dataList = {
        "market": $scope.betRuleInstance.market,
        "gameCode": $scope.betRuleInstance.gameCode,
        "drawId":  $scope.currentMarket.drawData.drawId,
        "batch":[]
      };
      angular.forEach(data,function(item,index){
        dataList.batch.push({
          "betType": item.betType,
          "items":item.items || item.item,
          "betAmount": item.betAmount,
          "odds": item.odds,
          "comm": item.comm,
          "multiple": item.multiple,
          "betCount": item.betCount,
          "betUnit": item.betUnit,
          "prizeGroup":item.prizeGroup
        });
        if(item.anyDrawTypes){
          dataList.batch[index].anyDrawTypes = item.anyDrawTypes
        }
      });
      return dataList;
    };
    //计算同倍计划
    var tbPlan = function(){
      $scope.show();
      $scope.planNum = 0;
      var data = {
        "gameCode":$scope.currentMarket.gameCode,
        "market":$scope.currentMarket.market
      };
      Socket.openDrawList(data,function(res){
        $scope.hide();
        if(res.code == 0){
          if($scope.currentMarket.drawData.drawNumber > res.list[0].number){
            res.list.splice(0,1)
          }
          $scope.planNum = res.list.length;
          $scope.planList = res.list;
          if($scope.betPlan.tbPeriods > $scope.planNum){
            $scope.sureAndBetModel('sure','信息提示','您选择的期数超过最大期数，系统已自动为您调整计划。',function(){
              $scope.betPlan.tbPeriods = $scope.planNum;
              getCommitData();
              var stateNumber = res.list[0].number;
              var endNumber = res.list[$scope.betPlan.tbPeriods - 1].number;
              var item = {
                drawNumber:stateNumber+ '-' +endNumber.substring(endNumber.length - 3),
                balance:$scope.Common.addDotToNumber($scope.viewsNumberFamily.allBetAmount* $scope.betPlan.tbPeriods,2),
                betPeriods:$scope.betPlan.tbPeriods
              };
              $scope.confirmCancelModel('commit_TB',item,commit);
            })
          }else{
            getCommitData();
            var stateNumber = res.list[0].number;
            var endNumber = res.list[$scope.betPlan.tbPeriods - 1].number;
            var item = {
              drawNumber:stateNumber+ '-' +endNumber.substring(endNumber.length - 3),
              balance:$scope.Common.addDotToNumber($scope.viewsNumberFamily.allBetAmount* $scope.betPlan.tbPeriods,2),
              betPeriods:$scope.betPlan.tbPeriods
            };
            $scope.confirmCancelModel('commit_TB',item,commit);
          }
        }
      })
    };
    var getCommitData = function(){
      if($scope.betZoneData.length == 1){
        var item = $scope.betZoneData[0];
        $scope.commitData = {
          "stopUtilWin":$scope.betPlan.stopUtilWin,//是否中奖终止
          "gameCode": $scope.currentMarket.gameCode,
          "market": $scope.currentMarket.market,
          "betType": item.betType,
          "items": item.items,
          "odds": item.odds,
          "comm": item.comm,
          "betCount": item.betCount,
          "betUnit": item.betUnit,
          "prizeGroup": item.prizeGroup,
          "chaseItems": planChaseItems(0)
        };
        if(item.anyDrawTypes)$scope.commitData.anyDrawTypes = item.anyDrawTypes
      }else{
        $scope.commitData = {
          "stopUtilWin":$scope.betPlan.stopUtilWin,//是否中奖终止
          "gameCode": $scope.currentMarket.gameCode,
          "market": $scope.currentMarket.market,
          "batch":getBatch()
        };
      }
    };
    var planChaseItems = function(index){
      var ChaseItems = [];
      for(var i = 0; i < $scope.betPlan.tbPeriods; i++)
        ChaseItems.push({
          "drawId": $scope.planList[i].id, //draw id
          "drawNumber": $scope.planList[i].number, //draw number
          "multiple":  $scope.betZoneData[index].multiple,
          "betAmount":  $scope.betZoneData[index].betAmount
        })
      return ChaseItems;
    };
    var getBatch = function(){
      var batch = [];
      angular.forEach($scope.betZoneData,function(item,index){
        batch.push({
          "betType": item.betType,
          "items": item.items,
          "odds": item.odds,
          "comm": item.comm,
          "betCount": item.betCount,
          "betUnit": item.betUnit,
          "prizeGroup": item.prizeGroup,
          "chaseItems": planChaseItems(index)
        });
        if(item.anyDrawTypes)$scope.commitData.batch[index].anyDrawTypes = item.anyDrawTypes
      });
      return batch;
    };
    var socketChaseBack = function(res){
      $scope.hide();
      var messageBet = {
        gameCode:$scope.currentMarket.gameCode,
        code:res.code,
        drawNum:$scope.planList[0].number + '-'+ $scope.planList[$scope.betPlan.tbPeriods - 1].number,
        allBetAmount:$scope.viewsNumberFamily.allBetAmount * $scope.betPlan.tbPeriods,
        allBetCount:$scope.viewsNumberFamily.allBetCount,
        market: $scope.commitData.market
      };
      if(res.code == 0){
        $scope.removeZoneData();
        $scope.removeBetPlan();
        $scope.changeBalance(res.balance);
        $scope.setMessageBet(messageBet);
        $scope.removeZoneData();
        $state.go('betResult');
      }else{
        $scope.sureAndBetModel("sure",'错误信息','' + $scope.Localize.data[res.code]);
      }
    };
    var commit = function() {
      if($scope.betZoneData.length == 1){
        Socket.chaseNumber($scope.commitData,function(res){
          socketChaseBack(res)
        });
      }else{
        Socket.multipleChase($scope.commitData,function(res){
          socketChaseBack(res)
        });
      }
    };
    $scope.isBetCommit = function(){
      if(parseInt($scope.betPlan.tbPeriods) > 1){
        tbPlan();
      }else{
        var item = {
          market:$scope.currentMarket.drawData.market,
          balance:$scope.Common.addDotToNumber($scope.viewsNumberFamily.allBetAmount,2),
          betCount:$scope.viewsNumberFamily.allBetCount
        };
        $scope.confirmCancelModel('commit',item,$scope.commitPlaceBet);
      }
    };
    //确认投注
    $scope.commitPlaceBet = function(){
      var dataList = getDataList();
      $scope.show();
      Socket.betchPlaceBet(dataList,function(res){
        $scope.hide();
        var messageBet = {
          gameCode:dataList.gameCode,
          code:res.code,
          drawNum:$scope.currentMarket.drawData.drawNumber,
          allBetAmount:$scope.viewsNumberFamily.allBetAmount,
          allBetCount:$scope.viewsNumberFamily.allBetCount,
          market: dataList.market
        };
        $scope.setMessageBet(messageBet);
        if(res.code == 0){
          $scope.removeZoneData();
          $scope.changeBalance(res.balance);
          $state.go('betResult')
        }else{
          $scope.sureAndBetModel("sure",'错误信息','' + $scope.Localize.data[res.code]);
        }
      })
    };
    //展示更多
    $scope.showMore = function($event,index){
      if($scope.moreContent == index){
        $scope.moreContent = null;
      }else{
        $scope.moreContent = index;
      }
      $event.stopPropagation()
    };
    $scope.goBallBet = function(){
      $scope.goBack();
    };
    //清空
    $scope.clearList = function(){
      var item = {
        title:'提示',
        content:'确认清空全部下注信息？'
      };
      var clear = function(){
        $scope.removeZoneData();
        $scope.hide();
        $scope.viewsNumberFamily = {
          allBetAmount:0,
          allMultiple:0,
          allBetCount:0
        };
      };
      $scope.confirmCancelModel('sure',item,clear);
    };
    //随机
    $scope.randomRelus = function(num){
      var sureAndBetModel = false;
      if($scope.betZoneData.length == 0){
        $scope.sureAndBetModel('sure','信息提示','请至少选择一注投注号码。');
        return false;
      }
      for(var x = 0; x < num; x ++){
        var list = angular.copy($scope.betZoneData[$scope.betZoneData.length - 1]);
        list.items = null;
        list.multiple = 1;
        list.betUIContent = null;
        list.serialNo = undefined;
        var result = PlayRandom.getRandom(list.gameCode,list.betType);
        list.result = result ;
        for(var y = 0; y < $scope.betZoneData.length; y++){
          if(list.result.toString() == $scope.betZoneData[y].result.toString()){
            sureAndBetModel = true;
            break;
          }
        }
        //计算注数
        var gameCode = list.gameCode;
        var betService = BetAlgorithm[gameCode + 'Service'];
        list.betCount = BetAlgorithm.calclateCount(list, list.betType, betService, $scope.betSetting);
        list.betAmount = list.betCount * list.multiple * list.betUnit;
        //添加
        var serviceObj = PlaceBet[list.gameCode + 'PlaceBet'];
        var trolleyZoneData = $scope.betZoneData;
        BetTrollery.addBetRecord(list, serviceObj, trolleyZoneData);
      }
      if(sureAndBetModel){
        $scope.sureAndBetModel('sure','信息提示','机选出现重复，系统已自动调整。')
      }
      $scope.viewsNumberFamily = {
        allBetAmount:0,
        allMultiple:0,
        allBetCount:0
      };
      getAll();
    };
    //期数加法
    $scope.changePeriods = function(type,state){
      if(type == 'remove'){
        $scope.betPlan[state] --;
        if( $scope.betPlan[state] <= 0){
          $scope.betPlan[state] = 0
        }
      }
      if(type == 'add'){
        $scope.betPlan[state] ++
      }
    };
    $scope.clearNoNum = function(type){
      if(!$scope.betPlan[type]) return false;
      $scope.betPlan[type] = $scope.betPlan[type].replace(/[^\d.]/g,"");
      if(type.indexOf('ultiple') >=0 && type != 'multiple3' && $scope.betPlan[type] > $scope.betPlan.maxCount){
        $scope.betPlan[type] =  $scope.betPlan.maxCount;
      }
    };
    var init = function(){
      if($scope.betZoneData.length == 0){
        $state.go('tab.drawList')
      }
      getAll();
    };
    init();
  };
  ctrl.$inject = ['$scope','$state','$ionicPopup','Socket','Lottery','$ionicViewSwitcher','$timeout','PlayRandom','BetAlgorithm','PlaceBet','BetTrollery'];
  return ctrl;
});
