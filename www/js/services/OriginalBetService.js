define([], function() {
  'use strict';
  var factory = function() {
    var  OriginalItemObj = {

      LT:{
        //万千百十个
        WQBSG_item:[
          'N5P',
          'N5C',
          'N4P',
          'N4C',
          'N3PF',
          'N3CF',
          'N3PM',
          'N3CM',
          'N3PL',
          'N3CL',
          'N2PL',
          'N2PF',
          "N1",
          "A2P",
          "A3P",
          "A4P"
        ],
        //龙虎和大小单双,//趣味
        LHTDXDS_item:[
          "BSOEL2",
          "BSOEL3",
          "BSOEF2",
          "BSOEF3",
          "BSOEM3",
          "LH54",
          "LH53",
          "LH52",
          "LH51",
          "LH43",
          "LH42",
          "LH41",
          "LH32",
          "LH31",
          "LH21",
          "F5N3",
          "F4N3",
          "F3N2L",
          "F3N2F",
          "F3N2M",
          "R5N3",
          "R4N3",
          "R3N2L",
          "R3N2F",
          "R3N2F"
        ],
        //任选
        RX_item:[

          "A2S",
          "A2T",
          "A2G2",
          "A2G2S",
          "A2G2T",

          "A3S",
          "A3T",
          "A3G3X3",
          "A3G3X3S",
          "A3G3X6",
          "A3G3X6S",
          "A3G3MX",
          "A3G3T",

          "A4S",
          "A4G4X24",
          "A4G4X12",
          "A4G4X6",
          "A4G4X4"
        ],
        //单式
        DX_item:[
          'N5S',
          'G5X120',
          'N4S',
          'G4X24',
          'N3SF',
          'N3TF',
          'N3DF',
          'G3X3F',
          'G3X6F',
          'G3MXF',
          'G3TF',
          'G3X3SF',
          'G3X6SF',
          'G3BF',
          'S3TDF',
          'S3SF',
          'N3SM',
          'N3TM',
          'N3DM',
          'G3X3M',
          'G3X6M',
          'G3MXM',
          'G3TM',
          'G3X3SM',
          'G3X6SM',
          'G3BM',
          'S3TDM',
          'S3SM',
          'N3SL',
          'N3TL',
          'N3DL',
          'G3X3L',
          'G3X6L',
          'G3MXL',
          'G3TL',
          'G3X3SL',
          'G3X6SL',
          'G3BL',
          'S3TDL',
          'S3SL',
          'N2SL',
          'N2TL',
          'N2DL',
          'N2SF',
          'N2TF',
          "N2DF",
          "G2L",
          "G2SL",
          "G2TL",
          "G2BL",
          "G2F",
          "G2SF",
          "G2TF",
          "G2BF",
          "A1L3",
          "A2L3",
          "A1F3",
          "A2F3",
          "A1M3",
          "A2M3",
          "A1L4",
          "A2L4",
          "A2N5",
          "A3N5",
          "SA1",
          "SA2",
          "SA3",
          "SA4"
        ],
        //二重号-单号
        ZXR_item:[
          'G5X60',
          'G5X30',
          'G5X20',
          'G5X10',
          'G5X5',
          'G4X6',
          'G4X4',
          'G4X12'
        ]
      },
      /****************************************11x5**********************************************************/
      //复式
      //11x5直选复式
      HL11x5:{
        ZXFS11x5_item:[
          'N3PH',
          'N2PH',
          'P3'


        ],
        //单式
        DS11x5_item:[
          'N3SH',
          'G3SH',
          'N2SH',
          'G2SH',
          'A1S',
          'A2S',
          'A3S',
          'A4S',
          'A5S',
          'A6S',
          'A7S',
          'A8S'
        ],
        //胆拖
        DT11x5_item:[
          'G3BH',
          'G2BH',
          'A2B',
          'A3B',
          'A4B',
          'A5B',
          'A6B',
          'A7B',
          'A8B'
        ],
        //前三  //前二
        QSQE11x5_item:[
          'G3H',
          'A1H3',
          'G2H'
        ],
        //任选复式
        RXFS11x5_item:[
          'A1',
          'A2',
          'A3',
          'A4',
          'A5',
          'A6',
          'A7',
          'A8'
        ],
        QW11x5_item:[
          'FOEC'
        ],
        CZW11x5_item:[
          'FMN'
        ]
      },
      /**************************快三*************************************/
      K3:{
        K3_item:[
          'N3T',
          'N3D',
          'N3TRI',
          'N3SN',
          'N3PAIR',
          'N2D',
          'N1'
        ]
      }
    };
    var  OriginalItem = {
      text:function(data){
        var betType;
        var gameCode;
        var functionName;
        betType = data.betType;
        gameCode = data.gameCode;
        functionName = this.createFunction(betType,gameCode);
        return	this[functionName](data)
      },
      //获取对应玩法的方法
      createFunction: function(betType,gameCode) {
        var functionName = "";
        for (var i in OriginalItemObj[gameCode]) {
          if (OriginalItemObj[gameCode][i].indexOf(betType) > -1) {
            functionName = i;
            break;
          }
        }
        return functionName.replace('_item', '');
      },
      ballNameMap:function(str){
        var list = {};
        var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5",'O5E0','O4E1','O3E2','O2E3','O1E4','O0E5'];
        var convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区",'5单0双','4单1双','3单2双','2单3双','1单4双','0单5双'];
        for(var i = 0;i < selectStr.length; i++){
          list[selectStr[i]] = convertStr[i]
        }
        var numList = str.replace(/,/g, "&&").split('&&');
        for(var x = 0; x< numList.length;x++){
          if(isNaN(numList[x])){
            if(numList[x].indexOf('|') >= 0){
              numList[x] = numList[x].replace(/[ | ]/g, " ").split(' ');
              for(var m = 0; m < numList[x].length; m++){
                if(isNaN(numList[x][m])){
                  numList[x][m] = list[numList[x][m]]
                }
              }
              numList[x] = numList[x].join('|');
            }else if(numList[x].indexOf('>') >= 0){
              numList[x] = numList[x].replace(/[ > ]/g, " ").split(' ');
              for(var m = 0; m < numList[x].length; m++){
                if(isNaN(numList[x][m])){
                  numList[x][m] = list[numList[x][m]]
                }
              }
              numList[x] = numList[x].join('>');
            }else if(!list[numList[x]]){
              numList[x] = numList[x];
            }else{
              numList[x] = list[numList[x]]
            }
          }
        }
        return numList.toString();
      },
      getTextFSWQBSG:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
          var betItem = selection[i].betItem.toString();
          var drawType = selection[i].drawType;
          if(drawType == '5th')
            text += '万位：'+ betItem +"<br/>";
          else if(drawType == '4th')
            text += '千位：'+ betItem + '<br/>';
          else if(drawType == '3rd')
            text += '百位：'+ betItem +'<br/>';
          else if(drawType == '2nd')
            text += '十位：'+ betItem +'<br/>';
          else if(drawType == '1st')
            text += '个位：'+ betItem +'<br/>';
          else
            text += betItem;
        }
        return text;
      },
      getOrder:function(data){
        var list = data.split(',');
        list.sort(function(a,b){
          return b.substr(0, 1) - a.substr(0, 1)
        });
        return list.join(",");
      },
      getTextZX:function(selection,nameList){
        var text = '';
        for(var i = 0; i < selection.length; i++){
          var betItem = selection[i].betItem.toString();
          text += nameList[i] + ':' + betItem + "<br/>"
        }
        return text
      },
      getTextLHH:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
          text += selection[i].betItem.toString()
        }
        text = this.ballNameMap(text);
        return text;
      },
      //复式
      WQBSG:function(data){
        var selection = JSON.parse(data.selection);
        var text = this.getTextFSWQBSG(selection);
        return text;
      },
      //单式
      DX:function(data){
        return this.ballNameMap(data.betNumber)
      },
      //二重号-单号
      ZXR:function(data){
        var nameList = [
          ['二重号','单号'],
          ['三重号','单号'],
          ['三重号','二重号'],
          ['四重号','单号'],
          ['二重号'],
        ];
        var betTypelist = [
          ['G5X60','G5X30','G4X12','A4G4X12'],//二重号-单号
          ['G5X20','G4X4','A4G4X4'],//三重号-单号
          ['G5X10'],//三重号-二重号
          ['G5X5'],//四重号-单号
          ['G4X6','A4G4X6']//二重号
        ];
        var num;
        for(var i = 0; i< betTypelist.length; i++){
          if(betTypelist[i].indexOf(data.betType) >= 0){
            num = i;
            break;
          }
        }
        var selection = JSON.parse(data.selection);
        return this.getTextZX(selection,nameList[num])
      },
      //龙虎和大小单双//趣味
      LHTDXDS:function(data){
        var selection = JSON.parse(data.selection);
        for(var i = 0; i< selection.length; i++){
          for(var x = 0; x< selection[i].betItem.length; x++){
            selection[i].betItem[x] = this.ballNameMap(selection[i].betItem[x])
          }
        };
        var text = this.getTextFSWQBSG(selection);
        return text;
      },
      //任选
      RX:function(data){
        var text = '';
        var list = ['A4G4X12','A4G4X4','A4G4X6'];
        var selection = JSON.parse(data.selection);
        var drawType = data.drawType;
        drawType =  this.getOrder(data.drawType);
        text += this.ballNameMap(drawType) + '<br/>';
        if(list.indexOf(data.betType)>=0){
          text += this.ZXR(data);
        }else{
          text += this.ballNameMap(data.betNumber)
        }
        return text ;
      },
      ZXFS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
          if(i == 0) text +='一位：'+selection[i].betItem.toString()+'<br/>';
          if(i == 1) text +='二位：'+selection[i].betItem.toString()+'<br/>';
          if(i == 2) text +='三位：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
      },
      DS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var  i = 0; i < selection.length; i++){
          for(var x = 0; x < selection[i].betItem.length; x++){
            text += selection[i].betItem[x] + '|'
          }
        }
        return text.substring(0,text.length -1);
      },
      DT11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
          if(i == 0) text +='胆码：'+selection[i].betItem.toString()+'<br/>';
          if(i == 1) text +='拖码：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
      },
      QSQE11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        if(data.betType == 'G2H'){
          text += '前二：'+selection[0].betItem.toString()+'<br/>';
        }else{
          text += '前三：'+selection[0].betItem.toString()+'<br/>';
        }

        return text;
      },
      RXFS11x5:function(data){
        var text = '';
        var b;
        var selection = JSON.parse(data.selection);
        var a = data.betType.substring(1,2);
        if(a >5){
          b = 5;
        }else{
          b = a;
        }
        text += '任'+a+'选'+b+'：'+selection[0].betItem.toString()+'<br/>';
        return text;
      },
      //定单双
      QW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection[0].betItem.length; i++){
          if(selection[0].betItem[i] == 'O5E0') text += '5单0双' +',';
          if(selection[0].betItem[i] == 'O4E1') text += '4单1双' +',';
          if(selection[0].betItem[i] == 'O3E2') text += '3单2双' +',';
          if(selection[0].betItem[i] == 'O2E3') text += '2单3双' +',';
          if(selection[0].betItem[i] == 'O1E4') text += '1单4双' +',';
          if(selection[0].betItem[i] == 'O0E5') text += '0单5双' +','
        }
        return text.substring(0,text.length -1)
      },
      CZW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        text += '猜中位：'+selection[0].betItem.toString()+'<br/>';
        return text;
      },
      K3:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        var betItem = selection[0].betItem.toString()
        var betType = data.betType;
        switch (betType) {
          case 'N3T':
            text = '合值：'+betItem;
            break;
          case 'N3D':
            text = '三不同号：'+betItem;
            break;
          case 'N3TRI':
            text = '三同号：'+betItem;
            break;
          case 'N3SN':
            text = '三连号：'+betItem;
            break;
          case 'N3PAIR':
            text = '二同号：'+betItem;
            break;
          case 'N2D':
            text = '二不同号：'+ betItem;
            break;
          case 'N1':
            text = '单挑一骰：'+ betItem;
            break;
          default: return
        }
        return text;
      }
    };
    return {
      OriginalItemObj:OriginalItemObj,
      OriginalItem:OriginalItem
    }
  }
  return factory;
});

