const connect = require("./helper/db");
connect();

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();
const hutulburRouter = require("./route/hutulburRoute");

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/hutulburs", hutulburRouter);
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
