const express = require("express");
const app = express();
const { products, people } = require("./data");
const peopleRouter = require("./routes/people");
const productRouter = require("./routes/product");
const cookieParser = require("cookie-parser");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// logger function
const logger = function (req, res, next) {
  const dateObj = new Date();
  console.log(req.method);
  console.log(req.url);
  console.log(dateObj.toTimeString());
  next();
};

app.use(logger);

app.use("/api/v1/people", peopleRouter);

app.use("/api/v1/products", productRouter);

// get people
// app.get("/api/v1/people", (req, res) => {
//   console.log(people);
//   res.json(people);
// });

// post a person
// app.post("/api/v1/people", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   } else {
//     res
//       .status(400)
//       .json({ success: false, message: "Please provide a name" });
//   }
// });

// Optional Assignment - cookie-parser
const auth = (req, res, next) => {
  const userName = req.cookies.name;

  if (userName) {
    req.user = userName;
    next();
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};

app.post("/logon", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.cookie("name", name);
    res.status(201).json({ message: `Hello, ${name}` });
  } else {
    res.status(400).json({ message: "No name found" });
  }
});

app.delete("/logoff", (req, res) => {
  res.clearCookie("name");
  res.status(200).json({ message: "User has logged off" });
});

app.get("/test", auth, (req, res) => {
  res
    .status(200)
    .json({ message: `Hello, ${req.user}. You requested passed the test!` });
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It Worked!" });
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
