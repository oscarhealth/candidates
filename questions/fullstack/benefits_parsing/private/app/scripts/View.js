var Handlebars = require('handlebars');
var templates = require('../build/templates/templates.js')(Handlebars);

var View = function(options) {
  options = options || {};
  this.containerId = options.containerId;
  this.templateName = options.templateName;
  this.template = templates[this.templateName];
};

View.prototype.render = function(context) {
  context = context || {};
  document.getElementById(this.containerId).innerHTML = this.template(context);
};

View.prototype.benefitContext = function (benefit) {
  // arg Benefit class object
  var context = {};

  context.title = 'Benefit: ' + benefit.name;

  context.services = benefit.services;

  return context;
}

module.exports = View;