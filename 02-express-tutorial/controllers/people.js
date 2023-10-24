let { people } = require("../data");

const getPeople = (req, res) => {
  console.log(people);
  res.json(people);
};

const addPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
};

// get a person
const getPerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === parseInt(id));

  if (person) {
    res.status(200).json({ success: true, id: person.id, name: person.name });
  } else {
    res
      .status(404)
      .json({ success: false, message: `No person with id:${id} found` });
  }
};

// update a person
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === parseInt(id));

  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `No person with id:${id} found` });
  } else if (!name || name.trim() === "") {
    res.status(400).json({ success: false, message: "Name cannot be blank" });
  }
  const newPerson = people.map((person) => {
    if (person.id === parseInt(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPerson });
};

// delete a person
const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === parseInt(req.params.id));
  if (!person) {
    res.status(404).json({
      success: false,
      message: `No person with id:${req.params.id} found`,
    });
  }
  const newPeople = people.filter(
    (person) => person.id !== parseInt(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
