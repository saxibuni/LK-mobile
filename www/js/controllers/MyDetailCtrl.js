define([], function() {
  'use strict';
  var ctrl = function($scope,$state,Socket,Lottery){
    $scope.views = {
      uiClass : {
        true:"selected",
        false:""
      },
      betClass:{
        "用户撤销":"alreadyBack",
        "系统撤销":"alreadyBack",
        "已撤单":"alreadyBack",
        "已开奖":"alreadyStar",
        "待开奖":"wait_chasing"

      },
      getWinAndChaseIsState :function(state,type,wlAmt,cancelBy){
        var text;
        if(type == 1){//投注
          if(state == 'W') text =  "中"+wlAmt+"元";
          if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
          if(state == 'L') text = '已开奖';
          if(state == 'P') text = '待开奖';
        }/*else if(type == 2){//追号
         if(state == 'C') text =  cancelBy == '-'?'系统撤销':'用户撤销';
         if(state == 'H') text = '已完成';
         if(state == 'P') text = '未开始';
         if(state == 'L') text = '未中奖';
         if(state == 'W') text = '已中奖';
         }*/
        return text;
      }
    };
    //月数据展开收缩
    $scope.toggleList = function(idx,type){
      if(type == 1)$scope.resultArrBet[idx].isToggle = !$scope.resultArrBet[idx].isToggle;
      else $scope.resultArrChase[idx].isToggle = !$scope.resultArrChase[idx].isToggle;
    };
    //按月分组
    $scope.groupByMonth = function(type,itemList){
      var chaseArrays = itemList;
      var chaseTimeArr = new Array();
      for (var i = 0; i < chaseArrays.length; i++) {
        if (chaseTimeArr.length == 0 || chaseTimeArr.indexOf(chaseArrays[i].yearAndMonth) == -1) {
          chaseTimeArr.push(chaseArrays[i].yearAndMonth);
        }
      }

      chaseTimeArr.sort(function(val1, val2) {
        return val1 < val2;
      });

      var resultArr = new Array();
      for(var j = 0; j < chaseTimeArr.length; j++){
        resultArr.push([]);
      }

      for(var k = 0; k < chaseArrays.length; k++){
        var index = chaseTimeArr.indexOf(chaseArrays[k].yearAndMonth);
        resultArr[index].push(chaseArrays[k]);
        resultArr[index].month = chaseArrays[k].betMonth == (now.getMonth() + 1) ? "本" : chaseArrays[k].betMonth;
        resultArr[index].year = chaseArrays[k].betYear == (now.getFullYear()) ? "":chaseArrays[k].betYear+"年";
        resultArr[index].isToggle = true;
      }

      //1投注 2追号
      if(type == 1){
        $scope.resultArrBet = resultArr;
      }else{
        $scope.resultArrChase = resultArr;
      }
      $scope.$broadcast("scroll.refreshComplete");
      $scope.$broadcast("scroll.infiniteScrollComplete");
      $scope.hide();
    };
    //获取当前时间
    var beginDate = new Date(new Date().setMonth((new Date().getMonth()-3)));
    var now = new Date();
    var paraBet = {
      "page":{
        "pageNo":1,
        "pageSize":10
      },
      "beginDate":beginDate.formatDateAndTime().substr(0,10),
      "beginTime":beginDate.formatDateAndTime().substr(-8),
      "endDate": now.formatDateAndTime().substr(0,10),
      "endTime": now.formatDateAndTime().substr(-8)
    };
    var paraChase = {
      "page":{
        "pageNo":1,
        "pageSize":10
      },
      "beginDate":beginDate.formatDateAndTime().substr(0,10),
      "beginTime":beginDate.formatDateAndTime().substr(-8),
      "endDate": now.formatDateAndTime().substr(0,10),
      "endTime": now.formatDateAndTime().substr(-8),
    };
    //上拉加载更多  判断
    $scope.moreBet = true;
    $scope.moreChase = true;
    //拉动刷新  重新加载
    $scope.do_refresh = function(type){
      if(type == 1){
        paraBet.page.pageNo = 1;
        $scope.betItems = [];
        $scope.betHistory.requestBet();
        $scope.moreBet = true;
      }else{
        paraChase.page.pageNo = 1;
        $scope.chaseItems = [];
        $scope.chaseHistory.requestChase();
        $scope.moreChase = true;
      }
    };
    //上拉加载更多
    $scope.load_more = function(type){
      if(type == 1){
        paraBet.page.pageNo += 1;
        $scope.betHistory.requestBet();

      }else{
        paraChase.page.pageNo += 1;
        $scope.chaseHistory.requestChase();
      }
    };
    //投注记录
    $scope.betItems = [];
    $scope.betHistory = {
      showBet:function(ev){
        if(!$scope.uiShow){
          $scope.setUiShow(true);//1显示投注  2显示追号
         if($scope.betItems.length == 0) $scope.betHistory.requestBet();
        }
      },
      requestBet:function(){
        if( $scope.betItems.length == 0)$scope.show();
        Socket.betHistory(paraBet,function(res){
          if(res.list.length<10){
            $scope.moreBet=false;
          }
          angular.forEach(res.list, function (data, index, array) {
            data.betName = Lottery.gameMapCNName[data.gameCode][data.betType].methodName;
            data.betYear = data.betTime.substr(0,4);
            data.betMonth = data.betTime.substr(5,2);
            data.yearAndMonth = parseInt(data.betTime.substr(0,4).toString() + data.betTime.substr(5,2))
            data.betDay = data.betTime.substr(8,2);
            data.betTime = data.betTime.substr(11);
            data.betImg = "img/common/draw_"+data.gameCode+"_"+data.market+".png";
            data.betState = $scope.views.getWinAndChaseIsState(data.winState, 1, data.wlAmt, data.cancelled)
            $scope.betItems.push(data);
          });
          $scope.groupByMonth(1,$scope.betItems);
          $scope.setUiShow(true);
        });
      }
    };
    //追号记录
    $scope.chaseItems = [];
    $scope.chaseHistory = {
      showChase:function(ev){
        if($scope.uiShow){
          $scope.setUiShow(false);
          if($scope.chaseItems.length == 0)$scope.chaseHistory.requestChase();
        }
      },
      requestChase:function(){
        if( $scope.chaseItems.length == 0)$scope.show();
        Socket.chaseHistory(paraChase,function(res){
          if(res.code == 0){
            if(res.list.length<10){
              $scope.moreChase=false;
            }
            angular.forEach(res.list, function (data, index, array) {
              data.betName = Lottery.gameMapCNName[data.gameCode][data.betType].methodName;
              data.betYear = data.betTime.substr(0,4);
              data.betMonth = data.betTime.substr(5,2);
              data.betDay = data.betTime.substr(8,2);
              data.betTime = data.betTime.substr(11);
              data.betImg = "img/common/draw_"+data.gameCode+"_"+data.market+".png";
              /*data.betState = $scope.views.getWinAndChaseIsState(data.win, 2, data.wlAmt, data.cancelled);*/
              $scope.chaseItems.push(data);
            })
            $scope.groupByMonth(2,$scope.chaseItems);
            $scope.setUiShow(false);
          }

        });
      }

    };
    //进页面加载所有记录
    if($scope.uiShow){
      $scope.betHistory.requestBet();
    }else{
      $scope.chaseHistory.requestChase();
    }
  };
  ctrl.$inject = ['$scope','$state','Socket','Lottery'];
  return ctrl;
});
