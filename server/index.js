const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getFact, getAffirmation, getQuote} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/fact", getFact);
app.get("/api/affirmation", getAffirmation);
app.get("/api/quote", getQuote);

app.listen(4000, () => console.log("Server running on 4000"));
