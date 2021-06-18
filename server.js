const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());

let persons = {
  "Arto Hellas": {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  "Ada Lovelace": {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  "Dan Abramov": {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  "Mary Poppendieck": {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:personName", (req, res) => {
  const 
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
