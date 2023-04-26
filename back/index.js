const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
