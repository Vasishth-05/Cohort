require('dotenv').config;
// console.log(process.env.DB_URL);

const express = require('express');
const mongoose = require('mongoose');

const { userRoute } = require('./routes/user');
const { adminRoute } = require('./routes/admin');
const { coursesRoute } = require('./routes/courses');

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/courses', coursesRoute);

async function main(){
    await mongoose.connect(`mongodb+srv://Vasishth:mongo%4029@cluster0.sl1ojdh.mongodb.net/course-App`);
    // console.log(process.env.DB_URL);
    app.listen(3000 , () => {
        console.log('Server is running on PORT 3000');
    })
}

main();




