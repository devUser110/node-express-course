const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", addPerson);

// get a person
router.get("/:id", getPerson);

// update a person
router.put("/:id", updatePerson);

// delete a person
router.delete("/:id", deletePerson);

module.exports = router;
