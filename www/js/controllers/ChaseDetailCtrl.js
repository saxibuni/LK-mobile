define([], function() {
  'use strict';
  var ctrl = function($scope,Socket,$state,OriginalBetService){
    $scope.OriginalBetService = OriginalBetService;
    //根据gameCode,market 获取市场名称
    $scope.getCNName = function(gameCode,market) {
      return $scope.marketList.filter(function (item, index) {
        return item.gameCode == gameCode && item.market == market;
      })[0]
    },
    $scope.getChaseInfo = function(){
      console.log($scope.chaseInfo);
      $scope.views ={
        "market":$scope.chaseInfo.market,
        "marketName":$scope.getCNName($scope.chaseInfo.gameCode,$scope.chaseInfo.market).marketCNName,//$scope.currentMarket.marketCNName
        "imgUrl":"img/common/draw_"+$scope.chaseInfo.gameCode+"_"+$scope.chaseInfo.market+".png",
        "ItemGroups":$scope.chaseInfo.oddsGroup+"--"+(($scope.chaseInfo.comm)*100).toFixed(2)+"%",
        "happyNumber":$scope.chaseInfo.result == undefined ?'-':$scope.chaseInfo.result,
        "chaseClass":{
          "用户撤销":"alreadyBack",
          "系统撤销":"alreadyBack",
          "已撤单":'alreadyBack',
          '已完成':'alreadyStar',
          '未开始':'wait_chasing',
          '待开奖':'doBack',
          '已中奖':"happy"
        }
      };
    };

    //获取追号详情的列表
    $scope.canStop == true;
    $scope.chaseList = [];
    var chaseDetail = function(){
      var para = {
        "chaseId":$scope.chaseInfo.chaseId
      }
      Socket.chaseDetail(para,function(res){
        $scope.canStop = res.canStop;
        angular.forEach(res.list, function (data, index) {
          data.state = $scope.getState(data.winState, data.wlAmt, data.cancelled);
          data.gameCode = $scope.chaseInfo.gameCode;
          $scope.chaseList.push(data);
        });
      })
    };


    $scope.getState = function(state,wlAmt,cancelBy){
      var text;
      if(state == 'W') text =  "中"+wlAmt+"元";
      if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
      if(state == 'L') text = '已开奖';
      if(state == 'P') text = '待开奖';
      return text;
    }
    //追号撤单
    $scope.backChase = function(){
      var tipItem = {
        title:"温馨提示",
        content:"确定取消当前投注吗?",
        show:"no"
      }
      $scope.confirmCancelModel("sure",tipItem, $scope.backChaseSure);
    }
    $scope.backChaseSure = function(){
      var req = {
        "chaseId":$scope.chaseInfo.chaseId
      }
      $scope.show();
      Socket.cancelChaseHistory(req,function(res){
        $scope.hide();
        if(res.code == 0){
          $scope.chaseInfo.finishedDraw = $scope.chaseInfo.totalDraw;
          $scope.sureAndBetModel("sure","追号撤单","撤单成功");
          $scope.canStop = false;//不再显示撤单
          $scope.chaseInfo.betState = "已撤单";
          //重新查询list
          $scope.chaseList = [];
          chaseDetail();
        }else{
          $scope.sureAndBetModel("sure","追号撤单",$scope.Localize.data[res.code]);
        }
      })
    }
    //单个投注撤单
    $scope.backBet = function(bet,$event,index){
      $event.stopPropagation();
      var tipItem = {
        title:"温馨提示",
        content:"确定取消当前投注吗?",
        show:"no"
      }
      $scope.confirmCancelModel("sure",tipItem, function(){
        var req = {
          "ticketId":bet.ticketId
        }
        $scope.show();
        Socket.cancelBetHistory(req,function(res){
          $scope.hide();
          if(res.code == 0){
            $scope.sureAndBetModel("sure","投注撤单","撤单成功",function(){
              $scope.chaseList[index].state = "用户撤销";
              $scope.chaseInfo.finishedDraw +=1;
            });
          }else{
            $scope.sureAndBetModel("sure","投注撤单",$scope.Localize.data[res.code]);
          }
        })
      });
    }

    var init = function(){
      if($scope.chaseInfo){
        $scope.getChaseInfo();
        chaseDetail();
      }else{
        $state.go('tab.drawList')
      }

    }
    init();
  };
  ctrl.$inject =  ['$scope','Socket','$state','OriginalBetService'];
  return ctrl;
});
