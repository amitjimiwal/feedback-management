import express, { Express, Request, Response } from "express";
import config from "./config/config.js";
import { feedBackRouter } from "./routes/feedback.js";
import cors from "cors";
const app: Express = express();
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: '16kb' }));
app.use("/feedback", feedBackRouter);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is Running",
  });
});
app.listen(config.port, () => {
  console.log(` TS Server is running on port ${config.port}`);
});
