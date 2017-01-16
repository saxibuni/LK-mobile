define([
        'services/services',
        'controllers/controllers',
        'directives/directives'
    ],

    function() {
        'use strict';
        // Ionic Starter App

        // angular.module is a global place for creating, registering and retrieving Angular modules
        // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
        // the 2nd parameter is an array of 'requires'
        // 'starter.services' is found in services.js
        // 'starter.controllers' is found in controllers.js
        var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.diretives', 'templateModule']);

        app.run(['$ionicPlatform', function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        }])

        .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('standard');

            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('center');

            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');
            $ionicConfigProvider.tabs.position("bottom")

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })
                .state('ballBetting', { //彩种号码投注
                    url: '/:gameCode/:market/ballBetting',
                    templateUrl: 'templates/ballBeting.html',
                    controller: 'BallBetingCtrl',
                    reload: true,
                    cache: false
                })
                .state('ballBetting.BDSPlay', {
                    url: '/BDSPlay/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/BDSParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.Number1Play', {
                    url: '/Number1Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/Number1ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.FunPlay', {
                    url: '/FunPlay/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/FunParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.Number2Play', {
                    url: '/Number2Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/Number2ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.DXDSPlay', {
                    url: '/DXDSPlay/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/DXDSParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.LHHPlay', {
                    url: '/LHHPlay/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/LHHParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.AnyNumber1Play', {
                    url: '/AnyNumber1Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/AnyNumber1ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.AnyNumber2Play', {
                    url: '/AnyNumber2Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/AnyNumber2ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.Dice1Play', {
                    url: '/Dice1Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/Dice1ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.Dice2Play', {
                    url: '/Dice2Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/Dice2ParentPlate.html'
                        }
                    }
                })
                .state('ballBetting.Dice3Play', {
                    url: '/Dice3Play/:parameter',
                    reload: true,
                    cache: false,
                    views: {
                        'playTemplates': {
                            templateUrl: 'templates/plateTemps/Dice3ParentPlate.html'
                        }
                    }
                })
                .state('numberFamily', { //号码篮
                    url: '/numberFamily',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/numberFamily.html',
                    controller: 'numberFamilyCtrl'
                })
                .state('chaseSet', { //追号设置
                    url: '/chaseSet',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/chaseSet.html',
                    controller: 'ChaseSetCtrl'
                })
                .state('chaseSet_about', { //追号方式
                    url: '/chaseSet_about/:chaseType',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/chaseSet_about.html',
                    controller: 'ChaseSetAboutCtrl'
                })
                .state('chaseDetail', { //追号详情/:chaseItem
                    url: '/chaseDetail',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/chaseDetail.html',
                    controller: 'ChaseDetailCtrl'
                })
                .state('betDetail', { //投注详情/:betItem
                    url: '/betDetail',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/betDetail.html',
                    controller: 'BetDetailCtrl'
                })
                .state('tab.drawList', { //彩期列表
                    url: '/drawList',
                    views: {
                        "tab-LotteryFun": {
                            templateUrl: 'templates/drawList.html',
                            controller: 'DrawListCtrl'
                        }
                    }
                })
                .state('tab.trends', { //开奖走势
                    url: '/trends',
                    reload: true,
                    cache: false,
                    views: {
                        "tab-trends": {
                            templateUrl: 'templates/trends.html',
                            controller: 'TrendsCtrl'
                        }
                    }
                })
                .state('tab.myDetail', { //我的详情
                    url: '/myDetail',
                    reload: true,
                    cache: false,
                    views: {
                        "tab-myDetail": {
                            templateUrl: 'templates/myDetail.html',
                            controller: 'MyDetailCtrl'
                        }
                    }
                })
                .state('playDescribe', { //玩法说明
                    url: '/playDescribe/:market/:gameCode',
                    templateUrl: 'templates/playDescribe.html',
                    controller: 'PlayDescribeCtrl'
                })
                .state('chasePlan', { //追号计划
                    url: '/chasePlan',
                    reload: true,
                    cache: false,
                    templateUrl: 'templates/chasePlan.html',
                    controller: 'ChasePlanCtrl'
                })
                .state('lotteryBall', { //开奖号码
                    url: '/lotteryBall/:market/:gameCode',
                    templateUrl: 'templates/lotteryBall.html',
                    controller: 'LotteryBallCtrl'
                })
                .state('betResult', { //消息页面
                    url: '/betResult',
                    templateUrl: 'templates/betResult.html',
                    controller: 'BetResultCtrl',
                    reload: true,
                    cache: false
                })
                // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/drawList');


        }]);

        return app;

    });
