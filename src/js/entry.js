// global.jQuery = require('jquery')
// global.$ = jQuery

import log from './assets/log.js'
log('Yo!!')

import anchorLink from './assets/anchorLink.js'
anchorLink({
  speed: 1000,
  offset: 80,
  elements: '.anchorlink2'
})

import elasticTextarea from './assets/elasticTextarea.js'
window.addEventListener('load', function (eve) {
  var el = document.querySelector('textarea.your-text-area')
  elasticTextarea(el)
}, false)
