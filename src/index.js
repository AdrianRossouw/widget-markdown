// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var View = require('famous/core/View');
var Modifier = require('famous/core/Modifier');

// Load Markdown Widget
var WidetMarkdown = require('./lib/widget');

// create the main context
var mainContext = Engine.createContext();

var view = new View();

var markdown = WidetMarkdown('#This is a test\n##Of using markdown');

var centerModifier = new Modifier({
  origin: [0.5, 0.5]
});

view.add(centerModifier).add(markdown.view);
mainContext.add(view);
