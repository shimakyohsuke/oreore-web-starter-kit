var baseConfig = {
    sourceDir: 'src/',
    publishDir: 'dist/'
};

var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
    root: root,
    src: root + '/src',
    dest: root + '/dist',
    data: root + '/src/data',
    simple: baseConfig,
    browserSync: {
        port: 8080,
        notify: false,
        server: {
            baseDir: [baseConfig.publishDir]
        },
        files: [
            baseConfig.publishDir + "*.html",
            baseConfig.publishDir + "style.css",
            baseConfig.publishDir + "js/main.js",
            baseConfig.publishDir + "images/*.png"
        ]
    },
    watch: {
        js: [
            baseConfig.sourceDir + 'js/*.js',
            baseConfig.sourceDir + 'js/**/*.js'
        ],
        jade: [
            baseConfig.sourceDir + 'jade/*.jade',
            baseConfig.sourceDir + 'jade/**/*.jade',
            '!' + baseConfig.sourceDir + 'jade/**/_*.jade',
        ]
    }
};
