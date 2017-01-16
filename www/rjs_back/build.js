({
    baseUrl: './js/',
    name: "main",
    out:'js/main-built.js',
    paths:{
        'ionic': '../lib/ionic/js/ionic.bundle.min',
        'template': 'template',
        'app': 'app',

    },
    shim:{
        'app':{
            deps:['ionic','template']
        }
    }
})
