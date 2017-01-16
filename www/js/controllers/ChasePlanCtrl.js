/**
 * Created by Administrator on 2016/10/19 0019.
 */
define([], function() {
  'use strict';
  var ctrl = function($scope,$state,Socket,$timeout){
    $scope.checkboxPlan = function(){
      var plan = 0;
      $scope.allBuyMoney = 0;
      angular.forEach($scope.PlanDataList,function(item,index){
        if(item[item.length -1]){
          plan ++;
          $scope.allBuyMoney += item[3]
        }
      });
      $scope.allBuyMoney = parseFloat($scope.allBuyMoney.toFixed(2));
      $scope.allPlan = plan;
    };
    $scope.betPromptModel = function(){
      if($scope.betZoneData.length > 1 && $scope.betPlan.type == 1){
        for(var i = 0; i < $scope.betZoneData.length -1; i++){
          if($scope.betZoneData[0].betType != $scope.betZoneData[i+1].betType || $scope.betZoneData[0].betUnit != $scope.betZoneData[i+1].betUnit){
            $scope.sureAndBetModel("sure",'错误信息','利润率追号不支持混投,请确保您的投注都为同一玩法类型且元角模式一致');
            return false;
          }
        }
      }
      commitData();
      if($scope.PlanDataList.length == 0){
        $scope.sureAndBetModel('sure','追号错误','追号计划不能为空');
        return;
      }
      var item = {
        drawNumber: $scope.betPlan.DrawList[0].number,
        balance:$scope.allBuyMoney,
        periods:$scope.allPlan
      };
      $scope.confirmCancelModel('plan',item,$scope.goBetResult);
    };
    var socketChaseBack = function(res){
      $scope.hide();
      var messageBet = {
        gameCode:$scope.betPlan.gameCode,
        code:res.code,
        drawNum:$scope.betPlan.DrawList[0].number + '-' + $scope.betPlan.DrawList[$scope.PlanDataList.length - 1].number,
        allBetAmount:$scope.allBuyMoney,
        allBetCount:$scope.PlanDataList.length,
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
    $scope.goBetResult = function() {
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
    $scope.goChaseSet = function(){
      $state.go('chaseSet');
    };
    //计算提交参数
    var commitData = function(){
      $scope.chaseItems = [];
      $scope.batch = [];
      var idNumberList = [];
      for(var i = 0; i < $scope.betPlan.DrawList.length; i++){
        idNumberList[$scope.betPlan.DrawList[i].number] = $scope.betPlan.DrawList[i].id
      }
      angular.forEach($scope.PlanDataList,function(item,index){
        if(item[item.length - 1]){
          $scope.chaseItems.push({
            "drawId": idNumberList[item[1]], //draw id
            "drawNumber": item[1], //draw number
            "multiple": item[2],
            "betAmount": item[3]
          })
        }
      });
      angular.forEach($scope.betZoneData,function(item,index){
        $scope.batch.push({
          "betType": item.betType,
          "items": item.items,
          "odds": item.odds,
          "comm": item.comm,
          "betCount": item.betCount,
          "betUnit": item.betUnit,
          "prizeGroup": item.prizeGroup,
          "chaseItems":$scope.chaseItems
        });
        if(item.anyDrawTypes)$scope.batch[index].anyDrawTypes = item.anyDrawTypes
      });
      if($scope.betZoneData.length == 1){
        var item = $scope.betZoneData[0];
        $scope.commitData = {
          "stopUtilWin":$scope.betPlan.stopUtilWin,//是否中奖终止
          "gameCode": $scope.betPlan.gameCode,
          "market": $scope.betPlan.market,
          "chaseItems":$scope.chaseItems,
          "betType": item.betType,
          "items": item.items,
          "odds": item.odds,
          "comm": item.comm,
          "betCount": item.betCount,
          "betUnit": item.betUnit,
          "prizeGroup": item.prizeGroup
        };
        if(item.anyDrawTypes)$scope.commitData.anyDrawTypes = item.anyDrawTypes
      }else{
        $scope.commitData = {
          "stopUtilWin":$scope.betPlan.stopUtilWin,//是否中奖终止
          "gameCode": $scope.betPlan.gameCode,
          "market": $scope.betPlan.market,
          "batch":$scope.batch
        };
      }
    };
    //计算页面数据
    var dataList = function(){
      var dataList = $scope.betZoneData;
      $scope.PlanDataList = [];
      var lrMultiple = 1;//利润初始倍数；
      var totalBuyMoney = 0;//总用钱
      var buyMoney;//每注费钱
      var allAmount = 0;
      for(var m = 0;m< dataList.length;m++){
        allAmount = allAmount + dataList[m].betAmount/dataList[m].multiple;
      }
      var interest;//利润率
      $scope.allBuyMoney = 0;
      var LrMoney = dataList[0].betUnit * dataList[0].odds/2;//1倍利润奖金
      var profitAmount = LrMoney * lrMultiple;//奖金
      if($scope.betPlan.type == 1){
        for(var x = 0; x < $scope.betPlan.periods; x++){
          if(!$scope.betPlan.DrawList[x])   break;
          var number = $scope.betPlan.DrawList[x].number;//当前期号
          for(var i = 1; ; i++){
            buyMoney = allAmount*lrMultiple;
            var allMoney = buyMoney + totalBuyMoney;
            var betAmount = profitAmount*lrMultiple;
            interest = parseFloat(((betAmount - allMoney)/allMoney*100).toFixed(2));//利润率
            if(interest >= parseFloat($scope.betPlan.interest1)){
              //利润 大于 最小利润
              totalBuyMoney = allMoney;
              break;
            }else{
              if(lrMultiple > parseFloat($scope.betPlan.maxCount)){
                break;
              }
              lrMultiple ++ ;
            }
          }
          if(lrMultiple > parseFloat($scope.betPlan.maxCount)){
            break;
          }
          $scope.allBuyMoney += buyMoney;
          $scope.PlanDataList.push([x+1,number,lrMultiple,buyMoney,betAmount,betAmount-totalBuyMoney,interest,true])
        }

      }
      if($scope.betPlan.type == 2){
        for(var x = 0; x < $scope.betPlan.periods; x++){
          if(!$scope.betPlan.DrawList[x])   break;
          var number = $scope.betPlan.DrawList[x].number;//当前期号
          var Multiple = $scope.betPlan.startMultiple;
          buyMoney = allAmount * Multiple;
          var time = $scope.betPlan.DrawList[x].endTime;
          $scope.allBuyMoney += buyMoney;
          $scope.PlanDataList.push([x+1,number,Multiple,buyMoney,time,true])
        }
      };
      if($scope.betPlan.type == 3){
        var Multiple;
        for(var x = 0; x < $scope.betPlan.periods; x++){
          if(!$scope.betPlan.DrawList[x])   break;
          var number = $scope.betPlan.DrawList[x].number;//当前期号
          var time = $scope.betPlan.DrawList[x].endTime;
          if(x == 0){
            Multiple = $scope.betPlan.startMultiple;
            buyMoney = allAmount * Multiple
          }else if(x % $scope.betPlan.interval3 == 0){
            Multiple = Multiple * $scope.betPlan.multiple3;
            if(Multiple > $scope.betPlan.maxCount) Multiple = $scope.betPlan.maxCount
            buyMoney = allAmount * Multiple
          }
          $scope.allBuyMoney += buyMoney;
          $scope.PlanDataList.push([x+1,number,Multiple,buyMoney,time,true])
        }
      };
      $scope.ismodel = false;//是否提示过
      modelStartMultiple();
      modelPeriods();
      $scope.checkboxPlan();
    };
    if($scope.betPlan.gameCode == "" && $scope.betPlan.market == ""){
      $state.go('tab.drawList');
      return;
    }
    $scope.drawNumLength = $scope.marketList.filter(function(item,index){
      return $scope.betPlan.gameCode == item.gameCode && $scope.betPlan.market == item.market;
    })[0].drawNumLength;
    console.log($scope.drawNumLength);
    $scope.$watch('currentMarket.timeLeft',function(){
      if($scope.currentMarket.timeLeft == '00:00:00'){
        $scope.sureAndBetModel('toggleDraw', '奖期已切换', $scope.currentMarket,function(){
          $scope.confirmModel.close();
          $scope.createChasePlan();
          $scope.getMarket( $scope.currentMarket.gameCode,$scope.currentMarket.market)
        });
      }
    });


    $scope.createChasePlan = function(){
      if($scope.betZoneData.length > 1 && $scope.betPlan.type == 1){
        for(var i = 0; i < $scope.betZoneData.length -1; i++){
          if($scope.betZoneData[0].betType != $scope.betZoneData[i+1].betType || $scope.betZoneData[0].betUnit != $scope.betZoneData[i+1].betUnit){
            $scope.sureAndBetModel("sure",'错误信息','利润率追号不支持混投,请确保您的投注都为同一玩法类型且元角模式一致');
            return false;
          }
        }
      }
      var data = {
        "gameCode":$scope.betPlan.gameCode,
        "market":$scope.betPlan.market
      };
      $scope.show();
      Socket.openDrawList(data,function(res){
        $scope.hide();
        if(res.code == 0){
          if($scope.currentMarket.drawData.drawNumber > res.list[0].number){
            res.list.splice(0,1)
          }
          $scope.betPlan.maxPeriods = res.list.length;
          $scope.betPlan.DrawList = res.list;
          dataList();
        }else{
          $scope.sureAndBetModel("sure",'错误信息','' + $scope.Localize.data[res.code]);
        }
      })

    };
    //判断期数是否超出
    var modelPeriods = function(){
      if($scope.ismodel) return false;
      if( $scope.betPlan.type == 1){
       if($scope.PlanDataList.length == 0){
          $scope.sureAndBetModel("sure",'利润过大','你设置的最低利润率过大，请重新设置',function(){
            $state.go('chaseSet');
          });
        }else if($scope.betPlan.periods > $scope.betPlan.maxPeriods){
          $scope.sureAndBetModel("sure",'期数超出','您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',function(){
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }else  if($scope.betPlan.periods !=  $scope.PlanDataList.length){
          $scope.sureAndBetModel("sure",'倍数超出','您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',function(){
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }
      }
      if( $scope.betPlan.type == 2){
        if($scope.betPlan.periods > $scope.betPlan.maxPeriods){
          $scope.sureAndBetModel("sure",'期数超出','您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',function(){
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }
      }
      if( $scope.betPlan.type == 3){
        if($scope.betPlan.periods > $scope.betPlan.maxPeriods){
          $scope.sureAndBetModel("sure",'期数超出','您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',function(){
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }
      }
    };
    //判断倍数是否超出
    var modelStartMultiple = function(){
      if( $scope.betPlan.type == 2){
        if($scope.betPlan.startMultiple > $scope.betPlan.maxCount){
          $scope.ismodel = true;
          $scope.sureAndBetModel("sure",'倍数超出','您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划。',function(){
            $scope.betPlan.startMultiple = $scope.betPlan.maxCount;
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }
      }
      if( $scope.betPlan.type == 3){
        if($scope.betPlan.startMultiple > $scope.betPlan.maxCount){
          $scope.ismodel = true;
          $scope.sureAndBetModel("sure",'倍数超出','您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划。',function(){
            $scope.betPlan.startMultiple = $scope.betPlan.maxCount;
            $scope.betPlan.periods = $scope.PlanDataList.length;
          });
        }else if($scope.betPlan.periods !=  $scope.PlanDataList.length){
          $scope.ismodel = true;
          $scope.sureAndBetModel("sure",'倍数超出','您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划。',function(){
            $scope.betPlan.periods = $scope.PlanDataList.length;
            $scope.betPlan.startMultiple = $scope.betPlan.maxCount;
          });
        }
      }
    };

    var init = function(){
      $scope.createChasePlan();
    };
    init();
  };
  ctrl.$inject = ['$scope',"$state","Socket","$timeout"];
  return ctrl;

});
