define([], function() {
    'use strict';

    var factory = function(LTService, HL11x5Service, K3Service,CalcSpecialOdds) {

        var createFunction = function(betType, betTypeObj) {
            var functionName = "";
            for (var i in betTypeObj) {
                if (betTypeObj[i].indexOf(betType) > -1) {
                    functionName = i;
                    break;
                }
            }
            return functionName.replace('_betType', '');
        };

        var calclateCount = function(betRuleInstance, betType, serviceObj,betSetting) {
            var it = betRuleInstance;
            var count = 0;
            var betTypeObj = serviceObj.betTypeObj;
            var functionName = createFunction(betType, betTypeObj);
            count = serviceObj[functionName](it.result, betType);
            CalcSpecialOdds.setSpecialOdds(betRuleInstance,betRuleInstance.gameCode,betSetting);
            return count;
        };

        return {
            calclateCount: calclateCount,
            LTService: LTService,
            HL11x5Service: HL11x5Service,
            K3Service: K3Service
        };
    }

    factory.$inject = ['LTService', 'HL11x5Service', 'K3Service','CalcSpecialOdds'];

    return factory;
});
