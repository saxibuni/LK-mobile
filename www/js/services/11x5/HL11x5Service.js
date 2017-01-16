define([], function() {
    'use strict';

    var factory = function(Common) {
        var betTypeObj = {

            //前三 前二 直选复式
            ZSFS_betType: [
                "N3PH",
                "N2PH"
            ],
            //前三组选复式 G3H
            QSZUXFS_betType: [
                "G3H",
            ],
            //前二组选复式 G2H
            QEZUXFS_betType: [
                "G2H"
            ],

            //不定位 A1H3 趣味型 任选一中一复式A1
            BDWQWRXY_betType: [
                "A1H3",
                "FOEC",
                "FMN",
                "A1"
            ],
            //定位胆 P3
            DWD_betType: [
                "P3"
            ],
            //任选二中二复式  到  任选八中五复
            RXXZXFS_betType: [
                "A2",
                "A3",
                "A4",
                "A5",
                "A6",
                "A7",
                "A8"
            ],
            //任选胆拖
            RXREZEDT_betType: [
                'A2B',
                'A3B',
                'A4B',
                'A5B',
                'A6B',
                'A7B',
                'A8B',
                "G3BH",
                "G2BH"
            ]
        };
        //前三 前二 直选复式 N3PH
        var ZSFS = function(data, betType) {
            var count = 0;
            var a = data[0];
            var b = data[1];
            var c = data[2];
            for (var i = 0; i < a.length; i++) {
                for (var x = 0; x < b.length; x++) {
                    if (a[i] != b[x]) {

                        if (typeof c == "undefined") {
                            count++;
                        } else {
                            for (var y = 0; y < c.length; y++) {
                                if (b[x] != c[y] && c[y] != a[i]) {
                                    count++;
                                }
                            }
                        }
                    }
                }
            }
            return count;
        };
        //任选胆拖
        var RXREZEDT = function(data, betType) {
            var count = 0;
            var num = parseInt(betType.substring(1, 2));
            var y = num - data[0].length;
            var x = data[1].length;
            if (data[0].length == 0) return 0;
            count = Common.rangeCount(x, y);
            return count;
        };
        //前三组选复式 G3H
        var QSZUXFS = function(data) {
            var count = 0;
            if (data[0].length >= 3) {
                count = Math.abs(Common.rangeCount(data[0].length, 3));
            }
            return count;
        };
        //前二组选复式 G2H
        var QEZUXFS = function(data) {
            var count = 0;
            if (data[0].length >= 2) {

                count = Math.abs(Common.rangeCount(data[0].length, data[0].length - 2));
            }
            return count;
        };
        //不定位 A1H3 趣味型 任选一中一复式A1
        var BDWQWRXY = function(data, betType) {
            var count = 0;
            if (data[0].length > 0) {
                count = data[0].length;
            }
            return count;
        };
        //定位胆 P3
        var DWD = function(data) {
            var count = 0;
            count = data[0].length + data[1].length + data[2].length;
            return count;
        };
        //任选二中二复式 A2
        var RXXZXFS = function(data, betType) {
            var count = 0;
            var x = betType.toString().substr(1, 2);
            if (data[0].length >= x) {
                count = Math.abs(Common.rangeCount(data[0].length, data[0].length - x));
            }
            return count;
        };


        return {
        	betTypeObj: betTypeObj,
	        ZSFS: ZSFS,
	        RXREZEDT: RXREZEDT,
	        QSZUXFS: QSZUXFS,
	        QEZUXFS: QEZUXFS,
	        BDWQWRXY: BDWQWRXY,
	        DWD: DWD,
	        RXXZXFS: RXXZXFS
        };
    };

    factory.$inject = ['Common'];

    return factory;
})
