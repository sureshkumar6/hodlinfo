import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "./db/config.js";
import Ticker from "./db/ticker.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// App configuration
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

// // DB Init
// async function getData(){
//   await Ticker.deleteMany({});
//   const myData= await fetch("https://api.wazirx.com/api/v2/tickers");
//   const resp = await myData.json();
//   let arr = [];

//   for (let i in resp){
//       arr.push([i, resp[i]]);
//   }
//   for (let i=0; i< 10; i++){
//       const data= new Ticker({
//           name:arr[i][1]['name'],
//           last: arr[i][1]['last'],
//           buy: arr[i][1]['buy'],
//           sell: arr[i][1]['sell'],
//           volume: arr[i][1]['volume'],
//           base_unit: arr[i][1]['base_unit']
//       })
//       data.save();
//   }
// }

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});
