// const mongoose = require('mongoose');
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
const url = 'mongodb://127.0.0.1:27017/wazir'
mongoose.connect(url)
const tickerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last: { type: String, required: true },
  buy: { type: String, required: true },
  sell: { type: String, required: true },
  volume: { type: String, required: true },
  base_unit: { type: String, required: true }
});

const Ticker = mongoose.model('Ticker', tickerSchema);

// module.exports = Ticker;


export default Ticker
 
