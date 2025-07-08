import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRoutes } from "./Routes/users.routes.js";
import { homepageRoutes } from "./Routes/homepage.routes.js";
import { mychannelRoutes } from "./Routes/mychannel.routes.js";
import { commentRoutes } from "./Routes/comment.route.js";

const app = new express();

app.use(cors());

app.use(express.json());

app.listen(5100, () => {
  console.log("Server is running on port 5100");
});

mongoose.connect("mongodb://localhost:27017/YouTube");

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected is sucessful");
});

db.on("error", () => {
  console.log("Database is not connected");
});

userRoutes(app);
homepageRoutes(app);
mychannelRoutes(app);
commentRoutes(app);
