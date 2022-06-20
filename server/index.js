import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// posts Route
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import homeRoute from "./routes/home.js";

const app = express();
dotenv.config();



const CONNECTION_URL = process.env.CONNECTION_URL;


mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("mongodb is connected"))
  .catch((err) => {
    console.log(`error with mongodb connection: ${err}`);
  });



// Middlewares
app.use(bodyParser.json({ limit: "1mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(cors());




app.use("/", homeRoute);
app.use("/posts", postRoutes);
app.use("/user", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
