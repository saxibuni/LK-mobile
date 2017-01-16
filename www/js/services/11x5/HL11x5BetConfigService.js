define([],function () {
  'use strict';


  var factory = function(){
    var HL11X5_playDesc =[
      //三码
      {
        betType: 'N3PH',
        gameCode: 'HL11x5',
        name: '前三直选复式',
        dataFormatter: [
          [],
          [],
          []
        ],
        plateType: 10,
        title: "前三直选复式",
        selectMethod: "从第一位、第二位、第三位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。"
      },
      {
        betType: 'G3H',
        gameCode: 'HL11x5',
        name: '前三组选复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "前三组选复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
      },
      {
        betType: 'G3BH',
        gameCode: 'HL11x5',
        name: '前三组选胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "前三组选胆拖",
        selectMethod: "从01-11中，选取3个或3个以上号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个",
        winningRule: "分别从胆码和拖码的01-11中，选取3个及以上的号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个，所选单注号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
      },

      //二码
      {
        betType: 'N2PH',
        gameCode: 'HL11x5',
        name: '前二直选复式',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        title: "前二直选复式",
        selectMethod: "从第一位、第二位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。"
      },
      {
        betType: 'G2H',
        gameCode: 'HL11x5',
        name: '前二组选复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "前二组选复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
      }, {
        betType: 'G2BH',
        gameCode: 'HL11x5',
        name: '前二组选胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "前二组选胆拖",
        selectMethod: "从01-11中，选取2个或2个以上号码进行投注，胆码个数=1个，胆码加拖码个数≥2个",
        winningRule: "分别从胆码和拖码的01-11中，选取2个及以上的号码进行投注，胆码个数=1个，胆码加拖码个数≥2个，所选单注号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
      },

      //不定式
      {
        betType: 'A1H3',
        gameCode: 'HL11x5',
        name: '前三不定式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "前三不定位",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11中共11个号码中选择1个号码，每注号码由1个号码组成，只要当期顺利摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖"
      },

      //趣味型
      {
        betType: 'FOEC',
        gameCode: 'HL11x5',
        name: '定单双',
        dataFormatter: [
          []
        ],
        plateType: 9,
        title: "趣味定单双",
        selectMethod: "从不同的单双组合中任意选择1个或1个以上的组合",
        winningRule: "从6种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。"
      }, {
        betType: 'FMN',
        gameCode: 'HL11x5',
        name: '猜中位',
        dataFormatter: [
          []
        ],
        plateType: 11,
        title: "趣味猜中位",
        selectMethod: "从3-9中任意选择1个或1个以上数字",
        winningRule: "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。"
      },

      //定位胆
      {
        betType: 'P3',
        gameCode: 'HL11x5',
        name: '定位胆',
        dataFormatter: [
          [],
          [],
          []
        ],
        plateType: 10,
        title: "趣味定位胆",
        selectMethod: "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码",
        winningRule: "从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
      },

      //任选复式
      {
        betType: 'A1',
        gameCode: 'HL11x5',
        name: '任选一中一复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选一中一复式",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      }, {
        betType: 'A2',
        gameCode: 'HL11x5',
        name: '任选二中二复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选二中二复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      }, {

        betType: 'A3',
        gameCode: 'HL11x5',
        name: '任选三中三复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选三中三复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      }, {

        betType: 'A4',
        gameCode: 'HL11x5',
        name: '任选四中四复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选四中四复式",
        selectMethod: "从01-11中任意选择4个或4个以上号码",
        winningRule: "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      }, {

        betType: 'A5',
        gameCode: 'HL11x5',
        name: '任选五中五复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选五中五复式",
        selectMethod: "从01-11中任意选择5个或5个以上号码",
        winningRule: "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      }, {

        betType: 'A6',
        dataFormatter: [
          []
        ],
        plateType: 10,
        gameCode: 'HL11x5',
        name: '任选六中五复式',
        title: "任选六中五复式",
        selectMethod: "从01-11中任意选择6个或6个以上号码",
        winningRule: "投注方案：01 02 03 04 05 06；开奖号码包含01 02 03 04 05，顺序不限，即中任六中五一等奖"
      }, {
        betType: 'A7',
        gameCode: 'HL11x5',
        name: '任选七中五复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选七中五复式",
        selectMethod: "从01-11中任意选择7个或7个以上号码",
        winningRule: "从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"

      }, {
        betType: 'A8',
        gameCode: 'HL11x5',
        name: '任选八中五复式',
        dataFormatter: [
          []
        ],
        plateType: 10,
        title: "任选八中五复式",
        selectMethod: "从01-11中任意选择8个或8个以上号码",
        winningRule: "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
      },
      //任选胆拖
      {
        betType: 'A2B',
        gameCode: 'HL11x5',
        name: '任选二中二胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "任选二中二胆拖",
        selectMethod: "从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码",
        winningRule: "从01-11共11个号码中选择2个及以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A3B',
        gameCode: 'HL11x5',
        name: '任选三中三胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "任选三中三胆拖",
        selectMethod: "从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码",
        winningRule: "从01-11共11个号码中选择3个及以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A4B',
        gameCode: 'HL11x5',
        name: '任选四中四胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [3],
        title: "任选四中四胆拖",
        selectMethod: "从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码",
        winningRule: "从01-11共11个号码中选择4个及以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A5B',
        gameCode: 'HL11x5',
        name: '任选五中五胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [4],
        title: "任选五中五胆拖",
        selectMethod: "从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码",
        winningRule: "从01-11共11个号码中选择5个及以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A6B',
        gameCode: 'HL11x5',
        name: '任选六中五胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [5],
        title: "任选六中五胆拖",
        selectMethod: "从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码",
        winningRule: "从01-11共11个号码中选择6个及以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A7B',
        gameCode: 'HL11x5',
        name: '任选七中五胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [6],
        title: "任选七中五胆拖",
        selectMethod: "从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码",
        winningRule: "从01-11共11个号码中选择7个及以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }, {
        betType: 'A8B',
        gameCode: 'HL11x5',
        name: '任选八中五胆拖',
        dataFormatter: [
          [],
          []
        ],
        plateType: 10,
        selectDataLength: [7],
        title: "任选八中五胆拖",
        selectMethod: "从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码",
        winningRule: "从01-11共11个号码中选择8个及以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
      }
    ];
    return HL11X5_playDesc;
  }
    return factory;
});


