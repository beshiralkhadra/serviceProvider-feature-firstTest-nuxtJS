const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const cors = require("cors");
const db = require("./models/index");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./routes/app");

app.use("/", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, Authorization, X-Requested-With"
  );
  next();
});
const port = process.env.port;
app.listen(port, async () => {
  console.log("hello to http://localhost:" + port);
  await db.sequelize.sync();
});
