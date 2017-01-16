define([], function() {
    'use strict';

    var factory = function() {

        var playingNavData_LT = [{
            "familyName": "五星",
            "colRatio": "2",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "五星直选",
                "playingMethods": [{
                        "methodId": "N5P",
                        "methodName": "复式",
                        "betFullName": "五星直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "names": ['万位', '千位', '百位', '十位', '个位'],
                            "numbers": [{ "start": 0, "end": 9 }],
                            "random": [1, 1, 1, 1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N5C",
                        "methodName": "组合",
                        "betFullName": "五星直选组合",
                        "plate": {
                            "parentPlate": "Number1",
                            "names": ['万位', '千位', '百位', '十位', '个位'],
                            "numbers": [{ "start": 0, "end": 9 }],
                            "random": [1, 1, 1, 1, 1],
                            "unitGroup": false
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "五星组选",
                "playingMethods": [{
                    "methodId": "G5X120",
                    "methodName": "组选120",
                    "betFullName": "五星组选120",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [5],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G5X60",
                    "methodName": "组选60",
                    "betFullName": "五星组选60",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['二重号', '单号'],
                        "isRepeat":true,
                        "random": [1, 3],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G5X30",
                    "methodName": "组选30",
                    "betFullName": "五星组选30",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['二重号', '单号'],
                        "isRepeat":true,
                        "random": [2, 1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G5X20",
                    "methodName": "组选20",
                    "betFullName": "五星组选20",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['三重号', '单号'],
                        "random": [1, 2],
                        "isRepeat":true,
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G5X10",
                    "methodName": "组选10",
                    "betFullName": "五星组选10",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['三重号', '二重号'],
                        "isRepeat":true,
                        "random": [1, 1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G5X5",
                    "methodName": "组选5",
                    "betFullName": "五星组选5",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['四重号', '单号'],
                        "isRepeat":true,
                        "random": [1, 1],
                        "unitGroup": false
                    }
                }]
            }]
        }, {
            "familyName": "四星",
            "colRatio": "2",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "四星直选",
                "playingMethods": [{
                        "methodId": "N4P",
                        "methodName": "复式",
                        "betFullName": "四星直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['千位', '百位', '十位', '个位'],
                            "random": [1, 1, 1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N4C",
                        "methodName": "组合",
                        "betFullName": "四星直选组合",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['千位', '百位', '十位', '个位'],
                            "random": [1, 1, 1, 1],
                            "unitGroup": false
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "四星组选",
                "playingMethods": [{
                    "methodId": "G4X24",
                    "methodName": "组选24",
                    "betFullName": "四星组选24",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [4],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G4X12",
                    "methodName": "组选12",
                    "betFullName": "四星组选12",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['二重号', '单号'],
                        "isRepeat":true,
                        "random": [1, 2],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G4X6",
                    "methodName": "组选6",
                    "betFullName": "四星组选6",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['二重号'],
                        "random": [2],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "G4X4",
                    "methodName": "组选4",
                    "betFullName": "四星组选4",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": ['三重号', '单号'],
                        "isRepeat":true,
                        "random": [1, 3],
                        "unitGroup": false
                    }
                }]
            }]
        }, {
            "familyName": "前三",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "前三直选",
                "playingMethods": [{
                        "methodId": "N3PF",
                        "methodName": "复式",
                        "betFullName": "前三直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['万位', '千位', '百位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N3TF",
                        "methodName": "和值",
                        "betFullName": "前三直选和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 27 }]
                        }
                    }, {
                        "methodId": "N3DF",
                        "methodName": "跨度",
                        "betFullName": "前三直选跨度",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "random": [1],
                            "unitGroup": false,
                            "names": ['']
                        }
                    }, {
                        "methodId": "N3CF",
                        "methodName": "组合",
                        "betFullName": "前三直选复式组合",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['万位', '千位', '百位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "前三组选",
                "playingMethods": [{
                        "methodId": "G3X3F",
                        "methodName": "组三",
                        "betFullName": "前三组三",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组三'],
                            "random": [2],
                            "unitGroup": false
                        }
                    }, {
                        "methodId": "G3X6F",
                        "methodName": "组六",
                        "betFullName": "前三组六",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组六'],
                            "random": [3],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "G3TF",
                        "methodName": "组选和值",
                        "betFullName": "前三组选和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 1, "end": 26 }]
                        }
                    },
                    {
                        "methodId": "G3BF",
                        "methodName": "包胆",
                        "betFullName": "前三包胆",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "maxLength": 1,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 9 }]
                        }
                    }
                ]
            }, {
                "groupName": "其他",
                "fullGroupName": "前三其他",
                "playingMethods": [{
                    "methodId": "S3TDF",
                    "methodName": "和值尾数",
                    "betFullName": "前三和值尾数",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "random": [1],
                        "unitGroup": false,
                        "names": ['']
                    }
                }, {
                    "methodId": "S3SF",
                    "methodName": "特殊号码",
                    "betFullName": "前三特殊号码",
                    "plate": {
                        "parentPlate": "BDS"
                    }
                }]
            }]
        }, {
            "familyName": "中三",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "中三直选",
                "playingMethods": [{
                        "methodId": "N3PM",
                        "methodName": "复式",
                        "betFullName": "中三直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['千位', '百位', '十位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N3TM",
                        "methodName": "和值",
                        "betFullName": "中三和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 27 }]
                        }
                    }, {
                        "methodId": "N3DM",
                        "methodName": "跨度",
                        "betFullName": "中三跨度",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": [''],
                            "random": [1],
                            "unitGroup": false
                        }
                    }, {
                        "methodId": "N3CM",
                        "methodName": "组合",
                        "betFullName": "中三组合",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['千位', '百位', '十位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "中三组选",
                "playingMethods": [{
                        "methodId": "G3X3M",
                        "methodName": "组三",
                        "betFullName": "中三组三",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组三'],
                            "random": [2],
                            "unitGroup": false
                        }
                    }, {
                        "methodId": "G3X6M",
                        "methodName": "组六",
                        "betFullName": "中三组六",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组六'],
                            "random": [3],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "G3TM",
                        "methodName": "组选和值",
                        "betFullName": "中三组选和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "names": [''],
                            "unitGroup": false,
                            "numbers": [{ "start": 1, "end": 26 }]
                        }
                    },
                    {
                        "methodId": "G3BM",
                        "methodName": "包胆",
                        "betFullName": "中三包胆",
                        "plate": {
                            "parentPlate": "Number2",
                            "names": [''],
                            "maxLength": 1,
                            "unitGroup": false,
                            "numbers": [{ "start": 1, "end": 9 }]
                        }
                    }
                ]
            }, {
                "groupName": "其他",
                "fullGroupName": "中三其他",
                "playingMethods": [{
                    "methodId": "S3TDM",
                    "methodName": "和值尾数",
                    "betFullName": "中三和值尾数",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "S3SM",
                    "methodName": "特殊号码",
                    "betFullName": "中三特殊号码",
                    "plate": {
                        "parentPlate": "BDS",
                        "unitGroup": false
                    }
                }]
            }]
        }, {
            "familyName": "后三",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "后三直选",
                "playingMethods": [{
                        "methodId": "N3PL",
                        "methodName": "复式",
                        "betFullName": "后三直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['百位', '十位', '个位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N3TL",
                        "methodName": "和值",
                        "betFullName": "后三直选和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 27 }]
                        }
                    }, {
                        "methodId": "N3DL",
                        "methodName": "跨度",
                        "betFullName": "后三直选跨度",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": [''],
                            "random": [1]
                        }
                    }, {
                        "methodId": "N3CL",
                        "methodName": "组合",
                        "betFullName": "后三直选组合",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['百位', '十位', '个位'],
                            "random": [1, 1, 1],
                            "unitGroup": false
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "后三组选",
                "playingMethods": [{
                        "methodId": "G3X3L",
                        "methodName": "组三",
                        "betFullName": "后三组选3",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组三'],
                            "random": [2],
                            "unitGroup": false
                        }
                    }, {
                        "methodId": "G3X6L",
                        "methodName": "组六",
                        "betFullName": "后三组选6",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['组六'],
                            "random": [3],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "G3TL",
                        "methodName": "组选和值",
                        "betFullName": "后三组选和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "names": [''],
                            "unitGroup": false,
                            "numbers": [{ "start": 1, "end": 26 }]
                        }
                    },
                    {
                        "methodId": "G3BL",
                        "methodName": "包胆",
                        "betFullName": "后三组选包胆",
                        "plate": {
                            "parentPlate": "Number2",
                            "names": [''],
                            "maxLength": 1,
                            "unitGroup": false,
                            "numbers": [{ "start": 0, "end": 9 }]
                        }
                    }
                ]
            }, {
                "groupName": "其他",
                "fullGroupName": "后三其他",
                "playingMethods": [{
                    "methodId": "S3TDL",
                    "methodName": "和值尾数",
                    "betFullName": "后三和值尾数",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "S3SL",
                    "methodName": "特殊号码",
                    "betFullName": "后三特殊号码",
                    "plate": {
                        "parentPlate": "BDS",
                        "unitGroup": false
                    }
                }]
            }]
        }, {
            "familyName": "二星",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "直选",
                "fullGroupName": "二星直选",
                "playingMethods": [{
                        "methodId": "N2PL",
                        "methodName": "后二复式",
                        "betFullName": "后二复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['十位', '个位'],
                            "random": [1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N2TL",
                        "methodName": "后二和值",
                        "betFullName": "后二和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 18 }]
                        }
                    }, {
                        "methodId": "N2DL",
                        "methodName": "后二跨度",
                        "betFullName": "后二跨度",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": [''],
                            "random": [1]
                        }
                    }, {
                        "methodId": "N2PF",
                        "methodName": "前二复式",
                        "betFullName": "前二复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "names": ['万位', '千位'],
                            "random": [1, 1],
                            "unitGroup": false
                        }
                    },
                    {
                        "methodId": "N2TF",
                        "methodName": "前二和值",
                        "betFullName": "前二和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 18 }]
                        }
                    }, {
                        "methodId": "N2DF",
                        "methodName": "前二跨度",
                        "betFullName": "前二跨度",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": [''],
                            "random": [1]
                        }
                    }
                ]
            }, {
                "groupName": "组选",
                "fullGroupName": "二星组选",
                "playingMethods": [{
                        "methodId": "G2L",
                        "methodName": "后二复式",
                        "betFullName": "后二组选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": ['组选'],
                            "random": [2]
                        }
                    },
                    {
                        "methodId": "G2TL",
                        "methodName": "后二和值",
                        "betFullName": "后二和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 1, "end": 17 }]
                        }
                    }, {
                        "methodId": "G2BL",
                        "methodName": "后二包胆",
                        "betFullName": "后二包胆",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "maxLength": 1,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 9 }]
                        }
                    }, {
                        "methodId": "G2F",
                        "methodName": "前二复式",
                        "betFullName": "前二复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": ['组选'],
                            "random": [2]
                        }
                    },
                    {
                        "methodId": "G2TF",
                        "methodName": "前二和值",
                        "betFullName": "前二和值",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "names": [''],
                            "numbers": [{ "start": 1, "end": 17 }]
                        }
                    }, {
                        "methodId": "G2BF",
                        "methodName": "前二包胆",
                        "betFullName": "前二包胆",
                        "plate": {
                            "parentPlate": "Number2",
                            "unitGroup": false,
                            "maxLength": 1,
                            "names": [''],
                            "numbers": [{ "start": 0, "end": 9 }]
                        }
                    }
                ]
            }]
        }, {
            "familyName": "一星",
            "colRatio": "2",
            "playingGroups": [{
                "groupName": "定位胆",
                "fullGroupName": "一星定位胆",
                "playingMethods": [{
                    "methodId": "N1",
                    "methodName": "定位胆",
                    "betFullName": "一星定位胆",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["万位", "千位", "百位", "十位", "个位"],
                        "random": [1, 1, 1, 1, 1]
                    }
                }]
            }]
        }, {
            "familyName": "不定位",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "三星不定位",
                "playingMethods": [{
                    "methodId": "A1L3",
                    "methodName": "后三一码不定位",
                    "betFullName": "后三一码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [1]
                    }
                }, {
                    "methodId": "A2L3",
                    "methodName": "后三二码不定位",
                    "betFullName": "后三二码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [2]
                    }
                }, {
                    "methodId": "A1F3",
                    "methodName": "前三一码不定位",
                    "betFullName": "前三一码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [1]
                    }
                }, {
                    "methodId": "A2F3",
                    "methodName": "前三二码不定位",
                    "betFullName": "前三二码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [2]
                    }
                }, {
                    "methodId": "A1M3",
                    "methodName": "中三一码不定位",
                    "betFullName": "中三一码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [1]
                    }
                }, {
                    "methodId": "A2M3",
                    "methodName": "中三二码不定位",
                    "betFullName": "中三二码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [2]
                    }
                }]
            }, {
                "groupName": "四星不定位",
                "playingMethods": [{
                    "methodId": "A1L4",
                    "methodName": "四星一码不定位",
                    "betFullName": "四星一码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [1]
                    }
                }, {
                    "methodId": "A2L4",
                    "methodName": "四星二码不定位",
                    "betFullName": "四星二码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [2]
                    }
                }]
            }, {
                "groupName": "五星不定位",
                "playingMethods": [{
                    "methodId": "A2N5",
                    "methodName": "五星二码不定位",
                    "betFullName": "五星二码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [2]
                    }
                }, {
                    "methodId": "A3N5",
                    "methodName": "五星三码不定位",
                    "betFullName": "五星三码不定位",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "unitGroup": false,
                        "names": ["不定位"],
                        "random": [3]
                    }
                }]
            }]
        }, {
            "familyName": "大小单双",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "大小单双",
                "playingMethods": [{
                    "methodId": "BSOEL2",
                    "methodName": "后二大小单双",
                    "betFullName": "后二大小单双",
                    "plate": {
                        "parentPlate": "DXDS",
                        "unitGroup": false,
                        "names": ["十位", "个位"]
                    }
                }, {
                    "methodId": "BSOEL3",
                    "methodName": "后三大小单双",
                    "betFullName": "后三大小单双",
                    "plate": {
                        "parentPlate": "DXDS",
                        "unitGroup": false,
                        "names": ["百位", "十位", "个位"]
                    }
                }, {
                    "methodId": "BSOEF2",
                    "methodName": "前二大小单双",
                    "betFullName": "前二大小单双",
                    "plate": {
                        "parentPlate": "DXDS",
                        "unitGroup": false,
                        "names": ["万位", "千位"]
                    }
                }, {
                    "methodId": "BSOEF3",
                    "methodName": "前三大小单双",
                    "betFullName": "前三大小单双",
                    "plate": {
                        "parentPlate": "DXDS",
                        "unitGroup": false,
                        "names": ["万位", "千位", "百位"]
                    }
                }, {
                    "methodId": "BSOEM3",
                    "methodName": "中三大小单双",
                    "betFullName": "中三大小单双",
                    "plate": {
                        "parentPlate": "DXDS",
                        "unitGroup": false,
                        "names": ["千位", "百位", "十位"]
                    }
                }]
            }]
        }, {
            "familyName": "趣味",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "趣味",
                "playingMethods": [{
                    "methodId": "F5N3",
                    "methodName": "五码趣味三星",
                    "betFullName": "五码趣味三星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["万位", "千位", "百位", "十位", "个位"],
                        "funrow": { "万位": true, "千位": true },
                        "random": ['', '', 1, 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "F4N3",
                    "methodName": "四码趣味三星",
                    "betFullName": "四码趣味三星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["千位", "百位", "十位", "个位"],
                        "funrow": { "千位": true },
                        "random": ['', 1, 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "F3N2L",
                    "methodName": "后三趣味二星",
                    "betFullName": "后三趣味二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["百位", "十位", "个位"],
                        "funrow": { "百位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "F3N2F",
                    "methodName": "前三趣味二星",
                    "betFullName": "前三趣味二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["万位", "千位", "百位"],
                        "funrow": { "万位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "F3N2M",
                    "methodName": "中三趣味二星",
                    "betFullName": "中三趣味二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["千位", "百位", "十位"],
                        "funrow": { "千位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }]
            }, {
                "groupName": "区间",
                "playingMethods": [{
                    "methodId": "R5N3",
                    "methodName": "五码区间三星",
                    "betFullName": "五码区间三星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["万位", "千位", "百位", "十位", "个位"],
                        "zonerow": { "万位": true, "千位": true },
                        "random": ['', '', 1, 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "R4N3",
                    "methodName": "四码区间三星",
                    "betFullName": "四码区间三星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["千位", "百位", "十位", "个位"],
                        "zonerow": { "千位": true },
                        "random": ['', 1, 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "R3N2L",
                    "methodName": "后三区间二星",
                    "betFullName": "后三区间二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["百位", "十位", "个位"],
                        "zonerow": { "百位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "R3N2F",
                    "methodName": "前三区间二星",
                    "betFullName": "前三区间二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["万位", "千位", "百位"],
                        "zonerow": { "万位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }, {
                    "methodId": "R3N2M",
                    "methodName": "中三区间二星",
                    "betFullName": "中三区间二星",
                    "plate": {
                        "parentPlate": "Fun",
                        "names": ["千位", "百位", "十位"],
                        "zonerow": { "千位": true },
                        "random": ['', 1, 1],
                        "numbers": [{ "start": 0, "end": 9 }]
                    }
                }]
            }, {
                "groupName": "特殊",
                "playingMethods": [{
                    "methodId": "SA1",
                    "methodName": "一帆风顺",
                    "betFullName": "一帆风顺",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "SA2",
                    "methodName": "好事成双",
                    "betFullName": "好事成双",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "SA3",
                    "methodName": "三星报喜",
                    "betFullName": "三星报喜",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }, {
                    "methodId": "SA4",
                    "methodName": "四季发财",
                    "betFullName": "四季发财",
                    "plate": {
                        "parentPlate": "Number1",
                        "numbers": [{ "start": 0, "end": 9 }],
                        "names": [''],
                        "random": [1],
                        "unitGroup": false
                    }
                }]
            }]
        }, {
            "familyName": "任选",
            "colRatio": "3",
            "playingGroups": [{
                "groupName": "任选二",
                "playingMethods": [{
                        "methodId": "A2P",
                        "methodName": "直选复式",
                        "betFullName": "任二直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": ["万位", "千位", "百位", "十位", "个位"],
                            "random": [1, 1, 1, 1, 1]
                        }
                    },
                    {
                        "methodId": "A2T",
                        "methodName": "直选和值",
                        "betFullName": "任二直选和值",
                        "plate": {
                            "parentPlate": "AnyNumber2",
                            "unitGroup": true,
                            "unitGroupChecked": [3, 4],
                            "names": [""],
                            "numbers": [{ "start": 0, "end": 18 }]
                        }
                    }, {
                        "methodId": "A2G2",
                        "methodName": "组选复式",
                        "betFullName": "任二组选复式",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": true,
                            "unitGroupChecked": [3, 4],
                            "names": ["组选"],
                            "random": [2]
                        }
                    },
                    {
                        "methodId": "A2G2T",
                        "methodName": "组选和值",
                        "betFullName": "任二组选和值",
                        "plate": {
                            "parentPlate": "AnyNumber2",
                            "unitGroup": true,
                            "unitGroupChecked": [3, 4],
                            "names": [""],
                            "numbers": [{ "start": 1, "end": 17 }]
                        }
                    }
                ]
            }, {
                "groupName": "任选三",
                "playingMethods": [{
                        "methodId": "A3P",
                        "methodName": "直选复式",
                        "betFullName": "任三直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": ["万位", "千位", "百位", "十位", "个位"],
                            "random": [1, 1, 1, 1, 1]
                        }
                    },
                    {
                        "methodId": "A3T",
                        "methodName": "直选和值",
                        "betFullName": "任三直选和值",
                        "plate": {
                            "parentPlate": "AnyNumber2",
                            "unitGroup": true,
                            "unitGroupChecked": [2, 3, 4],
                            "names": [""],
                            "numbers": [{ "start": 0, "end": 27 }]
                        }
                    }, {
                        "methodId": "A3G3X3",
                        "methodName": "组三复式",
                        "betFullName": "任三组三复式",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": true,
                            "unitGroupChecked": [2, 3, 4],
                            "names": ["组选"],
                            "random": [2]
                        }
                    },
                    {
                        "methodId": "A3G3X6",
                        "methodName": "组六复式",
                        "betFullName": "任三组六复式",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": true,
                            "unitGroupChecked": [2, 3, 4],
                            "names": ["组六"],
                            "random": [3]
                        }
                    },
                    {
                        "methodId": "A3G3T",
                        "methodName": "组选和值",
                        "betFullName": "任三组选和值",
                        "plate": {
                            "parentPlate": "AnyNumber2",
                            "unitGroup": true,
                            "unitGroupChecked": [2, 3, 4],
                            "names": [''],
                            "numbers": [{ "start": 1, "end": 26 }]
                        }
                    }
                ]
            }, {
                "groupName": "任选四",
                "playingMethods": [{
                        "methodId": "A4P",
                        "methodName": "直选复式",
                        "betFullName": "任四直选复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": false,
                            "names": ["万位", "千位", "百位", "十位", "个位"],
                            "random": [1, 1, 1, 1, 1]
                        }
                    },
                    {
                        "methodId": "A4G4X24",
                        "methodName": "组选24",
                        "betFullName": "任四组选24",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": true,
                            "unitGroupChecked": [1, 2, 3, 4],
                            "names": [""],
                            "random": [4]
                        }
                    }, {
                        "methodId": "A4G4X12",
                        "methodName": "组选12",
                        "betFullName": "任四组选12",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "isRepeat":true,
                            "unitGroup": true,
                            "unitGroupChecked": [1, 2, 3, 4],
                            "names": ["二重号", "单号"],
                            "random": [1, 2]
                        }
                    }, {
                        "methodId": "A4G4X6",
                        "methodName": "组选6",
                        "betFullName": "任四组选6",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "unitGroup": true,
                            "unitGroupChecked": [1, 2, 3, 4],
                            "names": ["二重号"],
                            "random": [2]
                        }
                    }, {
                        "methodId": "A4G4X4",
                        "methodName": "组选4",
                        "betFullName": "任四组选4",
                        "plate": {
                            "parentPlate": "AnyNumber1",
                            "numbers": [{ "start": 0, "end": 9 }],
                            "isRepeat":true,
                            "unitGroup": true,
                            "unitGroupChecked": [1, 2, 3, 4],
                            "names": ["三重号", "单号"],
                            "random": [1, 1]
                        }
                    }
                ]
            }]
        }, {
            "familyName": "龙虎",
            "colRatio": "2",
            "playingGroups": [{
                "groupName": "龙虎和",
                "playingMethods": [{
                    "methodId": "LH54",
                    "methodName": "万千",
                    "betFullName": "龙虎和万千",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["万:千"]
                    }
                }, {
                    "methodId": "LH53",
                    "methodName": "万百",
                    "betFullName": "龙虎和万百",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["万:百"]
                    }
                }, {
                    "methodId": "LH52",
                    "methodName": "万十",
                    "betFullName": "龙虎和万十",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["万:十"]
                    }
                }, {
                    "methodId": "LH51",
                    "methodName": "万个",
                    "betFullName": "龙虎和万个",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["万:个"]
                    }
                }, {
                    "methodId": "LH43",
                    "methodName": "千百",
                    "betFullName": "龙虎和千百",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["千:百"]
                    }
                }, {
                    "methodId": "LH42",
                    "methodName": "千十",
                    "betFullName": "龙虎和千十",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["千:十"]
                    }
                }, {
                    "methodId": "LH41",
                    "methodName": "千个",
                    "betFullName": "龙虎和万个",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["千:个"]
                    }
                }, {
                    "methodId": "LH32",
                    "methodName": "百十",
                    "betFullName": "龙虎和百十",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["百:十"]
                    }
                }, {
                    "methodId": "LH31",
                    "methodName": "百个",
                    "betFullName": "龙虎和百个",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["百:个"]
                    }
                }, {
                    "methodId": "LH21",
                    "methodName": "十个",
                    "betFullName": "龙虎和十个",
                    "plate": {
                        "parentPlate": "LHH",
                        "unitGroup": false,
                        "names": ["十个"]
                    }
                }]
            }]
        }];

        var playingNavData_HL11x5 = [{
                "familyName": "三码",
                "colRatio": "3",
                "playingGroups": [{
                    "groupName": "直选",
                    "fullGroupName": "前三直选",
                    "playingMethods": [{
                            "methodId": "N3PH",
                            "methodName": "前三直选复式",
                            "betFullName": "前三直选复式",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["一位", "二位", "三位"],
                                "unitGroup": false,
                                "random": [1, 1, 1]
                            }
                        }
                    ]
                }, {
                    "groupName": "组选",
                    "fullGroupName": "前三组选",
                    "playingMethods": [{
                            "methodId": "G3H",
                            "methodName": "前三组选复式",
                            "betFullName": "前三组选复式",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["前三"],
                                "random": [3],
                                "unitGroup": false
                            }
                        },
                        {
                            "methodId": "G3BH",
                            "methodName": "前三组选胆拖",
                            "betFullName": "前三组选胆拖",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["胆码", "拖码"],
                                "random": [1, 2],
                                "maxLength": 2,
                                "operations": [false, true],
                                "unitGroup": false
                            }
                        }
                    ]
                }]
            }, {
                "familyName": "二码",
                "colRatio": "3",
                "playingGroups": [{
                    "groupName": "直选",
                    "fullGroupName": "二码直选",
                    "playingMethods": [{
                            "methodId": "N2PH",
                            "methodName": "前二直选复式",
                            "betFullName": "前二直选复式",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["一位", "二位"],
                                "random": [1, 1],
                                "unitGroup": false
                            }
                        }
                    ]
                }, {
                    "groupName": "组选",
                    "fullGroupName": "二码组选",
                    "playingMethods": [{
                            "methodId": "G2H",
                            "methodName": "前二组选复式",
                            "betFullName": "前二组选复式",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["前二"],
                                "random": [2],
                                "unitGroup": false
                            }
                        },
                        {
                            "methodId": "G2BH",
                            "methodName": "前二组选胆拖",
                            "betFullName": "前二组选胆拖",
                            "plate": {
                                "parentPlate": "Number1",
                                "numbers": [{ "start": 1, "end": 11, "format": true }],
                                "names": ["胆码", "拖码"],
                                "maxLength": 1,
                                "operations": [false, true],
                                "unitGroup": false,
                                "random": [1, 1]
                            }
                        }
                    ]
                }]
            }, {
                "familyName": "不定位",
                "colRatio": "3",
                "playingGroups": [{
                    "groupName": "不定位",
                    "playingMethods": [{
                        "methodId": "A1H3",
                        "methodName": "前三不定位",
                        "betFullName": "前三不定位",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["前三"],
                            "random": [1],
                            "unitGroup": false
                        }
                    }]
                }]
            }, {
                "familyName": "趣味型",
                "colRatio": "2",
                "playingGroups": [{
                    "groupName": "趣味型",
                    "playingMethods": [{
                        "methodId": "FOEC",
                        "methodName": "定单双",
                        "betFullName": "趣味定单双",
                        "plate": {
                            "parentPlate": "Fun",
                            "names": ["定单双"],
                            "evenrow": { "定单双": true },
                            "unitGroup": false
                        }
                    }, {
                        "methodId": "FMN",
                        "methodName": "猜中位",
                        "betFullName": "趣味猜中位",
                        "plate": {
                            "parentPlate": "Number1",
                            "names": ["猜中位"],
                            "numbers": [{ "start": 3, "end": 9, "format": true }],
                            "unitGroup": false,
                            "random": [1]
                        }
                    }]
                }]
            }, {
                "familyName": "定位胆",
                "colRatio": "2",
                "playingGroups": [{
                    "groupName": "定位胆",
                    "playingMethods": [{
                        "methodId": "P3",
                        "methodName": "定位胆",
                        "betFullName": "趣味定位胆",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["一位", "二位", "三位"],
                            "unitGroup": false,
                            "random": [1, 1, 1]
                        }
                    }]
                }]
            }, {
                "familyName": "任选复式",
                "colRatio": "3",
                "playingGroups": [{
                    "groupName": "任选复式",
                    "playingMethods": [{
                        "methodId": "A1",
                        "methodName": "任选一中一复式",
                        "betFullName": "任选一中一复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选1中1"],
                            "unitGroup": false,
                            "random": [1]
                        }
                    }, {
                        "methodId": "A2",
                        "methodName": "任选二中二复式",
                        "betFullName": "任选二中二复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选2中2"],
                            "unitGroup": false,
                            "random": [2]
                        }
                    }, {
                        "methodId": "A3",
                        "methodName": "任选三中三复式",
                        "betFullName": "任选三中三复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选3中3"],
                            "unitGroup": false,
                            "random": [3]
                        }
                    }, {
                        "methodId": "A4",
                        "methodName": "任选四中四复式",
                        "betFullName": "任选四中四复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选4中4"],
                            "unitGroup": false,
                            "random": [4]
                        }
                    }, {
                        "methodId": "A5",
                        "methodName": "任选五中五复式",
                        "betFullName": "任选五中五复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选5中5"],
                            "unitGroup": false,
                            "random": [5]
                        }
                    }, {
                        "methodId": "A6",
                        "methodName": "任选六中五复式",
                        "betFullName": "任选六中五复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选6中5"],
                            "unitGroup": false,
                            "random": [6]
                        }
                    }, {
                        "methodId": "A7",
                        "methodName": "任选七中五复式",
                        "betFullName": "任选七中五复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选7中5"],
                            "unitGroup": false,
                            "random": [7]
                        }
                    }, {
                        "methodId": "A8",
                        "methodName": "任选八中五复式",
                        "betFullName": "任选八中五复式",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["选8中5"],
                            "unitGroup": false,
                            "random": [8]
                        }
                    }]
                }]
            },
            {
                "familyName": "任选胆拖",
                "colRatio": "3",
                "playingGroups": [{
                    "groupName": "任选胆拖",
                    "playingMethods": [{
                        "methodId": "A2B",
                        "methodName": "任选二中二胆拖",
                        "betFullName": "任选二中二胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 1,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,1]
                        }
                    }, {
                        "methodId": "A3B",
                        "methodName": "任选三中三胆拖",
                        "betFullName": "任选三中三胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 2,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,2]
                        }
                    }, {
                        "methodId": "A4B",
                        "methodName": "任选四中四胆拖",
                        "betFullName": "任选四中四胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 3,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,3]
                        }
                    }, {
                        "methodId": "A5B",
                        "methodName": "任选五中五胆拖",
                        "betFullName": "任选五中五胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 4,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,4]
                        }
                    }, {
                        "methodId": "A6B",
                        "methodName": "任选六中五胆拖",
                        "betFullName": "任选六中五胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 5,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,5]
                        }
                    }, {
                        "methodId": "A7B",
                        "methodName": "任选七中五胆拖",
                        "betFullName": "任选七中五胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 6,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,6]
                        }
                    }, {
                        "methodId": "A8B",
                        "methodName": "任选八中五胆拖",
                        "betFullName": "任选八中五胆拖",
                        "plate": {
                            "parentPlate": "Number1",
                            "numbers": [{ "start": 1, "end": 11, "format": true }],
                            "names": ["胆码", "拖码"],
                            "maxLength": 7,
                            "operations": [false, true],
                            "unitGroup": false,
                            "random": [1,7]
                        }
                    }]
                }]
            }
        ];

        var playingNavData_K3 = [{
            "familyName": "和值",
            "methodId": "N3T",
            "methodName": "和值",
            "betFullName": "快三和值",
            "plate": {
                "parentPlate": 'Number2',
                "names": ["和值"],
                "numbers": { "start": 3, "end": 18 }
            }
        }, {
            "familyName": "三不同号",
            "methodId": "N3D",
            "betFullName": "快三三不同号",
            "plate": {
                "parentPlate": 'Dice1',
                "data": [
                    ["123", "125", "134", "136", "145"],
                    ["124", "126", "135", "146", "156"],
                    ["236", "234", "246", "356", "345"],
                    ["245", "235", "256", "346", "456"]
                ]
            }
        }, {
            "familyName": "三同号",
            "methodId": "N3TRI",
            "betFullName": "快三三同号",
            "plate": {
                "parentPlate": 'Dice1',
                "data": [
                    ["666", "555", "444"],
                    ["333", "222", "111"]
                ]
            }
        }, {
            "familyName": "三连号",
            "betFullName": "快三三连号",
            "methodId": "N3SN",
            "plate": {
                "parentPlate": 'Dice1',
                "data": [
                    ["123", "234", "345", "456"]
                ]
            }
        }, {
            "familyName": "二不同号",
            "betFullName": "快三二不同号",
            "methodId": "N2D",
            "plate": {
                "parentPlate": 'Dice1',
                "data": [
                    ["12", "15", "24", "34", "45"],
                    ["13", "16", "25", "35", "46"],
                    ["14", "23", "26", "36", "56"]
                ]
            }
        }, {
            "familyName": "二同号",
            "betFullName": "快三二同号",
            "methodId": "N3PAIR",
            "plate": {
                "parentPlate": 'Dice2',
                "data": [{
                    key: ['11'],
                    value: ["112", "113", "114", "115", "116"]
                }, {
                    key: ['22'],
                    value: ["122", "223", "224", "225", "226"]
                }, {
                    key: ['33'],
                    value: ["133", "233", "334", "335", "336"]
                }, {
                    key: ['44'],
                    value: ["144", "244", "344", "445", "446"]
                }, {
                    key: ['55'],
                    value: ["155", "255", "355", "455", "556"]
                }, {
                    key: ['66'],
                    value: ["166", "266", "366", "466", "566"]
                }]
            }
        }, {
            "familyName": "单挑一骰",
            "methodId": "N1",
            "betFullName": "快三单挑一骰",
            "plate": {
                "parentPlate": 'Dice3',
                "data": [6, 5, 4, 3, 2, 1]
            }
        }];

        var playingNavData = {
            playingNavData_LT: playingNavData_LT,
            playingNavData_HL11x5: playingNavData_HL11x5,
            playingNavData_K3: playingNavData_K3
        }

        var getGameMapCNName = function() {
            var gameMapCNName = {
                'LT': {},
                'HL11x5': {},
                'K3': {}
            }

            var playNavData;
            var playingFamilyItem;
            var playingGroups;
            var playingMethods;
            var methodItem;
            for (var dataName in playingNavData) {
                var gameCode = dataName.split('_')[1];
                playNavData = playingNavData[dataName];

                for (var i = 0; i < playNavData.length; i++) {
                    playingFamilyItem = playNavData[i];
                    if (gameCode == 'K3') {
                        gameMapCNName[gameCode][playingFamilyItem.methodId] = {
                            methodName: playingFamilyItem.betFullName,
                            parentPalte: playingFamilyItem.plate.parentPlate
                        }
                    } else {
                        playingGroups = playingFamilyItem.playingGroups;
                        for (var j = 0; j < playingGroups.length; j++) {
                            playingMethods = playingGroups[j].playingMethods;
                            for (var k = 0; k < playingMethods.length; k++) {
                                methodItem = playingMethods[k];
                                gameMapCNName[gameCode][methodItem.methodId] = {
                                    methodName: methodItem.betFullName,
                                    parentPalte: methodItem.plate.parentPlate
                                }
                            }
                        }
                    }
                }
            }

            return gameMapCNName;
        }

        return {
            //通过gameCode 获取玩法名称
            getPlayNavByGameCode: function(gameCode) {
                return playingNavData["playingNavData_" + gameCode];
            },

            getPlayingFamily: function(playNavdata) {
                var playingFamily = [];
                for (var i = 0; i < playNavdata.length; i++) {
                    playingFamily.push(playNavdata[i]["familyName"]);
                }
                return playingFamily;
            },

            getPlayingGroup: function(playNavdata, familyName, gameCode) {
                var playingGroup = [];
                for (var i = 0; i < playNavdata.length; i++) {
                    if (familyName == playNavdata[i]["familyName"]) {
                        if (gameCode == 'K3') {
                            playingGroup = playNavdata[i]["plate"];
                        } else {
                            playingGroup = playNavdata[i]["playingGroups"];
                        }
                        return playingGroup;
                    }
                }
                return [];
            },

            getParentPlate: function(playNavdata, familyName) {
                var ParentPlate = [];
                for (var i = 0; i < playNavdata.length; i++) {
                    if (familyName == playNavdata[i]["familyName"]) {
                        ParentPlate = playNavdata[i].plate["parentPlate"];
                        return ParentPlate;
                    }
                }
                return [];
            },

            getParameter: function(playNavdata, familyName) {
                var Parameter = [];
                for (var i = 0; i < playNavdata.length; i++) {
                    if (familyName == playNavdata[i]["familyName"]) {
                        Parameter = playNavdata[i]["methodId"];
                        return Parameter;
                    }
                }
                return [];
            },

            getPlayFamilyByBetType: function(gameCode, betType) {
                var playNavData = playingNavData["playingNavData_" + gameCode];
                var playingFamilyItem;
                var playingGroups;
                var playingMethods;
                var methodItem;
                var playingFamilyName;
                for (var i = 0; i < playNavData.length; i++) {
                    playingFamilyItem = playNavData[i];
                    if (gameCode == 'K3') {
                        if (playingFamilyItem.methodId == betType) {
                            playingFamilyName = playingFamilyItem.familyName;
                            break;
                        }
                    } else {
                        playingGroups = playingFamilyItem.playingGroups;
                        for (var j = 0; j < playingGroups.length; j++) {
                            playingMethods = playingGroups[j].playingMethods;
                            for (var k = 0; k < playingMethods.length; k++) {
                                methodItem = playingMethods[k];
                                if (methodItem.methodId == betType) {
                                    playingFamilyName = playingFamilyItem.familyName;
                                    break;
                                }
                            }
                        }
                    }

                }

                return playingFamilyName;
            },

            gameMapCNName: getGameMapCNName()

        }
    }

    return factory;
});
