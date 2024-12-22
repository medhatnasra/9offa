const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const app = express();
var cors = require("cors");
const cookieParser = require("cookie-parser");

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});

connectDB();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(cookieParser());

app.use("/", require("./routes/authRoute"));
app.use("/", require("./routes/prodRoute"));
app.use("/", require("./routes/catRoute"));
app.use("/", require("./routes/cartRoute"));

app.use("/", require("./routes/userRoute"));

app.use("/", require("./routes/orderRoute"));
