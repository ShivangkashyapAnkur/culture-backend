const express = require("express");
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// POST endpoint to calculate total product value
app.post("/api/products/total-value", (req, res) => {
  const products = req.body;

  // Check if products array is provided
  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: "Invalid product list" });
  }

  // Calculate the total value of all products
  const totalValue = products.reduce((total, product) => {
    if (product.price && product.quantity) {
      return total + product.price * product.quantity;
    }
    return total;
  }, 0);

  // Return the total value
  res.json({ totalValue });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
