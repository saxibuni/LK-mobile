define([], function() {
    'use strict';

    var factory = function(Common) {
        var betTypeObj = {
            //五星、四星、前三、中三、后三的直选复式
            //二星直选 ---> 后二复式  前二复式
            ZSFS_betType: [
                'N5P',
                'N4P',
                'N3PF',
                'N3PM',
                'N3PL',
                'N2PL',
                'N2PF'
            ],

            //五星、四星、前三、中三、后三的直选组合
            ZSZH_betType: [
                'N5C',
                'N4C',
                'N3CF',
                'N3CM',
                'N3CL'
            ],

            //五星组选,四星组选
            ZSDCH_betType: [
                'G5X120',
                'G5X60',
                'G5X30',
                'G5X20',
                'G5X10',
                'G5X5',

                'G4X24',
                'G4X12',
                'G4X6',
                'G4X4'
            ],

            //前三，中三，后三直选合值
            QSZXHZ_betType: [
                'N3TF',
                'N3TM',
                'N3TL'
            ],

            //前三，中三，后三直选跨度
            QSKD_betType: [
                'N3DF',
                'N3DM',
                'N3DL'
            ],

            //前三，中三，后三组三
            QSZS_betType: [
                'G3X3F',
                'G3X3M',
                'G3X3L'
            ],

            //前三，中三，后三组六
            QSZL_betType: [
                'G3X6F',
                'G3X6M',
                'G3X6L'
            ],

            //前三，中三，后三组选合值
            QSHZ_betType: [
                'G3TF',
                'G3TM',
                'G3TL'
            ],

            /*前三，中三，后三包胆*/
            QSBD_betType: [
                'G3BF',
                'G3BM',
                'G3BL'
            ],

            /*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
            //后三,前三，中三一码不定式
            //四星一码不定式
            //趣味 --->  一帆风顺、好事成双、三星报喜、四季发财
            QSHZWS_QSTSHM_betType: [
                'S3TDF',
                'S3SF',
                'S3TDM',
                'S3SM',
                'S3TDL',
                'S3SL',

                'A1L3',
                'A1F3',
                'A1M3',
                'A1L4',

                'SA1',
                'SA2',
                'SA3',
                'SA4'
            ],


            /*两星 直选 后二跨度,前二跨度*/
            EXZXEKD_betType: [
                'N2DL',
                'N2DF'
            ],
            /*两星 直选 (后二和值,前二和值) 组选(后二和值,前二和值)*/
            LXHZ_betType: [
                'N2TL',
                'N2TF',
                'G2TL',
                'G2TF'
            ],
            /*两星 组选  后二包胆 前二包胆*/
            LXBD_betType: [
                'G2BL',
                'G2BF'
            ],


            /*一星定位胆*/
            YXDWD_betType: [
                'N1'
            ],

            //后三，前三，中三二码不定式
            //四星二码不定式
            //五星二码不定式
            //二星 ---> 组选 ---> 后二复式  前二复式
            BDS_betType: [
                'A2L3',
                'A2F3',
                'A2M3',
                'A2L4',
                'A2N5',
                'A3N5',

                'G2L',
                'G2F'
            ],

            //大小单双
            DXDS_betType: [
                'BSOEL2',
                'BSOEL3',
                'BSOEF2',
                'BSOEF3',
                'BSOEM3'
            ],

            //趣味区间
            QWQJ_betType: [
                'F5N3',
                'F4N3',
                'F3N2L',
                'F3N2F',
                'F3N2M',
                'R5N3',
                'R4N3',
                'R3N2L',
                'R3N2F',
                'R3N2M'
            ],

            //龙虎和
            LHH_betType: [
                'LH54',
                'LH53',
                'LH52',
                'LH51',
                'LH43',
                'LH42',
                'LH41',
                'LH32',
                'LH31',
                'LH21'
            ],
            //任选2,3,4--直选复式
            RXZXFS_betType: [
                'A2P',
                'A3P',
                'A4P'
            ],
            //任选2,3--直选合值
            RXZXHZ_betType: [
                'A2T',
                'A3T'
            ],
            //任选2,3--组选复式，组三复式,组六复式
            RXFS_betType: [
                'A2G2',
                'A3G3X3',
                'A3G3X6'
            ],
            //任选2,3--组选合值
            RXHZ_betType: [
                'A2G2T',
                'A3G3T'
            ],
            //任选24--组选24  12 6
            RXSZX_betType: [
                'A4G4X24',
                'A4G4X12',
                'A4G4X6',
                'A4G4X4'
            ]
        };
        //直选复式
        var ZSFS = function(data, betType) {
            var count = 1;
            for (var i = 0; i < data.length; i++) {
                count *= data[i].length;
            }
            return count;
        };
        //直选组合
        var ZSZH = function(data) {
            var count = 1;
            for (var i = 0; i < data.length; i++) {
                count *= data[i].length;
            }
            return count * data.length;
        };
        //组选多重号
        var ZSDCH = function(data, type) {
            var count = 1;
            var d0Length,
                d1Length,
                d2Length,
                d3Length,
                d4Length;

            data[0] && (d0Length = data[0].length);
            data[1] && (d1Length = data[1].length);
            data[2] && (d2Length = data[2].length);
            data[3] && (d3Length = data[3].length);
            data[4] && (d4Length = data[4].length);

            if (type == 'G5X120') { // 五星组选120
                count = Common.rangeCount(data[0].length, 5);
            }
            if (type == 'G5X60') { //五星组选60
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(d0Length, 1);
                var value2 = Common.rangeCount(d1Length, 3);
                var value3 = sameBallCount * value2 * (1 - (Common.rangeCount(d1Length - 1, 3) / value2));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count;
            }
            if (type == 'G5X30') { //五星组选30
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(d0Length, 2);
                var value2 = Common.rangeCount(d1Length, 1);
                var value3 = sameBallCount * value1 * (1 - (Common.rangeCount(d0Length - 1, 2) / value1));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count;
            }
            if (type == 'G5X20' || type == 'G4X12') { //五星组选20  四星组选12
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(d0Length, 1);
                var value2 = Common.rangeCount(d1Length, 2);
                var value3 = sameBallCount * value2 * (1 - (Common.rangeCount(d1Length - 1, 2) / value2));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count;
            }
            if (type == 'G5X10' || type == 'G5X5' || type == 'G4X4') { //五星组选10 五星组选5  四星组选4
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(d0Length, 1);
                var value2 = Common.rangeCount(d1Length, 1);
                var value3 = sameBallCount * value2 * (1 - (Common.rangeCount(d1Length - 1, 1) / value2));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count;
            }

            if (type == 'G4X24') { //四星组选24
                count = Common.rangeCount(data[0].length, 4);
            }
            if (type == 'G4X6') { //四星组选6
                count = Common.rangeCount(data[0].length, 2);
            }

            return Math.round(count);
        };
        //前三，中三，后三直选和值
        var QSZXHZ = function(data) {
            var count = 0;
            for (var i = 0; i < 10; i++) {
                for (var m = 0; m < 10; m++) {
                    for (var n = 0; n < 10; n++) {
                        for (var x = 0; x < data[0].length; x++) {
                            if (i + m + n == data[0][x]) {
                                count += 1;
                            }
                        }
                    }
                }
            }
            return count;
        };
        //前三，中三，后三跨度
        var QSKD = function(data) {
            var count = 0;
            for (var i = 0; i < 10; i++) {
                for (var m = 0; m < 10; m++) {
                    for (var n = 0; n < 10; n++) {
                        for (var x = 0; x < data[0].length; x++) {
                            var max = i > m ? i : m;
                            max = max > n ? max : n;
                            var min = i > m ? m : i;
                            min = min > n ? n : min;
                            if (max - min == data[0][x]) {
                                count += 1;
                            }
                        }
                    }
                }
            }
            return count;
        };
        //前三，中三，后三组三
        var QSZS = function(data) {
            var count = 0;
            if (data[0].length >= 2) {
                count = Common.rangeCount(data[0].length, 2) * 2;
            }
            return count;
        };
        //前三，中三，后三组六
        var QSZL = function(data) {
            var count = 0;
            if (data[0].length >= 3) {
                count = Common.rangeCount(data[0].length, 3);
            }
            return count;
        };
        //前三，中三，后三组选合值
        var QSHZ = function(data) {
            var count = 0;
            for (var i = 0; i < 10; i++) {
                for (var m = i; m < 10; m++) {
                    for (var n = m; n < 10; n++) {
                        for (var x = 0; x < data[0].length; x++) {
                            if (i + m + n == data[0][x]) {
                                if (i == m) {
                                    if (m == n) {
                                        break;
                                    }
                                }
                                count += 1;
                            }
                        }
                    }
                }
            }
            return count;
        };
        /*前三，中三，后三包胆*/
        var QSBD = function(data) {
            var count = 0;
            for (var i = 0; i < 10; i++) {
                for (var j = i; j < 10; j++) {
                    for (var k = j; k < 10; k++) {
                        if (i == data[0][0] || j == data[0][0] || k == data[0][0]) {
                            if (i == j && j == k) continue;
                            count += 1;
                        }
                    }
                }
            }
            return count;
        };
        /*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
        var QSHZWS_QSTSHM = function(data, type) {
            var count = 0;
            count = data[0].length;
            return count;
        };
        /*两星 直选 后二跨度 前二跨度*/
        var EXZXEKD = function(data) {
            var count = 0;
            for (var x = 0; x < 10; x++) {
                for (var y = 0; y < 10; y++) {
                    var max = x > y ? x : y;
                    var min = x > y ? y : x;
                    for (var m = 0; m < data[0].length; m++) {
                        if (max - min == data[0][m]) {
                            count += 1;
                        }
                    }
                }
            }
            return count;
        };
        /*两星 直选 (后二和值,前二和值) 组选(后二和值,前二和值)*/
        var LXHZ = function(data, type) {
            var count = 0;
            //直选
            if (type == 'N2TL' || type == 'N2TF') {
                for (var x = 0; x < 10; x++) {
                    for (var y = 0; y < 10; y++) {
                        for (var j = 0; j < data[0].length; j++) {
                            if (data[0][j] == x + y) {
                                count += 1;
                            }
                        }
                    }
                }
            } else {
                for (var x = 0; x < 10; x++) {
                    for (var y = x; y < 10; y++) {
                        for (var j = 0; j < data[0].length; j++) {
                            if ((data[0][j] == x + y) && x != y) {
                                count += 1;
                            }
                        }
                    }
                }
            }
            return count;
        };
        /*两星 组选  后二包胆 前二包胆*/
        var LXBD = function(data) {
            var count = 0;
            for (var x = 0; x < 10; x++) {
                for (var y = x; y < 10; y++) {
                    if (data[0][0] == x || data[0][0] == y) {
                        if (x == y) continue;
                        count += 1;

                    }
                }
            }
            return count;
        };
        //一星定胆号
        var YXDWD = function(data) {
            var count = 0;
            for (var i = 0; i < data.length; i++) {
                count += data[i].length;
            }
            return count;
        };
        //后三，前三，中三二码不定式
        //四星二码不定式
        //五星二码不定式  五星三码不定式
        var BDS = function(data, betType) {
            var count = 0;
            if (betType == 'A3N5')
                count = Common.rangeCount(data[0].length, 3);
            else
                count = Common.rangeCount(data[0].length, 2);
            return count;
        };
        //大小单双
        var DXDS = function(data) {
            var count = 1;
            for (var i = 0; i < data.length; i++) {
                if (data[i].length == 0)
                    return 0;
                else
                    count *= data[i].length;
            }
            return count;
        };
        //趣味 区间
        var QWQJ = function(data) {
            return this.DXDS(data);
        };
        //龙虎和
        var LHH = function(data, type) {
            return this.QSHZWS_QSTSHM(data);
	    };
        //任选 2, 3, 4 -直选复式
        var RXZXFS = function(data, betType) {
            var count = 0;
            var zeroTimes = 0;
            if (betType == 'A2P') {
                var allNumLength = data[0].length + data[1].length + data[2].length + data[3].length + data[4].length;
                var repeatTimes = Common.rangeCount(data[0].length, 2) + Common.rangeCount(data[1].length, 2) + Common.rangeCount(data[2].length, 2) + Common.rangeCount(data[3].length, 2) + Common.rangeCount(data[4].length, 2);
                var allPossible = Common.rangeCount(allNumLength, 2);
                count = allPossible - repeatTimes;
            } else if (betType == 'A3P') {
                var num = [
                    [0, 1, 2],
                    [0, 1, 3],
                    [0, 1, 4],
                    [0, 2, 3],
                    [0, 2, 4],
                    [0, 3, 4],
                    [1, 2, 3],
                    [1, 2, 4],
                    [1, 3, 4],
                    [2, 3, 4]
                ];
                for (var i = 0; i < num.length; i++) {
                    count = count + data[num[i][0]].length * data[num[i][1]].length * data[num[i][2]].length;
                }

            } else if (betType == 'A4P') {
                var num = [
                    [0, 1, 2, 3],
                    [0, 1, 2, 4],
                    [0, 1, 3, 4],
                    [0, 2, 3, 4],
                    [1, 2, 3, 4],
                ];
                for (var i = 0; i < num.length; i++) {
                    count = count + data[num[i][0]].length * data[num[i][1]].length * data[num[i][2]].length * data[num[i][3]].length
                }
            }
            return count;
        };
        //任选2,3--直选合值
        var RXZXHZ = function(data, betType) {
            var count = 0;
            if (betType == 'A2T') {
                var AndValue = 0;
                var probably = Common.rangeCount(data[1].length, 2);
                if (data[0].length > 0 && data[1].length >= 2) {
                    for (var i = 0; i < 10; i++) {
                        for (var x = 0; x < 10; x++) {
                            for (var m = 0; m < data[0].length; m++) {
                                if (x + i == parseInt(data[0][m])) {
                                    AndValue++;
                                }
                            }
                        }
                    }
                } else {
                    AndValue = 0
                }
                count = probably * AndValue;
            } else if (betType == 'A3T') {
                var AndValue = 0;
                var probably = Common.rangeCount(data[1].length, 3);
                if (data[0].length > 0 && data[1].length >= 3) {
                    for (var i = 0; i < 10; i++) {
                        for (var x = 0; x < 10; x++) {
                            for (var y = 0; y < 10; y++) {
                                for (var m = 0; m < data[0].length; m++) {
                                    if (x + i + y == parseInt(data[0][m])) {
                                        AndValue++;
                                    }
                                }
                            }
                        }
                    }
                } else {
                    AndValue = 0
                }
                count = probably * AndValue;
            }

            return count;
        };

        var RXFS = function(data, betType) {
            var count = 0
            if (betType == 'A2G2') {
                var probably = Common.rangeCount(data[1].length, 2);
                if (data[0].length > 0 && data[1].length >= 2) {
                    count = Common.rangeCount(data[0].length, 2) * probably;
                }
            } else if (betType == 'A3G3X3') {
                var probably = Common.rangeCount(data[1].length, 3);
                if (data[0].length > 0 && data[1].length >= 3) {
                    count = Common.combination(data[0].length, 2) * probably;
                }
            } else if (betType == 'A3G3X6') {
                var probably = Common.rangeCount(data[1].length, 3);
                if (data[0].length > 0 && data[1].length >= 3) {
                    count = Common.rangeCount(data[0].length, 3) * probably;
                }
            }
            return count;
        };
        //任选2,3--组选合值
        var RXHZ = function(data, betType) {
            var count = 0;
            if (betType == 'A2G2T') {
                var probably = Common.rangeCount(data[1].length, 2);
                var num = 0;
                for (var i = 0; i < 10; i++) {
                    for (var x = i; x < 10; x++) {
                        for (var m = 0; m < data[0].length; m++) {
                            if (x + i == data[0][m] && x != i) {
                                num++;
                            }
                        }
                    }
                }
                count = probably * num
            } else if (betType == 'A3G3T') {
                var probably = Common.rangeCount(data[1].length, 3);
                var num = 0;
                for (var i = 0; i < 10; i++) {
                    for (var x = i; x < 10; x++) {
                        for (var y = x; y < 10; y++) {
                            for (var m = 0; m < data[0].length; m++) {
                                if (x == i) {
                                    if (i == y) {
                                        continue;
                                    }
                                }
                                if (x + i + y == data[0][m]) {
                                    num++;
                                }
                            }
                        }
                    }
                }
                count = probably * num
            }
            return count;
        };
        //任选24--组选24  12 6
        var RXSZX = function(data, betType) {
            var count = 0;
            if (betType == 'A4G4X24') {
                count = Common.rangeCount(data[1].length, 4) * Common.rangeCount(data[0].length, 4)
            } else if (betType == 'A4G4X12') {
                var probably = Common.rangeCount(data[2].length, 4);
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(data[0].length, 1);
                var value2 = Common.rangeCount(data[1].length, 2);
                var value3 = sameBallCount * value2 * (1 - (Common.rangeCount(data[1].length - 1, 2) / value2));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count * probably;
            } else if (betType == 'A4G4X6') {
                count = Common.rangeCount(data[1].length, 4) * Common.rangeCount(data[0].length, 2)
            } else if (betType == 'A4G4X4') {
                var probably = Common.rangeCount(data[2].length, 4);
                var sameBallCount = Common.sameBallCount(data[0], data[1]);
                var value1 = Common.rangeCount(data[0].length, 1);
                var value2 = Common.rangeCount(data[1].length, 1);
                var value3 = sameBallCount * value2 * (1 - (Common.rangeCount(data[1].length - 1, 1) / value2));
                count = value1 * value2 - value3;
                count = isNaN(count) ? 0 : count * probably;
            }
            return Math.round(count);
        };

        return {
            betTypeObj:betTypeObj,
	        ZSFS: ZSFS,
	        ZSZH: ZSZH,
	        ZSDCH: ZSDCH,
	        QSZXHZ: QSZXHZ,
	        QSKD: QSKD,
	        QSZS: QSZS,
	        QSZL: QSZL,
	        QSHZ: QSHZ,
	        QSBD: QSBD,
	        QSHZWS_QSTSHM: QSHZWS_QSTSHM,
	        EXZXEKD: EXZXEKD,
	        LXHZ: LXHZ,
	        LXBD: LXBD,
	        YXDWD: YXDWD,
	        BDS: BDS,
	        DXDS: DXDS,
	        QWQJ: QWQJ,
	        LHH: LHH,
	        RXZXFS: RXZXFS,
	        RXZXHZ: RXZXHZ,
	        RXFS: RXFS,
	        RXHZ: RXHZ,
	        RXSZX: RXSZX
        }
    }

    factory.$inject = ['Common'];

    return factory;
})
