require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log(`Server is running on port ${PORT}`);
});

// Server Error handling
const exitHandler = () => {
  if (server) {
    console.error("Server Closed.");
    process.exit(1);
  } else {
    console.error("Server not found.");
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error.stack);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
