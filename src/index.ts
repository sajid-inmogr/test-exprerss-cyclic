import express, { Application, Request, Response } from "express";
const app: Application = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;
app.use("/", async (req: Request, res: Response) => {
  return res.status(200).json("hello world");
});
app.listen(PORT, () => {
  console.log(`Bot listening on port ${PORT}`);
});
