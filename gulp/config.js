var baseConfig = {
    sourceDir: 'src/',
    publishDir: 'dist/'
};

var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
    root: root,
    src: root + '/src/',
    dest: root + '/dist/',
    data: root + '/src/data/',
    simple: baseConfig,
    browserSync: {
        port: 8080,
        notify: false,
        server: {
            baseDir: [baseConfig.publishDir]
        },
        files: [
            baseConfig.publishDir + "*.html",
            baseConfig.publishDir + "**/*.html",
            baseConfig.publishDir + "*.css",
            baseConfig.publishDir + "*.js",
            baseConfig.publishDir + "images/*.png"
        ]
    },
    src: {
        pug: [
            baseConfig.sourceDir + 'pug/**/!(_)*.pug',
        ],
        stylus: [
            baseConfig.sourceDir + 'stylus/!(_)*.styl',
            baseConfig.sourceDir + 'stylus/**/!(_)*.styl'
        ]
    },
    watch: {
        js: [
            baseConfig.sourceDir + 'js/*.js',
            baseConfig.sourceDir + 'js/**/*.js'
        ],
        pug: [
            baseConfig.sourceDir + 'pug/*.pug',
            baseConfig.sourceDir + 'pug/**/*.pug',
            baseConfig.sourceDir + 'pug/**/_*.pug',
        ],
        stylus: [
            baseConfig.sourceDir + 'stylus/*.styl'
        ]
    }
};
