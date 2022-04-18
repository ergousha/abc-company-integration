"use strict";
const { faker } = require("@faker-js/faker");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getCompanyDelta = async () => {
  const companies = [];
  for (let i = randomIntFromInterval(1, 10); i--; ) {
    companies.push({
      id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      address: faker.address.city(),
    });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(companies, null, 2),
  };
};

module.exports.getInvoiceDelta = async () => {
  const invoices = [];
  for (let i = randomIntFromInterval(1, 10); i--; ) {
    invoices.push({
      id: faker.datatype.uuid(),
      companyId: faker.datatype.uuid(),
      amount: faker.finance.amount(),
    });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(invoices, null, 2),
  };
};

module.exports.updatePayment = async () => {
  return {
    statusCode: 200,
    body: "success",
  };
};

module.exports.createCompany = async () => {
  return {
    statusCode: 200,
    body: "success",
  };
};
