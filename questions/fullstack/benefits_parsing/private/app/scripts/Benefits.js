var Benefits = function (options) {
  options = options || {};
  this.columns = options.columns;
  this.benefits = {};  // keyed off benefit id
}

// TODO
//
Benefits.prototype.fromJson = function(data) {
  // assume this is a list/array
  // get all rows for a benefit
  var rowsByBenefitId = this.groupByBenefitsByColumn(data, this.columns.ID);

  Object.keys(rowsByBenefitId).forEach(function(benefitId) {
    this.benefits[benefitId] = this.parseBenefitBlock(rowsByBenefitId[benefitId]);
  }, this);
};

Benefits.prototype.parseBenefitBlock = function(block) {
  // all rows should have same benefit id, and benefit name
  var benefit = new Benefit({
    id: block[0][this.columns.ID],
    name: block[0][this.columns.BENEFIT_NAME]
  });

  // get list of services
  var benefitServiceRows = this.groupByBenefitsByColumn(
    block,
    this.columns.SERVICES
  );

  var parsedServices = [];

  Object.keys(benefitServiceRows).forEach(function(serviceName) {
    parsedServices.push(this.parseBenefitServiceBlock(benefitServiceRows[serviceName]));
  }, this);

  benefit.services = parsedServices;

  return benefit;
};

Benefits.prototype.parseBenefitServiceBlock = function(block) {
  var benefitService = new BenefitService({
    name: block[0][this.columns.SERVICES] || block[0][this.columns.BENEFIT_NAME]
  })

  var details = [];

  // get details
  block.forEach(function(row) {
    details.push(new BenefitDetail({
      locationName: row[this.columns.LOCATIONS],
      feeName: row[this.columns.FEES],
      cost: row[this.columns.COST],
    }))
  }, this);

  benefitService.details = details;

  return benefitService;
}

Benefits.prototype.groupByBenefitsByColumn = function(parsedRows, column) {
  var rowsByBenefitId = {};

  parsedRows.forEach(function(parsedRow, idx) {
    var currentBenefitId = parsedRow[column];

    // start new block
    if (! rowsByBenefitId[currentBenefitId]) {
      rowsByBenefitId[currentBenefitId] = [];
    }

    rowsByBenefitId[currentBenefitId].push(parsedRow)
  }, this);

  return rowsByBenefitId;
};


// Benefit Class
function Benefit(init) {
  this.id = init.id;
  this.name = init.name;
  this.services = init.services || [];
}

// Benefit Service Class
function BenefitService(init) {
  this.name = init.name;
  this.details = init.details;  // contains locations, fee, and cost, info
}

BenefitService.prototype.getLocationDetails = function() {
  var locationDetails = [];
  this.details.forEach(function(detail) {
    if (detail.locationName) {
      locationDetails.push(detail);
    }
  });
  return locationDetails;
}

BenefitService.prototype.getFeeDetails = function() {
  var feeDetails = [];
  this.details.forEach(function(detail) {
    if (!detail.locationName && detail.feeName) {
      feeDetails.push(detail);
    }
  });
  return feeDetails;
}

BenefitService.prototype.getCostDetails = function() {
  var costDetails = [];
  this.details.forEach(function(detail) {
    if (!detail.locationName && !detail.feeName && detail.cost) {
      costDetails.push(detail);
    }
  });
  return costDetails;
}

// benefit Detail Class
function BenefitDetail(init) {
  // details can have any combination of the below
  this.locationName = init.locationName;
  this.feeName = init.feeName;
  this.cost = init.cost;
}


module.exports = Benefits;