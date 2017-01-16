define([], function() {
    'use strict';

    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function() {
        return this.formatDate() +
            '\u00A0\u00A0' +
            (this.getHours() < 10 ? '0' + this.getHours() : this.getHours()) +
            ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes() : this.getMinutes()) +
            ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds() : this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function() {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1)) +
            '-' + (this.getDate() < 10 ? '0' + this.getDate() : this.getDate()) +
            '\u00A0\u00A0' +
            (this.getHours() < 10 ? '0' + this.getHours() : this.getHours()) +
            ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes() : this.getMinutes());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function(divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function(divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1)) +
            divider + (this.getDate() < 10 ? '0' + this.getDate() : this.getDate());
    };

    Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    Array.prototype.eqaul = function(arr) {
        if (this.length > 0 && this.sort().toString() == arr.sort().toString()) {
            return true;
        }
        return false;
    }

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }


    var factory = function() {

        /**
         *  Format a date as yyyy-mm-dd hh:mm:00
         */
        var getLocalTime = function(nS) {
            var now = new Date(nS);
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            if (hour < 10) {
                hour = '0' + hour
            }
            if (month < 10) {
                month = '0' + month
            }
            if (date < 10) {
                date = '0' + date
            }
            if (minute < 10) {
                minute = '0' + minute
            }
            if (second < 10) {
                second = '0' + second
            }
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        };

        var getDateByDateString = function(dataString) {
            var arr = dataString.replace(/-| |:/g, ',').split(',');
            var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
            return date;
        };

        var addDotToNumber = function(num, dotLength) {
            if(num == undefined) return ;
            if(num == 0 || num == 0.00) return '0.00';
            dotLength = dotLength || 2;
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)) num = "0.00";
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * Math.pow(10, dotLength) + 0.50000000001);
            var cents = num % Math.pow(10, dotLength);
            num = Math.floor(num / Math.pow(10, dotLength)).toString();
            if (dotLength == 2) {
                if (parseInt(cents) < 10) cents = '0' + cents;
            }
            if (dotLength == 3) {
                if (parseInt(cents) < 10) cents = '00' + cents;
                if (10 < parseInt(cents) && parseInt(cents) < 100) cents = '0' + cents;
            }
            if (dotLength == 4) {
                if (parseInt(cents) < 10) cents = '000' + cents;
                if (10 <= parseInt(cents) && parseInt(cents) < 100) cents = '00' + cents;
                if (100 <= parseInt(cents) && parseInt(cents) < 1000) cents = '0' + cents;
            }
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            // if(isCents == false) return (((sign)? '' : '-') + num);
            return (((sign) ? '' : '-') + num + '.' + cents);
        };

        var rangeCount = function(x, y) {
            var fx = 1,
                fy = 1;
            while (y) {
                fx *= x;
                x--;
                fy *= y;
                y--;
            }
            return fx / fy;
        };

        var combination = function(x, y) {
            var fx = 1,
                fy = 1;
            while (y) {
                fx *= x;
                x--;
                y--;
            }
            return fx
        };

        var sameBallCount = function(multiBallArr, singleBallArr) {
            var count = 0;
            for (var i in singleBallArr) {
                if (multiBallArr.indexOf(singleBallArr[i]) > -1)
                    count++;
            }
            return count;
        };

        //deepCopy
        var copyResult = function(data) {
            var result = [];
            for (var i = 0; i < data.length; i++)
                result[i] = data[i].slice(0);
            return result;
        }

        //order:排序方式（从大到小，还是从小到大）sortBy：需要比较的字段
        var sortNumber =  function(order, sortBy) {
        var ordAlpah = (order == 'asc') ? '>' : '<';
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
            return sortFun;
        }

        var getQueryString = function(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        };

        return {
            getLocalTime: getLocalTime,
            getDateByDateString: getDateByDateString,
            addDotToNumber: addDotToNumber,
            rangeCount: rangeCount,
            combination: combination,
            sameBallCount: sameBallCount,
            copyResult: copyResult,
            sortNumber:sortNumber,
            getQueryString:getQueryString
        };
    }

    return factory;
});
