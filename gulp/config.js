var baseConfig = {
    sourceDir: 'src/',
    publishDir: 'dist/'
};

module.exports = {
    simple: baseConfig,
    browserSync: {
        port: 8080,
        notify: false,
        server: {
            baseDir: [baseConfig.publishDir]
        },
        files: [
            baseConfig.publishDir + "style.css",
            baseConfig.publishDir + "js/main.js",
            baseConfig.publishDir + "images/*.png"
        ]
    },
    watch: {
        js: baseConfig.sourceDir + '/js/*.js'
    }
};
