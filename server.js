const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 0,
    name: "unknown",
    number: "unknown",
  },
]

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  // const personName = req.params.person.toLowerCase();

  // console.log(personName);
  // console.log(persons);
  // console.log(persons[personName]);

  // if (persons[personName]) {
  //   res.json(persons[personName]);
  // } else {
  //   res.json(persons["unknown"]);
  // }

  // const id = Number(req.params.id);
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id)
  const unknown = persons.id == "unknown"
  console.log(unknown)

  console.log(persons[id]);
  console.log(id)

  res.json(person)
  
  // if (persons[id]) {
  //   // res.json(persons[id]);
  // } else {
  //   // res.json(person[unknown]);
  // }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
