const express = require("express");
const router = express.Router();
const { logon, hello } = require("../controllers/main");

// middleware
const authMiddleware = require("../middleware/auth");

// routes
router.route("/logon").post(logon);

router.route("/hello").get(authMiddleware, hello);

module.exports = router;
