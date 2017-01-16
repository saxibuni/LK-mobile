define([], function() {
    'use strict';

    var factory = function(PlaceBet) {

        //添加注单 event
        var addBetRecord = function(BetRuleInstance, serviceObj, trolleyZoneData) {
            var it = PlaceBet.getBetData(BetRuleInstance,serviceObj);
            it.result = BetRuleInstance.result;
            var betUIContent = getBetUIContent(it);
            var data = PlaceBet.getBetData(it, serviceObj);
            var betFamilyName = '';
            var serialNo = it.serialNo;
            serialNo = serialNo ? serialNo : (new Date().format('yyyyMMddhhmmss') + Math.random());
            it.serialNo = serialNo;
            it.betUIContent = getBetUIContent(it);
            addTrolleyZoneData(trolleyZoneData,it)
        };

        //UI上的下注信息
        var getBetUIContent = function(BetRuleInstance) {
            var it = BetRuleInstance;
            var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5", "O5E0", "O4E1", "O3E2", "O2E3", "O1E4", "O0E5", "FMN"],
                convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区", "5单0双", "4单1双", "3单2双", "2单3双", "1单4双", "0单5双", "猜中位"],
                betTypeStr = ["G5X60", "G5X30", "G5X20", "G5X10", "G5X5", "G4X12", "G4X6", "G4X4", "A4G4X4", "A4G4X12", "G3BH", "G2BH", "A2B", "A3B", "A4B", "A5B", "A6B", "A7B", "A8B"]; //G4X6
            var betUIConent = '',
                ballName = '';

            for (var i = 0; i < it.result.length; i++) {
                if (it.market == 'CN3D' && it.betType == 'N1' && i > 2) break;
                var result = it.result[i],
                    rowResultContent = '';
                for (var j = 0; j < result.length; j++) {
                    if (selectStr.indexOf(result[j]) > -1)
                        ballName = convertStr[selectStr.indexOf(result[j])];
                    else
                        ballName = result[j];

                    rowResultContent += ballName + ',';
                    if (j == result.length - 1) rowResultContent = rowResultContent.substring(0, rowResultContent.length - 1);
                }

                if (betTypeStr.indexOf(it.betType) > -1)
                    betUIConent += rowResultContent + '*';
                else
                    betUIConent += rowResultContent + '|';
            }

            betUIConent = betUIConent.substring(0, betUIConent.length - 1);
            if (betUIConent.indexOf('*') > -1) {
                var arr = betUIConent.split("*");
                var length = arr.length;
                if (length > 2) {
                    if (betTypeStr.indexOf(it.betType) < 10) {
                        betUIConent = arr[2] + "|" + arr[0] + ">" + arr[1];
                    } else {
                        betUIConent = arr[0] + "|" + arr[1] + ">" + arr[2];
                    }

                } else {
                    betUIConent = arr[0] + ">" + arr[1];
                }
            }

            return betUIConent;
        };
          //比较数组是否相同
        var isTheSame = function(a,b){
          var array1 = sortingArray(a.result);
          var array2 = sortingArray(b.result);

          var a_tempArray1 = [];//临时数组1
          var a_tempArray2 = [];//临时数组2
          var b_tempArray1 = [];//临时数组3
          var b_tempArray2 = [];//临时数组4

          for(var i = 0; i < array1.length; i++){
              a_tempArray1[array1[i]] = true;
          }
          for(var i = 0;i < array2.length; i++){
            if(!a_tempArray1[array2[i]]){
              //输出不同
              a_tempArray2.push(array2[i]);
            }
          }

          for(var i = 0;i < array2.length; i++){
            b_tempArray1[array2[i]] = true;
          }
          for(var i = 0;i< array1.length; i++){
            if(!b_tempArray1[array1[i]]){
              //输出不同
              b_tempArray2.push(array1[i]);
            }
          }

          if(a_tempArray2.length  == 0  &&b_tempArray2.length == 0){
            return  true;//不相同
          }else{
            return false;//相同
          }
        };
        //合并
        var mergeBet = function(trolleyZoneData, BetRuleInstance) {
            var it = BetRuleInstance;
            var isMergeBet = true;
            var array1 = it.result.toString().split(',');
            angular.forEach(trolleyZoneData,function(item,index){
              if(isTheSame(item,it)){
                if(item.gameCode == it.gameCode && item.market == it.market &&
                  item.betType == it.betType && item.market == it.market &&
                  item.odds == it.odds && item.comm == it.comm &&
                  item.betUnit == it.betUnit && item.prizeGroup == it.prizeGroup &&
                  item.drawId == it.drawId){

                  item.multiple =  parseInt(item.multiple) + parseInt(it.multiple);
                  item.betAmount =  item.betAmount + it.betAmount;
                  isMergeBet = false;
                  console.log("合并 ++++");
                  console.log(trolleyZoneData)
                }
              }
              if(index == trolleyZoneData.length -1 && isMergeBet){
                trolleyZoneData.push(angular.copy(it));
                console.log("添加++++" );
                console.log(trolleyZoneData)
              }
            });
        };
        //整理数组
        var sortingArray = function(a){
          var list = [];
          for(var i = 0; i < a.length; i++){
            if(typeof a[i] == 'object'){
              for(var y = 0; y < a[i].length; y++){
                list.push(a[i][y] + '_' + i +'_'+ y)
              }
            }else{
              list.push(a[i] + '_' + i)
            }
          }
          return list;
        }
        //更新
        var modifyBet = function(trolleyZoneData,BetRuleInstance,index) {
            trolleyZoneData[index] = angular.copy(BetRuleInstance);
            console.log("更新++++" );
            console.log(trolleyZoneData)
        };

        var addTrolleyZoneData = function(trolleyZoneData,it) {
          if(trolleyZoneData.length > 0){
            var isSerialNo = true;
            angular.forEach(trolleyZoneData,function(data,index){
              if(data.serialNo == it.serialNo){
                modifyBet(trolleyZoneData,it,index);
                isSerialNo = false;
              }
              if(index == trolleyZoneData.length - 1 && isSerialNo){
                mergeBet(trolleyZoneData,it)
              }
            })
          }else{
            trolleyZoneData.push(angular.copy(it));
            console.log("添加++++" );
            console.log(trolleyZoneData)
          }
        };

        return {
            addBetRecord: addBetRecord
        }


    }

    factory.$inject = ['PlaceBet'];

    return factory;
})
