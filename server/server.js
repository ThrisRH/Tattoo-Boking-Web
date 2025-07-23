const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Customers = require("./model/Customer");

dotenv.config();
// Connect mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Đã connect với mongoDB Atlas", console.error))
  .catch((error) => console.error("Lỗi kết nối đến MongoDB Atlas", error));

const homeRoute = require("./routes/home");
const bookingRoute = require("./routes/booking");

const cors = require("cors");
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/api", homeRoute);
app.use("/booking", bookingRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
