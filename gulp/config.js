'use strict'

import minimist from 'minimist'

const log = console['log']

const knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
}
const options = minimist(process.argv.slice(2), knownOptions)
const isProduction = (options.env === 'production')
const isDevelopment = (options.env === 'development')

log('[build env]', options.env, '[is production]', isProduction)
log('[build env]', options.env, '[is development]', isDevelopment)

const baseConfig = {
  sourceDir: './src/',
  publishDir: './dist/'
}

const config = {
  baseConfig: baseConfig,
  envProduction: isProduction,
  envDevelopment: isDevelopment,
  tasks: {
    browserSync: {
      port: 8080,
      notify: false,
      server: {
        baseDir: baseConfig.publishDir
      },
      files: [
        `${baseConfig.publishDir}*.html`,
        `${baseConfig.publishDir}**/*.html`,
        `${baseConfig.publishDir}*.css`,
        `${baseConfig.publishDir}*.js`,
        `${baseConfig.publishDir}images/*.png`
      ]
    },
    webpack: {
      src: `${baseConfig.sourceDir}js/entry.js`,
      dest: `${baseConfig.publishDir}`,
      filename: 'bundle.js',
      watch: [
        `${baseConfig.sourceDir}js/**/*.js`
      ]
    },
    pug: {
      src: `${baseConfig.sourceDir}pug/**/!(_)*.pug`,
      watch: [
        `${baseConfig.sourceDir}pug/*.pug`,
        `${baseConfig.sourceDir}pug/**/*.pug`,
        `${baseConfig.sourceDir}pug/**/_*.pug`
      ]
    },
    stylus: {
      src: [
        `${baseConfig.sourceDir}stylus/!(_)*.styl`,
        `${baseConfig.sourceDir}stylus/**/!(_)*.styl`
      ],
      watch: [
        `${baseConfig.sourceDir}stylus/**/*.styl`
      ]
    },
    data: {
      src: [
        `${baseConfig.sourceDir}data/`
      ]
    },
    copy: {
      src: [
        `${baseConfig.sourceDir}copy/**/*`
      ]
    },
    images: {
      src: [
        `${baseConfig.sourceDir}images/**/*`
      ]
    }
  }
}

module.exports = config
