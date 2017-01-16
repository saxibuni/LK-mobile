define([], function() {
    'use strict';
    var factory = function(HL11x5PlaceBet,LTPlaceBet,K3PlaceBet) {
        var createFunction = function(BetRuleInstance, betTypeObj) {
            var functionName = "";
            for (var i in betTypeObj) {
                if (betTypeObj[i].indexOf(BetRuleInstance.betType) > -1) {
                    functionName = i;
                    break;
                }
            }
            return functionName.replace('_bet', '');
        };

        //获取下注方法
        var getBetData = function(BetRuleInstance, serviceObj) {
            var functionName = "";
            var placeBetObj = serviceObj['placeBetObj'];
            if(BetRuleInstance.gameCode == 'K3'){
              functionName = 'K3';
            }else{
              functionName = createFunction(BetRuleInstance, placeBetObj);
            }
            var data = serviceObj[functionName](BetRuleInstance);
            return data;
            //console.log(data)
        };
        //下注
        var commitBet = function() {

        };
        return {
            commitBet: commitBet,
            getBetData: getBetData,
            HL11x5PlaceBet: HL11x5PlaceBet,
            LTPlaceBet: LTPlaceBet,
            K3PlaceBet:K3PlaceBet
        };
    };
    factory.$inject = ['HL11x5PlaceBet','LTPlaceBet','K3PlaceBet'];
    return factory;
})
