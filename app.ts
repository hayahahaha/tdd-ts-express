import { defaultMaxListeners } from "events";
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Say hello");
});

export default app;
