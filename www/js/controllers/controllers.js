define(function(require){
	'use strict';
	var controllers = angular.module('starter.controllers', []);
	controllers.controller('CommonCtrl',require('controllers/common/CommonCtrl'));
  controllers.controller('BallBetingCtrl',require('controllers/BallBetingCtrl'));
  controllers.controller('BetDetailCtrl',require('controllers/BetDetailCtrl'));
  controllers.controller('BetResultCtrl',require('controllers/BetResultCtrl'));
  controllers.controller('ChaseDetailCtrl',require('controllers/ChaseDetailCtrl'));
  controllers.controller('ChasePlanCtrl',require('controllers/ChasePlanCtrl'));
  controllers.controller('ChaseSetAboutCtrl',require('controllers/ChaseSetAboutCtrl'));
  controllers.controller('ChaseSetCtrl',require('controllers/ChaseSetCtrl'));
  controllers.controller('DrawListCtrl',require('controllers/DrawListCtrl'));
  controllers.controller('LotteryBallCtrl',require('controllers/LotteryBallCtrl'));
  controllers.controller('MyDetailCtrl',require('controllers/MyDetailCtrl'));
  controllers.controller('numberFamilyCtrl',require('controllers/numberFamilyCtrl'));
  controllers.controller('PlayDescribeCtrl',require('controllers/PlayDescribeCtrl'));
  controllers.controller('TrendsCtrl',require('controllers/TrendsCtrl'));
  return controllers;
});
