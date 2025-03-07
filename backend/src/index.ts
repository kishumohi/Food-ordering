import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string)
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.log("Database Connection Error!", err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.send({ message: "Hello!" });
});

app.listen(7000, () => {
  console.log("Server Started on http://localhost:7000");
});
