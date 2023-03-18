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

// DB Init
async function getData(){
  await Ticker.deleteMany({});
  const myData= await fetch("https://api.wazirx.com/api/v2/tickers");
  const resp = await myData.json();
  let arr = [];

  for (let i in resp){
      arr.push([i, resp[i]]);
  }
  for (let i=0; i< 10; i++){
      const data= new Ticker({
          name:arr[i][1]['name'],
          last: arr[i][1]['last'],
          buy: arr[i][1]['buy'],
          sell: arr[i][1]['sell'],
          volume: arr[i][1]['volume'],
          base_unit: arr[i][1]['base_unit']
      })
      data.save();
  }
}

setInterval(getData, 60000);

app.get("/", async (req, resp) => {
  let data = await Ticker.find();
  resp.render("index", { details: data });
});

app.listen(3000);
