define([], function() {
    'use strict';
    var factory = function(Common) {
        var placeBetObj = {
            //11x5直选复式
            ZXFS11x5_bet: [
                'N3PH',
                'N2PH',
                'P3'
            ],
            //胆拖
            DS11x5_bet: [
                'N3SH',
                'G3SH',
                'N2SH',
                'G2SH',
                'A1S',
                'A2S',
                'A3S',
                'A4S',
                'A5S',
                'A6S',
                'A7S',
                'A8S'
            ],

            //胆拖
            DT11x5_bet: [
                'G3BH',
                'G2BH',
                'A2B',
                'A3B',
                'A4B',
                'A5B',
                'A6B',
                'A7B',
                'A8B'
            ],

            //猜中位,任选复式，前三复式
            RXFS11x5_bet: [
                'FMN',
                'FOEC',
                'A1',
                'A2',
                'A3',
                'A4',
                'A5',
                'A6',
                'A7',
                'A8',
                'G3H',
                'G2H',
                'A1H3',
            ]
        };

        //11x5 复式
        var getBet11x5Item = function(BetRuleInstance) {
          var it = BetRuleInstance;
            var list = it.result;
            var item = [];
            var a = '';
            for (var i = 0; i < list.length; i++) {
                if (list[i].length != 0) {
                    if (i == 0) a = '1';
                    if (i == 1) a = '2';
                    if (i == 2) a = '3';
                    item.push({
                        betItem: list[i],
                        drawType: a
                    });
                }
            }
            return item;
        };

        //复式
        var ZXFS11x5 = function(BetRuleInstance) {
            var data = getCommonData(BetRuleInstance);
            data.items = getBet11x5Item(BetRuleInstance);
            return data;
        };

        //单式
        var DS11x5 = function(BetRuleInstance) {
            var it = BetRuleInstance
            var data = getCommonData(BetRuleInstance);
            data.items = [{
                "betItem": it.result[0],
                "drawType": it.betType
            }];
            return data;
        };

        //胆拖
        var DT11x5 = function(BetRuleInstance) {
            var it = BetRuleInstance;
            var data = getCommonData(BetRuleInstance);
            data.items = [{
                "betItem": it.result[0],
                "drawType": 'Banker'
            }, {
                "betItem": it.result[1],
                "drawType": 'Ball'
            }];
            return data;
        };

        //猜中位,任选复式，前三复式
        var RXFS11x5 = function(BetRuleInstance) {
            var it = BetRuleInstance;
            var data = getCommonData(BetRuleInstance);
            data.items = [{
                "betItem": it.result[0],
                "drawType": it.betType
            }];
            return data;
        };
        //获得Data 其它通用的参数
        var getCommonData = function(BetRuleInstance) {
            var it = BetRuleInstance;
            var commonBetData = {
              "betType": it.betType,
              "market": it.market,
              "gameCode": it.gameCode,
              "drawId": it.drawId,
              "betAmount": it.betAmount,
              "odds": it.odds,
              "comm": it.comm,
              "multiple": it.multiple,
              "betCount": it.betCount,
              "betUnit": it.betUnit,
               serialNo:it.serialNo,
              "prizeGroup": it.prizeGroup,
              "maxCount":it.maxCount
            };
            return commonBetData;
        }
        return {
            placeBetObj: placeBetObj,
            getBet11x5Item: getBet11x5Item,
            ZXFS11x5: ZXFS11x5,
            DS11x5: DS11x5,
            DT11x5: DT11x5,
            RXFS11x5: RXFS11x5,
            getCommonData: getCommonData
        }
    };
    factory.$inject = ['Common'];
    return factory;
});
