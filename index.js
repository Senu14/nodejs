import express from "express";
import dotenv from 'dotenv';
import { postRouter } from './Routes/post.router.js';
dotenv.config()

const app = express();
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("Welcome to my node app!");
});


app.use("/post", postRouter)

app.use((req, res,) => {
  res.status(404).send("The page was not found");
});

app.listen(4242, () => {
  console.log("The server is running on port 4242: http://localhost:4242/");
});
