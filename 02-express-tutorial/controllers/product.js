let { products } = require("../data");

const getProducts = (req, res) => {
  console.log(products);
  res.json(products);
};

const getProductPrice = (req, res) => {
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
};

const getProductById = (req, res) => {
  const idToFind = parseInt(req.params.productID);
  // console.log(idToFind);

  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "The product was not found." });
  }
  console.log(product);
  return res.json(product);
};

module.exports = {
  getProducts,
  getProductPrice,
  getProductById,
};
