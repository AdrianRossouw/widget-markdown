// Node Dependencies
var EventEmitter = require('events').EventEmitter;
// Famous Dependencies
var Surface = require('famous/core/Surface');
// My Dependencies
var renderMd = require('./render-md.js');

function widgetMarkdown(content) {
  'use strict';
  var that = {};

  that.model = {
    markdown: content || '',
    html: ''
  };

  that.view = new Surface({
    size: [200, 200],
    classes: ['famous-widget-markdown']
  });

  that.ee = new EventEmitter();

  that.update = function(key, value) {
    var prev = that.model[key];
    that.model[key] = value;
    that.ee.emit('update', key, value, prev);
    return that;
  };

  that.ee.on('update', function(key, value, prev) {
    if (key === 'markdown') {
      return that.update('html', renderMd(value));;
    }
    if (key === 'html') {
      return that.view.setContent(that.model.html);
    }
  });

  that.init = function() {
    that.update('html', renderMd(that.model.markdown));
  };

  that.init();

  return that;
}

module.exports = widgetMarkdown;
