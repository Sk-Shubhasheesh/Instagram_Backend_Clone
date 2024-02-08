const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
const connectDB = require('./database/db')
const cookieParser = require('cookie-parser')
const cookieParser = require('cookie-parser')
const authRoute = require("./routes/Auth.route")
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)



app.listen(process.env.PORT || 3000, async()=>{
    await connectDB();
    console.log(`App is running at PORT: ${process.env.PORT}`);
})