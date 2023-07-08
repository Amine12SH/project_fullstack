import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

console.log("start");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

const ADMIN_BUild = "./../admin/dist";
const ADMIN_BASE = "/admin";
app.use(ADMIN_BASE, express.static(path.join(process.env.PWD, ADMIN_BUild)));
app.use(
  `${ADMIN_BASE}/*`,
  express.static(path.join(process.env.PWD, ADMIN_BUild))
);

const CLIENT_BUild = "./../client/dist";
const CLIENT_BASE = "/client";
app.use(CLIENT_BASE, express.static(path.join(process.env.PWD, CLIENT_BUild)));
app.use(
  `${CLIENT_BASE}/*`,
  express.static(path.join(process.env.PWD, CLIENT_BUild))
);

app.listen(PORT, () => console.log(`start server http://localhost:${PORT}`));
