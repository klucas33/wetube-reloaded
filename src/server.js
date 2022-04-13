import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const methodLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const routesLogger = (req, res, next) => {
  next();
};

const logger = (req, res, next) => {
  return res.send("멈춰");
};

const handleHome = (req, res) => {
  console.log("I will respond");
  return res.send("I love middlewares");
};

app.use(morgan("dev"));
app.get("/", handleHome);
app.use(methodLogger, routesLogger);
app.get("/protected", logger);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
