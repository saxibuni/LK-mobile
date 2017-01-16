
define([], function() {
  'use strict';
  var ctrl = function($scope,$stateParams,$state,Socket){
    $scope.chaseType = $stateParams.chaseType;

    $scope.chaseTitle = "";
    switch ($stateParams.chaseType){
      case 'profits':$scope.chaseTitle = "利润追号";break;
      case 'same':$scope.chaseTitle = "同倍追号";break;
      case 'double':$scope.chaseTitle = "翻倍追号";break;
    }
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
    //倍数加减
    $scope.changeCount = function(type,state){
      if(type == 'remove'){
        $scope.betPlan[state] --;
        if($scope.betPlan[state] <= 0){
          $scope.betPlan[state] = 0
        }
      }
      if(type == 'add'){
        $scope.betPlan[state] ++;
        if($scope.betPlan.maxCount <= $scope.betPlan[state] ){
          $scope.betPlan[state] = $scope.betPlan.maxCount
        }
      }
    };
    //隔
    $scope.changeInterval = function(type,state){
      if(type == 'remove'){
        $scope.betPlan[state]--;
        if( $scope.betPlan[state] <= 0){
          $scope.betPlan[state] = 0
        }
      }
      if(type == 'add'){
        $scope.betPlan[state]++;
      }
    };
    $scope.goPlan = function(){
      if($scope.betPlan.periods1 == 0 && $scope.betPlan.type == '1'  || $scope.betPlan.periods2 == 0 && $scope.betPlan.type == '2' || $scope.betPlan.periods3 == 0 && $scope.betPlan.type == '3'){
          $scope.sureAndBetModel("sure",'错误','期数不能为0');
      }else if($scope.betPlan.startMultiple2 == 0 && $scope.betPlan.type == '2' || $scope.betPlan.startMultiple3 == 0 && $scope.betPlan.type == '3'){
        $scope.sureAndBetModel("sure",'错误','起始倍数不能为0');
      }else if($scope.betPlan.multiple3 == 0 && $scope.betPlan.type == '3'){
        $scope.sureAndBetModel("sure",'错误','期倍不能为0');
      }else{
        $state.go('chasePlan')
      }
    };
    $scope.clearNoNum = function(type){
      if(!$scope.betPlan[type]) return false;
      $scope.betPlan[type] = $scope.betPlan[type].replace(/[^\d.]/g,"");
      if(type.indexOf('ultiple') >=0 && type != 'multiple3' && $scope.betPlan[type] > $scope.betPlan.maxCount){
        $scope.betPlan[type] =  $scope.betPlan.maxCount;
      }
    };
    //
    var  init = function(){
      if(!$scope.currentMarket.marketCNName){
        $state.go('tab.drawList')
      }
    };
    init()
  };
  ctrl.$inject =  ['$scope','$stateParams','$state','Socket'];
  return ctrl;
});
