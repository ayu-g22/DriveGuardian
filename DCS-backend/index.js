const express = require("express");
const connectDb = require("./config/dbConnection");
// const erorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors")

const app = express();

const port = 4000;

connectDb();
app.use(express.json());
app.use(cors())
// app.use(erorHandler);
app.use("/api" , require("./routes/user-routes"));

app.use("/api/dashboard" , require("./routes/dashboard-routes"));

app.use("/api/transfer" , require("./routes/tranfer-routes"));

app.listen(port , ()=> console.log(`Server started at Port ${port}`));