import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Library Management System is running :(" });
});


app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API not found!",
    error: {
      path: req.originalUrl,
      message: "Your requested API endpoint not found!",
    },
  });
});

export default app;
