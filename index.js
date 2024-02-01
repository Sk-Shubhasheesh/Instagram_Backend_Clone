const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
 app.get('/', (req, res)=>{
    res.send("Hello World")
 })

app.listen(process.env.PORT || 3000, async()=>{
    console.log(`App is running at PORT: ${process.env.PORT}`);
})