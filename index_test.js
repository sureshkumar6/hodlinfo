import express from "express";
import cors from 'cors'
import './db/config.js'
import Ticker from "./db/ticker.js";
import ejs from 'ejs'

const app = express()
app.use(express.json())
app.use(cors())
app.set('view engine', 'ejs')

app.get("/", async (req, resp)=>{
  let data = await Ticker.find()
  resp.render('index', {details:data})
})

app.get('/tickers', async (req, res) => {
  let data = await Ticker.find()
  if (data.length>0){
    res.send(data)
  }else{
    res.send({result:"No Data Found"})
  }
});



app.listen(3000);