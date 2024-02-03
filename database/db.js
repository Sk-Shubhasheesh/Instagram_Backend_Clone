const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("database is not connected! " + error)
        
    }
}

module.exports = connectDB;
