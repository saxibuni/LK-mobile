define([], function() {
    'use strict';

    var factory = function() {

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

        var placeBetObj = {
            //11x5直选复式
            K3_bet: [
                'N3T',
                'N3D',
                'N3TRI',
                'N3SN',
                'N3PAIR',
                'N2D',
                'N1'
            ]
        };

        var K3 = function(BetRuleInstance) {
            var it = BetRuleInstance;
            var data = getCommonData(BetRuleInstance);
            data.items = [{
                "betItem": it.result[0],
                "drawType": it.betType
            }];
            return data;
        }

        return {
            placeBetObj: placeBetObj,
            K3: K3
        };
    }

    return factory;
});
