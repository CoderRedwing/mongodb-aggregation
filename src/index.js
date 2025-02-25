const connectDB = require("../src/config/db");
const insertSampleData = require("./data/sampleData");
const runAllAggregations = require("./queries/salesQueries");

const startApp = async () => {
  await connectDB();
  await insertSampleData();
  runAllAggregations();
};

startApp();
