define(function(require) {
  'use strict';

  var factory = function(){
      var LT_playDesc = [
        //五星
        {
          betType: 'N5P',
          gameCode: 'LT',
          name: '五星直选复式',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "五星直选复式",
          selectMethod: '从个、十、百、千、万位各选一个号码组成一注',
          winningRule: "从万位、千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖"
        }, {
          betType: 'N5C',
          gameCode: 'LT',
          name: '五星直选组合',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "五星直选组合",
          selectMethod: "从个、十、百、千、万位各选一个号码组成五注",
          winningRule: "从万位、千位、百位、十位、个位中各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。"
        },

        {
          betType: 'G5X120',
          gameCode: 'LT',
          name: '五星组选120',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "五星组选120",
          selectMethod: "从0-9中选择5个号码组成一注",
          winningRule: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。"
        }, {
          betType: 'G5X60',
          gameCode: 'LT',
          name: '五星组选60',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "五星组选60",
          selectMethod: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注",
          winningRule: "选择1个“二重号”和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
        }, {
          betType: 'G5X30',
          gameCode: 'LT',
          name: '五星组选30',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "五星组选30",
          selectMethod: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注",
          winningRule: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖"
        }, {
          betType: 'G5X20',
          gameCode: 'LT',
          name: '五星组选20',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "五星组选20",
          selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
          winningRule: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
        }, {
          betType: 'G5X10',
          gameCode: 'LT',
          name: '五星组选10',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "五星组选10",
          selectMethod: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注",
          winningRule: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。"
        }, {
          betType: 'G5X5',
          gameCode: 'LT',
          name: '五星组选5',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "五星组选5",
          selectMethod: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注",
          winningRule: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。"
        },


        //四星玩法组规则
        {
          betType: 'N4P',
          gameCode: 'LT',
          name: '四星直选复式',
          dataFormatter: [
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "四星直选复式",
          selectMethod: "从个、十、百、千位各选一个号码组成一注",
          winningRule: "从千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。"
        }, {
          betType: 'N4C',
          gameCode: 'LT',
          name: '四星组合',
          dataFormatter: [
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "四星直选组合",
          selectMethod: "从个、十、百、千位各选一个号码组成四注",
          winningRule: "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。"
        },

        {
          betType: 'G4X24',
          gameCode: 'LT',
          name: '四星组选24',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "四星组选24",
          selectMethod: "从0-9中选择4个号码组成一注",
          winningRule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖"
        }, {
          betType: 'G4X12',
          gameCode: 'LT',
          name: '四星组选12',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "四星组选12",
          selectMethod: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注",
          winningRule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
        }, {
          betType: 'G4X6',
          gameCode: 'LT',
          name: '四星组选6',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "四星组选6",
          selectMethod: "从“二重号”选择两个号码组成一注",
          winningRule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。"
        }, {
          betType: 'G4X4',
          gameCode: 'LT',
          name: '四星组选4',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "四星组选4",
          selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
          winningRule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
        },


        //前三玩法组规则
        {
          betType: 'N3PF',
          gameCode: 'LT',
          name: '前三直选复式',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "前三直选复式",
          selectMethod: "从万、千、百位各选一个号码组成一注",
          winningRule: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。"
        }, {
          betType: 'N3TF',
          gameCode: 'LT',
          name: '前三直选和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "前三-直选和值",
          selectMethod: "从0-27中任意选择1个或1个以上号码。",
          winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。"
        }, {
          betType: 'N3DF',
          gameCode: 'LT',
          name: '前三直选跨度',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三直选跨度",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。"
        }, {
          betType: 'N3CF',
          gameCode: 'LT',
          name: '前三直选组合',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "前三直选组合",
          selectMethod: "从万、千、百位各选一个号码组成三注",
          winningRule: "从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
        },

        {
          betType: 'G3X3F',
          gameCode: 'LT',
          name: '前三组三',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三组三",
          selectMethod: "从0-9中任意选择2个或2个以上号码",
          winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。"
        }, {
          betType: 'G3X6F',
          gameCode: 'LT',
          name: '前三组六',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三组六",
          selectMethod: "从0-9中任意选择3个或3个以上号码",
          winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。"
        }, { //特殊情况 上传
          betType: 'G3MXF',
          gameCode: 'LT',
          name: '前三混合组选',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "前三混合组选",
          selectMethod: "手动输入号码，至少输入1个三位数号码",
          winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖",
          betRuleTip: "格式范例：123 456 768 330 988"
        }, {
          betType: 'G3TF',
          gameCode: 'LT',
          name: '前三混合和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "前三组选和值",
          selectMethod: "从1-26中选择1个号码",
          winningRule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。"
        },{
          betType: 'G3BF',
          gameCode: 'LT',
          name: '前三包胆',
          dataFormatter: [
            []
          ],
          selectDataLength: [1],
          plateType: 3,
          title: "前三包胆",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
        },

        {
          betType: 'S3TDF',
          gameCode: 'LT',
          name: '前三和值尾数',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三和值尾数",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。"
        }, {
          betType: 'S3SF',
          gameCode: 'LT',
          name: '前三特殊号码',
          dataFormatter: [
            []
          ],
          plateType: 4,
          title: "前三特殊号码",
          selectMethod: "选择一个号码形态",
          winningRule: "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的万、千、百位出现三个相同号码； 2.顺子号的万、千、百位不分顺序；3.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。"
        },


        //中三玩法组规则
        {
          betType: 'N3PM',
          gameCode: 'LT',
          name: '中三直选复式',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "中三直选复式",
          selectMethod: "从千、百、十位各选一个号码组成一注",
          winningRule: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。"
        },  {
          betType: 'N3TM',
          gameCode: 'LT',
          name: '中三直选和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "中三直选和值",
          selectMethod: "从0-27中任意选择1个或1个以上号码。",
          winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。"
        }, {
          betType: 'N3DM',
          gameCode: 'LT',
          name: '中三直选跨度',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三直选跨度",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖。"
        }, {
          betType: 'N3CM',
          gameCode: 'LT',
          name: '中三直选组合',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "中三直选组合",
          selectMethod: "从千、百、十位各选一个号码组成三注",
          winningRule: "从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
        },

        {
          betType: 'G3X3M',
          gameCode: 'LT',
          name: '中三组三',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三组三",
          selectMethod: "从0-9中任意选择2个或2个以上号码",
          winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。"
        }, {
          betType: 'G3X6M',
          gameCode: 'LT',
          name: '中三组六',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三组六",
          selectMethod: "从0-9中任意选择3个或3个以上号码",
          winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。"
        }, { //特殊情况 上传
          betType: 'G3MXM',
          gameCode: 'LT',
          name: '中三混合组选',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "中三混合组选",
          selectMethod: "手动输入号码，至少输入1个三位数号码",
          winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
          betRuleTip: "格式范例：123 456 768 330 988"
        }, {
          betType: 'G3TM',
          gameCode: 'LT',
          name: '中三组选和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "中三组选和值",
          selectMethod: "从1-26中选择1个号码",
          winningRule: "所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。"
        }, { //特殊情况 上传
          betType: 'G3X3SM',
          gameCode: 'LT',
          name: '中三组三单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "中三组三单式",
          selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
          winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
          betRuleTip: "格式范例：122 455 778 330 988"
        }, { //特殊情况 上传
          betType: 'G3X6SM',
          gameCode: 'LT',
          name: '中三组六单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "中三组六单式",
          selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
          winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
          betRuleTip: "格式范例：123 456 768 340 987"
        }, {
          betType: 'G3BM',
          gameCode: 'LT',
          name: '中三包胆',
          dataFormatter: [
            []
          ],
          selectDataLength: [1],
          plateType: 3,
          title: "中三包胆",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
        },

        {
          betType: 'S3TDM',
          gameCode: 'LT',
          name: '中三和值尾数',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三和值尾数",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。"
        }, {
          betType: 'S3SM',
          gameCode: 'LT',
          name: '中三特殊号码',
          dataFormatter: [
            []
          ],
          plateType: 4,
          title: "中三特殊号码",
          selectMethod: "选择一个号码形态",
          winningRule: "所选的号码特殊属性和开奖号码中间3位的属性一致，即为中奖。其中：1.豹子号的千、百、十位出现三个相同号码； 2.顺子号的千、百、十位不分顺序；3.对子号指的是开奖号码的中间三位当中，任意2位数字相同的三位数号码。"
        },


        //后三玩法组规则
        {
          betType: 'N3PL',
          gameCode: 'LT',
          name: '后三直选复式',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "后三直选复式",
          selectMethod: "从个、十、百位各选一个号码组成一注",
          winningRule: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。"
        }, { //特殊情况 上传
          betType: 'N3SL',
          gameCode: 'LT',
          name: '后三直选单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "后三直选单式",
          selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
          winningRule: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
          betRuleTip: "格式范例：123 456 768 330 988"
        }, {
          betType: 'N3TL',
          gameCode: 'LT',
          name: '后三直选和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "后三直选和值",
          selectMethod: "从0-27中任意选择1个或1个以上号码",
          winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。"
        }, {
          betType: 'N3DL',
          gameCode: 'LT',
          name: '后三直选跨度',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三直选跨度",
          selectMethod: "从0-9中选择1个号码。",
          winningRule: "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。"
        }, {
          betType: 'N3CL',
          gameCode: 'LT',
          name: '后三直选组合',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          title: "后三直选组合",
          selectMethod: "从个、十、百位各选一个号码组成三注",
          winningRule: "从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
        },

        {
          betType: 'G3X3L',
          gameCode: 'LT',
          name: '后三组三',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三组三",
          selectMethod: "从0-9中任意选择2个或2个以上号码",
          winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。"
        }, {
          betType: 'G3X6L',
          gameCode: 'LT',
          name: '后三组六',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三组六",
          selectMethod: "从0-9中任意选择3个或3个以上号码。",
          winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。"
        }, { //特殊情况 上传
          betType: 'G3MXL',
          gameCode: 'LT',
          name: '后三混合组选',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "后三-组选-混合组选",
          selectMethod: "手动输入号码，至少输入1个三位数号码。",
          winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
          betRuleTip: "格式范例：123 456 768 330 988"
        }, {
          betType: 'G3TL',
          gameCode: 'LT',
          name: '后三组选和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "后三组选和值",
          selectMethod: "从1-26中选择1个号码",
          winningRule: "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。"
        }, { //特殊情况 上传
          betType: 'G3X3SL',
          gameCode: 'LT',
          name: '后三组三单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "后三组三单式",
          selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
          winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
          betRuleTip: "格式范例：113 446 778 330 988"
        }, { //特殊情况 上传
          betType: 'G3X6SL',
          gameCode: 'LT',
          name: '后三组六单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "后三组六单式",
          selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
          winningRule: "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
          betRuleTip: "格式范例：123 456 768 340 908"
        }, {
          betType: 'G3BL',
          gameCode: 'LT',
          name: '后三包胆',
          dataFormatter: [
            []
          ],
          selectDataLength: [1],
          plateType: 3,
          title: "后三包胆",
          selectMethod: "从0-9中选择1个号码。",
          winningRule: "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。"
        },

        {
          betType: 'S3TDL',
          gameCode: 'LT',
          name: '后三和值尾数',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三和值尾数",
          selectMethod: "从0-9中选择1个号码",
          winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。"
        }, {
          betType: 'S3SL',
          gameCode: 'LT',
          name: '后三特殊号码',
          dataFormatter: [
            []
          ],
          plateType: 4,
          title: "后三特殊号码",
          selectMethod: "选择一个号码形态",
          winningRule: "所选的号码特殊属性和开奖号码后3位的属性一致，即为中奖。其中：1.豹子号的个、十、百位出现三个相同号码；2.顺子号的个、十、百位不分顺序；3.对子号指的是开奖号码的后三位当中，任意2位数字相同的三位数号码。"
        },


        //二星玩法组规则
        {
          betType: 'N2PL',
          gameCode: 'LT',
          name: '二星直选后二复式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "二星后二复式",
          selectMethod: "从十、个位各选一个号码组成一注",
          winningRule: "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。"
        }, { //特殊情况 上传
          betType: 'N2SL',
          gameCode: 'LT',
          name: '二星直选后二单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "二星后二单式",
          selectMethod: "手动输入号码，至少输入1个两位数号码",
          winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
          betRuleTip: "格式范例：12 45 78 33 88"
        }, {
          betType: 'N2TL',
          gameCode: 'LT',
          name: '二星直选后二和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "二星后二和值",
          selectMethod: "从0-18中任意选择1个或1个以上号码",
          winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。"
        }, {
          betType: 'N2DL',
          gameCode: 'LT',
          name: '二星直选后二跨度',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "二星后二跨度",
          selectMethod: "从0-9中任意选择1个号码 ",
          winningRule: "所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。"
        }, {
          betType: 'N2PF',
          gameCode: 'LT',
          name: '二星直选前二复式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          title: "二星前二复式",
          selectMethod: "从万、千位各选一个号码组成一注",
          winningRule: "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。"
        }, { //特殊情况 上传
          betType: 'N2SF',
          gameCode: 'LT',
          name: '二星直选前二单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "二星前二单式",
          selectMethod: "手动输入号码，至少输入1个两位数号码",
          winningRule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
          betRuleTip: "格式范例：12 45 78 33 88"
        }, {
          betType: 'N2TF',
          gameCode: 'LT',
          name: '二星直选前二和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "二星前二和值",
          selectMethod: "从0-18中任意选择1个或1个以上号码",
          winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。"
        }, {
          betType: 'N2DF',
          gameCode: 'LT',
          name: '二星直选前二跨度',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "二星前二跨度",
          selectMethod: "从0-9中任意选择1个号码。",
          winningRule: "所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。"
        },

        {
          betType: 'G2L',
          gameCode: 'LT',
          name: '二星组选后二复式',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "二星后二复式",
          selectMethod: "从0-9中任意选择2个或2个以上号码。",
          winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。"
        }, { //特殊情况 上传
          betType: 'G2SL',
          gameCode: 'LT',
          name: '二星组选后二单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "二星后二单式",
          selectMethod: "手动输入号码，至少输入1个两位数号码",
          winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
          betRuleTip: "格式范例：12 45 78 34 89"
        }, {
          betType: 'G2TL',
          gameCode: 'LT',
          name: '二星组选后二和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "二星后二和值",
          selectMethod: "从1-17中任意选择1个或1个以上号码",
          winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。"
        }, {
          betType: 'G2BL',
          gameCode: 'LT',
          name: '二星组选后二包胆',
          dataFormatter: [
            []
          ],
          plateType: 3,
          selectDataLength: [1],
          title: "二星后二包胆",
          selectMethod: "从0-9中任意选择1个包胆号码",
          winningRule: "从0-9中任意选择1个包胆号码，开奖号码的十位、个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
        }, {
          betType: 'G2F',
          gameCode: 'LT',
          name: '二星组选前二复式',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "二星前二复式",
          selectMethod: "从0-9中任意选择2个或2个以上号码",
          winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限（不含对子号），即为中奖。"
        }, { //特殊情况 上传
          betType: 'G2SF',
          gameCode: 'LT',
          name: '二星组选前二单式',
          dataFormatter: [
            []
          ],
          plateType: 2,
          title: "二星前二单式",
          selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
          winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
          betRuleTip: "格式范例：12 45 78 34 89"
        }, {
          betType: 'G2TF',
          gameCode: 'LT',
          name: '二星组选前二和值',
          dataFormatter: [
            []
          ],
          plateType: 3,
          title: "二星前二和值",
          selectMethod: "从1-17中任意选择1个或1个以上号码",
          winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。"
        }, {
          betType: 'G2BF',
          gameCode: 'LT',
          name: '二星组选前二包胆',
          dataFormatter: [
            []
          ],
          plateType: 3,
          selectDataLength: [1],
          title: "二星前二包胆",
          selectMethod: "从0-9中任意选择1个包胆号码",
          winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
        },

        //一星玩法组规则
        {
          betType: 'N1',
          gameCode: 'LT',
          name: '一星定位胆',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "一星定位胆",
          selectMethod: "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
          winningRule: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
        },


        //不定式玩法组规则
        {
          betType: 'A1L3',
          gameCode: 'LT',
          name: '后三一码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三一码不定位",
          selectMethod: "从0-9中任意选择1个以上号码",
          winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。"
        }, {
          betType: 'A2L3',
          gameCode: 'LT',
          name: '后三二码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "后三二码不定位",
          selectMethod: "从0-9中任意选择2个以上号码",
          winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。"
        }, {
          betType: 'A1F3',
          gameCode: 'LT',
          name: '前三一码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三一码不定位",
          selectMethod: "从0-9中任意选择1个以上号码",
          winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。"
        }, {
          betType: 'A2F3',
          gameCode: 'LT',
          name: '前三二码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "前三二码不定位",
          selectMethod: "从0-9中任意选择2个以上号码",
          winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。"
        }, {
          betType: 'A1M3',
          gameCode: 'LT',
          name: '中三一码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三一码不定位",
          selectMethod: "从0-9中任意选择1个以上号码",
          winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。"
        }, {
          betType: 'A2M3',
          gameCode: 'LT',
          name: '中三二码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "中三二码不定位",
          selectMethod: "从0-9中任意选择2个以上号码",
          winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位中同时包含所选的2个号码，即为中奖。"
        },

        {
          betType: 'A1L4',
          gameCode: 'LT',
          name: '四星一码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "四星一码不定位",
          selectMethod: "从0-9中任意选择1个以上号码",
          winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。"
        }, {
          betType: 'A2L4',
          gameCode: 'LT',
          name: '四星二码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "四星二码不定位",
          selectMethod: "从0-9中任意选择2个以上号码",
          winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖"
        },

        {
          betType: 'A2N5',
          gameCode: 'LT',
          name: '五星二码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "五星二码不定位",
          selectMethod: "从0-9中任意选择2个以上号码",
          winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。"
        }, {
          betType: 'A3N5',
          gameCode: 'LT',
          name: '五星三码不定位',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "五星三码不定位",
          selectMethod: "从0-9中任意选择3个以上号码",
          winningRule: "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。"
        },


        //大小单双玩法组规则
        {
          betType: 'BSOEL2',
          gameCode: 'LT',
          name: '后二大小单双',
          dataFormatter: [
            [],
            []
          ],
          plateType: 5,
          title: "后二大小单双",
          selectMethod: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
          winningRule: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
        }, {
          betType: 'BSOEL3',
          gameCode: 'LT',
          name: '后三大小单双',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 5,
          title: "后三大小单双",
          selectMethod: "从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注",
          winningRule: "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
        }, {
          betType: 'BSOEF2',
          gameCode: 'LT',
          name: '前二大小单双',
          dataFormatter: [
            [],
            []
          ],
          plateType: 5,
          title: "前二大小单双",
          selectMethod: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
          winningRule: "对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
        }, {
          betType: 'BSOEF3',
          gameCode: 'LT',
          name: '前三大小单双',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 5,
          title: "前三大小单双",
          selectMethod: "从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注",
          winningRule: "对万位、千位和百位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
        }, {
          betType: 'BSOEM3',
          gameCode: 'LT',
          name: '中三大小单双',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 5,
          title: "中三大小单双",
          selectMethod: "从千位、百位、十位中的“大、小、单、双”中至少各选一个组成一注",
          winningRule: "对千位和百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
        },



        //趣味玩法组规则
        {
          betType: 'F5N3',
          gameCode: 'LT',
          name: '五码趣味三星',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 7,
          funRow: [1, 2],
          title: "五码趣味三星",
          selectMethod: "分别从万位与千位中各选择一个大小号属性，并从百位、十位、个位中至少各选1个号码组成一注",
          winningRule: "在个位、十位、百位上至少各选1个号码，并从千位与万位的“大小号”中分别任选一种号码进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
        }, {
          betType: 'F4N3',
          gameCode: 'LT',
          name: '四码趣味三星',
          dataFormatter: [
            [],
            [],
            [],
            []
          ],
          plateType: 7,
          funRow: [1],
          title: "四码趣味三星",
          selectMethod: "选择一个千位的大小号属性，并从百位、十位、个位中至少各选1个号码",
          winningRule: "在个位、十位、百位上至少各选1个号码，并从千位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
        }, {
          betType: 'F3N2L',
          gameCode: 'LT',
          name: '后三趣味二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 7,
          funRow: [1],
          title: "后三趣味二星",
          selectMethod: "选择一个百位的大小号属性，并从十位、个位中至少各选1个号码",
          winningRule: "在个位、十位上至少各选1个号码，并从百位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容和开奖号码的后二位相同，顺序一致，即可中奖。"
        }, {
          betType: 'F3N2F',
          gameCode: 'LT',
          name: '前三趣味二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 7,
          funRow: [1],
          title: "前三趣味二星",
          selectMethod: "选择一个万位的大小号属性，并从千位、百位中至少各选1个号码",
          winningRule: "在千位、百位上至少各选1个号码，并从万位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
        }, {
          betType: 'F3N2M',
          gameCode: 'LT',
          name: '中三趣味二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 7,
          funRow: [1],
          title: "中三趣味二星",
          selectMethod: "选择一个千位的大小号属性，并从百位、十位中至少各选1个号码",
          winningRule: "在百位、十位上至少各选1个号码，并从千位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
        },

        {
          betType: 'R5N3',
          gameCode: 'LT',
          name: '五码区间三星',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 8,
          funRow: [1, 2],
          title: "五码区间三星",
          selectMethod: "分别从万位与千位中各选择一个区间，并从百位、十位、个位中至少各选1个号码组成一注",
          winningRule: "在个位、十位、百位上至少各选1个号码，并从千位及万位的5个区间中至少分别选择一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
        }, {
          betType: 'R4N3',
          gameCode: 'LT',
          name: '四码区间三星',
          dataFormatter: [
            [],
            [],
            [],
            []
          ],
          plateType: 8,
          funRow: [1],
          title: "四码区间三星",
          selectMethod: "选择一个千位号码区间，并从百位、十位、个位中至少各选择1个号码组成一注",
          winningRule: "在个位、十位、百位上至少各选1个号码，并从千位的5个区间中至少任选一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
        }, {
          betType: 'R3N2L',
          gameCode: 'LT',
          name: '后三区间二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 8,
          funRow: [1],
          title: "后三区间二星",
          selectMethod: "选择一个百位号码区间，并从十位、个位中至少各选择1个号码组成一注",
          winningRule: "选择一个百位号码区间，并从十位、个位中各选择1个号码组成一注。投注内容只要和开奖号码的后二位相同，顺序一致，即可中奖。"
        }, {
          betType: 'R3N2F',
          gameCode: 'LT',
          name: '前三区间二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 8,
          funRow: [1],
          title: "前三区间二星",
          selectMethod: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注",
          winningRule: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
        }, {
          betType: 'R3N2M',
          gameCode: 'LT',
          name: '中三区间二星',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 8,
          funRow: [1],
          title: "中三区间二星",
          selectMethod: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注",
          winningRule: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
        },

        {
          betType: 'SA1',
          gameCode: 'LT',
          name: '一帆风顺',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "一帆风顺",
          selectMethod: "从0-9中任意选择1个以上号码",
          winningRule: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。"
        }, {
          betType: 'SA2',
          gameCode: 'LT',
          name: '好事成双',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "好事成双",
          selectMethod: "从0-9中任意选择1个以上的二重号码",
          winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。"
        }, {
          betType: 'SA3',
          gameCode: 'LT',
          name: '三星报喜',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "三星报喜",
          selectMethod: "从0-9中任意选择1个以上的三重号码",
          winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。"
        }, {
          betType: 'SA4',
          gameCode: 'LT',
          name: '四季发财',
          dataFormatter: [
            []
          ],
          plateType: 1,
          title: "四季发财",
          selectMethod: "从0-9中任意选择1个以上的四重号码",
          winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。"
        },


        //任选玩法组规则
        {
          betType: 'A2P',
          gameCode: 'LT',
          name: '任选二直选复式',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "任选二直选复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，百位8。开奖号码：51812，即中任二直选。"
        }, { //特殊情况 上传
          betType: 'A2S',
          gameCode: 'LT',
          name: '任选二直选单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选二直选单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：位置选择万位、百位，输入号码58。开奖号码：51812，即中任二直选单式。",
          betRuleTip: "格式范例：12 45 78 33 88"
        }, {
          betType: 'A2T',
          gameCode: 'LT',
          name: '任选二直选和值',
          dataFormatter: [
            [],
            []
          ],
          plateType: 3,
          unitGroup: true,
          title: "任选二直选和值",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
          winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位，选择和值号码13。开奖号码：51812，即中任二直选和值。"
        }, {
          betType: 'A2G2',
          gameCode: 'LT',
          name: '任选二组选复式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选二组选复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，号码区至少选择两个号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选复式。"
        }, { //特殊情况 上传
          betType: 'A2G2S',
          gameCode: 'LT',
          name: '任选二组选单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选二组选单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选单式。",
          betRuleTip: "格式范例：12 45 78 34 89"
        }, {
          betType: 'A2G2T',
          gameCode: 'LT',
          name: '任选二组选和值',
          dataFormatter: [
            [],
            []
          ],
          plateType: 3,
          unitGroup: true,
          title: "任选二组选和值",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
          winningRule: "所选号码数值等于开奖号码的二个数字相加之和，即为中奖。如投注方案：选择万位和百位，选择和值13。开奖号码：51812或81512，即中任二组选和值。"
        },

        {
          betType: 'A3P',
          gameCode: 'LT',
          name: '任选三直选复式',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "任选三直选复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成一注，",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位8，个位2。开奖号码58692，即中任三直选。"
        }, { //特殊情况 上传
          betType: 'A3S',
          gameCode: 'LT',
          name: '任选三直选单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选三直选单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少手动输入一个三位数的号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。投注方案：位置选择万位、百位和个位，输入号码528，开奖号码57298，即中任三直选（单式）。",
          betRuleTip: "格式范例：123 456 789 335 882"
        }, {
          betType: 'A3T',
          gameCode: 'LT',
          name: '任选三直选和值',
          dataFormatter: [
            [],
            []
          ],
          plateType: 3,
          unitGroup: true,
          title: "任选三直选和值",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。",
          winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位和个位，选择和值号码15，开奖号码51812，即中任三直选和值。"
        }, {
          betType: 'A3G3X3',
          gameCode: 'LT',
          name: '任选三组三复式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选三组三复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择两个号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码12，开奖号码11812，即中任三组三。"
        }, { //特殊情况 上传
          betType: 'A3G3X3S',
          gameCode: 'LT',
          name: '任选三组三单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选三组三单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入号码，至少1个三位数号码。（三个数字当中有两个数字相同）。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码12，开奖号码11812，即中任三组三（单式）。",
          betRuleTip: "格式范例：122 446 779 335 882"
        }, {
          betType: 'A3G3X6',
          gameCode: 'LT',
          name: '任选三组六复式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选三组六复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择三个号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码512，开奖号码51812，即中任三组六。"
        }, { //特殊情况 上传
          betType: 'A3G3X6S',
          gameCode: 'LT',
          name: '任选三组六单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选三组六单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入至少三个号码构成一注（三个号码不相同）。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三组六（单式）。",
          betRuleTip: "格式范例：123 456 789 345 892"
        }, { //特殊情况 上传
          betType: 'A3G3MX',
          gameCode: 'LT',
          name: '任选三混合组选',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选三混合组选",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动至少输入三个号码构成一注（不包含豹子号）。",
          winningRule: "所选号码与开奖号码的指定位置的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三混合组选。",
          betRuleTip: "格式范例：123 456 789 335 882"
        }, {
          betType: 'A3G3T',
          gameCode: 'LT',
          name: '任选三组选和值',
          dataFormatter: [
            [],
            []
          ],
          plateType: 3,
          title: "任选三组选和值",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注",
          winningRule: "所选号码与开奖号码（不含豹子号）的指定位置的号码之和相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择和值号码8，开奖号码51812，即中任三组选和值。"
        },

        {
          betType: 'A4P',
          gameCode: 'LT',
          name: '任选四直选复式',
          dataFormatter: [
            [],
            [],
            [],
            [],
            []
          ],
          plateType: 1,
          title: "任选四直选复式",
          selectMethod: "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位1，百位8，个位1，开奖号码51821，即中任四直选复式。"
        }, { //特殊情况 上传
          betType: 'A4S',
          gameCode: 'LT',
          name: '任选四直选单式',
          dataFormatter: [
            [],
            []
          ],
          plateType: 2,
          unitGroup: true,
          title: "任选四直选单式",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，至少手动输入一个四位数的号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方式：选择万位、千位、百位和个位，输入号码5181，开奖号码51821，即中任四直选单式。",
          betRuleTip: "格式范例：1234 4567 6789 3352 8827"
        }, {
          betType: 'A4G4X24',
          gameCode: 'LT',
          name: '任选四组选24',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选四组选24",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，号码区至少选择四个号码构成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择万位、百位、十位和个位，号码选择0568，开奖号码57086（顺序不限），即中任四组选24。"
        }, {
          betType: 'A4G4X12',
          gameCode: 'LT',
          name: '任选四组选12',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选四组选12",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：8，单号：06，开奖号码58086（顺序不限），即中任四组选12。"
        }, {
          betType: 'A4G4X6',
          gameCode: 'LT',
          name: '任选四组选6',
          dataFormatter: [
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选四组选6",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”中至少选择两个号码组成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：28，开奖号码58282（顺序不限），即中任四组选6。"
        }, {
          betType: 'A4G4X4',
          gameCode: 'LT',
          name: '任选四组选4',
          dataFormatter: [
            [],
            [],
            []
          ],
          plateType: 1,
          unitGroup: true,
          title: "任选四组选4",
          selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。",
          winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，三重号：8，单号：2，开奖号码58882（顺序不限），即中任四组选4。"
        },


        //龙虎和玩法组规则
        {
          betType: 'LH54',
          gameCode: 'LT',
          name: '龙虎和万千',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和万千",
          selectMethod: "从万位、千位上选择一个形态组成一注。",
          winningRule: "根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH53',
          gameCode: 'LT',
          name: '龙虎和万百',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和万百",
          selectMethod: "从万位、百位上选择一个形态组成一注。",
          winningRule: "根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH52',
          gameCode: 'LT',
          name: '龙虎和万十',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和万十",
          selectMethod: "从万位、十位上选择一个形态组成一注。",
          winningRule: "根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH51',
          gameCode: 'LT',
          name: '龙虎和万个',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和万个",
          selectMethod: "从万位、个位上选择一个形态组成一注。",
          winningRule: "根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH43',
          gameCode: 'LT',
          name: '龙虎和千百',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和千百",
          selectMethod: "从千位、百位上选择一个形态组成一注。",
          winningRule: "根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH42',
          gameCode: 'LT',
          name: '龙虎和千十',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和千十",
          selectMethod: "从千位、十位上选择一个形态组成一注。",
          winningRule: "根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH41',
          gameCode: 'LT',
          name: '龙虎和千个',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎-龙虎和-千个",
          selectMethod: "从千位、个位上选择一个形态组成一注。",
          winningRule: "根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH32',
          gameCode: 'LT',
          name: '龙虎和百十',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和百十",
          selectMethod: "从百位、十位上选择一个形态组成一注。",
          winningRule: "根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH31',
          gameCode: 'LT',
          name: '龙虎和百个',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和百个",
          selectMethod: "从百位、个位上选择一个形态组成一注。",
          winningRule: "根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }, {
          betType: 'LH21',
          gameCode: 'LT',
          name: '龙虎和十个',
          dataFormatter: [
            []
          ],
          plateType: 6,
          title: "龙虎和十个",
          selectMethod: "从十位、个位上选择一个形态组成一注。",
          winningRule: "根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
        }
        ];
      return LT_playDesc;
  }

  return factory;
});
