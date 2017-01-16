define([],function () {
  'use strict';

  var factory = function(){
    var K3_playDesc = [
      //和值
      {
        betType: 'N3T',
        gameCode: 'K3',
        name: '和值',
        dataFormatter: [
          []
        ],
        plateType: '12',
        title: "快3和值",
        selectMethod: '至少选择1个和值（3个号码之和）',//15.60
        winningRule: "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖"
      },
      //三不同号
      {
        betType: 'N3D',
        gameCode: 'K3',
        name: '三不同号',
        dataFormatter: [
          []
        ],
        plateType: '13-1',
        title: "快3三不同号",
        selectMethod: '对所有3不同号进行单选或多选',//70.20
        winningRule: "对所有3不同号进行单选或多选，选号与开奖号相同（顺序不限）即中奖"
      },

      //三同号
      {
        betType: 'N3TRI',
        gameCode: 'K3',
        name: '三同号',
        dataFormatter: [
          []
        ],
        plateType: '13-2',
        title: "快3三同号",
        selectMethod: '豹子号（111，222，333，444，555，666）进行单选或通选',//421.20
        winningRule: "对豹子号（111，222，333，444，555，666）进行单选或通选投注，选号与开奖号相同即中奖"
      },

      //三连号
      {
        betType: 'N3SN',
        gameCode: 'K3',
        name: '三连号',
        dataFormatter: [
          []
        ],
        plateType: '13-3',
        title: "快3三连号",
        selectMethod: '3个相连的号码（123，234，345，456)进行单选或多选',//70.20
        winningRule: "对所有3个相连的号码（123，234，345，456)进行单选或多选投注，选号与开奖号相同（顺序不限）即中奖"
      },

      //二不同号
      {
        betType: 'N2D',
        gameCode: 'K3',
        name: '二不同号',
        dataFormatter: [
          []
        ],
        plateType: '13-4',
        title: "快3二不同号",
        selectMethod: '2不同号进行单选或多选',//14.04
        winningRule: "对所有2不同号进行单选或多选，选号与开奖号中任意2个号码相同即中奖"
      },

      //二同号
      {
        betType: 'N3PAIR',
        gameCode: 'K3',
        name: '二同号',
        dataFormatter: [
          []
        ],
        plateType: '13-5',
        title: "快3二同号",
        selectMethod: '选择1对相同号码和1个不同号码',//140.40
        winningRule: "选择1对相同号码和1个不同号码进行单选或者多选投注，选号与开奖号相同（顺序不限）即中奖"
      },

      //单挑一骰
      {
        betType: 'N1',
        gameCode: 'K3',
        name: '单挑一骰',
        dataFormatter: [
          []
        ],
        plateType: '14',
        title: "快3单挑一骰",
        selectMethod: '选择1个或者多个骰号',//4.63
        winningRule: "选择1个或者多个骰号，如果开奖号码中包含该号（顺序不限）即中奖"
      }
    ];

    return K3_playDesc;
  }

  return factory;
})
