const Sales = require("../models/salesModel");

const fetchAllSales = async () => {
  const results = await Sales.find({});
  console.log("All Sales:", results);
};


const runAllAggregations = () => {
    fetchAllSales();
    console.log("Hi")
}


module.exports = runAllAggregations;