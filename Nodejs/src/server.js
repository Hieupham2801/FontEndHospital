import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/ViewEngine";
import initWebRouter from "./router/web";
import connectDB from "./config/connectDB";
require("dotenv").config();
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRouter(app);
let port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log("backend is running");
});
connectDB();
