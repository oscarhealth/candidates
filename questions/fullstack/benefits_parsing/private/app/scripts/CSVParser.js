
var CSVParser = function(options) {
  options = options || {};
  this.filePath = options.filePath;
  this.csvStr = options.csvStr;
};

// TODO transform csv into json representation
//
CSVParser.prototype.parse = function(options) {
  // first row is column hearders, remaining rows are data
  var rawRows = this.csvStr.split('\n');
  var parsedRows = [];

  // separate column headers
  var columnHeaders = rawRows.shift().split(',');

  rawRows.forEach(function(row) {
    var parsedRow = {};
    var rowCells = row.split(',');

    columnHeaders.forEach(function(colName, idx) {
      parsedRow[colName] = rowCells[idx]
    });

    parsedRows.push(parsedRow);
  });

  return parsedRows;
};

module.exports = CSVParser;