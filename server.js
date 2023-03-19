import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import Ticker from './models/tickers.js';
import axios from 'axios'
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT || 6060;


// App configuration
app.use(express.json());
app.use(cors());

//Database Connection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

// DB Init
async function getData() {
  try {
    await Ticker.deleteMany({})
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;
    const top10 = Object.keys(tickers).slice(0, 10);
    const data = top10.map(name => {
      return {
        name: tickers[name].name,
        last: tickers[name].last,
        buy: tickers[name].buy,
        sell: tickers[name].sell,
        volume: tickers[name].volume,
        base_unit: tickers[name].base_unit
      };
    });
    await Ticker.insertMany(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
setInterval(getData, 4000);

app.get("/", async (req, resp) => {
  let data = await Ticker.find();
  resp.send(data)
});


app.get('/tickers', async (req, resp) => {
  let data = await Ticker.find()
  if (data.length > 0) {
      resp.send(data)
  } 
})

connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
  })
})