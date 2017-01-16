define(function(require) {
    'use strict';

    var services = angular.module('starter.services', []);
    services.factory('Lottery', require('services/LotteryService'));
    services.factory('Common', require('services/CommonService'));
    services.factory('Socket', require('services/SocketService'));
    services.factory('PlayRandom', require('services/PlayRandomService'));

    services.factory('LTService', require('services/ssc/LTService'));
    services.factory('LTBetConfig', require('services/ssc/LTBetConfigService'));
    services.factory('LTPlaceBet', require('services/ssc/LTPlaceBetService'));

    services.factory('HL11x5Service', require('services/11x5/HL11x5Service'));
    services.factory('HL11X5BetConfig', require('services/11x5/HL11x5BetConfigService'));
    services.factory('HL11x5PlaceBet', require('services/11x5/HL11x5PlaceBetService'));

    services.factory('K3Service',require('services/k3/K3Service'));
    services.factory('K3BetConfig', require('services/k3/K3BetConfigService'));
    services.factory('K3PlaceBet', require('services/k3/K3PlaceBetService'));

    services.factory('BetAlgorithm', require('services/interface/BetAlgorithmService'));
    services.factory('PlaceBet', require('services/interface/PlaceBetService'));

    services.factory('BetTrollery',require('services/BetTrolleryService'));
    services.factory('CalcSpecialOdds', require('services/CalcSpecialOdds'));
    services.factory('OriginalBetService', require('services/OriginalBetService'));

    services.factory('Localize',require('services/LocalizeService'));

});
