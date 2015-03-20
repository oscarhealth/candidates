var Benefits = function (options) {
  options = options || {};
  this.columns = options.columns;
  this.benefits = {};  // keyed off benefit id
}

// TODO
//
Benefits.prototype.fromJson = function() {

};


module.exports = Benefits;