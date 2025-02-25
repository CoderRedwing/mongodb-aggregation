const Sales = require("../models/salesModel");

const insertSampleData = async () => {
  await Sales.deleteMany({}); // Clear old data

  await Sales.insertMany([
      {
          item: "Laptop",
          category: "Electronics",
          price: 1000,
          quantity: 3,
          tags: ["gadget", "computer"],
          date: new Date("2024-01-10")
      },

      {
          item: "Phone",
          category: "Electronics",
          price: 500,
          quantity: 5,
          tags: ["gadget", "mobile"],
          date: new Date("2024-01-15")
      },
      {
          item: "Shoes",
          category: "Fashion",
          price: 200,
          quantity: 10,
          tags: ["clothing", "footwear"],
          date: new Date("2024-02-01")
      },
      {
          item: "T-Shirt", 
          category: "Fashion", 
          price: 50, 
          quantity: 20, 
          tags: ["clothing", "wearable"],
          date: new Date("2024-02-05")
      },
    { 
        item: "Headphones", 
        category: "Electronics", 
        price: 150, 
        quantity: 8, 
        tags: ["gadget", "audio"], 
        date: new Date("2024-03-01")
      },
    { item: "Smart Watch", category: "Electronics", price: 250, quantity: 7, tags: ["gadget", "wearable"], date: new Date("2024-03-05") },
    { item: "Jeans", category: "Fashion", price: 100, quantity: 15, tags: ["clothing", "wearable"], date: new Date("2024-04-10") },
    { item: "Camera", category: "Electronics", price: 800, quantity: 4, tags: ["gadget", "photography"], date: new Date("2024-04-15") },
  ]);

  console.log("Sample Data Inserted");
};

module.exports = insertSampleData;
