const connect = require("./helper/db");
connect();

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();

const userRouter = require("./routes/userRoute");
const companyRouter = require("./routes/companyUserRoute");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/users", userRouter);
app.use("/companyusers", companyRouter);
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
