import express from "express";
import router from "./routes/index.js";
import db from "./db/index.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await db.authenticate;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }

  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);
  app.use((err, req, res, next) => {
    if (err && err.name === "ValidationError") {
      return res.status(400).json({
        message: err.toString().replace("ValidationError: ", "").split(","),
      });
    }
    res.status(500).json({ message: err.message });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
