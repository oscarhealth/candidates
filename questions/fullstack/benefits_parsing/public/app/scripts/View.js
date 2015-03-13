var Handlebars = require('handlebars');
var templates = require('../build/templates/templates.js')(Handlebars);

var View = function(options) {
  options = options || {};
  this.containerId = options.containerId;
  this.templateName = options.templateName;
  this.template = templates[this.templateName];
};

// TODO
//
View.prototype.render = function(context) {
  document.getElementById(this.containerId).innerHTML = this.template(context);
};


module.exports = View;