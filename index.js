import express from "express";
import { postRouter } from './Routes/post.router.js';

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my node app!");
});

app.get("/about", (req, res) => {
  res.send("You can get a defferint post");
});

app.post("/about", (req, res) => {
  res.send("You can post here");
});

app.put("/about", (req, res) => {
  res.send("You can update here");
});

app.delete("/about", (req, res) => {
  res.send("You can delete here");
});

app.get("/products", (req, res) => {
  res.send("What we offer");
});

app.get("/address", (req, res) => {
  res.send("Where to find us");
});

app.get("/contact", (req, res) => {
  res.send("How to get in touch");
});

app.listen(4242, () => {
  console.log("The server is running on port 4242: http://localhost:4242/");
});

app.use((req, res, next) => {
  res.status(404).send("The page was not found");
});
