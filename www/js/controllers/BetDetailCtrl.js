define([], function() {
  'use strict';
  var ctrl = function($scope,Socket,$state,Lottery,Common,OriginalBetService){
    $scope.OriginalBetService = OriginalBetService;
    //根据gameCode,market 获取市场名称
    $scope.getCNName = function(gameCode,market) {
      return $scope.marketList.filter(function (item, index) {
        return item.gameCode == gameCode && item.market == market;
      })[0]
    },

    $scope.getBetInfo = function(){
      var gameCode = $scope.betInfo.gameCode || $scope.betInfo.item.gameCode;
      var market = $scope.betInfo.market || $scope.betInfo.item.market;
      $scope.views ={
        "marketName":$scope.getCNName(gameCode,market).marketCNName,//$scope.currentMarket.marketCNName
        "imgUrl":$scope.betInfo.imgUrl == undefined ? "img/common/draw_"+$scope.betInfo.gameCode+"_"+$scope.betInfo.market+".png" : $scope.betInfo.imgUrl,
        "ItemGroups":$scope.betInfo.ItemGroups == undefined ? $scope.betInfo.oddsGroup+"--"+(($scope.betInfo.comm)*100).toFixed(2)+"%" : $scope.betInfo.ItemGroups,
        "happyNumber":$scope.betInfo.result == undefined ?'-':$scope.betInfo.result,
        "betContent":$scope.betInfo.item == undefined ? OriginalBetService.OriginalItem.text($scope.betInfo) : OriginalBetService.OriginalItem.text($scope.betInfo.item),
        "betClass":{
          "用户撤销":"alreadyBack",
          "系统撤销":"alreadyBack",
          "已撤单":"alreadyBack",
          "已开奖":"alreadyStar",
          "待开奖":"wait_chasing"

        },
        //投注撤单
        backBet : function(){
           var tipItem = {
               title:"温馨提示",
               content:"确定取消当前投注吗?",
               show:"no"
            }
            $scope.confirmCancelModel("sure",tipItem, $scope.views.backBetSure);
        },
        backBetSure:function(){
          var req = {
            "ticketId":$scope.betInfo.ticketId || $scope.betInfo.item.ticketId
          }
          Socket.cancelBetHistory(req,function(res){
            if(res.code == 0){
              $scope.sureAndBetModel("sure","投注撤单","撤单成功");
              $scope.betInfo.betState = "用户撤销"
            }else{
              $scope.sureAndBetModel("sure","投注撤单",$scope.Localize.data[res.code]);
            }
          })
        }
      }
      };

    var init = function(){
      if($scope.betInfo){
        $scope.getBetInfo();
      }else{
        $state.go('tab.drawList')
      }

    }
    init();


  };
  ctrl.$inject = ['$scope','Socket','$state','Lottery','Common','OriginalBetService'];
  return ctrl;
});
