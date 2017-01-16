define(function(require){
	'use strict';

	var diretives = angular.module('starter.diretives',[]);
	diretives.directive('numberDirective',require('directives/NumberDirectives'));//五星复式
  diretives.directive('number2Directive',require('directives/Number2Directives'));//和值
  diretives.directive('bdsDirective',require('directives/BDSDirective'));//特殊号码
  diretives.directive('dxdsDirective',require('directives/DXDSDirective'));//大小单双
  diretives.directive('funDirective',require('directives/FunDirective'));//区间
  diretives.directive('lhhDirective',require('directives/LHHDirective'));//龙虎和
  diretives.directive('anynumberDirective',require('directives/AnyNumber1Directive'));//任选复式
  diretives.directive('anynumber2Directive',require('directives/AnyNumber2Directive'));//任选和值
  diretives.directive('dice1Directive',require('directives/Dice1Directive'));//单挑一股
  diretives.directive('dice2Directive',require('directives/Dice2Directive'));//单挑一股
  diretives.directive('dice3Directive',require('directives/Dice3Directive'));//单挑一股
	return diretives;
});
