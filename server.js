const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  const unknown = persons.id == "unknown";

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.get("/info", (req, res) => {
  let count = persons.length;
  let str = `Phonebook has info for ${count} people.`;

  // console.log(req);
  body = req.body;
  console.log(body);
  // console.log(req.headers);

  let timeDate = req.get("Date");
  // let timeDate = new Date();
  console.log(timeDate);
  res.send(`<p>${str} \n ${timeDate}</p>`);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  persons = persons.filter(person => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons/:id", (req, res) => {
  const id = Math.round(Math.random() * 1000);

  const body = req.body
  console.log(body)

  const newPerson = {
    id: id,
    name: "Alan Turing",
    number: "0118-999-881-999-119-7253"
  }

  persons = persons.concat(newPerson)

  console.log(newPerson);
  res.json(newPerson);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
