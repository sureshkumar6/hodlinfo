import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const url = 'mongodb://127.0.0.1:27017/wazir'
mongoose.connect(url)