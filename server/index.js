
const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/user')
const userAuthRoute = require('./routes/auth')
const app = express();
const dotenv=require('dotenv')
dotenv.config();


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true }).then(() => {
  console.log('DB connected...');
}).catch((err) => {
  console.log('Error connecting DB!!', err.name, err.message);
})


app.use(express.json());

app.use("/api/userauth", userAuthRoute); 

app.listen(6000, () => {
  console.log('App listening on port 6000');
});




