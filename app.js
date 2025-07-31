const express = require("express");
const cookieParser = require("cookie-parser");
const databaseConnection = require("./db/mongoDB");
const app = express();
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/authRouter");

databaseConnection();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", require("./routes/usersRouter"));
app.use("/api/test", require("./routes/testApis"));
app.use("/api/sections", require("./routes/sectionRoutes"));

app.use("/api/health", (req, res) => {
  res.json({
    status: "200",
    data: { ping: "pong" },
    message: "Server is healthy",
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
