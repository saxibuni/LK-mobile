define([], function() {
    'use strict';

    var factory = function() {

        var getSerialNo = function() {
            return new Date().format("yyyyMMddhhmmss") + Math.random();
        }

        var isFunction = function(obj) {
            return typeof obj == 'function';
        };

        var consoleLog = function(data){
            if (config.debug) {
                console.log(data);
            }
        }

        var Commands = {
            LOGIN: 101,
            DRAWINFO: 20,
            ACCTINFO: 3,
            RESULTLIST: 111,
            GAMESETTING: 106,
            SERVERTIME: 6,
            COMMITBET: 109,
            BETHISTORY: 113,
            CHASEHISTORY: 114,
            OPENDRAWLIST: 102,
            CHASEDETAIL: 115,
            CHASENUNBER: 108,
            MULTIPLECHASE:119,
            CANCELBETHISTORY: 110,
            CANCELCHASEHISTORY: 116,
            BATCHPLACEBET: 107,
            PAPERQUESTION: 121,
            PAPERANSWER: 122,
            MARKETLIST: 103
        };

        var Service = function() {
            var _url = null;
            var _socket = null;
            var _queue = [];
            var _register = [];
            var _session = [];
            var that = this;

            Service.it = this;

            var _connect = function() {
                _url = config.service;
                consoleLog("connect:" + _url);
                _socket = new WebSocket(_url);
                _socket.onopen = _onOpen;
                _socket.onclose = _onClose;
                _socket.onerror = _onError;
                _socket.onmessage = _onMessage;
            };

            var _send = function(command, dat, callback, sender, isMask) {
                isMask = isMask == undefined ? true : isMask;

                if (_socket && _socket.readyState == 1) {
                    var serialNo = getSerialNo();
                    _register[serialNo] = { callback: callback, sender: sender, isMask: isMask };

                    dat = dat || {};
                    dat.serialNo = serialNo;
                    if (command != Commands.LOGIN) {
                        dat.sessionId = _session["sessionId"];
                        dat.token = _session["token"];
                    }

                    var jsData = command + "." + JSON.stringify(dat);
                    _socket.send(jsData);
                    return consoleLog("Send:::::" + jsData);
                }

                _queue.push({
                    command: command,
                    dat: dat,
                    callback: callback,
                    sender: sender
                });
                if (!_socket || _socket.readyState == _socket.CLOSED) _connect();
            };

            /******* event ********/
            var _onOpen = function() {
                consoleLog("socket open");
                while (_queue.length > 0) {
                    var data = _queue.shift();
                    _send(data.command, data.dat, data.callback, data.sender);
                }
            };

            var _onClose = function() {
                consoleLog("socket closed");
            };

            var _onError = function() {
                consoleLog("socket err");
            };

            var _onMessage = function(e) {
                consoleLog("Receive:::::" + e.data);
                var service = Service.it;
                var obj = _getObject(e.data);
                if (!obj) return;

                var command = obj.command,
                    dat = obj.dat;
                if (command == Commands.LOGIN) {

                    _session["sessionId"] = dat.sessionId;
                    _session["token"] = dat.token;
                }

                if (command > 0) {
                    var serialNo = dat.serialNo,
                        fns = _register[serialNo];
                    if (!fns) return;
                    delete _register[serialNo];
                    that.deal(dat, fns);

                } else {
                    // push message
                    var fns = _register[command];
                    if (fns && fns.callback && isFunction(fns.callback)) fns.callback.call(fns.sender, dat);
                }
            };

            this.bindPushEvent = function(command, callback, sender) {
                _register[command] = { callback: callback, sender: sender };
            };

            this.unBindPushEvent = function(command, callback, sender) {
                delete _register[command];
            };

            /***** util *****/
            var _getObject = function(str) {
                try {
                    var i = str.indexOf("{");
                    return { command: parseInt(str.substr(0, i)), dat: JSON.parse(str.substr(i)) };
                } catch (e) {
                    consoleLog("parse json err");
                    return null;
                }
            };

            /*********** api ************/
            //101
            this.login = function(req, callback, sender) {
                _send(Commands.LOGIN, req, callback, sender);
            };

            //20
            this.queryDrawInfo = function(req, callback, sender) {
                _send(Commands.DRAWINFO, req, callback, sender);
            };

            //3
            this.queryAcctInfo = function(req, callback, sender) {
                _send(Commands.ACCTINFO, req, callback, sender);
            };

            //111
            this.queryResultList = function(req, callback, sender) {
                _send(Commands.RESULTLIST, req, callback, sender);
            };

            //106
            this.queryGameSetting = function(req, callback, sender) {
                _send(Commands.GAMESETTING, req, callback, sender);
            };

            this.queryServerTime = function(req, callback, sender) {
                _send(Commands.SERVERTIME, req, callback, sender);
            };

            //109
            this.placeBet = function(req, callback, sender) {
                _send(Commands.COMMITBET, req, callback, sender);
            };

            //113
            this.betHistory = function(req, callback, sender) {
                _send(Commands.BETHISTORY, req, callback, sender);
            };

            //114
            this.chaseHistory = function(req, callback, sender) {
                _send(Commands.CHASEHISTORY, req, callback, sender);
            };

            //115
            this.chaseDetail = function(req, callback, sender) {
                _send(Commands.CHASEDETAIL, req, callback, sender);
            };

            //102
            this.openDrawList = function(req, callback, sender) {
                _send(Commands.OPENDRAWLIST, req, callback, sender);
            };

            //108
            this.chaseNumber = function(req, callback, sender) {
                _send(Commands.CHASENUNBER, req, callback, sender);
            };

          //119
          this.multipleChase = function(req, callback, sender) {
            _send(Commands.MULTIPLECHASE, req, callback, sender);
          };

            //110
            this.cancelBetHistory = function(req, callback, sender) {
                _send(Commands.CANCELBETHISTORY, req, callback, sender);
            };

            //116
            this.cancelChaseHistory = function(req, callback, sender) {
                _send(Commands.CANCELCHASEHISTORY, req, callback, sender);
            };

            //107
            this.betchPlaceBet = function(req, callback, sender) {
                _send(Commands.BATCHPLACEBET, req, callback, sender);
            };

            //121
            this.paperQuestion = function(req, callback, sender) {
                _send(Commands.PAPERQUESTION, req, callback, sender);
            };

            //122
            this.paperAnswer = function(req, callback, sender) {
                _send(Commands.PAPERANSWER, req, callback, sender);
            }

            //103
            this.queryHotAndNew = function(req, callback, sender) {
                _send(Commands.MARKETLIST, req, callback, sender);
            }

/*            //fix bug firefox < 48
            window.onbeforeunload = function() {
                consoleLog('page refresh');
                _socket.close();
            }*/
        };

        Service.prototype.deal = function(dat, fns) {
            delete dat.sessionId;
            delete dat.token;
            delete dat.serialNo;
            var callback = fns.callback,
                sender = fns.sender;
            if (isFunction(callback)) callback.call(sender, dat);
        };

        Service.create = function() {
            Service.it = Service.it || new Service();
            return Service.it;
        };

        return Service.create();
    }

    return factory;
});
