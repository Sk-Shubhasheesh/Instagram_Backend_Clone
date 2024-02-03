const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
const connectDB = require('./database/db')




app.listen(process.env.PORT || 3000, async()=>{
    await connectDB();
    console.log(`App is running at PORT: ${process.env.PORT}`);
})