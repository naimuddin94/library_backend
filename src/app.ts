import cors from "cors";
import express, { Application, Request, Response } from "express";
import { globalErrorHandler, notFound } from "./app/utils";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Library Management System is running :(" });
});

app.use(globalErrorHandler as unknown as express.ErrorRequestHandler);

app.use(notFound);

export default app;
