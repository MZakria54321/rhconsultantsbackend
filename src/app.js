const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const router = require("./routes");
// const { limiter } = require("./middlewares/limiter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(limiter);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(helmet());
app.use(compression());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Error Handling Middleware

app.use((req, res, next) => {
  const notFoundError = {
    status: 404,
    code: "ROUTE_NOT_FOUND",
    success: false,
    message: "This route does not exist.",
  };
  next(notFoundError);
});

app.use(async (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    error: {
      status: status,
      code: err.code || "INTERNAL_SERVER_ERROR",
      success: false,
      message: err.message || "Internal Server Error",
    },
  });
});

module.exports = app;
