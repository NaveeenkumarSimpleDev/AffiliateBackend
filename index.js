import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Deck from "./models/Deck.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import create from "./create.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// GET REQ
app.get("/decks", async (req, res) => {
  const decks = await Deck.find();
  res.send(decks);
});

// POST REQ
app.post("/", create);


const url = process.env.MONGO_DB_URL;
const port = process.env.PORT || 5000
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log("SERVER STARTED"));
  });
