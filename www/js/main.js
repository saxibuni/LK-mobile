require.config({
    baseUrl: 'js',
    paths:{
    	'ionic': '../lib/ionic/js/ionic.bundle.min',
    	'template': 'template',
        'app': 'app',

    },
    shim:{
        'template':{
            deps:['ionic']
        },
    	'app':{
    		deps:['template']
    	}
    }
});

require(['app'],function (app) {
	'use strict';
    angular.bootstrap(document, [app.name]);
});
