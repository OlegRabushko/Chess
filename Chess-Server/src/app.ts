import express from "express";
import cors from "cors";
import { json } from "body-parser";
import events from "events";
import Router from "./server/router";

const emitter = new events.EventEmitter();

const app = express();
app.use(json());
app.use(cors());
app.use("/state", Router);

app.get("/get-players", (req, res) => {
  emitter.once("newPlayer", (player) => {
    res.json(player);
  });
});

app.post("/new-player", (req, res) => {
  const player = req.body;
  emitter.emit("newPlayer", player);
  res.status(200);
});

app.listen(3002, () => console.log("Server started"));
