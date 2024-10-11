import express, { json } from "express";
import cors from "cors";
import { router } from "./router.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "VF | VAPI Custom LLM Endpoint" });
});

app.use("/api", router);

export function startServer() {
  app.listen(port, () => {
    console.log(`[ ready ] http://0.0.0.0:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}
