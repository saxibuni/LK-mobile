define([], function() {
    'use strict';

    var factory = function(Common) {
        var betTypeObj = {
            //前三 前二 直选复式
            K3_betType: [
                'N3T',
                'N3D',
                'N3TRI',
                'N3SN',
                'N3PAIR',
                'N2D',
                'N1'
            ]
        };
        var K3 = function(data, betTypeObj) {
            return data[0].length;
        };

        return {
            betTypeObj: betTypeObj,
            K3: K3
        };
    };

    factory.$inject = ['Common'];

    return factory;
});
