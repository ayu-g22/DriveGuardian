const express = require("express");
const connectDb = require("./config/dbConnection");
// const erorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = 4000;

connectDb();
app.use(express.json());
// app.use(erorHandler);
app.use("/api" , require("./routes/user-routes"));

app.listen(port , ()=> console.log(`Server started at Port ${port}`));