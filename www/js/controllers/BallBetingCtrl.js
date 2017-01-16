define([], function() {
  'use strict';

  var ctrl = function($scope, $state, $ionicHistory, Lottery, $stateParams, PlaceBet, BetTrollery, Common, BetAlgorithm, OddsService,$ionicScrollDelegate,LTBetConfig,K3BetConfig,HL11X5BetConfig,$timeout,PlayRandom,$ionicViewSwitcher) {
    $scope.Common = Common;
    $scope.betRuleInstance.gameCode = $stateParams.gameCode;
    $scope.betRuleInstance.market = $stateParams.market;
    $scope.getMarket($stateParams.gameCode,$stateParams.market);
    $scope.betRuleInstance.marketCNName = $scope.currentMarket.marketCNName;
    $scope.playNavData = Lottery.getPlayNavByGameCode($stateParams.gameCode);
    //页面相关的参数，方法，与业务无关
    $scope.isShow = false;
    var getPlayListIndex;
    $scope.views = {
      playDropClass:{
        true:"ion-ios-arrow-up",
        false:"ion-ios-arrow-down"
      },
      betFullName:Lottery.gameMapCNName[$stateParams.gameCode][$ionicHistory.currentView().url.split('/')[5]].methodName,
      dropBox: false, //玩法列表是否展示
      //selectBox: false, //下拉框是否展开
      playingMethods: '', //玩法对象
      selectType:$ionicHistory.currentView().url.split('/')[5],
      oddsGroup: [], //奖金组
      playListIndex:'0',//默认显示play 列表
      dropBoxShow: function() {
        $scope.views.dropBox = true;
      },
      showPlay:function(index){
        if( $scope.views.playListIndex == index){
          $scope.views.playListIndex = null
        }else{
          $scope.views.playListIndex = index;
        }
      },
      //点击其他位置隐藏下拉框
      dropBoxHide: function($event) {
        if ($event.target.className == 'dropBox activated') {
          $scope.views.dropBox = false;
        }
      },
      //获得默认play List 值
      //显示下拉框选择
      select: function() {
        $scope.views.dropBox = !$scope.views.dropBox;

        var size = parseInt(getComputedStyle(window.document.documentElement)['font-size'].replace('px',''));
        setTimeout(function(){
          if ($scope.views.dropBox && $stateParams.gameCode != 'K3') {
            var playItem = document.querySelector('.' + $scope.views.selectType);
            var maxHeight = document.querySelector(".scrollTag").offsetHeight;
            if(playItem.offsetTop < maxHeight){
              if(playItem.offsetTop<playItem.offsetHeight){
                $ionicScrollDelegate.$getByHandle('small').scrollTo(0, 0, [true]);
              }else{
                $ionicScrollDelegate.$getByHandle('small').scrollTo(0, playItem.offsetTop/3, [true]);
              }
            }else{
              if(playItem.offsetTop > maxHeight*2){
                $ionicScrollDelegate.$getByHandle('small').scrollTo(0, (playItem.offsetTop - (maxHeight/2.5)), [true]);
              }else if(playItem.offsetTop > maxHeight*3){
                $ionicScrollDelegate.$getByHandle('small').scrollTo(0, (playItem.offsetTop - (maxHeight/3)), [true]);
              }else{
                $ionicScrollDelegate.$getByHandle('small').scrollTo(0, (playItem.offsetTop - (maxHeight/2)), [true]);
              }
            }
          }
        },100);
      },
      //倍数+
      addMultiple: function() {
        $scope.betRuleInstance.multiple++;
        if ($scope.betRuleInstance.multiple >= $scope.betRuleInstance.maxCount) {
          $scope.betRuleInstance.multiple = $scope.betRuleInstance.maxCount;
        }
        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betUnit *  $scope.betRuleInstance.multiple;
      },
      //倍数-
      reduceMultiple: function() {
        $scope.betRuleInstance.multiple--;
        if ($scope.betRuleInstance.multiple <= 1) {
          $scope.betRuleInstance.multiple = 1;
        }
        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betUnit *  $scope.betRuleInstance.multiple;
      },
      //点击号码蓝
      numberFamily: function() {
        $scope.messageBet.url = $ionicHistory.currentView().url;
        $state.go('numberFamily');
        $ionicViewSwitcher.nextDirection("forward");
      },
      //返回上一页
      goback: function() {
        $ionicHistory.goBack();
      },
      //清除号码
      removeBall: function(index) {
        $scope.betRuleInstance.result[index] = [];
        //计算注数
        var gameCode = $scope.betRuleInstance.gameCode;
        var betService = BetAlgorithm[gameCode + 'Service'];
        $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, $scope.betRuleInstance.betType, betService, $scope.betSetting);
        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
      },
      //过滤
      clearNoNum:function(type){
        $scope.betRuleInstance[type] = $scope.betRuleInstance[type].replace(/[^\d.]/g,"");
        if( $scope.betRuleInstance[type] >  $scope.betRuleInstance.maxCount){
          $scope.betRuleInstance[type] =  $scope.betRuleInstance.maxCount
        }
        if(type == 'multiple'){
          $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betUnit *  $scope.betRuleInstance.multiple;
        }
      },
      //随机一单
      randomNum:function(){
        $scope.betRuleInstance.result =  PlayRandom.getRandom($stateParams.gameCode,$scope.betRuleInstance.betType);
        if($ionicHistory.currentView().stateName.indexOf('AnyNumber1Play') >= 0 ){
          angular.forEach($scope.currentCheckbox.checkboxType1, function(data, index) {
            data.checked = false;
          });
          angular.forEach($scope.betRuleInstance.result[$scope.betRuleInstance.result.length - 1], function(data, index) {
            angular.forEach($scope.currentCheckbox.checkboxType1, function(data2, index2) {
              if (data2.value == data) {
                data2.checked = true;
              }
            });
          });
        }else if($ionicHistory.currentView().stateName.indexOf('AnyNumber2Play') >= 0){
          angular.forEach($scope.currentCheckbox.checkboxType2, function(data, index) {
            data.checked = false;
          });
          angular.forEach($scope.betRuleInstance.result[$scope.betRuleInstance.result.length - 1], function(data, index) {
            angular.forEach($scope.currentCheckbox.checkboxType2, function(data2, index2) {
              if (data2.value == data) {
                data2.checked = true;
              }
            });
          });
        }
        //计算注数
        var gameCode = $scope.betRuleInstance.gameCode;
        var betService = BetAlgorithm[gameCode + 'Service'];
        $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, $scope.betRuleInstance.betType, betService, $scope.betSetting);
        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
      },
      menuToggle: function() {
        $scope.isShow = !$scope.isShow;
      },
      goPlayDesc: function() {
        $state.go('playDescribe',{market:$scope.currentMarket.market,gameCode: $scope.currentMarket.gameCode});
      },
      goLotteryBall: function() {
        $state.go('lotteryBall',{market:$scope.currentMarket.market,gameCode: $scope.currentMarket.gameCode});
      },
      //关闭下拉框
      closeSelect:function($event){
        if($event.target.className.indexOf('headMenu') < 0){
          $scope.isShow = false;
        }
      },
      selectOperateBall: function(index, arr) {
        if ($scope.betRuleInstance.result[index].eqaul(arr)) {
          $scope.betRuleInstance.result[index] = [];
        } else {
          $scope.betRuleInstance.result[index] = arr.slice();
        }
        //计算注数
        var gameCode = $scope.betRuleInstance.gameCode;
        var betService = BetAlgorithm[gameCode + 'Service'];
        $scope.betRuleInstance.betCount = BetAlgorithm.calclateCount($scope.betRuleInstance, $scope.betRuleInstance.betType, betService, $scope.betSetting);
        $scope.betRuleInstance.betAmount = $scope.betRuleInstance.betCount * $scope.betRuleInstance.multiple * $scope.betRuleInstance.betUnit;
      },

      getPlayMethodNumber: function() {
        var numbers = $scope.views.playingMethods.plate.numbers[0];
        var start = numbers.start;
        var end = numbers.end;
        var format = numbers.format || false;
        var number;
        var bigSplitNum;

        //全 大  小  单 双 数据
        $scope.views.numberArr = [];
        $scope.views.bigNumArr = [];
        $scope.views.smallNumArr = [];
        $scope.views.oddNumberArr = [];
        $scope.views.evenNumberArr = [];
        for (var i = start; i <= end; i++) {
          number = (format && i < 10) ? ('0' + i) : i.toString();
          $scope.views.numberArr.push(number);
        }

        bigSplitNum = Math.ceil(parseInt($scope.views.numberArr.length / 2));
        $scope.views.bigNumArr = $scope.views.numberArr.slice(bigSplitNum);
        $scope.views.smallNumArr = $scope.views.numberArr.slice(0, bigSplitNum);
        for (var i = 0; i < $scope.views.numberArr.length; i++) {
          if (parseInt($scope.views.numberArr[i]) % 2 == 1)
            $scope.views.oddNumberArr.push($scope.views.numberArr[i]);
          else
            $scope.views.evenNumberArr.push($scope.views.numberArr[i]);
        }
      },

      changeOdds: function(OddsGroup) {
        var oddsGroupData;
        var list = ['TSHM', 'ZXHZ', 'LHH', 'BDW'];
        var specialType = [];
        var it = $scope.betRuleInstance;
        it.prizeGroup = OddsGroup;

        if (OddsService.CalcSpecialOdds[it.gameCode]) {
          //获得所有特殊号码
          for (var x = 0; x < list.length; x++) {
            if (OddsService.CalcSpecialOdds[it.gameCode][list[x] + '_odds']) {
              for (var y = 0; y < OddsService.CalcSpecialOdds[it.gameCode][list[x] + '_odds'].length; y++) {
                specialType.push(OddsService.CalcSpecialOdds[it.gameCode][list[x] + '_odds'][y])
              }
            }
          }
        }
        if (it.gameCode == 'K3' && it.betType == 'N3T') {
          OddsService.K3_getOdds(it, $scope.betSetting);
        } else if (specialType.indexOf(it.betType) >= 0) {
          OddsService.setSpecialOdds(it, $scope.betSetting);
        } else {
          oddsGroupData = $scope.betSetting[it.gameCode][OddsGroup].filter(function(item, index, array) {
              return it.betType == item.betType;
            })[0] || [];
          it.odds = oddsGroupData.odds;
          it.maxCount = oddsGroupData.maxCount;
          it.comm = oddsGroupData.comm;
        }
        $scope.oddsGroupName = $scope.views.oddsGroup.filter(function(item,index){
          return item.oddsGroupName == OddsGroup
        })[0].text;
      },
      //玩法说明弹框
      PlayModel:function(){
        var content;
        if( $stateParams.gameCode == 'LT'){
          content = LTBetConfig.filter(function(item,index){
            return  $scope.views.selectType == item.betType
          })[0]
        }else if( $stateParams.gameCode == 'HL11x5'){
          content =  HL11X5BetConfig.filter(function(item,index){
            return  $scope.views.selectType == item.betType
          })[0]
        }else if( $stateParams.gameCode == 'K3'){
          content =  K3BetConfig.filter(function(item,index){
            return  $scope.views.selectType == item.betType
          })[0]
        }
        var title = content.title;
        $scope.sureAndBetModel('play',title,content,function(){})
      },
      goDrawList:function(){
        if($scope.betZoneData.length != 0){
          var item ={
            title:'返回提示',
            content:'返回后，号码篮将清空，是否返回?',
            show:'no'
          };
          $scope.confirmCancelModel('sure',item,function(){
            $state.go('tab.drawList');
            $ionicViewSwitcher.nextDirection("back");
          });
        }else{
          $state.go('tab.drawList');
          $ionicViewSwitcher.nextDirection("back");
        }
      }
    };

    //与业务有关的方法参数
    $scope.playData = {
      playFamilyData: Lottery.getPlayingFamily($scope.playNavData), //select数据
      getPlayingGroup: Lottery.getPlayingGroup($scope.playNavData, $scope.views.playFamily, $scope.betRuleInstance.gameCode), //dropbox数据
      selectedPlay: [0, 0], //选中的玩法
      selectType: function(parentIndex, index, playingMethods) {
        $scope.playData.selectedPlay[0] = parentIndex;
        $scope.playData.selectedPlay[1] = index;
        $scope.views.dropBox = false;
        $scope.views.playingMethods = playingMethods;
        $scope.views.betFullName = playingMethods.betFullName;
        $scope.views.selectType = playingMethods.methodId;
        $state.go('ballBetting.' + playingMethods.plate.parentPlate + "Play", { parameter: playingMethods.methodId, gameCode: $scope.betRuleInstance.gameCode, market: $scope.betRuleInstance.market });
      },
      getPlayMethods: function(betType) {
        $scope.playData.getPlayingGroup = Lottery.getPlayingGroup($scope.playNavData, $scope.views.playFamily, $scope.betRuleInstance.gameCode);
        if (!$scope.playData.getPlayingGroup) return;
        if ($scope.playData.getPlayingGroup.length) {
          angular.forEach($scope.playData.getPlayingGroup, function(item1, index1) {
            angular.forEach(item1.playingMethods, function(item, index) {
              if (item.methodId == betType) {
                $scope.views.playingMethods = item;
                return false;
              }
            })
          })
        } else {
          $scope.views.playingMethods = $scope.playData.getPlayingGroup
        }
      },
      //添加
      addBet: function() {
        var serviceObj = PlaceBet[$scope.betRuleInstance.gameCode + 'PlaceBet'];
        var trolleyZoneData = $scope.betZoneData;
        BetTrollery.addBetRecord($scope.betRuleInstance, serviceObj, trolleyZoneData);
        $scope.resetBetRuleInstance();
      },

      getOddsGroup: function(betType, gameCode) {
        var oddsGroupData = $scope.betSetting[gameCode][$scope.betSetting.currentOddsGroup[gameCode]].filter(function(item, index, array) {
            return betType == item.betType;
          })[0] || [];
        var data = [];
        $scope.betRuleInstance.prizeGroup = $scope.betSetting.currentOddsGroup[gameCode];
        $scope.betRuleInstance.odds = oddsGroupData.odds;
        $scope.betRuleInstance.maxCount = oddsGroupData.maxCount;
        $scope.betRuleInstance.comm = oddsGroupData.comm;

        for (var i = 0; i < $scope.betSetting.oddsGroups[gameCode].length; i++) {
          var oddsGroupName = $scope.betSetting.oddsGroups[gameCode][i];
          var tempOddsGroupData = $scope.betSetting[gameCode][$scope.betSetting.currentOddsGroup[gameCode]].filter(function(item, index, array) {
              return betType == item.betType;
            })[0] || [];
          data.push({
            'text': oddsGroupName + '--' + tempOddsGroupData.comm,
            'oddsGroupName': oddsGroupName
          });

          if($scope.betSetting.currentOddsGroup[gameCode] == oddsGroupName) {
            $scope.oddsGroupName = oddsGroupName + '--' + tempOddsGroupData.comm;
          }
        }
        return data;
      }
    };
    var getPlayingGroup = function(name){
      return Lottery.getPlayingGroup($scope.playNavData, name, $scope.betRuleInstance.gameCode)
    };
    var init = function(){
      $scope.playListData = [];
      var selectBox = $scope.playData.playFamilyData;
      if($scope.betRuleInstance.gameCode == 'K3'){
        $scope.playListData.push({
          name:'快三',
          list:$scope.playNavData
        })
      }else{
        angular.forEach($scope.playData.playFamilyData,function(item,index){
          $scope.playListData.push({
            name:item,
            list:getPlayingGroup(item)
          })
        });
      }

      $scope.views.dropBox = true;
      $timeout(function(){
        $scope.views.dropBox = false;
      },10)
    };
    init();

  };
  ctrl.$inject =['$scope', '$state', '$ionicHistory', 'Lottery', '$stateParams', 'PlaceBet', 'BetTrollery', 'Common', 'BetAlgorithm', 'CalcSpecialOdds','$ionicScrollDelegate','LTBetConfig','K3BetConfig','HL11X5BetConfig','$timeout','PlayRandom','$ionicViewSwitcher'];
  return ctrl;
});
