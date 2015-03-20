var View = require('./View.js');
var CSVParser = require('./CSVParser.js');
var Benefits = require('./Benefits.js');

var benefitsCSVStr = require('../data/benefitsCSVStr.js');

// setup
var parser = new CSVParser({
  filePath: '../data/benefits.csv',
  csvStr: benefitsCSVStr
});

var benefits = new Benefits({
  columns: {
    ID: 'ID',
    BENEFIT_NAME: 'BENEFIT_NAME',
    SERVICES: 'SERVICES',
    LOCATIONS: 'LOCATIONS',
    FEES: 'FEES',
    COST: 'COST'
  }
});

var view = new View({
  containerId: 'js-content',
  templateName: 'app/templates/benefit.hbs'  // change this
});

// parse data
console.log('============== start parse ==============');
var parsedJson = parser.parse();
console.log('============== end parse ==============');

// process data
console.log('============== start benefits ==============');
benefits.fromJson(parsedJson);
console.log('============== end benefits ==============');

// render Vaccinations benefits
console.log('============== start render ==============');
var benefit = benefits.benefits['benefit-1'];
var context = view.benefitContext(benefit);
view.render(context);
console.log('============== end render ==============');


