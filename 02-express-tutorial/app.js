const express = require("express");
const app = express();
const { products } = require("./data");

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It Worked!" });
});

app.get("/api/v1/products", (req, res) => {
  console.log(products);
  res.json(products);
});

// Step 13 - Get Product(s) based on Price
app.get("/api/v1/products/price", (req, res) => {
  const { priceToFind } = req.query;
  if (!priceToFind) {
    return res.status(404).json({ message: "Price of product is required" });
  }
  let sortedProducts = [...products];
  sortedProducts = products.filter((p) => p.price <= parseFloat(priceToFind));

  if (sortedProducts.length < 1) {
    return res
      .status(404)
      .json({ message: "Products not found in that price range." });
  }
  return res.json(sortedProducts);
});

// Get Product ID
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  // console.log(idToFind);

  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "The product was not found." });
  }
  console.log(product);
  return res.json(product);
});

// Get Product(s) based on Query
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((p) => {
      return p.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, parseInt(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(404).json({ message: "The product(s) was not found." });
  }
  return res.json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
