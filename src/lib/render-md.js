// Inspired by https://github.com/thlorenz/browserify-markdown-editor
var marked = require('marked');
var peacock = require('peacock');

marked.setOptions({
  gfm: true,
  pedantic: false,
  sanitize: true,
  highlight: function(code) {
    'use strict';
    try {
      return peacock.highlight(code);
    }
    catch (e) {
      return code;
    }
  }
});

module.exports = function(md) {
  return marked(md);
};
