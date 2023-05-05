import express from "npm:express@^4.18.2";
import taskrouter from "./routes/task.route.ts";
import cors from "npm:cors";
import "./db.ts";
import { Application, Response, Request } from "npm:express@^4.18.2";

const app: Application = express();

const PORT = 9444;

app.use(express.json());
app.use(taskrouter);
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    ping: "pong",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
