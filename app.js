import express from "express";
import cors from "cors";
import "./db/config.js";
import Ticker from "./db/ticker.js";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// App configuration
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

app.get("/", async (req, resp) => {
  let data = await Ticker.find();
  resp.render("index", { details: data });
});

app.get("/tickers", async (req, res) => {
  let data = await Ticker.find();
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send({ result: "No Data Found" });
  }
});

app.listen(3000);
