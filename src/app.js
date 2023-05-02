import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.set("PORT", 3000);
app.use(express.json());
app.use(cors());

app.use(router);

export default app