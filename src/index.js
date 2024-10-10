import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import { router } from "./router.js";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "VF | VAPI Custom LLM Endpoint" });
});

app.use("/api", router);

export function startServer() {
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
}

// Only start the server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}
