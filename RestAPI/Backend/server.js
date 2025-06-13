const express = require("express");
const colors = require('colors');
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json())
app.use (express.urlencoded({extended: false}))


app.use('/api/goals', require("./Routes/goalRoutes"))
app.use('/api/users', require("./Routes/userRoutes"))

app.use(errorHandler)
app.use(connectDB)

app.listen(port,() => 
    console.log(`Server is running at the port ${port}`)
)