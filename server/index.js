const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
