const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const app = express();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const { storage } = require("./storage/storage");
const multer = require("multer");
const upload = multer({ storage });

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});

connectDB();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Done");
});

app.use("/", require("./routes/authRoute"));
app.use("/", require("./routes/prodRoute"));
app.use("/", require("./routes/catRoute"));
app.use("/", require("./routes/cartRoute"));

app.use("/", require("./routes/userRoute"));

app.use("/", require("./routes/orderRoute"));
